# Share Buttons

The **Share Buttons** element displays social sharing buttons for Facebook, X/Twitter, LinkedIn, WhatsApp, and email. It supports three display modes from circular icon buttons to full-width branded buttons, with optional share counts and a copy-link option.

## Modes

### Icons Mode
The default mode shows circular platform-colored buttons:
- Each platform displayed as a circular icon with brand color and shadow
- Optional share counts below each icon
- Configurable size (small, medium, large)
- Optional "Share this" label above the buttons
- Copy Link button at the end

### Buttons Mode
Full-width branded buttons with platform labels:
- Each platform as a full-width button with brand color background
- Platform icon, "Share on [Platform]" label, and optional share count
- Copy Link button with neutral styling at the bottom
- Stacked vertical layout

### Minimal Mode
A compact inline row for embedding in headers or footers:
- Small circular icons in a single row
- "Share:" label prefix
- No counts, no titles -- just icons
- Minimal vertical space

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Mode | Select | `icons` | `icons`, `buttons`, or `minimal` |
| Size | Select | `md` | Icon size: `sm`, `md`, or `lg` (icons mode) |
| Show Label | Toggle | On | Display "Share this" heading |
| Show Counts | Toggle | Off | Display share count per platform |
| Copy Link | Toggle | On | Show copy-link button |
| Facebook | Toggle | On | Show Facebook share button |
| X / Twitter | Toggle | On | Show X/Twitter share button |
| LinkedIn | Toggle | On | Show LinkedIn share button |
| WhatsApp | Toggle | On | Show WhatsApp share button |
| Email | Toggle | On | Show email share button |

## Use Cases

- **Blog posts** -- Icons mode below article content
- **Product pages** -- Buttons mode with share counts for social proof
- **Mobile headers** -- Minimal mode in a compact toolbar
- **Landing pages** -- Icons mode with large size for prominent sharing
