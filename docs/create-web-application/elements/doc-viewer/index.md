# Doc Viewer

The **Doc Viewer** element displays office documents (Word, Excel, PowerPoint, text, CSV) with file type detection, preview rendering, and download options. It supports three modes ranging from a full document preview to a compact inline file reference.

## Modes

### Preview Mode
The default mode shows a document preview with toolbar:
- **Toolbar** displaying the file type icon, file name, format label, and file size
- **Download** button in the toolbar
- **Document area** with a white page showing colored heading bar (color matches file type) and text line placeholders
- Supports docx, xlsx, pptx, txt, and csv file types with unique icons and colors

### Card Mode
A list view for browsing multiple documents:
- **Documents header** at the top
- Each document shown as a card row with:
  - File type icon in a colored background circle
  - File name (with text overflow handling)
  - File size and date
  - Download button
- First document highlighted with accent color tint
- Ideal for document libraries and file listings

### Inline Mode
A compact single-file reference:
- Horizontal layout with file type icon, name, format label, and size
- **Open** button (accent colored) and **Download** button side by side
- Minimal vertical space -- fits in a single row
- Good for embedding file references within other content

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for buttons and highlights |
| Mode | Select | `preview` | `preview`, `card`, or `inline` |
| File Type | Select | `docx` | Default file type: `docx`, `xlsx`, `pptx`, `txt`, or `csv` |
| Show Toolbar | Toggle | On | Display toolbar in preview mode |
| Show Download | Toggle | On | Show download button |

## Use Cases

- **Document management** -- Card mode for browsing a document library
- **File sharing** -- Inline mode for embedding downloadable file references
- **Office previews** -- Preview mode for viewing Word, Excel, or PowerPoint files
- **Content libraries** -- Card mode for organizing categorized documents
