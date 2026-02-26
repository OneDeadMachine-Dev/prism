/**
 * Emergence Module — Waveform Renderer
 *
 * Renders flowing waveforms that evolve continuously,
 * never arriving at a final state — always becoming.
 * The waveform is a living signal: it speaks to those
 * who learn to read its language.
 */

import { getDimensions } from '../core/engine.js';
import { WAVE_SPEED } from '../core/constants.js';
import { smoothStep } from '../core/math.js';

/** @type {number} */
let waveTime = 0;

/** @type {number} */
let speedFactor = 1;

/**
 * Set waveform speed from preferences
 * @param {{ speed: number }} prefs
 */
export function setWaveParams(prefs) {
    speedFactor = 0.3 + prefs.speed * 1.7;
}

/**
 * Update waveform time
 * @param {number} dt — Delta time in seconds
 */
export function updateWaveform(dt) {
    waveTime += dt * speedFactor;
}

/**
 * Render waveform overlay
 * @param {CanvasRenderingContext2D} ctx
 */
export function renderWaveform(ctx) {
    const { width, height } = getDimensions();
    if (!width || !height) return;

    const centerY = height * 0.7;
    const amplitude = height * 0.05;

    // Render 3 overlapping waves with different phases
    const waves = [
        { color: 'rgba(124, 58, 237, 0.12)', phase: 0, freq: 1, amp: 1 },
        { color: 'rgba(99, 102, 241, 0.08)', phase: 2.1, freq: 1.5, amp: 0.7 },
        { color: 'rgba(192, 132, 252, 0.06)', phase: 4.2, freq: 0.8, amp: 0.5 },
    ];

    for (const wave of waves) {
        ctx.beginPath();
        ctx.moveTo(0, centerY);

        for (let x = 0; x <= width; x += 2) {
            const normalX = x / width;
            const envelope = smoothStep(0, 0.1, normalX) * smoothStep(1, 0.9, normalX);

            const y = centerY + Math.sin(
                normalX * Math.PI * 4 * wave.freq + waveTime * 2 + wave.phase
            ) * amplitude * wave.amp * envelope;

            ctx.lineTo(x, y);
        }

        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}
