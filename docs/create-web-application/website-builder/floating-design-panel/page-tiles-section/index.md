# Page Tiles Section

The **Page Tiles Section** in the Floating Design Panel provides a quick overview and management interface for all tiles placed on the current page. This section helps you navigate, select, and organize tile instances.

---

## Overview

The Page Tiles Section enables you to:

- **View all tiles** on the current page at a glance
- **Select tiles** directly from the panel
- **Identify tile types** (templates vs. instances)
- **Navigate** to specific tiles quickly

---

## Accessing the Page Tiles Section

1. Select a page or any element on the page
2. Open the **Floating Design Panel**
3. Click the **Page Tiles** tab in the top menu

---

## Page Tiles Panel Layout

```
┌─────────────────────────────────────────────────────────────┐
│                      PAGE TILES                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 📋 Header Tile                              [Select] │   │
│  │    Type: Instance                                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 📋 Welcome Card                             [Select] │   │
│  │    Type: Instance                                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 📋 Survey Form                              [Select] │   │
│  │    Type: Instance                                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Tile List Display

Each tile in the list shows:

| Property | Description |
|----------|-------------|
| **Tile Name** | The display name of the tile |
| **Tile Type** | Whether it's a Template or Instance |
| **Icon** | Visual indicator of the tile |
| **Select Button** | Click to select this tile |

---

## Working with the Tile List

### Selecting a Tile

1. Find the tile in the Page Tiles list
2. Click **Select** or click the tile row
3. The tile becomes selected in the canvas
4. The Floating Design Panel updates to show that tile's settings

### Identifying Tile Types

| Type | Description | Indicator |
|------|-------------|-----------|
| **Template** | Master tile that can create instances | Template icon |
| **Instance** | Copy of a template placed on page | Instance icon |

---

## Tile Operations

From the Page Tiles section, you can:

### View Tile Details

- See the tile name and type
- Identify which template an instance is based on
- View the tile's position in page order

### Navigate to Tile

- Click to jump to the tile on the canvas
- Useful for pages with many tiles
- Helpful when tiles overlap

### Access Tile Settings

- Selecting a tile opens its settings
- Access all tile-level configurations
- Edit elements within the tile

---

## Tile Order

Tiles are listed in their visual stacking order:

- First tile appears at the top of the list
- Last tile appears at the bottom
- Order affects visual layering on the page

---

## Empty Page State

When a page has no tiles:

```
┌─────────────────────────────────────────────────────────────┐
│                      PAGE TILES                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│              No tiles on this page yet.                      │
│                                                              │
│      Drag a tile template from the Tile Section              │
│              to add tiles to your page.                      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Relationship to Other Sections

### Tile Section (Left Panel)

- Contains available tile templates
- Drag templates from here to create instances
- Page Tiles shows what's already on the page

### Element Section

- Shows elements within the selected tile
- Select a tile first, then edit its elements
- Page Tiles helps you select the right tile

---

## Common Workflows

### Finding a Specific Tile

1. Open Page Tiles section
2. Scan the list for your tile name
3. Click to select it
4. Tile is highlighted on canvas

### Checking Page Structure

1. Open Page Tiles section
2. Review all tiles present
3. Verify correct tiles are included
4. Check tile order if needed

### Quick Tile Selection

1. Instead of clicking on overlapping tiles
2. Use Page Tiles list
3. Select the exact tile you need
4. Edit without confusion

---

## Best Practices

1. **Name tiles clearly** - Descriptive names make selection easier

2. **Review tile count** - Verify expected tiles are present

3. **Use for complex pages** - Especially helpful with many tiles

4. **Check before publishing** - Ensure all needed tiles are on page

---

## Troubleshooting

### Tile Not Appearing in List

- Verify the tile was added to the page
- Check if viewing the correct page
- Refresh the builder if needed

### Cannot Select Tile

- Ensure the tile is not locked
- Check if another tile is blocking it
- Use Page Tiles for precise selection

### Wrong Tile Properties Showing

- Confirm the correct tile is selected
- Check the tile name in the panel header
- Re-select from Page Tiles list

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Floating Design Panel - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/index
<span class="triangle"></span> Tile Section - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/index
<span class="triangle"></span> Tile Instances - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/tile-instances/index

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
