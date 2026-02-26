/**
 * Liberation Module — Cache Strategy
 *
 * Implements intelligent caching with TTL and LRU eviction.
 * Resources once liberated should remain accessible for as
 * long as they are needed, freed only when truly unused.
 */

/**
 * @typedef {Object} CacheEntry
 * @property {any} value
 * @property {number} timestamp
 * @property {number} accessCount
 */

/** @type {Map<string, CacheEntry>} */
const cache = new Map();

/** Default time-to-live: 5 minutes */
const DEFAULT_TTL_MS = 5 * 60 * 1000;

/** Max cache entries */
const MAX_ENTRIES = 100;

/**
 * Store a value in the cache
 * @param {string} key
 * @param {any} value
 */
export function cacheSet(key, value) {
    if (cache.size >= MAX_ENTRIES) {
        evictLRU();
    }
    cache.set(key, {
        value,
        timestamp: Date.now(),
        accessCount: 0,
    });
}

/**
 * Retrieve a value from cache
 * @param {string} key
 * @param {number} ttl — Time-to-live in ms
 * @returns {any | null}
 */
export function cacheGet(key, ttl = DEFAULT_TTL_MS) {
    const entry = cache.get(key);
    if (!entry) return null;

    if (Date.now() - entry.timestamp > ttl) {
        cache.delete(key);
        return null;
    }

    entry.accessCount++;
    return entry.value;
}

/**
 * Evict least recently used entry
 */
function evictLRU() {
    let lruKey = null;
    let lruAccess = Infinity;

    for (const [key, entry] of cache) {
        if (entry.accessCount < lruAccess) {
            lruAccess = entry.accessCount;
            lruKey = key;
        }
    }

    if (lruKey) cache.delete(lruKey);
}

/**
 * Clear the entire cache
 */
export function cacheClear() {
    cache.clear();
}
