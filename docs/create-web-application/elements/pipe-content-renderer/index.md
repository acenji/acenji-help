# Pipe Content Renderer

The **Pipe Content Renderer** element parses delimiter-separated text into structured visual layouts -- tags, lists, tables, or inline text.

---

## Overview

Feed the element a pipe-delimited string and it splits it into sections and items, then renders them in your chosen display mode. Content can come from a static string or dynamically from another element.

---

## Adding a Pipe Content Renderer

1. Open the **Website Builder**
2. Find **Pipe Content Renderer** in the Elements panel (under Display)
3. Drag it onto your page
4. Enter your content and choose a display mode in the **General Tab**

---

## Properties

### General Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Content** | The raw delimiter-separated text | Empty |
| **Display Mode** | How items render: tags, list, table, or inline | `tags` |
| **Section Delimiter** | Character(s) that separate sections | `\|\|` |
| **Item Delimiter** | Character(s) that separate items within a section | `\|` |
| **Show Section Dividers** | Display a horizontal rule between sections | `true` |

### Tags Mode Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Tag Color** | Background color of tag pills | `#3498db` |
| **Tag Text Color** | Text color inside tags | `#ffffff` |

### Data Source

| Property | Description | Default |
|----------|-------------|---------|
| **Data Source** | Where content comes from: Static or From Element | `static` |
| **Source Element ID** | Element ID to pull content from (when From Element) | Empty |
| **Content Field** | Field name on the source element | `pipeContent` |

### Display Modes

| Mode | Description |
|------|-------------|
| **Tags / Pills** | Colored pill badges in a flex-wrap layout |
| **Bulleted List** | Standard unordered list |
| **Key-Value Table** | Splits items on `:` into label/value columns |
| **Inline** | Items joined with bullet dots in a single line |

### Content Format

Use `|` to separate items and `||` to separate sections:

```
Joint Lock|Wrist|Flexion||Requires: grip control|standing or ground
```

This produces two sections: one with three tags and one with two tags.

---

## Use Cases

- **Taxonomy display** -- render category/tag data from APIs
- **Structured metadata** -- show key-value pairs from pipe-delimited fields
- **Data previews** -- display parsed CSV or pipe-separated data
- **Dynamic content** -- bind to another element's output for live rendering

---

## Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
