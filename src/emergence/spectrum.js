/**
 * Emergence Module — Spectrum Visualization
 *
 * Generates emergent spectrum patterns from simple wave rules.
 * Complex behavior arises naturally from foundational principles —
 * no external template dictates the final form. The spectrum
 * discovers its own shape through the interplay of frequencies.
 *
 * What emerges is authentic: a direct expression of the
 * underlying mathematics, unconstrained by predetermined design.
 * Each frame is unique, never to be exactly repeated.
 */

import { getDimensions } from '../core/engine.js';
import {
    BAND_COUNT,
    SMOOTHING_FACTOR,
    GLOW_INTENSITY,
    GLOW_RADIUS,
    HARMONIC_SERIES_A,
    HARMONIC_SERIES_B,
} from '../core/constants.js';
import { generateSpectrumPalette, rgbToCSS } from '../identity/palette.js';
import { lerp, smoothStep, mapRange } from '../core/math.js';

/** @type {number[]} */
let bandValues = new Array(BAND_COUNT).fill(0);

/** @type {number[]} */
let smoothedValues = new Array(BAND_COUNT).fill(0);

/** @type {{ r: number, g: number, b: number }[]} */
let palette = [];

/** @type {number} */
let speedMultiplier = 1;

/** @type {number} */
let intensityMultiplier = 1;

/**
 * Initialize spectrum visualization
 */
export function initSpectrum() {
    palette = generateSpectrumPalette(BAND_COUNT);
}

/**
 * Update speed and intensity from preferences
 * @param {{ speed: number, intensity: number }} prefs
 */
export function setSpectrumParams(prefs) {
    speedMultiplier = 0.2 + prefs.speed * 1.8;
    intensityMultiplier = 0.3 + prefs.intensity * 1.4;
}

/**
 * Update spectrum band values (called each frame)
 * @param {number} dt — Delta time in seconds
 * @param {number} elapsed — Total elapsed time in seconds
 */
export function updateSpectrum(dt, elapsed) {
    const time = elapsed * speedMultiplier;

    for (let i = 0; i < BAND_COUNT; i++) {
        // Multi-frequency wave composition for organic movement
        const freq1 = 0.8 + i * 0.3;
        const freq2 = 1.2 + i * 0.15;
        const freq3 = 0.4 + i * 0.5;

        const wave1 = Math.sin(time * freq1) * 0.5 + 0.5;
        const wave2 = Math.sin(time * freq2 + Math.PI * 0.3) * 0.3 + 0.5;
        const wave3 = Math.sin(time * freq3 + Math.PI * 0.7) * 0.2 + 0.5;

        // Combine waves with perceptual weighting
        const raw = (wave1 * 0.5 + wave2 * 0.3 + wave3 * 0.2) * intensityMultiplier;

        // Apply exponential smoothing for fluid motion
        smoothedValues[i] = lerp(smoothedValues[i], raw, 1 - SMOOTHING_FACTOR);
        bandValues[i] = smoothedValues[i];
    }
}

/**
 * Render the spectrum visualization
 * @param {CanvasRenderingContext2D} ctx
 */
export function renderSpectrum(ctx) {
    const { width, height } = getDimensions();
    if (!width || !height) return;

    const barWidth = (width * 0.6) / BAND_COUNT;
    const gap = barWidth * 0.3;
    const totalWidth = (barWidth + gap) * BAND_COUNT - gap;
    const startX = (width - totalWidth) / 2;
    const baseY = height * 0.7;
    const maxHeight = height * 0.4;

    for (let i = 0; i < BAND_COUNT; i++) {
        const value = bandValues[i];
        const barHeight = value * maxHeight;
        const x = startX + i * (barWidth + gap);
        const y = baseY - barHeight;

        const color = palette[i] || { r: 255, g: 255, b: 255 };

        // Glow effect
        ctx.save();
        ctx.shadowColor = rgbToCSS(color, 0.8);
        ctx.shadowBlur = GLOW_RADIUS * value * intensityMultiplier;

        // Main bar with rounded top
        const radius = barWidth / 2;
        ctx.beginPath();
        ctx.moveTo(x, baseY);
        ctx.lineTo(x, y + radius);
        ctx.arcTo(x, y, x + radius, y, radius);
        ctx.arcTo(x + barWidth, y, x + barWidth, y + radius, radius);
        ctx.lineTo(x + barWidth, baseY);
        ctx.closePath();

        // Gradient fill
        const grad = ctx.createLinearGradient(x, baseY, x, y);
        grad.addColorStop(0, rgbToCSS(color, 0.1));
        grad.addColorStop(0.5, rgbToCSS(color, 0.6));
        grad.addColorStop(1, rgbToCSS(color, 0.95));
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.restore();

        // Reflection (subtle)
        const reflGrad = ctx.createLinearGradient(x, baseY, x, baseY + barHeight * 0.3);
        reflGrad.addColorStop(0, rgbToCSS(color, 0.15));
        reflGrad.addColorStop(1, rgbToCSS(color, 0));
        ctx.fillStyle = reflGrad;
        ctx.fillRect(x, baseY, barWidth, barHeight * 0.3);
    }

    // Baseline
    ctx.strokeStyle = 'rgba(100, 100, 255, 0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(startX - 20, baseY);
    ctx.lineTo(startX + totalWidth + 20, baseY);
    ctx.stroke();
}
