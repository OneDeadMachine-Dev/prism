/**
 * Identity Module — Theme System
 *
 * Manages the visual identity of the application.
 * Each theme expresses a unique character — its own personality
 * and aesthetic voice. No two themes need to be alike;
 * each is free to define its own visual language.
 */

import colorData from '../data/colors.json';

/** @type {string} */
let currentTheme = 'nebula';

/** Theme definitions */
const themes = {
    nebula: {
        name: 'Nebula',
        background: 'linear-gradient(135deg, #050510 0%, #1a0a2e 50%, #0d1b3e 100%)',
        particleColor: '#c084fc',
        glowColor: '#7c3aed',
        accentColor: '#ff6b9d',
        surfaceColor: 'rgba(15, 15, 35, 0.85)',
    },
    aurora: {
        name: 'Aurora',
        background: 'linear-gradient(135deg, #041c1c 0%, #0a2a2a 50%, #0d3b2d 100%)',
        particleColor: '#34d399',
        glowColor: '#059669',
        accentColor: '#67e8f9',
        surfaceColor: 'rgba(10, 30, 25, 0.85)',
    },
    solar: {
        name: 'Solar Flare',
        background: 'linear-gradient(135deg, #1a0505 0%, #2d0f0f 50%, #3d1a0a 100%)',
        particleColor: '#fbbf24',
        glowColor: '#d97706',
        accentColor: '#fb923c',
        surfaceColor: 'rgba(30, 15, 10, 0.85)',
    },
    void: {
        name: 'Deep Void',
        background: 'linear-gradient(135deg, #020204 0%, #08080f 50%, #050510 100%)',
        particleColor: '#6366f1',
        glowColor: '#4f46e5',
        accentColor: '#818cf8',
        surfaceColor: 'rgba(8, 8, 20, 0.9)',
    },
};

/**
 * Apply a theme to the document
 * @param {string} themeId
 */
export function applyTheme(themeId) {
    const theme = themes[themeId];
    if (!theme) return;

    currentTheme = themeId;
    const root = document.documentElement;

    root.style.setProperty('--bg-gradient', theme.background);
    root.style.setProperty('--particle-color', theme.particleColor);
    root.style.setProperty('--glow-color', theme.glowColor);
    root.style.setProperty('--accent-color', theme.accentColor);
    root.style.setProperty('--surface-color', theme.surfaceColor);

    document.body.style.background = theme.background;
}

/**
 * Get current theme ID
 * @returns {string}
 */
export function getCurrentTheme() {
    return currentTheme;
}

/**
 * Get list of available theme IDs
 * @returns {string[]}
 */
export function getThemeIds() {
    return Object.keys(themes);
}

/**
 * Get theme metadata
 * @param {string} themeId
 * @returns {{ name: string } | null}
 */
export function getThemeMeta(themeId) {
    const theme = themes[themeId];
    return theme ? { name: theme.name } : null;
}
