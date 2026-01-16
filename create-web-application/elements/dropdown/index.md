# Dropdown Element

The **Dropdown** element provides a select dropdown with support for single or multiple selections.

---

## Overview

Dropdown is ideal for:
- Category selection
- Option filtering
- Form selections
- Any pick-from-list scenario

---

## Adding a Dropdown Element

1. Open the **Website Builder**
2. Find **Dropdown** in the Elements panel
3. Drag it onto your page
4. Configure options in the **General Tab**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | Label displayed above the dropdown |
| **Options** | Array of selectable choices |
| **Multiple** | Allow multiple selections |

### Options Configuration

Each option has:
- **Label** - Display text shown to users
- **Value** - Internal value stored when selected

### Color Tab

| Property | Description |
|----------|-------------|
| **Panel Background** | Container background |
| **Input Background** | Dropdown background |
| **Input Border** | Dropdown border |
| **Text Color** | Option text color |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Font Size** | Text size |
| **Padding** | Inner spacing |
| **Border Radius** | Corner rounding |

---

## Selection Modes

### Single Select
Users choose one option from the list:
```
[Select an option    ▼]
```

### Multiple Select
Users can select multiple options:
```
[✓ Option A, ✓ Option C  ▼]
```

Enable multiple selection in the General Tab.

---

## Database Integration

Dropdown values can be saved to the card database:
1. Open the **Connect Tab**
2. Enable database connection
3. Selected value(s) are stored

---

## Use Cases

### Category Selection
```
Label: "Category"
Options: Electronics, Clothing, Home, Sports
Multiple: false
```

### Country Selector
```
Label: "Country"
Options: USA, Canada, UK, Australia, ...
Multiple: false
```

### Skills Selection
```
Label: "Skills (select all that apply)"
Options: JavaScript, Python, SQL, React, ...
Multiple: true
```

### Status Filter
```
Label: "Status"
Options: Active, Pending, Completed, Cancelled
Multiple: false
```

---

## Dropdown vs Selection Group

| Feature | Dropdown | Selection Group |
|---------|----------|-----------------|
| Display | Compact (collapsed) | Expanded (all visible) |
| Space | Minimal | Takes more space |
| Options | Many options | Few options |
| Best for | Long lists | 3-7 choices |

---

## Best Practices

1. **Order logically** - Alphabetical or by frequency

2. **Include placeholder** - "Select an option" as first item

3. **Keep options scannable** - Short, clear labels

4. **Consider search** - For very long lists, dropdowns work better

5. **Use appropriate mode** - Single for exclusive, multiple for additive

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Single Selection Group - https://help.acenji.com/#/./create-web-application/elements/single-selection-group/index
<span class="triangle"></span> Multiple Selection Group - https://help.acenji.com/#/./create-web-application/elements/multiple-selection-group/index

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
