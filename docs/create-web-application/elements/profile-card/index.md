# Profile Card

The **Profile Card** element displays a user profile with avatar, name, bio, stats, social links, and action buttons. It supports three layouts: centered card, compact inline, and banner with cover image — covering everything from sidebar widgets to full profile headers.

## Modes

### Card Mode
The default centered card layout:
- Large circular avatar with online/offline status indicator
- Name with optional verified badge
- Role/title
- Bio text
- Stats row with 3 configurable metrics (e.g., Posts, Followers, Following)
- Social link icons
- Follow + Message action buttons

### Compact Mode
A horizontal inline layout for lists, comments, or sidebars:
- Small avatar with status dot
- Name + role on the right
- Single Follow button
- No stats, bio, or social links

### Banner Mode
A full-width profile header (like LinkedIn/Twitter):
- Cover image with gradient overlay
- Avatar overlapping the cover edge
- Name, role, and location
- Bio text
- Stats row
- Social links + action buttons

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for avatar background, buttons, and verified badge |
| Mode | Select | `card` | `card`, `compact`, or `banner` |
| Stat 1 Label | Text | `Posts` | Label for the first stat |
| Stat 2 Label | Text | `Followers` | Label for the second stat |
| Stat 3 Label | Text | `Following` | Label for the third stat |
| Show Stats | Toggle | On | Display the stats row |
| Show Bio | Toggle | On | Display bio/description text |
| Show Social Links | Toggle | On | Display social media icons |
| Show Action Buttons | Toggle | On | Display Follow/Message buttons |
| Show Online Status | Toggle | On | Display the green status dot on avatar |
| Verified Badge | Toggle | Off | Show a blue checkmark next to the name |

## Use Cases

- **User profiles** — Card mode on a profile page
- **Comment headers** — Compact mode above each comment
- **Team pages** — Card mode in a grid layout
- **Social feeds** — Compact mode for post authors
- **Profile headers** — Banner mode at the top of a user page
- **Member directories** — Compact mode in a list with Follow buttons
