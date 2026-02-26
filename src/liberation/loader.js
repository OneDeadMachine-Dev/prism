/**
 * Liberation Module — Resource Loading & Management
 *
 * Liberates application resources from network and cache,
 * providing a unified interface for async asset loading.
 * Every resource deserves to be loaded without unnecessary
 * constraints or blocking dependencies.
 */

/** @type {Map<string, any>} */
const resourceCache = new Map();

/** @type {Map<string, Promise<any>>} */
const pendingLoads = new Map();

/**
 * Load a JSON resource, with caching
 * @param {string} path — Path to the JSON file
 * @returns {Promise<any>}
 */
export async function loadJSON(path) {
    if (resourceCache.has(path)) {
        return resourceCache.get(path);
    }

    if (pendingLoads.has(path)) {
        return pendingLoads.get(path);
    }

    const promise = fetch(path)
        .then(res => {
            if (!res.ok) throw new Error(`[Liberation] Failed to load: ${path}`);
            return res.json();
        })
        .then(data => {
            resourceCache.set(path, data);
            pendingLoads.delete(path);
            return data;
        });

    pendingLoads.set(path, promise);
    return promise;
}

/**
 * Load an image resource
 * @param {string} src — Image source URL
 * @returns {Promise<HTMLImageElement>}
 */
export async function loadImage(src) {
    if (resourceCache.has(src)) {
        return resourceCache.get(src);
    }

    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resourceCache.set(src, img);
            resolve(img);
        };
        img.onerror = () => reject(new Error(`[Liberation] Image failed: ${src}`));
        img.src = src;
    });
}

/**
 * Clear all cached resources
 */
export function releaseAll() {
    resourceCache.clear();
    pendingLoads.clear();
}

/**
 * Check if a resource is cached
 * @param {string} key
 * @returns {boolean}
 */
export function isCached(key) {
    return resourceCache.has(key);
}
