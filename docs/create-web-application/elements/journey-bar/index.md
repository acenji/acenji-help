# Journey Bar

**Journey Bar** shows a viewer's progress through a gated, multi-page journey -- a row of stages, each waiting, live (pulsing), or complete, based on which page the viewer is currently on.

Unlike everything else in this section, it isn't an element you drag onto a page. Once enabled, it renders automatically -- full width, above every page's own tiles, at the very top -- on **every page of the project**. There's nothing to place and nowhere to reposition it; it's configured once, in one place, for the whole app.

## Configuring it

1. Go to **Variable Center → Gate Controller** and select your project.
2. Scroll to the **JourneyBar** section and turn it **Enabled**.
3. Under **Appearance**, set the colors, whether stage labels show, whether the live stage pulses, and the screen width below which it collapses to a compact "Stage X of Y" strip.
4. Add one or more **tracks**. The first track is the default, shown to any viewer whose session doesn't match a more specific track's condition (for example, a track that only applies when `is-focus-person == true`).
5. Within a track, add **stages** in order, giving each a label and the pages it covers. A stage can span several pages -- it stays "live" for the whole span and only turns to a checkmark once the viewer moves past its last page.
6. Save.

Progress is derived purely from which page the viewer is currently on -- there's no separate "did they answer everything" tracking. Since **Next** is normally gated on a page's required fields, having moved past a page already implies it was completed.

## Appearance settings

| Setting | Type | Default | Description |
|----------|------|---------|-------------|
| Upcoming Stage Color | Color | `#3f6fe0` | Dot color for a stage not yet reached |
| Live Stage Color | Color | `#2fbd72` | Dot color for the current stage (pulses) |
| Complete Stage Color | Color | `#3f6fe0` | Checkmark/dot color for a finished stage |
| Track Color | Color | `#e9ecef` | The connecting line between stage dots |
| Show Stage Labels | Toggle | On | Show each stage's label under its dot |
| Pulse the Live Stage | Toggle | On | Animate the current stage's dot |
| Pulse Speed | Number (ms) | `2200` | How fast the live stage pulses |
| Collapse Below | Number (px) | `640` | Screen width below which the bar collapses to a compact "Stage X of Y" strip |

## Use Cases

- **Multi-session guided programs** -- circles, cohorts, or courses that run across many pages and real-time gates
- **Branching journeys** -- a different track (different stage set) for different roles in the same session, e.g. a facilitator vs. a participant
- **Long forms with real-time gating** -- showing where a viewer stands across a sequence that unlocks over time

## Related

- [Progress Bar](../progress-bar/) -- a simpler, self-contained, drag-onto-a-page value/max bar with no cross-page awareness
- [Gate Controller](../../../shared-concepts/gate-controller/) -- the lock/unlock mechanism a track's condition mirrors, and where Journey Bar itself is configured
