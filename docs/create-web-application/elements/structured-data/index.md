# Structured Data

The **Structured Data** element configures JSON-LD structured data for Google rich snippets. It shows how your schema markup appears in search results.

## Modes

### Visual Mode
The default rich snippet preview:
- **Product**: Star rating, review count, price, and stock status
- **FAQ**: Expandable question list with dropdown arrows
- **Article**: Breadcrumb trail, headline, author, and date
- Realistic Google search result styling

### Code Mode
A syntax-highlighted JSON-LD code view:
- Dark code editor with line numbers
- Color-coded JSON syntax (keys in yellow, @-properties in blue)
- "Valid" badge indicating schema validation status
- Full JSON-LD structure for the selected schema type

### Card Mode
A compact schema summary:
- Schema type icon with colored background
- Type name and key properties on one line
- Green checkmark with "Valid" validation indicator
- Suitable for schema overview dashboards

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for card highlights |
| Mode | Select | `visual` | `visual`, `code`, or `card` |
| Schema Type | Select | `Product` | `Product`, `FAQ`, or `Article` |

## Use Cases

- **SEO rich snippets** -- Configure Product, FAQ, or Article schemas
- **Developer tools** -- Preview and validate JSON-LD markup
- **E-commerce** -- Set up product rich results with ratings and pricing
- **Knowledge base** -- Generate FAQ schema for search visibility
