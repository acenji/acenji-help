# Editing Tile Instance

This guide covers how to edit tile instances, including making overrides, binding data, and customizing individual instances while maintaining their connection to the template.

---

## Overview

Editing a tile instance allows you to:

- **Customize content** specific to this instance
- **Override template styles** when needed
- **Bind data** to display dynamic content
- **Set conditions** for instance visibility

---

## Accessing Instance Edit Mode

### Method 1: Click on Canvas

1. Navigate to the page with the instance
2. Click directly on the instance
3. Instance becomes selected
4. Floating Design Panel opens

### Method 2: From Page Tiles Section

1. Open the **Floating Design Panel**
2. Click the **Page Tiles** tab
3. Select the instance from the list
4. Instance becomes active for editing

---

## Instance Edit Interface

When editing an instance:

```
┌─────────────────────────────────────────────────────────────┐
│  Instance: "Welcome Card" (from Welcome Card Template)       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │    [Element] Welcome, {firstName}!                   │   │
│  │                                                      │   │
│  │    [Element] Your dashboard is ready.                │   │
│  │                                                      │   │
│  │    [Button] Get Started                              │   │
│  │                                                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  Floating Design Panel: Shows instance & element options     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Editing Instance Position

### Move the Instance

1. Click and drag the instance
2. Drop in new position on the page
3. Position is automatically saved

### Set Exact Position

1. Select the instance
2. Open **Position** tab in Floating Design Panel
3. Enter X and Y coordinates
4. Instance moves to exact position

---

## Editing Instance Size

### Resize by Dragging

1. Select the instance
2. Drag the resize handles
3. Release when at desired size

### Set Exact Dimensions

1. Select the instance
2. Open **Dimensions** tab
3. Enter width and height values
4. Toggle between px, %, or auto

---

## Editing Elements Within Instance

### Select an Element

1. Click on an element inside the instance
2. Element becomes selected
3. Floating Design Panel shows element options

### Make Changes

Available modifications:

| Tab | What You Can Change |
|-----|---------------------|
| **General** | Element content, label, placeholder |
| **Text** | Font, size, weight, alignment |
| **Color** | Background, text, border colors |
| **Dimensions** | Width, height, padding, margin |
| **Position** | Alignment within the instance |
| **Events** | Click actions, triggers |
| **Connect** | Data bindings |

---

## Creating Overrides

### What is an Override?

An **override** is when you change something in the instance that differs from the template:

```
Template Default: Button text = "Submit"
Instance Override: Button text = "Register Now"

Result: This instance shows "Register Now" while
        other instances show "Submit"
```

### How to Create an Override

1. Select an element in the instance
2. Make a change (text, color, size, etc.)
3. The change becomes an override automatically
4. Override persists when template updates

### Override Indicator

Overridden properties may show:
- A visual indicator (dot or highlight)
- Different color in the panel
- "Overridden" label

---

## Data Binding

### Bind Element to Data

1. Select an element in the instance
2. Open the **Connect** tab
3. Choose a data source
4. Select the field to bind

### Example: Binding Text to User Name

```
Element: Text Label
Connect Tab:
├── Data Source: User Data
├── Field: firstName
└── Format: None

Result: Label displays current user's first name
```

### Dynamic Content

Common bindings:

| Element | Binding | Display |
|---------|---------|---------|
| Text Label | User.name | "John Smith" |
| Image | Product.imageUrl | Product image |
| Button | Action.label | Dynamic button text |

---

## Conditional Visibility

### Set Instance Conditions

1. Select the instance
2. Open **Conditions** section
3. Add visibility conditions
4. Instance shows/hides based on conditions

### Set Element Conditions

1. Select element within instance
2. Open **Conditions** for that element
3. Add element-specific conditions
4. Element shows/hides within the instance

---

## Resetting to Template

### Clear Single Override

1. Select the overridden element
2. Find **"Reset to Template"** option
3. Click to remove the override
4. Element reverts to template value

### Clear All Instance Overrides

1. Select the instance
2. Find **"Reset All Overrides"**
3. Confirm the action
4. All elements revert to template values

---

## Common Editing Tasks

### Change Button Text

1. Click the button in the instance
2. Open **General** tab
3. Edit the button label
4. Text is overridden for this instance

### Bind Image to Data

1. Click the image element
2. Open **Connect** tab
3. Select image URL field from data source
4. Image displays dynamic content

### Hide an Element

1. Select the element to hide
2. Open **Conditions** section
3. Add condition: Always hide (or specific condition)
4. Element is hidden in this instance only

### Change Colors

1. Select the element
2. Open **Color** tab
3. Modify background, text, or border color
4. Colors are overridden for this instance

---

## Instance-Level Settings

### Instance Properties

| Property | Description |
|----------|-------------|
| **Name** | Optional instance name for identification |
| **Visibility** | Show/hide conditions |
| **Position** | X/Y coordinates on page |
| **Size** | Width and height |
| **Z-Index** | Layering order |

### Instance Data Context

Set the data context for the entire instance:

1. Select the instance (not an element)
2. Open **Databases** section
3. Choose data source
4. All elements can access this data

---

## Best Practices

1. **Minimize overrides** - Only override when necessary

2. **Use data binding** - Dynamic content instead of static overrides

3. **Document overrides** - Note why changes were made

4. **Test thoroughly** - Verify instance behaves correctly

5. **Consider template updates** - Will your overrides conflict?

6. **Keep consistent** - Similar instances should look similar

---

## Troubleshooting

### Changes Not Saving

- Ensure you clicked Save
- Check for validation errors
- Verify network connection

### Override Not Working

- Confirm you're editing the instance, not template
- Check if override is being applied
- Try removing and re-adding the override

### Data Not Displaying

- Verify data binding is correct
- Check data source has records
- Review filter conditions
- Test with known data

### Element Missing

- Check element visibility conditions
- Verify element exists in template
- Look for hidden or zero-size elements

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Tile Instances - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/tile-instances/index
<span class="triangle"></span> Editing Tile Template - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/tile-templates/editing-tile-template/index
<span class="triangle"></span> Clone Instance to Template - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/tile-instances/clone-tile-instance-into-tile-template/index

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
