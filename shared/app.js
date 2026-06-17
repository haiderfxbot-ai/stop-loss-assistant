class Storage {
  constructor() { this.prefix = 'sla_'; }

  get(key, def = null) {
    try { const v = localStorage.getItem(this.prefix + key); return v ? JSON.parse(v) : def; } catch { return def; }
  }

  set(key, val) {
    try { localStorage.setItem(this.prefix + key, JSON.stringify(val)); return true; } catch { return false; }
  }

  remove(key) { localStorage.removeItem(this.prefix + key); }

  getTheme() { return this.get('theme', 'dark'); }
  setTheme(t) { this.set('theme', t); document.documentElement.setAttribute('data-theme', t); }
  toggleTheme() { const c = this.getTheme(); const n = c === 'dark' ? 'light' : 'dark'; this.setTheme(n); return n; }

  getAutoLogout() { return this.get('autoLogout', 'disabled'); }
  setAutoLogout(m) { this.set('autoLogout', m); }
}

const storage = new Storage();

class App {
  constructor() { this.toastContainer = null; }

  async init() {
    await db.init();
    await auth.initDefaultUsers();
    storage.getTheme();
    this.initTheme();
    this.initToast();
    this.setupAutoLogout();
  }

  initTheme() { document.documentElement.setAttribute('data-theme', storage.getTheme()); }

  initToast() {
    if (!document.getElementById('toast-container')) {
      const c = document.createElement('div');
      c.id = 'toast-container';
      c.className = 'toast-container';
      document.body.appendChild(c);
    }
    this.toastContainer = document.getElementById('toast-container');
  }

  toast(msg, type = 'info', dur = 3000) {
    if (!this.toastContainer) this.initToast();
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', warning: 'fa-exclamation-triangle', info: 'fa-info-circle' };
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.innerHTML = `<i class="fas ${icons[type]}"></i><span>${msg}</span>`;
    this.toastContainer.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(-20px)'; t.style.transition = 'all 0.3s ease'; setTimeout(() => t.remove(), 300); }, dur);
  }

  showModal(title, content, actions = []) {
    const old = document.querySelector('.modal-overlay');
    if (old) old.remove();
    const ov = document.createElement('div');
    ov.className = 'modal-overlay';
    ov.innerHTML = `
      <div class="modal animate-scale-in">
        <div class="modal-header">
          <h3 class="modal-title">${title}</h3>
          <button class="modal-close" onclick="this.closest('.modal-overlay').remove()"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">${content}</div>
        ${actions.length ? `<div class="modal-footer">${actions.map(a => `<button class="btn ${a.class || 'btn-primary'}" onclick="${a.onclick}">${a.label}</button>`).join('')}</div>` : ''}
      </div>`;
    document.body.appendChild(ov);
    requestAnimationFrame(() => ov.classList.add('active'));
    ov.addEventListener('click', e => { if (e.target === ov) ov.remove(); });
    return ov;
  }

  formatDate(d) { if (!d) return '-'; return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }); }
  formatTime(d) { if (!d) return '-'; return new Date(d).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }); }
  formatDateTime(d) { return d ? this.formatDate(d) + ' ' + this.formatTime(d) : '-'; }
  timeAgo(d) {
    const s = Math.floor((Date.now() - new Date(d)) / 1000);
    if (s < 60) return 'just now';
    if (s < 3600) return Math.floor(s / 60) + 'm ago';
    if (s < 86400) return Math.floor(s / 3600) + 'h ago';
    return Math.floor(s / 86400) + 'd ago';
  }

  generateId(p = 'id') { return `${p}_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`; }

  setupAutoLogout() {
    let timeout;
    const reset = () => {
      clearTimeout(timeout);
      const m = storage.getAutoLogout();
      if (m !== 'disabled') {
        timeout = setTimeout(() => { auth.logout(); window.location.href = '../login.html'; }, parseInt(m) * 60000);
      }
    };
    ['mousedown', 'keydown', 'scroll', 'touchstart'].forEach(e => document.addEventListener(e, reset, { passive: true }));
    reset();
  }

  async addActivity(type, desc) {
    await db.put('activityTimeline', {
      activityId: this.generateId('act'),
      type, description: desc,
      timestamp: new Date().toISOString()
    }).catch(() => {});
  }
}

const app = new App();
