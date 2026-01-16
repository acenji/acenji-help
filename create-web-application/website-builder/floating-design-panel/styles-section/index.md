# Styles Section

The **Styles Section** in the Floating Design Panel allows you to create, manage, and apply reusable style configurations across your application. Styles help maintain visual consistency and make global design changes efficient.

---

## Overview

The Styles Section enables you to:

- **Create reusable styles** that can be applied to multiple elements
- **Maintain consistency** across your application
- **Make global changes** by editing a style once
- **Organize designs** with named style configurations

---

## Accessing the Styles Section

1. Select an element, tile, or page in the builder
2. Open the **Floating Design Panel**
3. Click the **Styles** tab in the top menu

---

## How Styles Work

```
┌─────────────────────────────────────────────────────────────┐
│                       STYLE SYSTEM                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────────────┐                                      │
│   │   SAVED STYLE    │                                      │
│   │  "Primary Button"│                                      │
│   │                  │                                      │
│   │  Background: Blue│                                      │
│   │  Text: White     │                                      │
│   │  Border: None    │                                      │
│   │  Radius: 8px     │                                      │
│   └──────────────────┘                                      │
│            │                                                 │
│            ▼                                                 │
│   ┌────────┬────────┬────────┐                              │
│   │Button 1│Button 2│Button 3│  ← All use same style        │
│   └────────┴────────┴────────┘                              │
│                                                              │
│   Change style once → All buttons update                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Styles Panel Layout

The Styles section displays:

| Section | Description |
|---------|-------------|
| **Available Styles** | List of saved styles in your project |
| **Applied Style** | Currently applied style to selected element |
| **Style Actions** | Create, edit, apply, and remove styles |

---

## Creating a Style

### Step 1: Configure Element Appearance

1. Select an element
2. Set colors, dimensions, fonts, etc.
3. Achieve the desired look

### Step 2: Save as Style

1. Click **"Save as Style"** or the **"+"** button
2. Enter a descriptive name (e.g., "Primary Button", "Card Header")
3. Click **Save**

### Step 3: Style is Now Reusable

- Style appears in the Available Styles list
- Can be applied to other compatible elements
- Editing the style updates all instances

---

## Style Properties

Styles can include various property types:

### Color Properties

| Property | Description |
|----------|-------------|
| **Background Color** | Element background |
| **Text Color** | Font color |
| **Border Color** | Border color |

### Text Properties

| Property | Description |
|----------|-------------|
| **Font Family** | Typography choice |
| **Font Size** | Text size |
| **Font Weight** | Bold, normal, light |
| **Text Alignment** | Left, center, right |

### Dimension Properties

| Property | Description |
|----------|-------------|
| **Width** | Element width |
| **Height** | Element height |
| **Padding** | Internal spacing |
| **Margin** | External spacing |

### Border Properties

| Property | Description |
|----------|-------------|
| **Border Width** | Thickness of border |
| **Border Style** | Solid, dashed, dotted |
| **Border Radius** | Rounded corners |

---

## Applying Styles

### Apply to Single Element

1. Select the element
2. Open Styles section
3. Click on a saved style
4. Style is applied immediately

### Apply to Multiple Elements

1. Select multiple elements (if supported)
2. Open Styles section
3. Apply the style
4. All selected elements update

---

## Editing Styles

### Edit Style Properties

1. Find the style in Available Styles
2. Click the **Edit** icon
3. Modify properties as needed
4. Save changes

### Update Behavior

When you edit a saved style:
- **All elements using that style update automatically**
- Changes propagate throughout your application
- No need to update elements individually

---

## Style Scope

| Scope | Description |
|-------|-------------|
| **Element Styles** | Specific to element types (button, text, etc.) |
| **Tile Styles** | Applied to tile containers |
| **Page Styles** | Background and layout for pages |

---

## Style States

Styles can include different states:

### Default State

Normal appearance when no interaction:

```
Background: Blue
Text: White
```

### Hover State

Appearance when mouse hovers:

```
Background: Dark Blue
Text: White
```

### Active State

Appearance when clicked/pressed:

```
Background: Navy
Text: White
```

### Disabled State

Appearance when element is disabled:

```
Background: Gray
Text: Light Gray
```

---

## Common Style Patterns

### Primary Button

```
Background: Brand Primary Color
Text: White
Border: None
Radius: 8px
Padding: 12px 24px
```

### Secondary Button

```
Background: Transparent
Text: Brand Primary Color
Border: 2px solid Primary
Radius: 8px
Padding: 12px 24px
```

### Card Container

```
Background: White
Border: 1px solid Light Gray
Radius: 12px
Padding: 16px
Shadow: Subtle drop shadow
```

### Input Field

```
Background: White
Border: 1px solid Gray
Radius: 4px
Padding: 8px 12px
Focus Border: Primary Color
```

---

## Organizing Styles

### Naming Conventions

Use clear, descriptive names:

| Good | Avoid |
|------|-------|
| "Primary Button" | "Style1" |
| "Card Header Text" | "Blue Text" |
| "Form Input Default" | "Input" |

### Style Categories

Organize by purpose:

- **Buttons**: Primary, Secondary, Danger, Ghost
- **Typography**: Heading, Body, Caption, Link
- **Containers**: Card, Modal, Section
- **Forms**: Input, Select, Checkbox

---

## Removing Styles

### Remove from Element

1. Select the element
2. Open Styles section
3. Click **"Remove Style"** or clear selection
4. Element returns to default/inline styles

### Delete a Saved Style

1. Find style in Available Styles
2. Click the **Delete** icon
3. Confirm deletion
4. **Warning**: Elements using this style will lose their styling

---

## Best Practices

1. **Start with a style guide** - Define your core styles early

2. **Use semantic names** - Name by purpose, not appearance

3. **Keep styles minimal** - Don't over-create styles

4. **Test style changes** - Review all instances before saving

5. **Document your styles** - Keep notes on when to use each

6. **Use consistent spacing** - Standardize padding/margins

---

## Troubleshooting

### Style Not Applying

- Verify the element type matches the style
- Check if element has inline overrides
- Ensure the style is saved

### Changes Not Propagating

- Confirm you edited the saved style, not inline
- Refresh the builder
- Check if elements are using the style

### Style Conflicts

- Review inline styles that may override
- Check specificity of competing styles
- Use "Remove Style" and reapply

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Floating Design Panel - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/index
<span class="triangle"></span> Color Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/color-tab/index
<span class="triangle"></span> Dimensions Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/dimensions-tab/index

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
