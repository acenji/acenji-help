# Page Layout

The **Page Layout** settings control how content is arranged and displayed on your pages. This includes overall structure, responsive behavior, and visual presentation.

---

## Overview

Page Layout enables you to:

- **Configure page structure** including headers and footers
- **Set responsive breakpoints** for different screen sizes
- **Control page dimensions** and spacing
- **Apply page-level styles** like backgrounds and colors

---

## Accessing Layout Settings

1. Select a page in the Page Section
2. Open the **Floating Design Panel**
3. Navigate to layout or page settings
4. Modify layout properties

---

## Layout Structure

A typical page layout consists of:

```
┌─────────────────────────────────────────────────────────────┐
│                        HEADER                                │
│                  (Navigation, Logo, etc.)                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                                                              │
│                     MAIN CONTENT                             │
│                                                              │
│               (Tiles, Elements, Forms)                       │
│                                                              │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                        FOOTER                                │
│                 (Links, Copyright, etc.)                     │
└─────────────────────────────────────────────────────────────┘
```

---

## Layout Properties

### Page Dimensions

| Property | Description | Default |
|----------|-------------|---------|
| **Width** | Maximum page width | 100% or fixed |
| **Min Height** | Minimum page height | 100vh |
| **Padding** | Space inside page edges | Configurable |
| **Margin** | Space outside page edges | Auto (centered) |

### Content Alignment

| Option | Description |
|--------|-------------|
| **Left** | Content aligns to left edge |
| **Center** | Content centers horizontally |
| **Right** | Content aligns to right edge |
| **Full Width** | Content spans entire width |

---

## Responsive Design

### Breakpoints

Configure how pages adapt to different screen sizes:

| Breakpoint | Width | Typical Device |
|------------|-------|----------------|
| **Desktop Large** | > 1440px | Large monitors |
| **Desktop** | 1024px - 1440px | Standard monitors |
| **Tablet** | 768px - 1023px | Tablets, small laptops |
| **Mobile** | < 768px | Smartphones |

### Responsive Settings

For each breakpoint, configure:

- Column layouts
- Element visibility
- Font sizes
- Spacing adjustments

---

## Page Background

### Background Options

| Option | Description |
|--------|-------------|
| **Solid Color** | Single background color |
| **Gradient** | Color transition effect |
| **Image** | Background image |
| **Pattern** | Repeating pattern |

### Background Properties

| Property | Description |
|----------|-------------|
| **Color** | Background color value |
| **Image URL** | Path to background image |
| **Size** | Cover, contain, or custom |
| **Position** | Center, top, bottom, etc. |
| **Repeat** | No-repeat, repeat, repeat-x/y |
| **Attachment** | Fixed or scroll |

---

## Content Container

### Container Width

Control the maximum width of content:

| Option | Description |
|--------|-------------|
| **Full Width** | Content spans 100% |
| **Boxed** | Content has max-width |
| **Custom** | Set specific pixel width |

### Common Widths

| Name | Width | Use Case |
|------|-------|----------|
| **Narrow** | 800px | Blog, reading content |
| **Standard** | 1200px | General purpose |
| **Wide** | 1400px | Dashboards, data-heavy |
| **Full** | 100% | Full-bleed designs |

---

## Scroll Behavior

### Page Scrolling

| Option | Description |
|--------|-------------|
| **Normal** | Standard scroll behavior |
| **Smooth** | Smooth scroll animations |
| **Fixed Sections** | Snap to sections |

### Overflow Handling

| Setting | Behavior |
|---------|----------|
| **Auto** | Show scrollbar when needed |
| **Hidden** | Clip content, no scroll |
| **Scroll** | Always show scrollbar |

---

## Grid System

### Grid Configuration

Organize content using a grid:

| Property | Description |
|----------|-------------|
| **Columns** | Number of grid columns (12 default) |
| **Gap** | Space between grid items |
| **Row Height** | Height of grid rows |

### Grid Usage

```
┌────────────────────────────────────────────────────────────┐
│ Col 1    │ Col 2    │ Col 3    │ Col 4    │ Col 5    │ ... │
├──────────┼──────────┼──────────┼──────────┼──────────┼─────┤
│          │          │          │          │          │     │
│  Tile    │  Tile    │  Tile    │  Tile    │          │     │
│ (span 3) │ (span 3) │ (span 3) │ (span 3) │          │     │
│          │          │          │          │          │     │
└──────────┴──────────┴──────────┴──────────┴──────────┴─────┘
```

---

## Header Layout

### Header Options

| Option | Description |
|--------|-------------|
| **No Header** | Page has no header |
| **Fixed Header** | Header stays at top on scroll |
| **Sticky Header** | Header becomes fixed on scroll |
| **Normal Header** | Header scrolls with page |

### Header Properties

| Property | Description |
|----------|-------------|
| **Height** | Header height in pixels |
| **Background** | Header background color/image |
| **Shadow** | Drop shadow effect |
| **Z-Index** | Layering priority |

---

## Footer Layout

### Footer Options

| Option | Description |
|--------|-------------|
| **No Footer** | Page has no footer |
| **Standard Footer** | Footer at page bottom |
| **Sticky Footer** | Footer always visible at bottom |

### Footer Properties

| Property | Description |
|----------|-------------|
| **Height** | Footer height |
| **Background** | Footer background |
| **Padding** | Internal spacing |

---

## Common Layout Patterns

### Landing Page

```
- Full-width header with navigation
- Hero section (large background, centered text)
- Feature sections (alternating layouts)
- CTA sections
- Footer with links
```

### Dashboard

```
- Fixed sidebar navigation
- Top bar with user info
- Main content area with tiles
- Minimal/no footer
```

### Form Page

```
- Simple header
- Centered narrow content container
- Form tile with fields
- Simple footer
```

### Blog/Article

```
- Standard header
- Narrow content width (800-900px)
- Reading-optimized typography
- Related content sidebar optional
- Footer with navigation
```

---

## Best Practices

1. **Design mobile-first** - Start with mobile layout, expand for larger screens

2. **Use consistent spacing** - Apply uniform padding and margins

3. **Limit content width** - Narrow columns improve readability

4. **Test all breakpoints** - Verify layout at each screen size

5. **Consider fixed headers** - Keep navigation accessible on long pages

6. **Optimize images** - Use appropriate sizes for backgrounds

---

## Troubleshooting

### Content Overflowing

- Check element widths aren't exceeding container
- Verify responsive settings for smaller screens
- Use overflow: hidden if needed

### Layout Breaking on Mobile

- Review breakpoint settings
- Test with actual device sizes
- Adjust column spans for mobile

### Fixed Header Covering Content

- Add top padding to main content equal to header height
- Use margin-top on first content element
- Verify z-index settings

### Background Image Not Showing

- Confirm image URL is correct
- Check image file exists and is accessible
- Verify size and position settings

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Page Section - https://help.acenji.com/#/./create-web-application/website-builder/page-section/index
<span class="triangle"></span> Managing Pages - https://help.acenji.com/#/./create-web-application/website-builder/page-section/managing-pages/index
<span class="triangle"></span> Tile Section - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/index

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
