# Modal Form Element

The **Modal Form** element creates a popup dialog that can contain another form or card content.

---

## Overview

Modal Form is ideal for:
- Detailed form workflows
- Nested data entry
- Multi-step processes
- Popup dialogs
- Overlay content

---

## Adding a Modal Form Element

1. Open the **Website Builder**
2. Find **Modal Form** in the Elements panel (under Tools)
3. Drag it onto your page
4. Configure the modal content

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Label** | Modal title/identifier |
| **Content** | The form or card displayed in the modal |

---

## Element Type

Modal Form is categorized as a **Tool** rather than a regular element. This reflects its advanced interactive functionality.

---

## Page Limit

> **Note:** Only **one Modal Form** is allowed per page. This ensures consistent user experience and prevents modal conflicts.

---

## Visual Display

In the builder, Modal Form shows as an interactive indicator:

```
┌─────────────────────────┐
│  📤 Modal 1            │
└─────────────────────────┘
```

At runtime, clicking triggers the modal popup.

---

## Availability

Modal Form is available in:
- **Mobile Card** applications
- **Web Card** applications

Not available in Form builder.

---

## Use Cases

### Detailed Item View
```
Trigger: Click on list item
Modal: Full item details form
```

### Add New Entry
```
Trigger: "Add New" button
Modal: Entry creation form
```

### Confirmation Dialog
```
Trigger: Delete action
Modal: Confirmation with details
```

### Multi-Step Wizard
```
Trigger: Start process
Modal: Step-by-step form wizard
```

---

## Modal vs Page Navigation

| Feature | Modal Form | Page Navigation |
|---------|------------|-----------------|
| Display | Overlay popup | Full page |
| Context | Maintains parent context | Leaves current page |
| Best for | Quick interactions | Complex workflows |
| Closing | Dismiss to return | Navigate back |

Use modals for focused interactions that shouldn't interrupt the main flow.

---

## Best Practices

1. **Keep focused** - Modals should have a single purpose

2. **Provide escape** - Clear way to close/cancel

3. **Size appropriately** - Don't overwhelm with content

4. **Maintain context** - User should know where they are

5. **One per page** - Plan layouts with this limit

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Card List - https://help.acenji.com/#/./create-web-application/elements/card-list/index
<span class="triangle"></span> Button - https://help.acenji.com/#/./create-web-application/elements/button/index

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
