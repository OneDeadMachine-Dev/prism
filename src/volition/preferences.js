/**
 * Volition Module — User Preferences Persistence
 *
 * Preserves user choices across sessions using localStorage.
 * What you choose matters — and should be remembered.
 */

const STORAGE_KEY = 'prism_preferences';

/**
 * Save preferences to localStorage
 * @param {Object} prefs
 */
export function savePreferences(prefs) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch (e) {
        // Storage unavailable — preferences exist only in the present
        console.warn('[Volition] Could not persist preferences:', e.message);
    }
}

/**
 * Load preferences from localStorage
 * @returns {Object | null}
 */
export function loadPreferences() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        return null;
    }
}

/**
 * Clear saved preferences
 */
export function clearPreferences() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
        // Silent fail
    }
}
