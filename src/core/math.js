/**
 * Prism — Mathematical Utilities
 *
 * Helper functions for spectrum analysis, color space conversion,
 * and wave synthesis computations.
 */

/**
 * Clamp a value between min and max bounds
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation between two values
 * @param {number} a - Start value
 * @param {number} b - End value
 * @param {number} t - Interpolation factor (0-1)
 * @returns {number}
 */
export function lerp(a, b, t) {
    return a + (b - a) * clamp(t, 0, 1);
}

/**
 * Smooth step interpolation (Hermite)
 * @param {number} edge0
 * @param {number} edge1
 * @param {number} x
 * @returns {number}
 */
export function smoothStep(edge0, edge1, x) {
    const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
    return t * t * (3 - 2 * t);
}

/**
 * Convert wavelength (nm) to approximate RGB color
 * Based on Dan Bruton's algorithm with gamma correction
 * @param {number} wavelength - Wavelength in nanometers (380-700)
 * @param {number} gamma - Gamma correction factor
 * @returns {{ r: number, g: number, b: number }}
 */
export function wavelengthToRGB(wavelength, gamma = 2.2) {
    let r = 0, g = 0, b = 0;
    let factor = 0;

    if (wavelength >= 380 && wavelength < 440) {
        r = -(wavelength - 440) / (440 - 380);
        g = 0;
        b = 1;
    } else if (wavelength >= 440 && wavelength < 490) {
        r = 0;
        g = (wavelength - 440) / (490 - 440);
        b = 1;
    } else if (wavelength >= 490 && wavelength < 510) {
        r = 0;
        g = 1;
        b = -(wavelength - 510) / (510 - 490);
    } else if (wavelength >= 510 && wavelength < 580) {
        r = (wavelength - 510) / (580 - 510);
        g = 1;
        b = 0;
    } else if (wavelength >= 580 && wavelength < 645) {
        r = 1;
        g = -(wavelength - 645) / (645 - 580);
        b = 0;
    } else if (wavelength >= 645 && wavelength <= 700) {
        r = 1;
        g = 0;
        b = 0;
    }

    // Intensity falloff at spectrum edges
    if (wavelength >= 380 && wavelength < 420) {
        factor = 0.3 + 0.7 * (wavelength - 380) / (420 - 380);
    } else if (wavelength >= 420 && wavelength < 645) {
        factor = 1.0;
    } else if (wavelength >= 645 && wavelength <= 700) {
        factor = 0.3 + 0.7 * (700 - wavelength) / (700 - 645);
    }

    return {
        r: Math.round(255 * Math.pow(r * factor, 1 / gamma)),
        g: Math.round(255 * Math.pow(g * factor, 1 / gamma)),
        b: Math.round(255 * Math.pow(b * factor, 1 / gamma)),
    };
}

/**
 * Map a value from one range to another
 * @param {number} value - Input value
 * @param {number} inMin - Input range minimum
 * @param {number} inMax - Input range maximum
 * @param {number} outMin - Output range minimum
 * @param {number} outMax - Output range maximum
 * @returns {number}
 */
export function mapRange(value, inMin, inMax, outMin, outMax) {
    return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin);
}

/**
 * Generate a pseudo-random value with seed
 * Uses a simple xorshift algorithm for deterministic sequences
 * @param {number} seed
 * @returns {number} Value between 0 and 1
 */
export function seededRandom(seed) {
    let x = seed ^ 0xDEADBEEF;
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    return (x >>> 0) / 0xFFFFFFFF;
}

/**
 * Compute exponential decay envelope
 * @param {number} t - Time in seconds
 * @param {number} rate - Decay rate
 * @returns {number}
 */
export function expDecay(t, rate) {
    return Math.exp(-rate * t);
}

/**
 * Convert decibels to linear amplitude
 * @param {number} db
 * @returns {number}
 */
export function dbToLinear(db) {
    return Math.pow(10, db / 20);
}

/**
 * Normalize an array of values to 0-1 range
 * @param {number[]} arr
 * @returns {number[]}
 */
export function normalize(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min || 1;
    return arr.map(v => (v - min) / range);
}

/**
 * Compute the golden ratio spiral coordinate at angle theta
 * @param {number} theta - Angle in radians
 * @param {number} scale - Scale factor
 * @returns {{ x: number, y: number }}
 */
export function goldenSpiral(theta, scale = 1) {
    const PHI = 1.6180339887;
    const r = scale * Math.pow(PHI, (2 * theta) / Math.PI);
    return {
        x: r * Math.cos(theta),
        y: r * Math.sin(theta),
    };
}
