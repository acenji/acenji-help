# Dimensions Tab

The **Dimensions Tab** controls the **sizing and spacing** of an Element. These settings define the physical dimensions, borders, margins, padding, and typography settings that determine how the Element occupies space on the page.

The Dimensions Tab will **adapt depending on the element type**. Input elements have more dimension controls than simple display elements.

---

## Available Dimension Settings

The Dimensions Tab organizes settings by **component groups**. Each group represents a different part of the element that can be sized independently.

---

## Size Properties

### Width & Height

| Property | Default | Description |
|----------|---------|-------------|
| **Width** | `100%` | Element width. Use percentage (e.g., `100%`) or pixels (e.g., `200`). Empty or invalid values default to `100%`. |
| **Height** | `auto` | Element height. Use `auto` to fit content or specify pixels. Empty or invalid values default to `auto`. |

---

## Border Properties

### Border Width

| Property | Default | Description |
|----------|---------|-------------|
| **Border Width** | `0` | Thickness of the border in pixels. Set to `0` for no border. |

### Border Radius (Corner Rounding)

| Property | Default | Description |
|----------|---------|-------------|
| **Border Radius Top Left** | `5` | Rounding of top-left corner in pixels. |
| **Border Radius Top Right** | `5` | Rounding of top-right corner in pixels. |
| **Border Radius Bottom Left** | `5` | Rounding of bottom-left corner in pixels. |
| **Border Radius Bottom Right** | `5` | Rounding of bottom-right corner in pixels. |

### Border Style

| Property | Default | Options |
|----------|---------|---------|
| **Border Style** | `solid` | `solid`, `dashed`, `dotted`, `double`, `none` |

---

## Spacing Properties

### Margin (Outside Spacing)

Margin creates space **outside** the element, pushing other elements away.

| Property | Default | Description |
|----------|---------|-------------|
| **Margin Left** | `0` | Space to the left of the element (pixels). |
| **Margin Right** | `0` | Space to the right of the element (pixels). |
| **Margin Top** | `0` | Space above the element (pixels). |
| **Margin Bottom** | `0` | Space below the element (pixels). |

### Padding (Inside Spacing)

Padding creates space **inside** the element, between the border and content.

| Property | Default | Description |
|----------|---------|-------------|
| **Padding Left** | `0-15` | Space inside, to the left of content (pixels). |
| **Padding Right** | `0-10` | Space inside, to the right of content (pixels). |
| **Padding Top** | `0-12` | Space inside, above content (pixels). |
| **Padding Bottom** | `0-12` | Space inside, below content (pixels). |

> **Note:** Default padding values vary by element type. Input elements typically have more padding than container panels.

---

## Typography Properties

Available for elements that display text (inputs, buttons, etc.)

| Property | Default | Description |
|----------|---------|-------------|
| **Font Size** | `16-18` | Text size in pixels. |
| **Font Family** | `Nunito-SemiBold` | The typeface used for text. |
| **Font Weight** | `600` | Text boldness (400=normal, 600=semi-bold, 700=bold). |

---

## Component Groups by Element Type

### Panel Dimensions
Available for most elements. Controls the outer container.

- Width, Height
- All Border properties
- All Margin properties
- All Padding properties

### Input Dimensions
Available for input elements (Text Input, Text Area, Numeric, Phone Number, Date, Dropdown, etc.)

- Width, Height
- All Border properties
- All Margin properties
- All Padding properties
- Font Size, Font Family

### Text Dimensions
Available for Text Input and Text Area elements. Additional text-specific settings.

- All Border properties
- All Margin properties (defaults: top/bottom = 10px)
- All Padding properties

### Button Dimensions
Available for Button, Selection Group, Multiple Selection Group, and Card Link elements.

- Width, Height
- All Border properties
- All Margin properties
- All Padding properties
- Font Size, Font Family, Font Weight

### Video Player Dimensions
Available for Video elements.

| Property | Default |
|----------|---------|
| Width | `100%` |
| Height | `390` pixels |

### Image Dimensions
Available for Image elements.

- Width, Height
- All Border properties
- All Margin properties
- All Padding properties

---

## Tips for Dimension Settings

1. **Responsive widths:** Use percentage values (e.g., `100%`, `50%`) for widths that adapt to container size.

2. **Consistent spacing:** Use similar margin and padding values across elements for a cohesive layout.

3. **Border radius for modern look:** Rounded corners (5-10px) give a modern, friendly appearance. Use `0` for sharp corners.

4. **Padding for readability:** Input fields need adequate padding (10-15px) for comfortable text entry.

5. **Font sizing:** Body text typically works well at 16-18px. Buttons and labels can be slightly smaller (14-16px).

6. **Test on mobile:** Dimension settings affect how elements appear on different screen sizes.

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Color Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/color-tab/index
<span class="triangle"></span> Position Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/position-tab/index
<span class="triangle"></span> General Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/general-tab/index

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
