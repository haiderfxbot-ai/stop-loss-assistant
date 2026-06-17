/**
 * Pattern Loader - Manages pattern loading, filtering, and IndexedDB integration
 * Provides centralized access to pattern library with caching and search capabilities
 */

import PATTERNS_ARRAY from './pattern-library.js';
import PATTERN_DETAILS_1 from './pattern-detail-1.js';
import PATTERN_DETAILS_2 from './pattern-detail-2.js';
import PATTERN_DETAILS_3 from './pattern-detail-3.js';
import PATTERN_DETAILS_4 from './pattern-detail-4.js';
import PATTERN_DETAILS_5 from './pattern-detail-5.js';

class PatternLoader {
  constructor() {
    this.patterns = [];
    this.patternDetails = {};
    this.isLoaded = false;
    this.db = null;
    this.dbName = 'StopLossAssistantDB';
    this.dbVersion = 1;
    this.storeName = 'patterns';
  }

  /**
   * Initialize the loader and merge all pattern details
   */
  initialize() {
    this.patternDetails = {
      ...PATTERN_DETAILS_1,
      ...PATTERN_DETAILS_2,
      ...PATTERN_DETAILS_3,
      ...PATTERN_DETAILS_4,
      ...PATTERN_DETAILS_5
    };
    return this;
  }

  /**
   * Open IndexedDB connection
   */
  async openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          const store = db.createObjectStore(this.storeName, { keyPath: 'id' });
          store.createIndex('category', 'category', { unique: false });
          store.createIndex('gameType', 'gameType', { unique: false });
          store.createIndex('matchScore', 'matchScore', { unique: false });
          store.createIndex('reliability', 'reliability', { unique: false });
        }
      };
    });
  }

  /**
   * Save patterns to IndexedDB
   */
  async savePatternsToDB(patterns) {
    if (!this.db) {
      this.db = await this.openDatabase();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);

      patterns.forEach(pattern => {
        store.put(pattern);
      });

      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });
  }

  /**
   * Load patterns from IndexedDB
   */
  async loadPatternsFromDB() {
    if (!this.db) {
      this.db = await this.openDatabase();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  /**
   * Load patterns - first try IndexedDB, fall back to defaults
   */
  async loadPatterns() {
    try {
      const dbPatterns = await this.loadPatternsFromDB();
      
      if (dbPatterns && dbPatterns.length > 0) {
        this.patterns = dbPatterns;
        console.log(`Loaded ${dbPatterns.length} patterns from IndexedDB`);
      } else {
        this.patterns = [...PATTERNS_ARRAY];
        await this.savePatternsToDB(this.patterns);
        console.log(`Loaded ${this.patterns.length} default patterns and saved to IndexedDB`);
      }
    } catch (error) {
      console.warn('IndexedDB not available, using default patterns:', error);
      this.patterns = [...PATTERNS_ARRAY];
    }

    this.isLoaded = true;
    return this.patterns;
  }

  /**
   * Get all patterns
   */
  async getAllPatterns() {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }
    return this.patterns;
  }

  /**
   * Get pattern by ID
   */
  async getPatternById(id) {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }
    return this.patterns.find(p => p.id === id) || null;
  }

  /**
   * Get detailed explanation for a pattern
   */
  getPatternDetail(id) {
    return this.patternDetails[id] || null;
  }

  /**
   * Filter patterns by game type
   */
  async getPatternsByGameType(gameType) {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }

    if (gameType === 'all') {
      return this.patterns.filter(p => p.gameType === 'all');
    }

    return this.patterns.filter(p => 
      p.gameType === gameType || p.gameType === 'all'
    );
  }

  /**
   * Filter patterns by category
   */
  async getPatternsByCategory(category) {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }
    return this.patterns.filter(p => p.category === category);
  }

  /**
   * Search patterns by name, description, or tags
   */
  async searchPatterns(query) {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }

    const lowerQuery = query.toLowerCase();
    
    return this.patterns.filter(pattern => {
      const nameMatch = pattern.name.toLowerCase().includes(lowerQuery);
      const descMatch = pattern.description.toLowerCase().includes(lowerQuery);
      const tagMatch = pattern.tags.some(tag => 
        tag.toLowerCase().includes(lowerQuery)
      );
      return nameMatch || descMatch || tagMatch;
    });
  }

  /**
   * Search by multiple tags
   */
  async getPatternsByTags(tags) {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }

    const lowerTags = tags.map(t => t.toLowerCase());
    
    return this.patterns.filter(pattern =>
      pattern.tags.some(tag => lowerTags.includes(tag.toLowerCase()))
    );
  }

  /**
   * Sort patterns by match score
   */
  async getPatternsByMatchScore(limit = null) {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }

    const sorted = [...this.patterns].sort((a, b) => 
      b.matchScore - a.matchScore
    );

    return limit ? sorted.slice(0, limit) : sorted;
  }

  /**
   * Sort patterns by reliability
   */
  async getPatternsByReliability(limit = null) {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }

    const reliabilityOrder = {
      'High': 3,
      'Medium-High': 2.5,
      'Medium': 2,
      'Low-Medium': 1.5,
      'Low': 1
    };

    const sorted = [...this.patterns].sort((a, b) => 
      (reliabilityOrder[b.reliability] || 0) - (reliabilityOrder[a.reliability] || 0)
    );

    return limit ? sorted.slice(0, limit) : sorted;
  }

  /**
   * Get top N patterns by match score for a specific game type
   */
  async getTopPatterns(gameType, limit = 10) {
    const gamePatterns = await this.getPatternsByGameType(gameType);
    
    return gamePatterns
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, limit);
  }

  /**
   * Get patterns with mathematical backing only
   */
  async getMathematicalPatterns() {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }
    return this.patterns.filter(p => p.mathematical === true);
  }

  /**
   * Get patterns by reliability level
   */
  async getPatternsByReliabilityLevel(level) {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }
    return this.patterns.filter(p => p.reliability === level);
  }

  /**
   * Get all unique categories
   */
  async getCategories() {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }
    return [...new Set(this.patterns.map(p => p.category))];
  }

  /**
   * Get all unique game types
   */
  async getGameTypes() {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }
    return [...new Set(this.patterns.map(p => p.gameType))];
  }

  /**
   * Get all unique tags
   */
  async getAllTags() {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }
    const allTags = this.patterns.flatMap(p => p.tags);
    return [...new Set(allTags)];
  }

  /**
   * Advanced search with multiple filters
   */
  async advancedSearch(options = {}) {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }

    let results = [...this.patterns];

    // Filter by game type
    if (options.gameType) {
      if (options.gameType === 'all') {
        results = results.filter(p => p.gameType === 'all');
      } else {
        results = results.filter(p => 
          p.gameType === options.gameType || p.gameType === 'all'
        );
      }
    }

    // Filter by category
    if (options.category) {
      results = results.filter(p => p.category === options.category);
    }

    // Filter by minimum match score
    if (options.minMatchScore !== undefined) {
      results = results.filter(p => p.matchScore >= options.minMatchScore);
    }

    // Filter by reliability
    if (options.reliability) {
      results = results.filter(p => p.reliability === options.reliability);
    }

    // Filter by mathematical
    if (options.mathematical !== undefined) {
      results = results.filter(p => p.mathematical === options.mathematical);
    }

    // Filter by tags (must include ALL specified tags)
    if (options.tags && options.tags.length > 0) {
      const lowerTags = options.tags.map(t => t.toLowerCase());
      results = results.filter(p =>
        lowerTags.every(tag =>
          p.tags.some(pt => pt.toLowerCase().includes(tag))
        )
      );
    }

    // Search query
    if (options.query) {
      const lowerQuery = options.query.toLowerCase();
      results = results.filter(p =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.tags.some(t => t.toLowerCase().includes(lowerQuery))
      );
    }

    // Sort
    if (options.sortBy === 'matchScore') {
      results.sort((a, b) => b.matchScore - a.matchScore);
    } else if (options.sortBy === 'reliability') {
      const reliabilityOrder = {
        'High': 3, 'Medium-High': 2.5, 'Medium': 2, 
        'Low-Medium': 1.5, 'Low': 1
      };
      results.sort((a, b) => 
        (reliabilityOrder[b.reliability] || 0) - 
        (reliabilityOrder[a.reliability] || 0)
      );
    } else if (options.sortBy === 'name') {
      results.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Limit results
    if (options.limit && options.limit > 0) {
      results = results.slice(0, options.limit);
    }

    return results;
  }

  /**
   * Get pattern statistics
   */
  async getStatistics() {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }

    const categories = {};
    const gameTypes = {};
    const reliabilities = {};

    this.patterns.forEach(p => {
      categories[p.category] = (categories[p.category] || 0) + 1;
      gameTypes[p.gameType] = (gameTypes[p.gameType] || 0) + 1;
      reliabilities[p.reliability] = (reliabilities[p.reliability] || 0) + 1;
    });

    const avgMatchScore = this.patterns.reduce((sum, p) => sum + p.matchScore, 0) / 
                          this.patterns.length;

    return {
      totalPatterns: this.patterns.length,
      categories,
      gameTypes,
      reliabilities,
      averageMatchScore: Math.round(avgMatchScore * 100) / 100,
      mathematicalPatterns: this.patterns.filter(p => p.mathematical).length
    };
  }

  /**
   * Clear IndexedDB and reload defaults
   */
  async resetToDefaults() {
    try {
      if (!this.db) {
        this.db = await this.openDatabase();
      }

      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      store.clear();

      await new Promise((resolve, reject) => {
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
      });
    } catch (error) {
      console.warn('Error clearing IndexedDB:', error);
    }

    this.patterns = [...PATTERNS_ARRAY];
    this.isLoaded = true;
    return this.patterns;
  }

  /**
   * Add a custom pattern
   */
  async addPattern(pattern) {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }

    // Validate required fields
    const required = ['id', 'name', 'category', 'description', 'gameType'];
    for (const field of required) {
      if (!pattern[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    // Check for duplicate ID
    if (this.patterns.some(p => p.id === pattern.id)) {
      throw new Error(`Pattern with ID ${pattern.id} already exists`);
    }

    // Add defaults
    const newPattern = {
      mathematical: false,
      formula: '',
      conditions: [],
      tags: [],
      matchScore: 0.5,
      reliability: 'Medium',
      ...pattern
    };

    this.patterns.push(newPattern);

    try {
      await this.savePatternsToDB([newPattern]);
    } catch (error) {
      console.warn('Error saving to IndexedDB:', error);
    }

    return newPattern;
  }

  /**
   * Update an existing pattern
   */
  async updatePattern(id, updates) {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }

    const index = this.patterns.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error(`Pattern with ID ${id} not found`);
    }

    this.patterns[index] = { ...this.patterns[index], ...updates };

    try {
      await this.savePatternsToDB([this.patterns[index]]);
    } catch (error) {
      console.warn('Error saving to IndexedDB:', error);
    }

    return this.patterns[index];
  }

  /**
   * Delete a pattern
   */
  async deletePattern(id) {
    if (!this.isLoaded) {
      await this.loadPatterns();
    }

    const index = this.patterns.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error(`Pattern with ID ${id} not found`);
    }

    this.patterns.splice(index, 1);

    try {
      if (!this.db) {
        this.db = await this.openDatabase();
      }

      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      store.delete(id);

      await new Promise((resolve, reject) => {
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
      });
    } catch (error) {
      console.warn('Error deleting from IndexedDB:', error);
    }

    return true;
  }
}

// Create singleton instance
const patternLoader = new PatternLoader();

export default patternLoader;
export { PatternLoader, patternLoader };
