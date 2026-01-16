# Editing Tile Template

This guide covers how to edit tile templates, including modifying elements, changing styles, and understanding how edits affect tile instances.

---

## Overview

Editing a tile template allows you to:

- **Add or remove elements** from the template
- **Modify element properties** and styles
- **Update layout** and arrangement
- **Propagate changes** to all instances

---

## Accessing Template Edit Mode

### Method 1: From Tile Section

1. Find the template in the Tile Section
2. Click the template name
3. Click **Edit** or double-click to enter edit mode

### Method 2: From Canvas

1. If editing a template directly on canvas
2. The Floating Design Panel shows template options
3. Make changes directly

---

## Edit Mode Interface

When editing a template, you'll see:

```
┌─────────────────────────────────────────────────────────────┐
│  EDITING: "Contact Form Template"           [Save] [Cancel] │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │                  Template Canvas                     │   │
│  │                                                      │   │
│  │         (Elements can be added/edited here)          │   │
│  │                                                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  Floating Design Panel: [Element | Conditions | Styles]     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Adding Elements

### Step 1: Access Element Library

1. Open the Elements section in the left panel
2. Browse available element types
3. Select the element you want to add

### Step 2: Place the Element

1. Drag the element onto the template canvas
2. Position where you want it
3. Release to place

### Step 3: Configure the Element

1. Click the element to select it
2. Use the Floating Design Panel
3. Set properties, styles, and events

---

## Modifying Existing Elements

### Select the Element

1. Click on the element in the template
2. Element becomes highlighted
3. Floating Design Panel shows element options

### Change Properties

Available in various tabs:

| Tab | Controls |
|-----|----------|
| **General** | Basic element settings |
| **Text** | Typography options |
| **Color** | Background, text, border colors |
| **Dimensions** | Width, height, padding, margin |
| **Position** | Alignment and positioning |
| **Events** | Actions and triggers |
| **Connect** | Data bindings |

### Move Elements

1. Click and drag the element
2. Use arrow keys for precise movement
3. Align using guides or grid

### Resize Elements

1. Select the element
2. Drag resize handles
3. Or set exact dimensions in Dimensions tab

---

## Removing Elements

### Delete Single Element

1. Select the element
2. Press **Delete** key
3. Or click the **Delete** button in the panel

### Delete Multiple Elements

1. Select multiple elements (Ctrl/Cmd + click)
2. Press **Delete**
3. All selected elements are removed

### Undo Deletion

1. Press **Ctrl/Cmd + Z** immediately
2. Element is restored

---

## Modifying Template Properties

### Template-Level Settings

Access template settings in the Floating Design Panel:

| Property | Description |
|----------|-------------|
| **Template Name** | Change the display name |
| **Background** | Set template background |
| **Padding** | Internal spacing |
| **Border** | Template border styling |
| **Default Size** | Initial dimensions for instances |

### Layout Options

| Option | Description |
|--------|-------------|
| **Fixed Height** | Set exact height |
| **Auto Height** | Height based on content |
| **Fixed Width** | Set exact width |
| **Responsive Width** | Width adapts to container |

---

## Saving Changes

### Save Methods

1. Click **Save** button in the toolbar
2. Press **Ctrl/Cmd + S**
3. Some changes auto-save

### Save Confirmation

- Verify all changes are intentional
- Check for validation errors
- Confirm propagation to instances

### Cancel Changes

1. Click **Cancel** to discard changes
2. Confirm cancellation
3. Template reverts to last saved state

---

## How Changes Affect Instances

### Propagation Rules

| Change Type | Effect on Instances |
|-------------|---------------------|
| **New element added** | Appears in all instances |
| **Element removed** | Removed from instances (if not overridden) |
| **Style changed** | Updates non-overridden instances |
| **Position changed** | Updates non-overridden instances |

### Override Behavior

When an instance has an override:

```
Template: Button color = Blue
Instance: Button color = Red (override)

Template Edit: Button color → Green

Result:
- Template: Button = Green
- Instance: Button = Red (override preserved)
```

---

## Element Arrangement

### Ordering Elements

Change the stacking order of elements:

| Action | Keyboard | Menu |
|--------|----------|------|
| **Bring to Front** | Ctrl+Shift+] | Arrange > Bring to Front |
| **Send to Back** | Ctrl+Shift+[ | Arrange > Send to Back |
| **Bring Forward** | Ctrl+] | Arrange > Bring Forward |
| **Send Backward** | Ctrl+[ | Arrange > Send Backward |

### Alignment Tools

Align multiple elements:

| Alignment | Description |
|-----------|-------------|
| **Left** | Align left edges |
| **Center** | Align centers horizontally |
| **Right** | Align right edges |
| **Top** | Align top edges |
| **Middle** | Align centers vertically |
| **Bottom** | Align bottom edges |

### Distribution

Space elements evenly:

| Option | Description |
|--------|-------------|
| **Distribute Horizontal** | Even horizontal spacing |
| **Distribute Vertical** | Even vertical spacing |

---

## Copying Elements

### Copy Within Template

1. Select element(s)
2. Press **Ctrl/Cmd + C**
3. Press **Ctrl/Cmd + V**
4. Paste creates duplicates

### Copy Between Templates

1. Copy from source template
2. Switch to target template
3. Paste the element(s)
4. Adjust as needed

---

## Common Editing Tasks

### Adding a New Form Field

1. Drag Text Input element to template
2. Position below existing fields
3. Configure label and placeholder
4. Set validation rules
5. Save template

### Changing Template Color Scheme

1. Select each element
2. Update colors in Color tab
3. Or use a saved style
4. Save template

### Rearranging Layout

1. Select element to move
2. Drag to new position
3. Use alignment tools
4. Verify all element positions
5. Save template

---

## Best Practices

1. **Plan changes carefully** - Consider impact on all instances

2. **Test before saving** - Preview changes in context

3. **Use styles** - Apply saved styles for consistency

4. **Document changes** - Note significant template updates

5. **Consider overrides** - Understand which instances have overrides

6. **Save frequently** - Avoid losing work

---

## Troubleshooting

### Changes Not Appearing in Instances

- Verify you saved the template
- Check if instances have overrides
- Refresh the builder

### Cannot Select Element

- Ensure you're in edit mode
- Check if element is locked
- Verify element exists (may be hidden)

### Template Won't Save

- Check for validation errors
- Ensure all required fields are filled
- Verify network connection

### Undo Not Working

- Undo only works for recent changes
- Some actions may not be undoable
- Save frequently as backup

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Tile Templates - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/tile-templates/index
<span class="triangle"></span> Tile Section - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/index
<span class="triangle"></span> Editing Tile Instance - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/tile-instances/editing-tile-instance/index

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
