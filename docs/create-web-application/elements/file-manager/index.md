# File Manager

The **File Manager** element provides a full file browsing interface with folder navigation, file listings, breadcrumb trails, search, and upload capabilities. It supports three layouts from a full explorer view to a compact file list.

## Modes

### Explorer Mode
The default mode provides a complete file management interface:
- **Header** with breadcrumb navigation (Home / Documents / Reports), search field, and upload button
- **Folders section** showing folder cards with icons, names, and item counts in a horizontal row
- **Files section** with a table layout:
  - Column headers: Name, Size, Date, and action menu
  - Each file row shows the file icon, name, size, date, and a three-dot menu
  - First folder highlighted with accent color tint
- Full-featured layout suitable for primary file management views

### Grid Mode
An icon-based grid layout:
- **Header** with title, search field, and upload button
- **4-column grid** displaying folders and files as icon cards
- Each card shows a large icon, name, and either item count (folders) or file size (files)
- Clean visual layout for browsing files by visual representation

### Compact Mode
A minimal file list:
- **Header** with "Files" title and upload button
- Simple vertical list with file icon, name, and size
- Divider lines between entries
- Smallest footprint -- suitable for sidebars or secondary panels

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for buttons and highlights |
| Mode | Select | `explorer` | `explorer`, `grid`, or `compact` |
| Show Breadcrumb | Toggle | On | Display breadcrumb navigation (explorer mode) |
| Show Upload | Toggle | On | Display upload button |
| Show Search | Toggle | On | Display search field |
| Show Grid | Toggle | Off | Toggle grid view within explorer mode |

## Use Cases

- **Cloud storage** -- Explorer mode for a Dropbox/Google Drive-style file browser
- **Project assets** -- Grid mode for browsing project images, documents, and media
- **Sidebar files** -- Compact mode for a quick file list in a side panel
- **Team documents** -- Explorer mode with upload for team file sharing
