# Progress Bar

The **Progress Bar** element displays a visual progress indicator as either a horizontal bar or a circular ring. Use it for completion tracking, loading states, or metric displays.

---

## Overview

Two visual variants are available:

- **Bar** -- horizontal fill bar with optional stripes and animation
- **Circle** -- SVG ring that fills clockwise with a centered value

Both support customizable colors, labels, and value formatting.

---

## Adding a Progress Bar

1. Open the **Website Builder**
2. Find **Progress Bar** in the Elements panel (under Display)
3. Drag it onto your page
4. Configure the variant and value in the **General Tab**

---

## Properties

### General Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Variant** | Display type: bar or circle | `bar` |
| **Value** | Current progress value | `65` |
| **Max** | Maximum value (100 = percentage) | `100` |
| **Label** | Text label displayed above the bar | Empty |
| **Show Value** | Display the numeric value | `true` |
| **Value Format** | How to display the value: percent, fraction, or value | `percent` |

### Bar-Specific Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Bar Color** | Fill color of the progress bar | `#2B98E0` |
| **Track Color** | Background track color | `#e9ecef` |
| **Height** | Bar height in pixels | `12` |
| **Border Radius** | Corner rounding in pixels | `6` |
| **Striped** | Show diagonal stripe pattern | `false` |
| **Animated** | Animate the stripes (requires Striped to be on) | `false` |

### Circle-Specific Properties

| Property | Description | Default |
|----------|-------------|---------|
| **Circle Size** | Diameter of the circle in pixels | `80` |
| **Circle Stroke** | Width of the ring stroke in pixels | `8` |
| **Bar Color** | Ring fill color | `#2B98E0` |
| **Track Color** | Background ring color | `#e9ecef` |

### Value Format Options

| Format | Example (value=65, max=100) |
|--------|---------------------------|
| **Percent** | 65% |
| **Fraction** | 65/100 |
| **Value** | 65 |

---

## Use Cases

- **Form completion** -- show how much of a multi-step form is done
- **Upload progress** -- indicate file upload status
- **Dashboard metrics** -- display KPIs as visual gauges
- **Skill levels** -- show proficiency ratings
- **Loading indicators** -- animated striped bar for pending operations

---

## Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
