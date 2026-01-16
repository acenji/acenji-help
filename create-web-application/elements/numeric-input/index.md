# Numeric Input Element

The **Numeric Input** element provides an input field that accepts only numeric values.

---

## Overview

Numeric Input is ideal for:
- Age entry
- Quantities
- Scores and ratings
- Prices and amounts
- Any number-only field

---

## Adding a Numeric Input

1. Open the **Website Builder**
2. Find **Numeric Input** in the Elements panel
3. Drag it onto your page
4. Configure properties in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | Label displayed above the input |
| **Placeholder Text** | Hint text inside the empty input |
| **Default Value** | Initial numeric value |

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Panel Background** | Container background | Transparent |
| **Input Background** | Input field background | White |
| **Input Border** | Input field border | Transparent |
| **Input Text Color** | Number color | Dark gray |

### Dimensions Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Font Size** | Number text size | 18px |
| **Padding** | Inner spacing | 12-15px |
| **Border Radius** | Corner rounding | 5px |

---

## Input Behavior

The numeric input:
- Accepts only numbers (integers and decimals)
- Shows numeric keyboard on mobile devices
- Validates input automatically
- Supports negative numbers

---

## Database Integration

Numeric values can be saved to the card database:

1. Open the **Connect Tab**
2. Enable database connection
3. Values are stored as numbers

---

## Use Cases

### Age Field
```
Label: "Age"
Placeholder: "Enter your age"
Default: (empty)
```

### Quantity
```
Label: "Quantity"
Placeholder: "1"
Default: 1
```

### Price Entry
```
Label: "Budget ($)"
Placeholder: "Enter amount"
Default: (empty)
```

### Score
```
Label: "Score (0-100)"
Placeholder: "0"
Default: 0
```

### Phone Extension
```
Label: "Extension"
Placeholder: "4 digits"
Default: (empty)
```

---

## Numeric Input vs Other Elements

| Element | Best For |
|---------|----------|
| **Numeric Input** | Free-form number entry |
| **Slider** | Range selection with visual feedback |
| **Increment/Decrement** | Precise adjustments with +/- buttons |
| **Rating** | Star-based scoring |

---

## Best Practices

1. **Set appropriate defaults** - Pre-fill common values

2. **Use clear placeholders** - Show expected format

3. **Indicate ranges** - If there are limits, show them in the label

4. **Consider alternatives** - Sliders may be better for bounded ranges

5. **Validate on submission** - Check for required values

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Slider - https://help.acenji.com/#/./create-web-application/elements/slider/index
<span class="triangle"></span> Increment / Decrement - https://help.acenji.com/#/./create-web-application/elements/increment-decrement/index

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
