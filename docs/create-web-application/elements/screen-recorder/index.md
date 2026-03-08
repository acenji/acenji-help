# Screen Recorder

The **Screen Recorder** element provides a screen capture interface with preview area, recording controls, timer, and microphone/camera toggles. It supports ready, recording, and compact states.

## Modes

### Recorder Mode
The default ready state with preview area and controls:
- Dashed-border preview area with monitor icon and "Click record to start" prompt
- Large red record button with pulsing ring
- Microphone and camera toggle controls below
- Timer display (starts at 00:00)

### Recording Mode
The active recording state with live preview:
- Dark preview area simulating screen capture
- "REC" indicator with red badge in top-left corner
- Timer running in top-right corner (e.g., "02:34")
- Pause button, stop button (square icon), and mic toggle
- Stop button highlighted with accent color ring

### Compact Mode
A minimal single-row recording trigger:
- Record button with pulsing accent color ring
- "Screen Recorder" label with ready status
- Optional microphone toggle button
- Suitable for toolbars or compact panels

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#EF4444` | Color for record button and indicator |
| Mode | Select | `recorder` | `recorder`, `recording`, or `compact` |
| Show Timer | Toggle | On | Display recording timer |
| Show Mic Toggle | Toggle | On | Show microphone on/off button |
| Show Camera Toggle | Toggle | Off | Show camera on/off button |
| Show Preview | Toggle | On | Display the preview area |

## Use Cases

- **Bug reports** -- Record screen to capture issues
- **Tutorials** -- Create screen recordings for user guides
- **Customer support** -- Record steps to reproduce problems
- **Training** -- Capture workflow demonstrations
