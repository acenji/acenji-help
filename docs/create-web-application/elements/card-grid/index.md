# Card Grid

The **Card Grid** element displays content items as visual cards in a responsive grid layout. Use it for product catalogs, content browsing, technique galleries, or any scenario where items need to be displayed as image cards with navigation.

---

## Overview

Card Grid renders items as visual cards with images, titles, and subtitles arranged in a configurable grid:

```
[ Image 1    ]  [ Image 2    ]  [ Image 3    ]
[ Title 1    ]  [ Title 2    ]  [ Title 3    ]
[ Subtitle 1 ]  [ Subtitle 2 ]  [ Subtitle 3 ]
```

Common uses:
- Technique galleries (e.g., browse elbow strikes after navigating via TreeNav)
- Product catalogs with images and descriptions
- Content browsing pages (Netflix-style)
- Portfolio or gallery displays

---

## Adding a Card Grid

1. Open the **Website Builder**
2. Find **Card Grid** in the Elements panel (under Display)
3. Drag it onto your page
4. Configure cards in the **General Tab**

---

## Properties

### General Tab

#### Data Source

| Option | Description |
|--------|-------------|
| **Static** | Define card items manually |
| **From Element** | Pull data from another element (e.g., JSON Data Source) |

#### Static Card Items

Add cards directly:
- Click **Add Card** to add a new item
- Enter the **Image URL**, **Title**, **Subtitle**, and select a **Target Page**
- Click the X button to remove a card

#### Element Data Source

When using "From Element":

| Property | Description |
|----------|-------------|
| **Source Element ID** | The ID of the source element |
| **Image Field** | Field name for the card image URL (e.g., `image`) |
| **Title Field** | Field name for the card title (e.g., `title`) |
| **Subtitle Field** | Field name for the card subtitle (e.g., `subtitle`) |
| **Page ID Field** | Field name for the navigation target page (e.g., `pageId`) |

#### Layout Settings

| Property | Range | Default | Description |
|----------|-------|---------|-------------|
| **Columns** | 1-6 | 3 | Number of grid columns |
| **Gap** | 0-64px | 16px | Space between cards |
| **Image Height** | 40-400px | 160px | Height of card images |

#### Card Style

| Style | Description |
|-------|-------------|
| **Elevated** | Cards with drop shadow (default) |
| **Outlined** | Cards with border, no shadow |
| **Flat** | Minimal cards with subtle background |

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Background Color** | Container background | Transparent |
| **Border Color** | Container border | Transparent |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Width** | Element width |
| **Height** | Element height (auto by default) |
| **Padding** | Inner spacing |
| **Margin** | Outer spacing |
| **Border Radius** | Corner rounding |

---

## Use Cases

### Technique Gallery
After navigating via TreeNav to "Muay Thai > Elbows", display all elbow techniques as cards with images, names, and descriptions. Clicking a card navigates to the technique detail page.

### Product Catalog
Show products in a grid with product images, names, and prices. Each card links to the product detail page.

### Content Browse Page
Display articles, tutorials, or courses in a visual grid. Use the "From Element" data source with a JSON Data Source to populate cards dynamically.

### Portfolio Gallery
Show portfolio items with preview images and project titles in a clean grid layout.

---

## Best Practices

1. **Use consistent image sizes** - All card images should ideally have the same aspect ratio

2. **Keep titles concise** - 1-3 words works best for grid layouts

3. **Choose the right column count** - 2-3 columns for detailed cards, 4-6 for thumbnail grids

4. **Use Elevated style for rich content** - The shadow helps distinguish individual cards

5. **Connect to JSON Data Source** - For dynamic content, connect via "From Element" to avoid maintaining static lists

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index

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
