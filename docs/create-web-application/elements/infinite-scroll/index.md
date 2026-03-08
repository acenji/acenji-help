# Infinite Scroll

The **Infinite Scroll** element displays a continuously loading list of content items with loading indicators. It supports list, grid, and feed layouts.

## Modes

### List Mode
The default numbered list layout:
- Numbered items with accent-colored index badges
- Title and author/time metadata per item
- Category tags on the right side
- Spinning loader at the bottom with "Loading..." text
- Item count display (e.g., "Showing 4 of 248")

### Grid Mode
A two-column card grid:
- Cards with colored header placeholder and text content
- Title and author metadata below each card image
- Animated dot loader at the bottom (three bouncing dots)
- Total item count at the top

### Feed Mode
A social media-style content feed:
- Thumbnail image on the left with text content on the right
- Bold title, author line, and category tag badge
- Spinning circle loader between content batches
- Article count display at the top

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for badges and loaders |
| Mode | Select | `list` | `list`, `grid`, or `feed` |
| Show Loader | Toggle | On | Display loading indicator at bottom |
| Show Count | Toggle | On | Display item count information |

## Use Cases

- **News feeds** -- Continuously load articles as user scrolls
- **Product listings** -- Load more products without pagination
- **Social feeds** -- Display posts with infinite loading
- **Search results** -- Progressive loading of matched items
