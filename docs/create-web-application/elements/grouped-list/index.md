# Grouped List

The **Grouped List** element displays items organized into labeled groups with section headers. It supports sections, cards, and alphabetical sidebar layouts.

## Modes

### Sections Mode
The default grouped layout:
- Section headers with accent-colored label and item count
- Items listed with circular avatar showing first initial
- Name and subtitle for each item
- Bottom border separator between sections

### Cards Mode
A grid-based card layout per group:
- Group header with colored badge and item count
- Items displayed as 2-column grid of bordered cards
- Each card shows name and subtitle
- Optional search bar at the top

### Alphabetical Mode
An iOS-style contact list with sidebar:
- Alphabet letter sidebar on the left for quick navigation
- Active letter highlighted in accent color
- Section headers with large colored letters
- Circular avatar initials next to each item

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for headers and avatars |
| Mode | Select | `sections` | `sections`, `cards`, or `alphabetical` |
| Show Count | Toggle | On | Display item count per group |
| Show Search | Toggle | Off | Show search input at the top |

## Use Cases

- **Contact lists** -- Organize people by letter or department
- **Team directories** -- Group members by team or role
- **Product catalogs** -- Categorize items by type
- **Settings pages** -- Group related options into sections
