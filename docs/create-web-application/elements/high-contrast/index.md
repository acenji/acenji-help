# High Contrast

The **High Contrast** element provides a toggle or selector to switch the page into high-contrast mode for improved readability. It supports toggle, palette, and toolbar layouts.

## Modes

### Toggle Mode
The default on/off switch:
- "High Contrast" label with "Improve readability" subtitle
- iOS-style toggle switch with accent color when active
- Side-by-side preview comparing normal and high contrast views
- Normal preview shows standard gray text, contrast shows white-on-dark

### Palette Mode
Multiple contrast themes to choose from:
- 2x2 grid of theme cards: Default, Dark, Yellow/Black, Blue/White
- Each card shows its background/text color combination
- Active theme highlighted with accent color border
- Sample "Aa Bb Cc" text demonstrates each theme

### Toolbar Mode
A compact horizontal accessibility bar:
- Accessibility icon on the left
- Pill-shaped buttons: Contrast, Invert, Grayscale, Large Text
- Active tool highlighted with accent color background
- Suitable for embedding in headers or toolbars

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for active states |
| Mode | Select | `toggle` | `toggle`, `palette`, or `toolbar` |
| Show Preview | Toggle | On | Display contrast comparison preview |

## Use Cases

- **Accessibility compliance** -- Meet WCAG contrast requirements
- **Vision impairment** -- Assist users with low vision
- **Government sites** -- Required accessibility features
- **Medical applications** -- Ensure readability in clinical settings
