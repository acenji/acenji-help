# Markdown Renderer

The **Markdown Renderer** element converts raw Markdown text into formatted HTML. Use it to display documentation, instructions, or any structured content authored in Markdown syntax.

---

## Adding a Markdown Renderer

1. Open the **Website Builder** and select a page
2. Find **Markdown** in the **Display** category of the Elements Panel
3. Drag it onto your page
4. Configure settings in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Markdown Content** | Raw Markdown text to render (monospace textarea) |
| **Data Source** | `Static` (uses content field) or `From Element` (loads from connected element) |
| **Tables** | Enable Markdown table rendering |
| **Strikethrough** | Enable ~~strikethrough~~ syntax |
| **Task Lists** | Enable `- [ ]` / `- [x]` checkbox lists |
| **Auto-link URLs** | Automatically convert URLs to clickable links |

### Data Source (From Element)

When using data binding, map fields from a connected element:

| Field | Description |
|-------|-------------|
| **Source Element ID** | ID of the element providing content |
| **Content Field** | Field name containing the Markdown string |

### Color Tab

Customize the container background and border colors.

### Dimensions Tab

Adjust padding, margin, border radius, and size.

---

## Supported Markdown Syntax

| Syntax | Description |
|--------|-------------|
| `# Heading` | Headings (h1-h6) |
| `**bold**` | Bold text |
| `*italic*` | Italic text |
| `~~strikethrough~~` | Strikethrough text |
| `[link](url)` | Hyperlinks |
| `![alt](url)` | Images |
| `` `code` `` | Inline code |
| ` ``` ` | Code blocks |
| `> quote` | Blockquotes |
| `- item` | Unordered lists |
| `1. item` | Ordered lists |
| `- [ ] task` | Task lists |
| `| col |` | Tables |
| `---` | Horizontal rules |

---

## Use Cases

- **Documentation**: Display formatted instructions or guides
- **Release Notes**: Show changelogs with headings, lists, and links
- **Knowledge Base**: Render structured content from a data source
- **README Display**: Show project documentation within the app

---

<div style="display: flex; justify-content: space-between; margin-top: 40px;">
  <a href="../activity-feed/index">Previous: Activity Feed</a>
  <a href="../../elements/index">Back to Elements</a>
</div>
