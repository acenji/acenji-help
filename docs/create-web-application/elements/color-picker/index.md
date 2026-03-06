# Color Picker

The **Color Picker** element provides a visual color selection interface with a saturation panel, hue slider, opacity control, preset palettes, eye dropper, and format switching.

---

## Overview

The Color Picker supports:

- Interactive saturation/brightness panel and hue slider
- Opacity (alpha) slider for transparent colors
- Four output formats: HEX, RGB, HSL, HEXA
- Preset color palettes (Basic, Material, Pastel, Brand, or Custom)
- Native eye dropper for picking colors from the screen
- Recent colors history
- Inline or popup display modes

---

## Adding a Color Picker

1. Open the **Website Builder**
2. Find **Color Picker** in the Elements panel (under Input)
3. Drag it onto your page
4. Configure settings in the **General Tab**

---

## Properties

### General Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Display Mode** | How the picker appears: popup (click to open) or inline (always visible) | `popup` |
| **Default Color** | Initial color value | `#2B98E0` |
| **Output Format** | Color format: HEX, RGB, HSL, or HEXA | `hex` |
| **Show Opacity Slider** | Display the alpha/transparency slider | `true` |
| **Show Eye Dropper** | Display the native screen color picker button (Chrome/Edge) | `true` |
| **Show Format Toggle** | Display a button to cycle between color formats | `true` |
| **Disabled** | Prevent user interaction | `false` |

### Preset Colors

| Property | Description | Default |
|----------|-------------|---------|
| **Show Presets** | Display preset color swatches | `true` |
| **Palette** | Preset palette: Basic, Material, Pastel, Brand, or Custom | `basic` |
| **Custom Colors** | When palette is Custom, define your own swatch colors | -- |

### Recent Colors

| Property | Description | Default |
|----------|-------------|---------|
| **Show Recent Colors** | Track and display recently used colors | `true` |
| **Max Recent** | Number of recent colors to remember | `8` |

### Preset Palettes

| Palette | Colors |
|---------|--------|
| **Basic** | Red, Orange, Gold, Green, Blue, Purple, Pink, Black, White |
| **Material** | Material Design primary colors |
| **Pastel** | Soft pastel tones |
| **Brand** | Common brand colors (Facebook, Twitter, Instagram, etc.) |
| **Custom** | User-defined colors with add/remove/edit |

---

## Use Cases

- **Theme customization** -- let users pick brand or theme colors
- **Design tools** -- color selection for drawing or styling elements
- **Product configuration** -- choose product colors (clothing, furniture, etc.)
- **Data visualization** -- select colors for charts or categories
- **Form fields** -- any input where a color value is needed

---

## Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
