# Social Feed

The **Social Feed** element displays social media posts in a feed layout. It supports card-based feeds, single post embeds, and Instagram-style media grids, with platform-specific styling for X/Twitter, Instagram, Facebook, and LinkedIn.

## Modes

### Card Mode
The default mode shows a vertical feed of social posts:
- Each post in a bordered card with avatar, username, handle, and timestamp
- Post text content with engagement metrics (likes, retweets, comments)
- Platform icon in the header with brand color
- First post highlighted with subtle background

### Embed Mode
A single social post in an embedded card:
- Full post layout with avatar, name, handle, and platform icon
- Post text content
- Image placeholder area
- Engagement metrics row
- Timestamp footer with subtle background
- Styled like native platform embeds

### Grid Mode
An Instagram-style media grid:
- Header with "Social Feed" title and "View All" link
- 3x3 grid of square media thumbnails
- Mixed media icons (photo, camera, video)
- Platform-colored "View All" link

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Highlight color |
| Mode | Select | `card` | `card`, `embed`, or `grid` |
| Platform | Select | `twitter` | Platform styling: `twitter`, `instagram`, `facebook`, or `linkedin` |

## Use Cases

- **Company pages** -- Card mode showing latest social posts
- **Press pages** -- Embed mode for featured tweets or posts
- **Portfolio** -- Grid mode for Instagram-style photo galleries
- **Social proof** -- Card mode with engagement metrics
