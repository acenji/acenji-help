# Tile Section

The **Tile Section** in the Website Builder is where you manage tiles - the reusable content containers that hold your elements. Understanding the relationship between Tile Templates and Tile Instances is key to efficient application development.

---

## Overview

The Tile Section enables you to:

- **Create tile templates** as reusable design masters
- **Place tile instances** on pages
- **Manage tile content** including elements and layouts
- **Reuse designs** across multiple pages efficiently

---

## Understanding Tiles

### What is a Tile?

A **tile** is a container that holds elements (text, inputs, buttons, images, etc.). Tiles organize your page content into manageable, reusable sections.

### Templates vs. Instances

```
┌─────────────────────────────────────────────────────────────┐
│                    TILE RELATIONSHIP                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────────────┐                                      │
│   │  TILE TEMPLATE   │   ← Master/Source design             │
│   │    (Master)      │                                      │
│   │                  │                                      │
│   │  • Define once   │                                      │
│   │  • Reuse many    │                                      │
│   └────────┬─────────┘                                      │
│            │                                                 │
│            │ Creates                                         │
│            ▼                                                 │
│   ┌────────┬────────┬────────┐                              │
│   │Instance│Instance│Instance│  ← Copies on pages           │
│   │   A    │   B    │   C    │                              │
│   │        │        │        │                              │
│   │ Page 1 │ Page 1 │ Page 2 │                              │
│   └────────┴────────┴────────┘                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Tile Section Layout

The Tile Section in the left panel shows:

```
┌─────────────────────────────────────────────────────────────┐
│                      TILE SECTION                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [+ New Tile Template]                                       │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 📋 Header Card                                       │   │
│  │    Type: Template                                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 📋 Survey Form                                       │   │
│  │    Type: Template                                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 📋 Contact Card                                      │   │
│  │    Type: Template                                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Key Concepts

### Tile Template

The **master version** of a tile:

| Aspect | Description |
|--------|-------------|
| **Purpose** | Define reusable tile designs |
| **Location** | Stored in Tile Section library |
| **Editing** | Changes can propagate to instances |
| **Elements** | Contains elements in their default state |

### Tile Instance

A **copy** of a template placed on a page:

| Aspect | Description |
|--------|-------------|
| **Purpose** | Display tile content on a page |
| **Location** | Placed on specific pages |
| **Editing** | Can override template settings |
| **Data** | Can have instance-specific data |

---

## Working with Tiles

### Creating a Tile Template

1. Click **"+ New Tile Template"** in the Tile Section
2. Give the template a descriptive name
3. Add elements to design the tile
4. Save the template

### Placing a Tile Instance

1. Select a page where you want the tile
2. Drag a template from the Tile Section
3. Drop it onto the page canvas
4. An instance is created

### Editing Tiles

| Want to... | Do this... |
|------------|------------|
| Change all instances | Edit the template |
| Change one instance | Edit that specific instance |
| Add an element everywhere | Add to template |
| Add element to one tile | Add to specific instance |

---

## Tile Properties

### Template Properties

| Property | Description |
|----------|-------------|
| **Name** | Template display name |
| **Description** | Optional description |
| **Default Size** | Initial dimensions |
| **Background** | Default background style |
| **Padding** | Internal spacing |

### Instance Properties

| Property | Description |
|----------|-------------|
| **Position** | Location on the page |
| **Size** | Instance-specific dimensions |
| **Overrides** | Changes from template defaults |
| **Data Bindings** | Instance-specific data connections |

---

## Sub-sections

### Tile Templates

Learn how to create and manage tile templates - the master designs that can be reused.

[Learn about Tile Templates](./tile-templates/index)

### Tile Instances

Understand how to work with tile instances - the copies placed on your pages.

[Learn about Tile Instances](./tile-instances/index)

---

## Common Workflows

### Creating a Reusable Form

1. Create a new tile template
2. Add form elements (inputs, buttons)
3. Style the template
4. Drag instances to any page that needs the form

### Building a Header/Footer

1. Create header tile template
2. Add navigation elements
3. Place instance on each page
4. Update template to change all pages

### Creating a Card Layout

1. Design a card tile template
2. Add image, title, description elements
3. Place multiple instances on a page
4. Bind each instance to different data

---

## Best Practices

1. **Plan your tiles** - Identify reusable patterns before building

2. **Name clearly** - Use descriptive template names

3. **Use templates for repeated content** - Header, footer, cards

4. **Keep templates focused** - One purpose per template

5. **Consider data binding** - Design for dynamic content

6. **Document your tiles** - Keep notes on tile purposes

---

## Troubleshooting

### Instance Not Reflecting Template Changes

- Verify you edited the template, not the instance
- Check if instance has overrides
- Refresh the builder

### Cannot Add Element to Tile

- Ensure the tile is selected (not an element inside it)
- Check tile isn't locked
- Verify you're in edit mode

### Tile Not Appearing on Page

- Confirm the instance was placed successfully
- Check page-level conditions
- Verify tile visibility settings

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Website Builder - https://help.acenji.com/#/./create-web-application/website-builder/index
<span class="triangle"></span> Page Section - https://help.acenji.com/#/./create-web-application/website-builder/page-section/index
<span class="triangle"></span> Elements - https://help.acenji.com/#/./create-web-application/elements/index

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
