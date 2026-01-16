# Clone Tile Instance into Tile Template

This feature allows you to convert a tile instance (including all its overrides) into a new tile template. This is useful when you've customized an instance and want to reuse that customized version elsewhere.

---

## Overview

Cloning an instance to a template enables you to:

- **Preserve customizations** made to an instance
- **Create new templates** from existing work
- **Reuse modified designs** across multiple pages
- **Save time** by not recreating complex configurations

---

## When to Use This Feature

### Common Scenarios

| Scenario | Use Case |
|----------|----------|
| **Evolved design** | Instance has valuable overrides worth reusing |
| **Prototype to production** | Turn a one-off design into a reusable template |
| **Variant creation** | Create a variation of an existing template |
| **Design exploration** | Save experimental designs as templates |

### Example Workflow

```
Original: "Card Template"
    │
    ▼
Instance on Page A (with overrides)
    - Changed colors to blue theme
    - Added new element
    - Modified layout
    │
    ▼
Clone to Template: "Blue Card Template"
    │
    ▼
New template available for use anywhere
```

---

## How to Clone Instance to Template

### Step 1: Select the Instance

1. Navigate to the page with the instance
2. Click on the instance to select it
3. Confirm it's the instance you want to clone

### Step 2: Access Clone Option

1. Right-click on the instance
2. Select **"Clone to Template"** (or similar option)
3. Or use the Floating Design Panel menu

### Step 3: Configure New Template

A dialog appears:

| Field | Description |
|-------|-------------|
| **Template Name** | Name for the new template |
| **Description** | Optional description |
| **Location** | Where in the Tile Section to place it |

### Step 4: Create Template

1. Enter a descriptive name
2. Click **Create** or **Clone**
3. New template is created in the Tile Section

### Step 5: Verify

1. Check the Tile Section for your new template
2. Open the template to verify contents
3. All elements and overrides are now part of the template

---

## What Gets Cloned

### Included in the Clone

| Item | Description |
|------|-------------|
| **All elements** | Every element from the instance |
| **Element properties** | Text, colors, dimensions, etc. |
| **Element positions** | Layout and arrangement |
| **Overrides** | All customizations become template defaults |
| **Styles** | Applied styles and custom styling |
| **Events** | Click actions and triggers |

### Not Included

| Item | Reason |
|------|--------|
| **Instance position** | Templates don't have page positions |
| **Live data values** | Data bindings are preserved, not actual data |
| **Instance-specific conditions** | May need reconfiguration |

---

## After Cloning

### Relationship to Original

The new template is **independent**:

- No connection to the original template
- No connection to the source instance
- Changes to original don't affect the clone
- Changes to clone don't affect original

### Using the New Template

1. Find it in the Tile Section
2. Drag onto any page to create instances
3. Edit the template to make global changes
4. All instances of the new template will share its design

---

## Cloning Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    CLONE PROCESS                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────┐                                       │
│  │ Original Template│                                       │
│  │   "Base Card"    │                                       │
│  └────────┬─────────┘                                       │
│           │                                                  │
│           ▼ Creates instance                                 │
│  ┌──────────────────┐                                       │
│  │ Instance on Page │                                       │
│  │  + Overrides:    │                                       │
│  │  • Blue colors   │                                       │
│  │  • Extra button  │                                       │
│  └────────┬─────────┘                                       │
│           │                                                  │
│           ▼ Clone to Template                                │
│  ┌──────────────────┐                                       │
│  │  NEW TEMPLATE    │                                       │
│  │  "Blue Card"     │                                       │
│  │                  │                                       │
│  │  Contains all    │                                       │
│  │  overrides as    │                                       │
│  │  defaults        │                                       │
│  └──────────────────┘                                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Best Practices

### Before Cloning

1. **Review the instance** - Ensure all desired changes are made
2. **Clean up** - Remove any temporary or test content
3. **Verify styling** - Confirm all styles are correct
4. **Check elements** - All needed elements are present

### Naming the Template

Use clear, descriptive names:

| Good | Avoid |
|------|-------|
| "Product Card - Featured" | "Clone of Card" |
| "Blue Theme Header" | "Instance Copy" |
| "Survey Form - Extended" | "New Template 1" |

### After Cloning

1. **Verify the template** - Open and review the contents
2. **Test an instance** - Create a test instance
3. **Document** - Note what the template is for
4. **Clean up source** - Consider removing the original instance if no longer needed

---

## Common Use Cases

### Creating a Variant

You have a "Product Card" template but need a "Featured Product Card":

1. Place a Product Card instance
2. Customize with featured styling (border, badge, colors)
3. Clone to "Product Card - Featured" template
4. Use both templates as needed

### Saving Experimental Work

Exploring a new design in an instance:

1. Make changes to an instance
2. Test and iterate
3. When satisfied, clone to template
4. New design is preserved and reusable

### Converting Legacy Content

Have an old instance with good design:

1. Select the instance
2. Clone to template
3. New template can be used going forward
4. Retire the old instance/template

---

## Troubleshooting

### Clone Option Not Available

- Verify you selected an instance (not a template)
- Check your permissions
- Ensure you're in edit mode

### Template Not Appearing After Clone

- Refresh the Tile Section
- Check if it was placed in a different location
- Verify the clone operation completed

### Missing Elements in Template

- Some elements may not clone correctly
- Manually verify and add missing elements
- Check if elements had special conditions

### Styles Not Transferred

- Verify styles were part of the instance
- Check if styles are applied inline vs. saved
- Reapply styles if needed

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Tile Instances - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/tile-instances/index
<span class="triangle"></span> Tile Templates - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/tile-templates/index
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
