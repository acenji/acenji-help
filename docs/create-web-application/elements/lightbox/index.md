# Lightbox

The **Lightbox** element displays images in a gallery grid that opens in a fullscreen overlay when clicked. It supports gallery grids, single featured images, and auto-advancing slideshows with thumbnail navigation.

## Modes

### Gallery Mode
The default mode shows a grid of clickable image thumbnails:
- Configurable column count (2, 3, or 4)
- Each thumbnail shows a fullscreen icon overlay on hover
- Optional captions below each thumbnail
- Clicking opens the image in a fullscreen lightbox overlay

### Single Mode
A single featured image with lightbox trigger:
- Large image with centered fullscreen icon
- Optional caption badge in the bottom-left corner
- Click to open in fullscreen overlay

### Slideshow Mode
An auto-advancing image viewer with navigation:
- Main image area with previous/next arrows
- Centered play/pause button
- Caption with current position (e.g., "1 / 6")
- Thumbnail strip below for quick navigation
- Active thumbnail highlighted with accent color border

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for active thumbnail borders |
| Mode | Select | `gallery` | `gallery`, `single`, or `slideshow` |
| Columns | Select | `3` | Grid columns in gallery mode: 2, 3, or 4 |
| Show Captions | Toggle | On | Display image captions |
| Show Thumbnails | Toggle | On | Show thumbnail strip in slideshow mode |

## Use Cases

- **Photo galleries** -- Gallery mode for portfolio or event photos
- **Product images** -- Single mode for hero product shots
- **Presentations** -- Slideshow mode for step-by-step visual guides
- **Real estate** -- Gallery mode for property listing photos
