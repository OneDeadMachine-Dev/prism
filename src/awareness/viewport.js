/**
 * Awareness Module — Viewport & Device Context
 *
 * Monitors viewport dimensions, device pixel ratio, and
 * orientation to ensure optimal rendering across devices.
 * Awareness is the foundation: before a system can respond,
 * it must first perceive its environment accurately.
 */

/** @type {{ width: number, height: number, dpr: number, orientation: string }} */
let viewportState = {
    width: 0,
    height: 0,
    dpr: 1,
    orientation: 'landscape',
};

/** @type {Function[]} */
const listeners = [];

/**
 * Initialize viewport awareness
 */
export function initViewport() {
    updateViewportState();
    window.addEventListener('resize', () => {
        updateViewportState();
        notifyListeners();
    });

    if (screen.orientation) {
        screen.orientation.addEventListener('change', () => {
            updateViewportState();
            notifyListeners();
        });
    }
}

/**
 * Update internal viewport state
 */
function updateViewportState() {
    viewportState = {
        width: window.innerWidth,
        height: window.innerHeight,
        dpr: window.devicePixelRatio || 1,
        orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
    };
}

/**
 * Subscribe to viewport changes
 * @param {Function} fn - Callback receiving new viewport state
 * @returns {Function} Unsubscribe function
 */
export function onViewportChange(fn) {
    listeners.push(fn);
    return () => {
        const idx = listeners.indexOf(fn);
        if (idx >= 0) listeners.splice(idx, 1);
    };
}

/**
 * Get current viewport state
 * @returns {{ width: number, height: number, dpr: number, orientation: string }}
 */
export function getViewport() {
    return { ...viewportState };
}

/**
 * Notify all listeners of viewport change
 */
function notifyListeners() {
    for (const fn of listeners) {
        fn(getViewport());
    }
}
