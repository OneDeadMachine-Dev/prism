/**
 * Identity Module — Color Palette Engine
 *
 * Transforms raw color data into usable palettes.
 * Every wavelength carries its own meaning — this module
 * ensures each color finds its authentic expression.
 */

import colorData from '../data/colors.json';
import { wavelengthToRGB, mapRange } from '../core/math.js';
import { WAVELENGTH_MIN, WAVELENGTH_MAX, BAND_COUNT } from '../core/constants.js';

/**
 * Generate a spectrum palette with N bands
 * @param {number} bands — Number of color bands
 * @returns {{ r: number, g: number, b: number }[]}
 */
export function generateSpectrumPalette(bands = BAND_COUNT) {
    const palette = [];
    for (let i = 0; i < bands; i++) {
        const wavelength = mapRange(i, 0, bands - 1, WAVELENGTH_MIN, WAVELENGTH_MAX);
        palette.push(wavelengthToRGB(wavelength));
    }
    return palette;
}

/**
 * Convert RGB object to CSS string
 * @param {{ r: number, g: number, b: number }} color
 * @param {number} alpha — Optional alpha (0-1)
 * @returns {string}
 */
export function rgbToCSS({ r, g, b }, alpha = 1) {
    if (alpha < 1) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Get accent colors from the color data
 * @returns {string[]}
 */
export function getAccentColors() {
    return Object.values(colorData.accents || {});
}

/**
 * Interpolate between two colors
 * @param {{ r: number, g: number, b: number }} c1
 * @param {{ r: number, g: number, b: number }} c2
 * @param {number} t — Interpolation factor (0-1)
 * @returns {{ r: number, g: number, b: number }}
 */
export function lerpColor(c1, c2, t) {
    return {
        r: Math.round(c1.r + (c2.r - c1.r) * t),
        g: Math.round(c1.g + (c2.g - c1.g) * t),
        b: Math.round(c1.b + (c2.b - c1.b) * t),
    };
}
