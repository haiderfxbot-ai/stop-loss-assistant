const DB_NAME = 'StopLossAssistantDB';
const DB_VERSION = 1;

const STORES = {
  users: { keyPath: 'userId', indexes: ['username', 'role', 'status'] },
  sessions: { keyPath: 'sessionId', indexes: ['userId', 'role'] },
  settings: { keyPath: 'key' },
  games: { keyPath: 'gameId', indexes: ['category', 'status'] },
  patterns: { keyPath: 'patternId', indexes: ['category', 'status', 'gameType'] },
  patternCategories: { keyPath: 'categoryId' },
  patternHistory: { keyPath: 'historyId', indexes: ['patternId', 'timestamp'] },
  history: { keyPath: 'historyId', indexes: ['userId', 'gameType', 'date'] },
  auditLogs: { keyPath: 'logId', indexes: ['userId', 'action', 'timestamp'] },
  loginHistory: { keyPath: 'loginId', indexes: ['userId', 'timestamp'] },
  balances: { keyPath: 'balanceId', indexes: ['userId', 'date'] },
  results: { keyPath: 'resultId', indexes: ['userId', 'gameType', 'date'] },
  activityTimeline: { keyPath: 'activityId', indexes: ['userId', 'timestamp'] },
  backups: { keyPath: 'backupId', indexes: ['date'] },
  errorLogs: { keyPath: 'errorId', indexes: ['timestamp'] }
};

class Database {
  constructor() {
    this.db = null;
    this.isReady = false;
    this.readyPromise = new Promise(r => this._resolveReady = r);
  }

  async init() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        Object.entries(STORES).forEach(([name, cfg]) => {
          if (!db.objectStoreNames.contains(name)) {
            const store = db.createObjectStore(name, { keyPath: cfg.keyPath });
            (cfg.indexes || []).forEach(idx => {
              store.createIndex(idx, idx, { unique: false });
            });
          }
        });
      };
      req.onsuccess = (e) => {
        this.db = e.target.result;
        this.isReady = true;
        this._resolveReady();
        resolve(this.db);
      };
      req.onerror = (e) => reject(e.target.error);
    });
  }

  async ready() {
    if (this.isReady) return this.db;
    return this.readyPromise;
  }

  _tx(store, mode = 'readonly') {
    return this.db.transaction(store, mode).objectStore(store);
  }

  async add(store, data) {
    await this.ready();
    return new Promise((res, rej) => {
      const r = this._tx(store, 'readwrite').add(data);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  }

  async put(store, data) {
    await this.ready();
    return new Promise((res, rej) => {
      const r = this._tx(store, 'readwrite').put(data);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  }

  async get(store, key) {
    await this.ready();
    return new Promise((res, rej) => {
      const r = this._tx(store).get(key);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  }

  async getAll(store) {
    await this.ready();
    return new Promise((res, rej) => {
      const r = this._tx(store).getAll();
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  }

  async getByIndex(store, index, value) {
    await this.ready();
    return new Promise((res, rej) => {
      const r = this._tx(store).index(index).getAll(value);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  }

  async getOneByIndex(store, index, value) {
    await this.ready();
    return new Promise((res, rej) => {
      const r = this._tx(store).index(index).get(value);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  }

  async delete(store, key) {
    await this.ready();
    return new Promise((res, rej) => {
      const r = this._tx(store, 'readwrite').delete(key);
      r.onsuccess = () => res();
      r.onerror = () => rej(r.error);
    });
  }

  async clear(store) {
    await this.ready();
    return new Promise((res, rej) => {
      const r = this._tx(store, 'readwrite').clear();
      r.onsuccess = () => res();
      r.onerror = () => rej(r.error);
    });
  }

  async count(store) {
    await this.ready();
    return new Promise((res, rej) => {
      const r = this._tx(store).count();
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  }

  async exportAll() {
    await this.ready();
    const data = {};
    for (const name of Object.keys(STORES)) {
      data[name] = await this.getAll(name);
    }
    return data;
  }

  async importAll(data) {
    await this.ready();
    for (const [store, records] of Object.entries(data)) {
      if (STORES[store] && Array.isArray(records)) {
        for (const rec of records) {
          await this.put(store, rec);
        }
      }
    }
  }
}

const db = new Database();
