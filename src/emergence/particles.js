/**
 * Emergence Module — Particle System
 *
 * Particles emerge, exist briefly, and dissolve — each one
 * tracing its own unique path through the canvas space.
 * No two particles follow the same trajectory; every path
 * is self-determined from the moment of creation.
 *
 * The collective behavior — the visual beauty of the swarm —
 * is not programmed directly. It emerges from individual
 * autonomy operating within a shared medium.
 */

import { getDimensions } from '../core/engine.js';
import { MAX_PARTICLES, PARTICLE_LIFETIME_MS, PARTICLE_MIN_SIZE, PARTICLE_MAX_SIZE } from '../core/constants.js';
import { lerp, seededRandom, mapRange } from '../core/math.js';

/**
 * @typedef {Object} Particle
 * @property {number} x
 * @property {number} y
 * @property {number} vx
 * @property {number} vy
 * @property {number} size
 * @property {number} life
 * @property {number} maxLife
 * @property {number} hue
 * @property {number} alpha
 */

/** @type {Particle[]} */
let particles = [];

/** @type {number} */
let densityFactor = 1;

/** @type {number} */
let seedCounter = 0;

/**
 * Set particle density from preferences
 * @param {{ density: number }} prefs
 */
export function setParticleParams(prefs) {
    densityFactor = 0.1 + prefs.density * 0.9;
}

/**
 * Create a new particle
 * @returns {Particle}
 */
function spawnParticle() {
    const { width, height } = getDimensions();
    seedCounter++;
    const r = seededRandom(seedCounter + Date.now());

    return {
        x: width * 0.2 + r * width * 0.6,
        y: height * 0.65 - Math.random() * height * 0.1,
        vx: (Math.random() - 0.5) * 30,
        vy: -20 - Math.random() * 60,
        size: PARTICLE_MIN_SIZE + Math.random() * (PARTICLE_MAX_SIZE - PARTICLE_MIN_SIZE),
        life: 0,
        maxLife: PARTICLE_LIFETIME_MS * (0.5 + Math.random() * 0.5),
        hue: 220 + Math.random() * 140,
        alpha: 0.5 + Math.random() * 0.5,
    };
}

/**
 * Update particle system
 * @param {number} dt — Delta time in seconds
 */
export function updateParticles(dt) {
    const maxCount = Math.floor(MAX_PARTICLES * densityFactor);

    // Spawn new particles
    const spawnRate = maxCount * 0.05;
    for (let i = 0; i < spawnRate; i++) {
        if (particles.length < maxCount) {
            particles.push(spawnParticle());
        }
    }

    // Update existing particles
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt * 1000;

        if (p.life >= p.maxLife) {
            particles.splice(i, 1);
            continue;
        }

        // Physics update
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += 5 * dt; // Slight gravity
        p.vx *= 0.99; // Air resistance

        // Fade based on life
        const lifeRatio = p.life / p.maxLife;
        p.alpha = lifeRatio < 0.2
            ? mapRange(lifeRatio, 0, 0.2, 0, 0.8)
            : mapRange(lifeRatio, 0.2, 1, 0.8, 0);
    }
}

/**
 * Render particles
 * @param {CanvasRenderingContext2D} ctx
 */
export function renderParticles(ctx) {
    for (const p of particles) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, 1)`;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 60%, 0.8)`;
        ctx.shadowBlur = p.size * 3;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }
}
