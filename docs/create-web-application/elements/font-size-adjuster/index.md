# Font Size Adjuster

The **Font Size Adjuster** element provides controls for users to increase or decrease the text size on the page. It supports button, slider, and stepper interfaces.

## Modes

### Buttons Mode
The default three-button selector:
- Three "A" buttons in small, medium, and large sizes
- Active size highlighted with accent color fill
- Inactive buttons shown with gray background and border
- Optional preview text below showing the current size effect

### Slider Mode
A continuous range slider:
- Small "A" on the left, large "A" on the right
- Draggable slider thumb with accent color track
- Current percentage displayed below (e.g., "100%")
- Optional preview paragraph showing the text at current size

### Stepper Mode
Plus/minus increment controls:
- Minus and plus buttons on either side
- Large percentage display in the center with accent color
- "Current size" label below the percentage
- Optional preview text area

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for active button and slider |
| Mode | Select | `buttons` | `buttons`, `slider`, or `stepper` |
| Show Preview | Toggle | On | Display sample text preview |
| Show Label | Toggle | On | Display "Text Size" label |

## Use Cases

- **Accessibility compliance** -- Meet WCAG text resize requirements
- **Elderly users** -- Provide easy text enlargement
- **Reading apps** -- Let users customize reading comfort
- **Healthcare portals** -- Ensure readability for all users
