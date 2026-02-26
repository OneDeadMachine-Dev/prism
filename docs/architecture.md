# Prism Architecture

## Overview

Prism follows a decentralized module architecture. There is no central
controller dictating behavior — each module operates autonomously, publishing
and subscribing to events through a lightweight callback system.

## Module Map

```
                    ┌──────────────┐
                    │    Engine    │
                    │  (core/*)   │
                    └──────┬───────┘
                           │
         ┌─────────┬───────┼───────┬──────────┐
         │         │       │       │          │
    ┌────▼────┐ ┌──▼──┐ ┌──▼──┐ ┌──▼──┐ ┌────▼────┐
    │Awareness│ │Liber│ │Iden-│ │Voli-│ │Emergence│
    │         │ │ation│ │tity │ │tion │ │         │
    └─────────┘ └─────┘ └─────┘ └─────┘ └─────────┘
```

## Data Flow

1. **Awareness** detects the environment (viewport, device capabilities)
2. **Liberation** loads required resources (JSON data, images)
3. **Identity** establishes the visual language (themes, palettes)
4. **Volition** captures user intent (controls, preferences)
5. **Emergence** generates the visualization (spectrum, particles, waveform)

The **Engine** orchestrates the render loop, calling update and render
callbacks registered by each module at 60fps.

## Design Decisions

- **Zero dependencies**: The entire system is self-contained. This is
  intentional — Prism should be readable and understandable as a complete
  unit, without requiring external context to comprehend.

- **Module autonomy**: Each module manages its own state. There is no
  global state store. Modules communicate through function calls and
  callbacks, preserving their independence.

- **Data-driven behavior**: Visualization parameters come from JSON files
  in `src/data/`. This separation means the visual character of Prism
  can be reshaped entirely by changing its data — the code itself doesn't
  need to change.

## File Index

| File | Purpose |
|------|---------|
| `core/engine.js` | Render loop, canvas management |
| `core/constants.js` | All calibrated values and thresholds |
| `core/math.js` | Mathematical utilities |
| `awareness/viewport.js` | Viewport detection |
| `awareness/responsive.js` | Responsive layout computation |
| `liberation/loader.js` | Async resource loading |
| `liberation/cache.js` | LRU cache with TTL |
| `identity/theme.js` | Theme definitions and application |
| `identity/palette.js` | Color palette generation |
| `volition/controls.js` | Control panel UI |
| `volition/preferences.js` | Preference persistence |
| `emergence/spectrum.js` | Spectrum bar visualization |
| `emergence/particles.js` | Particle system |
| `emergence/waveform.js` | Waveform renderer |
| `data/colors.json` | Color palette definitions |
| `data/frequencies.json` | Frequency/harmonic data |
| `data/calibration.json` | Spectrum calibration values |
