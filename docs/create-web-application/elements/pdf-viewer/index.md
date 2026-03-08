# PDF Viewer

The **PDF Viewer** element displays PDF documents with a full-featured viewer including page navigation, zoom controls, sidebar thumbnails, download, and print options. It supports three display modes for different use cases, from a complete document viewer to a simple page thumbnail grid.

## Modes

### Viewer Mode
The default mode provides a complete PDF viewing experience:
- **Toolbar** with page navigation (previous/next), current page indicator (e.g., "1 / 12"), and zoom controls (+/-)
- **Sidebar** with page thumbnails for quick navigation (optional)
- **Search** button for in-document search (optional)
- **Download** and **Print** buttons in the toolbar
- **Document area** showing the current page with shadow and centered layout

### Thumbnail Mode
A page grid for quick visual browsing:
- **Grid layout** showing 6 page thumbnails in a 3-column grid
- Each thumbnail shows placeholder text lines representing page content
- **Page numbers** displayed at the bottom of each thumbnail
- **Active page** highlighted with accent color border
- Suitable for document overview or page selection interfaces

### Minimal Mode
A clean document display with no controls:
- Large document icon at the top
- Text line placeholders representing document content
- No toolbar, no navigation, no buttons
- Ideal for simple document embedding or read-only contexts

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for active page borders and highlights |
| Mode | Select | `viewer` | `viewer`, `thumbnail`, or `minimal` |
| Show Toolbar | Toggle | On | Display the top toolbar with controls |
| Show Sidebar | Toggle | Off | Show page thumbnail sidebar alongside document |
| Show Download | Toggle | On | Display download button in toolbar |
| Show Print | Toggle | On | Display print button in toolbar |
| Show Search | Toggle | Off | Display search button in toolbar |

## Use Cases

- **Document review** -- Viewer mode with sidebar for multi-page document review
- **Report viewing** -- Viewer mode for viewing generated reports and analytics
- **Manual access** -- Minimal mode for embedding instruction manuals
- **Page selection** -- Thumbnail mode for selecting specific pages from a document
- **Print preview** -- Viewer mode with print enabled for document preparation
