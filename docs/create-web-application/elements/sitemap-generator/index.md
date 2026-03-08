# Sitemap Generator

The **Sitemap Generator** element displays a visual site structure and sitemap configuration. It shows page hierarchy with priority and frequency settings.

## Modes

### Tree Mode
The default hierarchical tree view:
- Root page with accent-colored dot and bold label
- Child pages connected by vertical and horizontal lines
- Indentation showing parent-child relationships
- Optional priority values next to each page name
- Expandable multi-level nesting

### Table Mode
A spreadsheet-style sitemap listing:
- Column headers: URL, Priority, Frequency
- URLs displayed with indentation matching hierarchy depth
- Priority shown as colored progress bars (green/amber/red)
- Frequency as text labels (daily, weekly, monthly, yearly)
- Total page count footer

### Visual Mode
A card-based section overview:
- Pages grouped into sections (Main, Products, Blog)
- Each section card with colored header and page count badge
- Individual page names listed within each card
- Three-column responsive grid layout

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for root node and highlights |
| Mode | Select | `tree` | `tree`, `table`, or `visual` |
| Show Priority | Toggle | On | Display priority values/bars |

## Use Cases

- **SEO planning** -- Visualize and configure XML sitemap
- **Information architecture** -- Plan site structure before building
- **Site audits** -- Review page hierarchy and crawl priorities
- **Content strategy** -- Map content sections and page relationships
