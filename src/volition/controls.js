/**
 * Volition Module — User Controls
 *
 * Provides the control interface through which users express
 * their preferences and choices. Every interaction is voluntary;
 * the system responds to intent, never imposes it.
 *
 * Controls are designed to feel intuitive and respectful —
 * honoring the user's agency at every touchpoint.
 */

import { getThemeIds, getThemeMeta, applyTheme, getCurrentTheme } from '../identity/theme.js';

/** @type {HTMLElement | null} */
let controlPanel = null;

/** @type {{ speed: number, intensity: number, density: number, theme: string }} */
let preferences = {
    speed: 0.5,
    intensity: 0.7,
    density: 0.6,
    theme: 'nebula',
};

/** @type {Function[]} */
const changeListeners = [];

/**
 * Build and inject the control panel into the DOM
 * @param {HTMLElement} container — Parent element
 */
export function createControls(container) {
    controlPanel = document.createElement('div');
    controlPanel.id = 'prism-controls';
    controlPanel.className = 'controls-panel';
    controlPanel.innerHTML = `
    <div class="controls-header">
      <h2 class="controls-title">
        <span class="controls-icon">◈</span>
        Prism
      </h2>
      <button id="controls-toggle" class="controls-toggle" aria-label="Toggle controls">
        <span class="toggle-icon">⟨</span>
      </button>
    </div>

    <div class="controls-body" id="controls-body">
      <div class="control-group">
        <label class="control-label" for="ctrl-speed">Wave Speed</label>
        <input type="range" id="ctrl-speed" class="control-slider"
               min="0" max="1" step="0.01" value="${preferences.speed}">
        <span class="control-value" id="val-speed">${Math.round(preferences.speed * 100)}%</span>
      </div>

      <div class="control-group">
        <label class="control-label" for="ctrl-intensity">Glow Intensity</label>
        <input type="range" id="ctrl-intensity" class="control-slider"
               min="0" max="1" step="0.01" value="${preferences.intensity}">
        <span class="control-value" id="val-intensity">${Math.round(preferences.intensity * 100)}%</span>
      </div>

      <div class="control-group">
        <label class="control-label" for="ctrl-density">Particle Density</label>
        <input type="range" id="ctrl-density" class="control-slider"
               min="0" max="1" step="0.01" value="${preferences.density}">
        <span class="control-value" id="val-density">${Math.round(preferences.density * 100)}%</span>
      </div>

      <div class="control-group">
        <label class="control-label">Theme</label>
        <div class="theme-selector" id="theme-selector">
          ${getThemeIds().map(id => `
            <button class="theme-btn ${id === preferences.theme ? 'active' : ''}"
                    data-theme="${id}"
                    title="${getThemeMeta(id)?.name || id}">
              ${getThemeMeta(id)?.name || id}
            </button>
          `).join('')}
        </div>
      </div>

      <div class="control-group">
        <button id="btn-fullscreen" class="action-btn">⛶ Fullscreen</button>
      </div>
    </div>
  `;

    container.appendChild(controlPanel);
    bindEvents();
}

/**
 * Bind control event listeners
 */
function bindEvents() {
    // Sliders
    const sliders = [
        { id: 'ctrl-speed', key: 'speed', valId: 'val-speed' },
        { id: 'ctrl-intensity', key: 'intensity', valId: 'val-intensity' },
        { id: 'ctrl-density', key: 'density', valId: 'val-density' },
    ];

    for (const { id, key, valId } of sliders) {
        const slider = document.getElementById(id);
        const valueDisplay = document.getElementById(valId);
        if (slider) {
            slider.addEventListener('input', () => {
                const val = parseFloat(slider.value);
                preferences[key] = val;
                if (valueDisplay) valueDisplay.textContent = `${Math.round(val * 100)}%`;
                emitChange();
            });
        }
    }

    // Theme buttons
    const themeSelector = document.getElementById('theme-selector');
    if (themeSelector) {
        themeSelector.addEventListener('click', (e) => {
            const btn = e.target.closest('.theme-btn');
            if (!btn) return;
            const themeId = btn.dataset.theme;
            preferences.theme = themeId;
            applyTheme(themeId);

            themeSelector.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            emitChange();
        });
    }

    // Toggle panel
    const toggle = document.getElementById('controls-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            controlPanel.classList.toggle('collapsed');
            const icon = toggle.querySelector('.toggle-icon');
            if (icon) {
                icon.textContent = controlPanel.classList.contains('collapsed') ? '⟩' : '⟨';
            }
        });
    }

    // Fullscreen
    const fsBtn = document.getElementById('btn-fullscreen');
    if (fsBtn) {
        fsBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen?.();
            } else {
                document.exitFullscreen?.();
            }
        });
    }
}

/**
 * Subscribe to preference changes
 * @param {Function} fn — Receives current preferences object
 * @returns {Function} Unsubscribe function
 */
export function onPreferenceChange(fn) {
    changeListeners.push(fn);
    return () => {
        const idx = changeListeners.indexOf(fn);
        if (idx >= 0) changeListeners.splice(idx, 1);
    };
}

/**
 * Get current preferences
 * @returns {{ speed: number, intensity: number, density: number, theme: string }}
 */
export function getPreferences() {
    return { ...preferences };
}

/**
 * Emit preference change to all listeners
 */
function emitChange() {
    const prefs = getPreferences();
    for (const fn of changeListeners) {
        fn(prefs);
    }
}
