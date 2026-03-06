# Color Tab

The **Color Tab** controls the **visual appearance** of an Element through color settings. These settings define how the Element looks at **runtime**, allowing you to customize backgrounds, borders, and text colors for different component parts of each element.

The Color Tab will **adapt depending on the element type**. Some elements have multiple color groups (for example, selection groups have both default and active states), while others keep the tab minimal.

---

## Available Color Settings

The Color Tab organizes settings by **component groups**. Each group represents a different part of the element that can be styled independently.

### Common Color Properties

| Property | Description |
|----------|-------------|
| **Background Color** | The fill color behind the element or component. Supports transparency via alpha channel. |
| **Border Color** | The color of the element's border. Set to transparent to hide borders. |
| **Text Color** | The color of any text displayed within the component. |

---

## Component Groups by Element Type

Different elements expose different component groups for styling:

### Panel Colors
Available for most elements. Controls the outer container appearance.

| Property | Default | Description |
|----------|---------|-------------|
| Background Color | Transparent | The panel's background fill |
| Border Color | Transparent | The panel's border color |

### Input Colors
Available for input elements (Text Input, Text Area, Numeric, Phone Number, Date, Dropdown, etc.)

| Property | Default | Description |
|----------|---------|-------------|
| Background Color | `#ffffff` | Input field background |
| Border Color | Transparent | Input field border |
| Text Color | `#2B2B2B` | Text entered by user |

### Button Colors
Available for Button, Selection Group, Multiple Selection Group, and Card Link elements.

| Property | Default | Description |
|----------|---------|-------------|
| Background Color | `#2B98E0` | Button background (ACENji blue) |
| Border Color | Transparent | Button border |
| Text Color | `#ffffff` | Button label text |

### Active State Colors
Available for Selection Group and Multiple Selection Group. Defines appearance when an option is selected.

| Property | Default | Description |
|----------|---------|-------------|
| Background Color | `#22AD41` | Selected state background (green) |
| Border Color | Transparent | Selected state border |
| Text Color | `#ffffff` | Selected state text |

### Agreement Colors
Available for Yes/No/Unknown (GroupAgreementInput) elements.

| Property | Default | Description |
|----------|---------|-------------|
| Background Color | `#ffffff` | Default button background |
| Border Color | `#2B98E0` | Default button border |
| Text Color | `#2B98E0` | Default button text |

### Active Agreement Colors
For selected state of Yes/No/Unknown elements.

| Property | Default | Description |
|----------|---------|-------------|
| Background Color | `#2B98E0` | Selected button background |
| Border Color | `#2B98E0` | Selected button border |
| Text Color | `#ffffff` | Selected button text |

### Video Player Colors
Available for Video elements.

| Property | Default | Description |
|----------|---------|-------------|
| Background Color | `#000000` | Player background |
| Border Color | `#ababab` | Player border |
| Text Color | `#ffffff` | Control text/icons |

### Image Colors
Available for Image elements.

| Property | Default | Description |
|----------|---------|-------------|
| Background Color | Transparent | Image container background |
| Border Color | Transparent | Image border |

---

## Using the Color Picker

Each color property displays a color picker control that allows you to:

1. **Select a color** from the color palette
2. **Enter a hex value** directly (e.g., `#2B98E0`)
3. **Adjust transparency** using the alpha slider
4. **Use RGBA values** for precise control (e.g., `rgba(43, 152, 224, 0.5)`)

---

## Tips for Color Settings

1. **Maintain contrast:** Ensure text colors have sufficient contrast against background colors for accessibility.

2. **Use transparency wisely:** Transparent backgrounds (`#00000000`) allow underlying content to show through.

3. **Consistent branding:** Use your brand colors consistently across elements by noting the hex values you use.

4. **Active states matter:** For selection elements, make sure active/selected states are visually distinct from default states.

5. **Test on different backgrounds:** If your page has a colored background, test how transparent element panels appear.

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Dimensions Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/dimensions-tab/index
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
