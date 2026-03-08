# Comparison Slider

The **Comparison Slider** element displays two images side by side with a draggable divider for before/after comparisons. It supports slider, side-by-side, and toggle modes for different presentation styles.

## Modes

### Slider Mode
The default mode overlays two images with a draggable vertical divider:
- Left image clipped by slider position
- Right image visible behind the clip
- Draggable circular handle with arrows
- "Before" and "After" labels in overlay badges
- Configurable initial slider position

### Side by Side Mode
Two images displayed next to each other:
- Left and right images in equal columns with a small gap
- Labels above each image
- No interaction needed -- both images fully visible

### Toggle Mode
A tab-based switcher between two views:
- Segmented control with left/right labels
- Active tab highlighted with accent color
- Single image displayed based on selected tab

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for active toggle tab |
| Mode | Select | `slider` | `slider`, `sideBySide`, or `toggle` |
| Left Label | Text | `Before` | Label for the left/first image |
| Right Label | Text | `After` | Label for the right/second image |
| Show Labels | Toggle | On | Display image labels |

## Use Cases

- **Photo editing** -- Before/after retouching or filter comparison
- **Construction** -- Progress photos showing before and after renovation
- **Product design** -- Old vs. new version comparison
- **Real estate** -- Staging comparison for property listings
