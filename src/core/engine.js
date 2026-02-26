/**
 * Prism — Core Render Engine
 *
 * Orchestrates the spectrum visualization pipeline:
 * canvas initialization, render loop, and module coordination.
 */

import { TARGET_FPS, FRAME_BUDGET_MS, SMOOTHING_FACTOR } from './constants.js';

/** @type {HTMLCanvasElement} */
let canvas = null;

/** @type {CanvasRenderingContext2D} */
let ctx = null;

/** @type {number} */
let animationId = null;

/** @type {number} */
let lastFrameTime = 0;

/** @type {Function[]} */
const renderCallbacks = [];

/** @type {Function[]} */
const updateCallbacks = [];

/**
 * Initialize the render engine with target canvas
 * @param {string} canvasId — DOM id of the canvas element
 */
export function initialize(canvasId) {
    canvas = document.getElementById(canvasId);
    if (!canvas) {
        throw new Error(`[Prism] Canvas element "#${canvasId}" not found`);
    }
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
}

/**
 * Resize canvas to fill viewport
 */
function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

/**
 * Register a callback to be called each update tick
 * @param {Function} fn — (deltaTime: number, elapsed: number) => void
 */
export function onUpdate(fn) {
    updateCallbacks.push(fn);
}

/**
 * Register a callback to be called each render frame
 * @param {Function} fn — (ctx: CanvasRenderingContext2D, deltaTime: number) => void
 */
export function onRender(fn) {
    renderCallbacks.push(fn);
}

/**
 * Get the canvas rendering context
 * @returns {CanvasRenderingContext2D}
 */
export function getContext() {
    return ctx;
}

/**
 * Get canvas dimensions
 * @returns {{ width: number, height: number }}
 */
export function getDimensions() {
    return {
        width: canvas?.width || 0,
        height: canvas?.height || 0,
    };
}

/**
 * Main render loop
 * @param {DOMHighResTimeStamp} timestamp
 */
function loop(timestamp) {
    animationId = requestAnimationFrame(loop);

    const deltaTime = timestamp - lastFrameTime;

    // Skip frame if budget exceeded (maintain target FPS)
    if (deltaTime < FRAME_BUDGET_MS * 0.8) return;

    lastFrameTime = timestamp;
    const dt = deltaTime / 1000; // Convert to seconds

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update phase
    for (const update of updateCallbacks) {
        update(dt, timestamp / 1000);
    }

    // Render phase
    for (const render of renderCallbacks) {
        render(ctx, dt);
    }
}

/**
 * Start the render loop
 */
export function start() {
    if (animationId !== null) return;
    lastFrameTime = performance.now();
    animationId = requestAnimationFrame(loop);
}

/**
 * Stop the render loop
 */
export function stop() {
    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
}

/**
 * Check if engine is currently running
 * @returns {boolean}
 */
export function isRunning() {
    return animationId !== null;
}
