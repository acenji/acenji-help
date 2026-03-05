# Badge

The **Badge** element displays colored inline tags or pills. Use it for categories, status indicators, labels, or any short text that benefits from visual distinction.

---

## Overview

Badges render as small colored labels displayed inline:

`[ Muay Thai ]` `[ Striking ]` `[ Advanced ]` `[ Competition ]`

Common uses:
- Category tags (e.g., technique styles)
- Status indicators (e.g., Active, Pending, Archived)
- Skill levels (e.g., Beginner, Intermediate, Advanced)
- Attributes or features

---

## Adding a Badge

1. Open the **Website Builder**
2. Find **Badge** in the Elements panel (under Display)
3. Drag it onto your page
4. Configure badge items in the **General Tab**

---

## Properties

### General Tab

#### Data Source

| Option | Description |
|--------|-------------|
| **Static** | Define badge items manually |
| **From Element** | Pull data from another element (e.g., JSON Data Source) |

#### Static Badge Items

Add badges directly:
- Click **Add Badge** to add a new item
- Enter the **Tag text** and pick a **Color** using the color picker
- Click the X button to remove an item

#### Element Data Source

When using "From Element":

| Property | Description |
|----------|-------------|
| **Source Element ID** | The ID of the source element |
| **Text Field** | Field name for badge text (e.g., `name`) |
| **Color Field** | Field name for badge color (e.g., `color`) |
| **Separator** | Character to split string values into multiple badges (default: `\|`) |

**String splitting**: If the source value is a string like `"Muay Thai|Striking|Advanced"`, it is automatically split by the separator into individual badges.

#### Appearance Settings

| Property | Options | Default |
|----------|---------|---------|
| **Size** | Small, Medium, Large | Medium |
| **Shape** | Rounded (6px), Pill (50px), Square (0px) | Rounded |
| **Layout** | Inline (single row), Wrap (flows to next line) | Inline |

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

### Category Tags
Display technique or content categories with distinct colors.

### Status Indicators
Show item status with color-coded badges (green for active, red for archived, etc.).

### Skill Levels
Display difficulty or proficiency levels.

### Feature Labels
Highlight product features or attributes.

---

## Best Practices

1. **Use distinct colors** - Make each badge visually distinguishable

2. **Keep text short** - Badges work best with 1-3 words

3. **Use Wrap layout for many badges** - Prevents horizontal overflow

4. **Use Pill shape for tags** - The rounded pill shape is the most common tag/chip style

5. **Use consistent colors** - Assign the same color to the same category across your app

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
