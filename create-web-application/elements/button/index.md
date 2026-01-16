# Button Element

The **Button** element creates an interactive clickable button that can trigger actions and events when pressed.

---

## Overview

Buttons are used for:
- Form submission
- Navigation between pages
- Triggering calculations
- Opening URLs
- Any user-initiated action

---

## Adding a Button

1. Open the **Website Builder**
2. Find **Button** in the Elements panel
3. Drag it onto your page
4. Configure properties and events in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | Button label text |
| **Action Name** | Associated action identifier |

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Background Color** | Button background | Blue (#2B98E0) |
| **Text Color** | Button text | White (#ffffff) |
| **Border Color** | Button border | (matches background) |

### Dimensions Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Font Size** | Text size | 16px |
| **Font Family** | Text font | Nunito-SemiBold |
| **Font Weight** | Text weight | 600 (semi-bold) |
| **Padding** | Inner spacing | 12px top/bottom, 15px left/right |
| **Border Radius** | Corner rounding | 5px |

---

## Events

Buttons are most powerful when connected to events. Configure actions in the **Events Tab**:

| Event Type | Description |
|------------|-------------|
| [Card Link](../../website-builder/floating-design-panel/element-section/events-tab/card-link/index) | Navigate to another page |
| [Open URL](../../website-builder/floating-design-panel/element-section/events-tab/open-url/index) | Open external link |
| [Calculate](../../website-builder/floating-design-panel/element-section/events-tab/calculate/index) | Perform calculations |
| [Change Style](../../website-builder/floating-design-panel/element-section/events-tab/change-style/index) | Modify element appearance |
| [Clone Tile](../../website-builder/floating-design-panel/element-section/events-tab/clone-tile/index) | Duplicate a tile |
| [Delete Button](../../website-builder/floating-design-panel/element-section/events-tab/delete-button/index) | Remove an element |

---

## Styling

The default button style is:
- Blue background (#2B98E0)
- White text
- Rounded corners
- Semi-bold font

Customize to match your brand:
- **Primary actions** - Use your brand's primary color
- **Secondary actions** - Use lighter or outline styles
- **Danger actions** - Use red for destructive actions
- **Success actions** - Use green for confirmations

---

## Use Cases

### Submit Button
```
Label: "Submit"
Color: Blue (primary)
Event: Card Link → Confirmation page
```

### Cancel Button
```
Label: "Cancel"
Color: Gray (secondary)
Event: Card Link → Previous page
```

### Delete Button
```
Label: "Delete"
Color: Red (danger)
Event: Delete Button with confirmation
```

### Learn More
```
Label: "Learn More"
Color: Blue (outline)
Event: Open URL → Documentation
```

### Add Item
```
Label: "+ Add Item"
Color: Green (success)
Event: Clone Tile
```

---

## Multiple Events

A single button can trigger multiple events in sequence:
1. Calculate a total
2. Change the result style
3. Navigate to the results page

Configure multiple events in the Events Tab.

---

## Best Practices

1. **Use clear labels** - "Submit Order" is better than "Submit"

2. **Choose appropriate colors** - Match action importance

3. **Keep buttons visible** - Use contrasting colors

4. **Size for touch** - Ensure buttons are large enough to tap

5. **Provide feedback** - Combine with Change Style for visual confirmation

6. **Position consistently** - Place primary actions in predictable locations

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Events Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/events-tab/index
<span class="triangle"></span> Card Link - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/events-tab/card-link/index

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
