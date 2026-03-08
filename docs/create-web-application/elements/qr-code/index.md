# QR Code

The **QR Code** element generates and displays a QR code with configurable color, size, label, and download options. It supports standard centered display, bordered card, and compact inline layouts.

## Modes

### Standard Mode
The default mode shows a centered QR code:
- QR code in a bordered container
- Optional label above (e.g., "Scan to visit")
- Optional download button below
- Configurable size (small, medium, large)

### Card Mode
A bordered card with additional context:
- QR code with subtle shadow
- Label and URL text below
- Download button with accent color
- Card border and padding for visual separation

### Inline Mode
A compact horizontal layout:
- Small QR code on the left
- Label and URL text in the middle
- Optional download button on the right
- Single-row layout for embedding in lists or sidebars

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| QR Color | Color | `#000000` | Color of the QR code pattern |
| Mode | Select | `standard` | `standard`, `card`, or `inline` |
| Size | Select | `md` | QR code size: `sm`, `md`, or `lg` |
| Label | Text | `Scan to visit` | Text label displayed with the QR code |
| Show Label | Toggle | On | Display the text label |
| Show Download | Toggle | Off | Show download button |

## Use Cases

- **Event check-in** -- Standard mode with event URL
- **Business cards** -- Card mode with contact info QR
- **Restaurant menus** -- Inline mode for table-top displays
- **Marketing materials** -- Card mode with branded QR color and download
