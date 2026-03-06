# Tree Navigation Element

The **Tree Navigation** element displays a hierarchical tree structure that users can expand, collapse, and navigate through. It supports static nodes defined in the builder, dynamic data from an API, or data sourced from another element on the page.

<p style="margin-top:50px;"></p>

## Overview

Tree Navigation is ideal for:
- Category browsing (e.g., product categories, file directories)
- Multi-level menus and navigation
- Organizational hierarchies
- Taxonomy exploration (e.g., encyclopedia topics)

<p style="margin-top:50px;"></p>

## Adding a Tree Navigation Element

1. Open the **Website Builder**
2. Find **Tree Navigation** in the Elements panel under **Navigation**
3. Drag it onto your page
4. Configure nodes and settings in the **General Tab**

---

## Data Source

Tree Navigation supports three data source modes:

### Static
Define tree nodes manually in the builder. This is the default mode and is ideal for navigation menus and small, fixed hierarchies.

### API
Fetch tree data from an external API at runtime. Configure the URL, HTTP method, and map response fields to the tree structure. Ideal for large or dynamic datasets.

### Element
Read data from another element on the same page (e.g., a CRUD Grid). The element's data is transformed into a tree using field mapping. Ideal for displaying data already loaded elsewhere on the page.

---

## Properties

### General Tab — Data Source

| Property | Description |
|----------|-------------|
| **Data Source Type** | `Static`, `API`, or `Element` |

#### API Settings (when type = API)

| Property | Description |
|----------|-------------|
| **URL** | The API endpoint to fetch data from |
| **Method** | HTTP method: `GET` or `POST` |
| **Response Path** | Dot-path to the array in the JSON response (e.g., `data.items`) |

#### Element Settings (when type = Element)

| Property | Description |
|----------|-------------|
| **Source Element** | Select another element on the current page to read data from |

#### Field Mapping (API and Element modes)

| Property | Description |
|----------|-------------|
| **Format** | `Flat` (with parent ID) or `Nested` (with children array) |
| **ID Field** | Field name for the unique identifier |
| **Label Field** | Field name for the display text |
| **Parent ID Field** | Field name for the parent reference (flat format only) |
| **Children Field** | Field name for the children array (nested format only) |
| **Icon Field** | Optional field name for the icon class |

### General Tab — Tree Nodes (Static mode only)

When using static data, you build the tree manually:

| Action | Description |
|--------|-------------|
| **+ Root** | Add a new root-level node |
| **+ Child** | Add a child to the selected node |
| **Remove** | Delete the selected node and its children |
| **Indent** | Make the selected node a child of its previous sibling |
| **Outdent** | Move the selected node up one level |
| **Move Up / Down** | Reorder nodes within their level |

### Node Properties (Static mode)

Each node can be configured with:
- **Label** - Display text
- **Icon** - MDI icon class (e.g., `mdi mdi-folder`)
- **Click Action** - What happens when clicked:
  - **Expand / Collapse** - Toggle child visibility
  - **Navigate to Page** - Go to another page in the application
  - **Open URL** - Open an external link (same tab or new tab)

### General Tab — Tree Settings

| Setting | Description |
|---------|-------------|
| **Expand Mode** | `Multi` (expand many branches) or `Single` (accordion — one branch at a time) |
| **Show Search** | Display a search input to filter nodes by label |
| **Show Icons** | Display icons next to node labels |
| **Max Depth** | Limit tree depth (0 = unlimited) |
| **Indent Size** | Horizontal indentation per level in pixels |

### Color Tab

| Property | Description |
|----------|-------------|
| **Panel Background** | Container background |
| **Text Color** | Node label color |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Padding** | Inner spacing |
| **Border Radius** | Corner rounding |
| **Font Size** | Node text size |

---

## Data Formats

### Flat Format

Flat data uses a `parentId` field to define the hierarchy. Items with no parent (or `null` parent) become root nodes.

```json
[
  { "id": 1, "name": "Sports",    "parent_id": null },
  { "id": 2, "name": "Football",  "parent_id": 1 },
  { "id": 3, "name": "Basketball","parent_id": 1 },
  { "id": 4, "name": "NBA",       "parent_id": 3 }
]
```

**Field mapping:** ID = `id`, Label = `name`, Parent ID = `parent_id`

### Nested Format

Nested data uses a `children` array to define the hierarchy.

```json
[
  {
    "id": 1,
    "name": "Sports",
    "children": [
      { "id": 2, "name": "Football", "children": [] },
      {
        "id": 3,
        "name": "Basketball",
        "children": [
          { "id": 4, "name": "NBA", "children": [] }
        ]
      }
    ]
  }
]
```

**Field mapping:** ID = `id`, Label = `name`, Children = `children`

---

## Response Path

When fetching from an API, the **Response Path** tells the element where to find the data array in the JSON response.

| JSON Structure | Response Path |
|----------------|---------------|
| `[...]` (array at root) | *(leave empty)* |
| `{ "data": [...] }` | `data` |
| `{ "results": { "items": [...] } }` | `results.items` |

---

## Use Cases

### Category Navigation
```
Data Source: Static
Nodes: Electronics > Phones, Laptops, Tablets
       Clothing > Men, Women, Kids
Expand Mode: Multi
Show Icons: Yes
```

### API-Driven Taxonomy
```
Data Source: API
URL: https://api.example.com/categories
Response Path: data.categories
Format: Flat
ID Field: id
Label Field: name
Parent ID Field: parent_id
```

### File Browser
```
Data Source: Static
Nodes: Documents > Reports, Invoices
       Images > Photos, Screenshots
Expand Mode: Single (accordion)
Show Search: Yes
Show Icons: Yes
```

---

## Best Practices

1. **Use accordion mode for deep trees** - Single expand mode keeps the tree compact and prevents users from getting lost

2. **Enable search for large trees** - When there are many nodes, search helps users find items quickly

3. **Use meaningful icons** - Icons help users visually distinguish between different types of nodes

4. **Keep labels concise** - Long labels get truncated, so keep them short and descriptive

5. **Choose the right data format** - Use flat format when your data comes from a database (parent ID references are natural). Use nested format when your API already returns hierarchical JSON

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> CRUD Grid Element - https://help.acenji.com/#/./create-web-application/elements/crud-grid/index
<span class="triangle"></span> Dropdown Element - https://help.acenji.com/#/./create-web-application/elements/dropdown/index

<style>
.triangle {
display: inline-block;
width: 0;
height: 0;
border-style: solid;
border-width: 5px 0 5px 5px;
border-color: transparent transparent transparent #595959;
margin-left: 10px;
}
</style>
<p style="margin-top:30px;"></p>


# Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczNju0lskuQsjUjVs5YTRWKVczJlFIEVyjhgxDkvrN655N6w/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
