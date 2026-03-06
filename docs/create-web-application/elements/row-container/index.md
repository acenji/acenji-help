# Row Container Element

The **Row Container** element provides a multi-column layout container that organizes elements in a responsive grid.

---

## Overview

Row Container is ideal for:
- Multi-column layouts
- Side-by-side element arrangement
- Responsive grid structures
- Dashboard-style layouts
- Form field grouping

---

## Adding a Row Container

1. Open the **Website Builder**
2. Find **Row Container** (or Container) in the Elements panel
3. Drag it onto your page
4. Configure columns in the configuration modal

---

## Configuration

When adding a Row Container, a modal appears:

| Setting | Description |
|---------|-------------|
| **Number of Columns** | How many columns (1-12) |
| **Column Sizes** | Width of each column |

---

## Column Configuration

### Setting Column Count

Use the slider to select 1-12 columns:
- **1 column** - Full width
- **2 columns** - Half and half
- **3 columns** - Thirds
- **4 columns** - Quarters
- **Up to 12** - Fine-grained control

### Adjusting Column Widths

Each column can have a custom width:
1. Click on a column in the preview
2. Adjust its width using the slider
3. Widths are proportional (normalize to 100%)

---

## Visual Display

Row Container is invisible at runtime - it just organizes child elements:

```
2 equal columns:
┌─────────────┬─────────────┐
│  Column 1   │  Column 2   │
│  (elements) │  (elements) │
└─────────────┴─────────────┘

3 columns (1 wide, 2 narrow):
┌───────────────────┬──────┬──────┐
│    Column 1       │ Col2 │ Col3 │
│    (wide)         │      │      │
└───────────────────┴──────┴──────┘
```

---

## Element Type

Row Container is categorized as a **Container** element, distinct from regular input/display elements.

---

## Use Cases

### Two-Column Form
```
Columns: 2 equal
Left: First Name, Email
Right: Last Name, Phone
```

### Sidebar Layout
```
Columns: 2 (3:1 ratio)
Left (wide): Main content
Right (narrow): Sidebar
```

### Three-Column Dashboard
```
Columns: 3 equal
Each: Different stat/widget
```

### Header Layout
```
Columns: 3 (1:2:1 ratio)
Left: Logo
Center: Navigation
Right: User info
```

### Form Field Groups
```
Columns: 3 equal
Each: Related form field
```

---

## Responsive Behavior

Row Containers help create responsive layouts:
- Columns maintain proportional widths
- Content adapts to available space
- Consider mobile display when designing

---

## Best Practices

1. **Plan your layout** - Sketch column arrangement first

2. **Use consistent spacing** - Keep gaps uniform

3. **Consider mobile** - Test how columns stack on small screens

4. **Don't over-nest** - Deep nesting can be confusing

5. **Match content** - Column widths should suit content type

6. **Test responsiveness** - Verify layout works at all sizes

---

## Column Width Examples

| Layout | Column Widths |
|--------|---------------|
| Equal halves | 50% / 50% |
| Two-thirds / third | 66% / 33% |
| Equal thirds | 33% / 33% / 33% |
| Sidebar left | 25% / 75% |
| Sidebar right | 75% / 25% |
| Equal quarters | 25% / 25% / 25% / 25% |

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Position Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/position-tab/index

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
