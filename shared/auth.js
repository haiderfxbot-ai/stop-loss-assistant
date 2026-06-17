class Auth {
  constructor() {
    this.sessionKey = 'sla_session';
    this.rememberKey = 'sla_remember';
  }

  async hashPassword(password) {
    const enc = new TextEncoder();
    const data = enc.encode(password + 'sla_salt_2024');
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async initDefaultUsers() {
    const users = await db.getAll('users');
    if (users.length === 0) {
      const adminHash = await this.hashPassword('bypass');
      const userHash = await this.hashPassword('testing123');

      await db.put('users', {
        userId: 'admin_001',
        username: 'admin',
        password: adminHash,
        displayName: 'Administrator',
        role: 'admin',
        status: 'active',
        email: '',
        phone: '',
        whatsapp: '',
        about: 'System Administrator',
        avatar: '',
        createdDate: new Date().toISOString(),
        lastLogin: null
      });

      await db.put('users', {
        userId: 'user_001',
        username: 'testing',
        password: userHash,
        displayName: 'Test User',
        role: 'user',
        status: 'active',
        email: '',
        phone: '',
        whatsapp: '',
        about: 'Default User Account',
        avatar: '',
        createdDate: new Date().toISOString(),
        lastLogin: null
      });
    }
  }

  async login(username, password) {
    if (!username || !password) {
      return { success: false, message: 'Username and password are required' };
    }

    const user = await db.getOneByIndex('users', 'username', username);
    if (!user) {
      return { success: false, message: 'Invalid username or password' };
    }

    if (user.status !== 'active') {
      return { success: false, message: 'Account is disabled' };
    }

    const hash = await this.hashPassword(password);
    if (hash !== user.password) {
      return { success: false, message: 'Invalid username or password' };
    }

    const session = {
      sessionId: 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 8),
      userId: user.userId,
      username: user.username,
      displayName: user.displayName,
      role: user.role,
      loginTime: new Date().toISOString(),
      lastActivity: new Date().toISOString()
    };

    await db.put('sessions', session);
    localStorage.setItem(this.sessionKey, JSON.stringify(session));
    await db.put('users', { ...user, lastLogin: new Date().toISOString() });
    await this.addAuditLog(user.userId, 'login', 'User logged in');
    await this.addLoginHistory(user);

    return { success: true, user, session };
  }

  async logout() {
    const session = this.getSession();
    if (session) {
      await this.addAuditLog(session.userId, 'logout', 'User logged out');
      try { await db.delete('sessions', session.sessionId); } catch(e) {}
    }
    localStorage.removeItem(this.sessionKey);
    localStorage.removeItem(this.rememberKey);
  }

  getSession() {
    try {
      const data = localStorage.getItem(this.sessionKey);
      return data ? JSON.parse(data) : null;
    } catch { return null; }
  }

  async validateSession() {
    const session = this.getSession();
    if (!session) return null;
    try {
      const dbSession = await db.get('sessions', session.sessionId);
      if (!dbSession) { localStorage.removeItem(this.sessionKey); return null; }
      const user = await db.get('users', session.userId);
      if (!user || user.status !== 'active') { localStorage.removeItem(this.sessionKey); return null; }
      return { ...session, user };
    } catch { return null; }
  }

  setRemember(username, password) {
    localStorage.setItem(this.rememberKey, JSON.stringify({ username, password }));
  }

  getRemember() {
    try {
      const data = localStorage.getItem(this.rememberKey);
      return data ? JSON.parse(data) : null;
    } catch { return null; }
  }

  clearRemember() { localStorage.removeItem(this.rememberKey); }

  async addAuditLog(userId, action, details) {
    await db.put('auditLogs', {
      logId: 'log_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
      userId, action, details,
      timestamp: new Date().toISOString()
    });
  }

  async addLoginHistory(user) {
    await db.put('loginHistory', {
      loginId: 'login_' + Date.now(),
      userId: user.userId,
      username: user.username,
      role: user.role,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    });
  }

  async getUsers() { return await db.getAll('users'); }
  async getUser(id) { return await db.get('users', id); }

  async createUser(data) {
    const existing = await db.getOneByIndex('users', 'username', data.username);
    if (existing) return { success: false, message: 'Username already exists' };
    const hash = await this.hashPassword(data.password);
    const user = {
      userId: 'user_' + Date.now(),
      username: data.username,
      password: hash,
      displayName: data.displayName || data.username,
      role: data.role || 'user',
      status: 'active',
      email: data.email || '',
      phone: data.phone || '',
      whatsapp: data.whatsapp || '',
      about: data.about || '',
      avatar: '',
      createdDate: new Date().toISOString(),
      lastLogin: null
    };
    await db.put('users', user);
    await this.addAuditLog(data.createdBy || 'system', 'user_created', `Created user: ${user.username}`);
    return { success: true, user };
  }

  async updateUser(userId, updates) {
    const user = await db.get('users', userId);
    if (!user) return { success: false, message: 'User not found' };
    if (updates.password) updates.password = await this.hashPassword(updates.password);
    const updated = { ...user, ...updates, userId };
    await db.put('users', updated);
    await this.addAuditLog(userId, 'user_updated', `User updated: ${userId}`);
    return { success: true, user: updated };
  }

  async deleteUser(userId) {
    await db.delete('users', userId);
    await this.addAuditLog(userId, 'user_deleted', `Deleted user: ${userId}`);
    return { success: true };
  }

  async changePassword(userId, oldPass, newPass) {
    const user = await db.get('users', userId);
    if (!user) return { success: false, message: 'User not found' };
    const oldHash = await this.hashPassword(oldPass);
    if (oldHash !== user.password) return { success: false, message: 'Current password is incorrect' };
    const newHash = await this.hashPassword(newPass);
    await db.put('users', { ...user, password: newHash });
    await this.addAuditLog(userId, 'password_changed', 'Password changed');
    return { success: true };
  }

  isAdmin() {
    const s = this.getSession();
    return s && s.role === 'admin';
  }

  isLoggedIn() { return this.getSession() !== null; }

  getRedirectPath() {
    const s = this.getSession();
    if (!s) return '../login.html';
    return s.role === 'admin' ? '../admin-panel/admin-dashboard.html' : '../user-panel/user-dashboard.html';
  }
}

const auth = new Auth();
