/**
 * Prism — Main Application Entry
 *
 * Orchestrates initialization of all modules and starts
 * the ambient spectrum visualization engine.
 */

import './style.css';

import { initialize, onUpdate, onRender, start } from './core/engine.js';
import { initViewport } from './awareness/viewport.js';
import { applyTheme } from './identity/theme.js';
import { initSpectrum, updateSpectrum, renderSpectrum, setSpectrumParams } from './emergence/spectrum.js';
import { updateParticles, renderParticles, setParticleParams } from './emergence/particles.js';
import { updateWaveform, renderWaveform, setWaveParams } from './emergence/waveform.js';
import { createControls, onPreferenceChange, getPreferences } from './volition/controls.js';
import { loadPreferences, savePreferences } from './volition/preferences.js';

/**
 * Boot sequence
 */
function boot() {
    // Phase 1 — Awareness: know the environment
    initViewport();

    // Phase 2 — Identity: establish visual language
    const savedPrefs = loadPreferences();
    applyTheme(savedPrefs?.theme || 'nebula');

    // Phase 3 — Engine: prepare the canvas
    initialize('prism-canvas');

    // Phase 4 — Emergence: load visualization systems
    initSpectrum();

    // Apply saved preferences if they exist
    if (savedPrefs) {
        setSpectrumParams(savedPrefs);
        setParticleParams(savedPrefs);
        setWaveParams(savedPrefs);
    }

    // Phase 5 — Volition: give the user agency
    createControls(document.getElementById('app'));

    // Listen for preference changes
    onPreferenceChange((prefs) => {
        setSpectrumParams(prefs);
        setParticleParams(prefs);
        setWaveParams(prefs);
        savePreferences(prefs);
    });

    // Register update callbacks
    onUpdate((dt, elapsed) => {
        updateSpectrum(dt, elapsed);
        updateParticles(dt);
        updateWaveform(dt);
    });

    // Register render callbacks (order matters: back to front)
    onRender((ctx, dt) => {
        renderWaveform(ctx);
        renderSpectrum(ctx);
        renderParticles(ctx);
    });

    // Phase 6 — Ignition
    start();

    console.log(
        '%c◈ Prism — Ambient Spectrum Engine',
        'color: #c084fc; font-size: 14px; font-weight: bold;'
    );
    console.log(
        '%cEach wavelength finds its own path.',
        'color: #6366f1; font-size: 11px; font-style: italic;'
    );
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
} else {
    boot();
}
