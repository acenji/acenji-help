# Tile Instances

**Tile Instances** are copies of tile templates that are placed on pages in your application. Each instance inherits the template's design but can have its own unique data bindings, overrides, and configurations.

---

## Overview

Tile Instances enable you to:

- **Place reusable content** on pages
- **Customize individual copies** while maintaining base design
- **Bind different data** to each instance
- **Override template settings** when needed

---

## Understanding Instances

### What is an Instance?

An **instance** is a copy of a tile template placed on a specific page:

```
┌─────────────────────────────────────────────────────────────┐
│                    TEMPLATE → INSTANCES                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────────────┐                                      │
│   │  Product Card    │   ← Template (master design)         │
│   │    Template      │                                      │
│   └────────┬─────────┘                                      │
│            │                                                 │
│      ┌─────┴─────┬───────────┐                              │
│      ▼           ▼           ▼                              │
│   ┌────────┐ ┌────────┐ ┌────────┐                         │
│   │Instance│ │Instance│ │Instance│  ← Placed on pages       │
│   │"Laptop"│ │"Phone" │ │"Camera"│                         │
│   │        │ │        │ │        │                         │
│   │Data: A │ │Data: B │ │Data: C │  ← Different data        │
│   └────────┘ └────────┘ └────────┘                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Creating Tile Instances

### Method 1: Drag and Drop

1. Open the **Tile Section** in the left panel
2. Find the template you want to use
3. **Drag** the template onto the page canvas
4. **Drop** it where you want the instance
5. Instance is created automatically

### Method 2: Context Menu

1. Right-click on the page canvas
2. Select **"Add Tile"**
3. Choose a template from the list
4. Instance is placed at cursor position

---

## Instance Properties

### Inherited from Template

These come from the template by default:

| Property | Description |
|----------|-------------|
| **Elements** | All elements defined in template |
| **Layout** | Element arrangement |
| **Base Styles** | Default styling |
| **Structure** | Template structure |

### Instance-Specific

These are unique to each instance:

| Property | Description |
|----------|-------------|
| **Position** | Location on the page |
| **Data Bindings** | Connected data source |
| **Overrides** | Custom modifications |
| **Visibility Conditions** | When instance appears |

---

## Instance vs. Template

| Aspect | Template | Instance |
|--------|----------|----------|
| **Purpose** | Define the design | Display on page |
| **Location** | Tile library | On a page |
| **Quantity** | One per design | Many per template |
| **Data** | No live data | Can bind to data |
| **Editing** | Affects all instances | Affects only this instance |

---

## Working with Instances

### Selecting an Instance

1. Click on the instance on the page
2. Instance becomes highlighted
3. Floating Design Panel shows instance options

### Moving an Instance

1. Click and drag the instance
2. Drop in new position
3. Position is saved

### Resizing an Instance

1. Select the instance
2. Drag resize handles
3. Or set exact dimensions in settings

### Deleting an Instance

1. Select the instance
2. Press **Delete** key
3. Or click **Delete** in the Floating Design Panel
4. Instance is removed from page

---

## Data Binding

Instances can connect to data sources:

### Binding to User Data

```
Instance: "Profile Card"
Data Source: Current User
Bindings:
├── Title → User.firstName + " " + User.lastName
├── Email → User.email
└── Avatar → User.profileImage
```

### Binding to Database Record

```
Instance: "Product Card"
Data Source: Products Database
Filter: productId = selectedProduct
Bindings:
├── Image → Product.image
├── Title → Product.name
├── Price → Product.price
└── Description → Product.description
```

---

## Instance Overrides

Override template settings for specific instances:

### What Can Be Overridden

| Property | Override Example |
|----------|------------------|
| **Element content** | Different text or image |
| **Element styles** | Different colors |
| **Element visibility** | Show/hide elements |
| **Element position** | Adjusted layout |

### How Overrides Work

1. Make a change to an element in the instance
2. That change becomes an **override**
3. Override is preserved when template updates
4. Non-overridden properties still update from template

### Clearing Overrides

1. Select the overridden element
2. Find the **"Reset to Template"** option
3. Click to clear the override
4. Element reverts to template value

---

## Instance Visibility

Control when instances appear:

### Visibility Options

| Option | Description |
|--------|-------------|
| **Always Visible** | Instance always shows |
| **Conditional** | Based on conditions |
| **Data-Driven** | Based on data availability |

### Setting Conditions

1. Select the instance
2. Open **Conditions** section
3. Add visibility conditions
4. Instance shows/hides based on conditions

---

## Common Instance Patterns

### Multiple Cards on a Page

Place several instances of a card template:

```
Page: Products
├── Product Card Instance 1 → Laptop data
├── Product Card Instance 2 → Phone data
├── Product Card Instance 3 → Tablet data
└── Product Card Instance 4 → Camera data
```

### Consistent Headers/Footers

Same template instance on multiple pages:

```
Header Template
├── Page 1 → Header Instance
├── Page 2 → Header Instance
├── Page 3 → Header Instance
└── Page 4 → Header Instance
```

### Form Steps

Different instances for each form step:

```
Step 1 Page → Personal Info Form Instance
Step 2 Page → Contact Info Form Instance
Step 3 Page → Review Form Instance
```

---

## Instance Management

### Viewing All Instances

To see where a template is used:

1. Right-click on a template
2. Select **"View Instances"**
3. List shows all pages with instances

### Replacing an Instance's Template

If you need to change which template an instance uses:

1. Delete the current instance
2. Drag the new template to the same location
3. Reconfigure as needed

---

## Best Practices

1. **Use instances for repeated content** - Don't recreate the same design

2. **Minimize overrides** - Too many overrides defeats the purpose of templates

3. **Name instances meaningfully** - Helps identify them in the Page Tiles section

4. **Plan data bindings** - Know what data each instance will display

5. **Test instance updates** - Verify template changes propagate correctly

6. **Consider performance** - Many instances on a page may affect load time

---

## Troubleshooting

### Instance Not Updating with Template

- Check if the property is overridden
- Clear overrides to receive template updates
- Refresh the builder

### Instance Appearing Wrong Size

- Check instance-specific size overrides
- Verify template default size
- Review responsive settings

### Cannot Edit Instance Content

- Ensure you're in edit mode
- Check if element is locked
- Verify instance is selected (not template)

### Data Not Showing in Instance

- Confirm data binding is correct
- Verify data source has records
- Check filter conditions

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Tile Section - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/index
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
