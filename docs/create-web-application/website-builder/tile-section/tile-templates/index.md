# Tile Templates

**Tile Templates** are the master designs in your project that serve as the source for creating tile instances. When you create a template, you're defining a reusable container that can be placed on multiple pages.

---

## Overview

Tile Templates enable you to:

- **Design once, use everywhere** - Create a single design and reuse it
- **Maintain consistency** - All instances share the same base design
- **Update efficiently** - Changes to templates can propagate to instances
- **Organize content** - Group related elements into logical containers

---

## Accessing Tile Templates

Tile templates are accessed from the Tile Section in the left panel:

1. Open the **Website Builder**
2. Look for the **Tiles** section in the left panel
3. Templates are listed with their names and icons

---

## Template Anatomy

```
┌─────────────────────────────────────────────────────────────┐
│                     TILE TEMPLATE                            │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │    ┌──────────────────────────────────┐             │   │
│  │    │         Element 1                 │             │   │
│  │    │         (Title Text)              │             │   │
│  │    └──────────────────────────────────┘             │   │
│  │                                                      │   │
│  │    ┌──────────────────────────────────┐             │   │
│  │    │         Element 2                 │             │   │
│  │    │         (Text Input)              │             │   │
│  │    └──────────────────────────────────┘             │   │
│  │                                                      │   │
│  │    ┌──────────────────────────────────┐             │   │
│  │    │         Element 3                 │             │   │
│  │    │         (Button)                  │             │   │
│  │    └──────────────────────────────────┘             │   │
│  │                                                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  Template Name: "Contact Form"                               │
│  Elements: 3                                                 │
│  Instances: 5 (on various pages)                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Creating a Tile Template

### Method 1: New Template Button

1. Click **"+ New Tile Template"** in the Tile Section
2. Enter a descriptive name
3. Click **Create**
4. Empty template is created
5. Add elements to design it

### Method 2: Clone from Instance

1. Have an instance on a page
2. Right-click the instance
3. Select **"Clone to Template"**
4. A new template is created from the instance

### Template Creation Options

| Option | Description |
|--------|-------------|
| **Template Name** | Unique identifier for the template |
| **Initial Size** | Starting dimensions |
| **Background** | Default background style |
| **Copy From** | Duplicate an existing template |

---

## Template Properties

### Basic Properties

| Property | Description |
|----------|-------------|
| **Name** | Display name in the builder |
| **ID** | Unique system identifier |
| **Created** | Creation timestamp |
| **Modified** | Last modification time |

### Visual Properties

| Property | Description |
|----------|-------------|
| **Width** | Default template width |
| **Height** | Default or auto height |
| **Background** | Color, gradient, or image |
| **Border** | Border styling |
| **Padding** | Internal spacing |
| **Border Radius** | Corner rounding |

---

## Adding Elements to Templates

### Step 1: Select the Template

1. Click on the template in the Tile Section
2. Or double-click to enter edit mode
3. Template opens in the canvas

### Step 2: Add Elements

1. Drag elements from the Element palette
2. Drop onto the template canvas
3. Position and configure each element

### Step 3: Arrange Elements

1. Position elements within the template
2. Set element dimensions
3. Configure element properties

### Step 4: Save

1. Click **Save** or use Ctrl/Cmd + S
2. Template is saved with all elements

---

## Template Organization

### Naming Conventions

Use clear, descriptive names:

| Good Names | Avoid |
|------------|-------|
| "User Profile Card" | "Card1" |
| "Survey Question Form" | "Tile" |
| "Navigation Header" | "New Template" |
| "Product Grid Item" | "Copy of Copy" |

### Grouping Templates

Organize by function:

- **Forms**: Login, Registration, Survey
- **Cards**: Profile, Product, Article
- **Navigation**: Header, Footer, Sidebar
- **Layout**: Hero, Section, Container

---

## Template Actions

| Action | Description |
|--------|-------------|
| **Edit** | Open template for editing |
| **Rename** | Change template name |
| **Duplicate** | Create a copy of the template |
| **Delete** | Remove the template |
| **View Instances** | See where template is used |

---

## Template-Instance Relationship

### How Changes Propagate

When you edit a template:

| Scenario | Result |
|----------|--------|
| Add new element | Appears in all instances |
| Remove element | Removed from instances (if not overridden) |
| Change style | Updates instances (if not overridden) |
| Change content | Updates instances (if not overridden) |

### Instance Overrides

Instances can override template settings:

- **Overridden values** are preserved during template updates
- **Non-overridden values** update when template changes
- This allows customization while maintaining base design

---

## Common Template Patterns

### Form Template

```
Elements:
├── Title (Text Label)
├── Description (Text Label)
├── Input Field 1 (Text Input)
├── Input Field 2 (Text Input)
└── Submit Button (Button)
```

### Card Template

```
Elements:
├── Image (Image)
├── Title (Text Label)
├── Description (Text Label)
└── Action Button (Button)
```

### Header Template

```
Elements:
├── Logo (Image)
├── Nav Link 1 (Card Link)
├── Nav Link 2 (Card Link)
└── User Menu (Dropdown)
```

---

## Best Practices

1. **Start with templates** - Create templates before placing instances

2. **Keep templates focused** - One purpose per template

3. **Use meaningful names** - Descriptive names save time

4. **Document your templates** - Note what each is for

5. **Test before replicating** - Verify template works before creating many instances

6. **Consider responsiveness** - Design templates that work at all sizes

---

## Troubleshooting

### Template Not Saving

- Check for validation errors
- Ensure required fields are complete
- Verify network connection

### Elements Not Appearing in Instances

- Confirm elements are in the template
- Check element visibility conditions
- Refresh the builder

### Changes Not Propagating

- Verify you're editing the template, not an instance
- Check if instances have overrides
- Clear overrides to receive template updates

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Tile Section - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/index
<span class="triangle"></span> Editing Tile Template - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/tile-templates/editing-tile-template/index
<span class="triangle"></span> Tile Instances - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/tile-instances/index

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
