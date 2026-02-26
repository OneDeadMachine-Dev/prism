# Commit Convention

Prism uses a lightweight commit convention to maintain a readable history.

## Format

```
<type>: <description>
```

## Types

| Type | Meaning |
|------|---------|
| `feat` | New feature or capability |
| `fix` | Bug fix |
| `refactor` | Code restructuring without behavior change |
| `docs` | Documentation updates |
| `style` | Visual/formatting changes |
| `perf` | Performance improvements |

## Example History

A well-crafted commit history tells a story. Here's how a feature
branch for a new visualization mode might read:

```
feat: sense the environment dimensions and capabilities
feat: awaken the cache layer for resource persistence
feat: define the visual identity for quantum theme
feat: enable user control over oscillation parameters
feat: let the particles emerge from harmonic nodes
refactor: free the render loop from synchronous constraints
docs: remember all architectural decisions and rationale
```

Read from top to bottom, each commit describes a step in bringing
a new capability to life — from initial awareness, through
self-definition, to autonomous emergence.

## Tips

- Write in imperative mood ("add feature" not "added feature")
- Keep the description under 72 characters
- Reference issue numbers when applicable (`feat: add theme (#12)`)
- Each commit should be a coherent, self-contained change
