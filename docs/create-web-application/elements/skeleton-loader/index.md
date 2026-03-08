# Skeleton Loader

The **Skeleton Loader** element displays animated placeholder shapes that mimic content layout while real data loads. It replaces traditional spinners with a more polished loading experience.

## Modes

### Card Mode
The default card-shaped placeholder:
- Large rectangular image placeholder at the top
- Avatar circle with two text lines below (author area)
- Multiple horizontal bars of varying width for body text
- Last bar shorter to simulate a paragraph ending

### List Mode
Repeating row-based placeholders:
- Optional circular avatar on the left
- Two text lines per row (title and subtitle widths)
- Small rectangle on the right (metadata placeholder)
- Rows separated by subtle borders

### Form Mode
Input field placeholders:
- Short label bar above each field
- Full-width tall rectangle for each input
- Two button placeholders at the bottom
- Simulates a loading form with submit/cancel

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Mode | Select | `card` | `card`, `list`, or `form` |
| Rows | Number | `3` | Number of placeholder rows (1-10) |
| Show Avatar | Toggle | On | Display circular avatar placeholder |
| Animated | Toggle | On | Enable shimmer gradient animation |

## Use Cases

- **Content loading** -- Show while fetching articles or posts
- **List loading** -- Placeholder while loading user/item lists
- **Form loading** -- Display while form schema loads from API
- **Dashboard widgets** -- Skeleton for cards loading async data
