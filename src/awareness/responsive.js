/**
 * Awareness Module — Responsive Layout Engine
 *
 * Computes responsive layout parameters based on current
 * viewport dimensions and orientation.
 */

import { getViewport } from './viewport.js';
import { BREAKPOINT_SM, BREAKPOINT_MD, BREAKPOINT_LG } from '../core/constants.js';

/**
 * Get the current responsive tier
 * @returns {'sm' | 'md' | 'lg' | 'xl'}
 */
export function getResponsiveTier() {
    const { width } = getViewport();
    if (width < BREAKPOINT_SM) return 'sm';
    if (width < BREAKPOINT_MD) return 'md';
    if (width < BREAKPOINT_LG) return 'lg';
    return 'xl';
}

/**
 * Compute layout parameters for the current viewport
 * @returns {{ columns: number, padding: number, controlSize: number, fontSize: number }}
 */
export function getLayoutParams() {
    const tier = getResponsiveTier();
    const params = {
        sm: { columns: 1, padding: 12, controlSize: 36, fontSize: 12 },
        md: { columns: 2, padding: 16, controlSize: 40, fontSize: 13 },
        lg: { columns: 3, padding: 20, controlSize: 44, fontSize: 14 },
        xl: { columns: 4, padding: 24, controlSize: 48, fontSize: 15 },
    };
    return params[tier];
}

/**
 * Check if touch input is likely the primary input
 * @returns {boolean}
 */
export function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
