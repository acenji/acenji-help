# Increment / Decrement Element

The **Increment / Decrement** element provides a counter control with +/- buttons for adjusting numeric values.

---

## Overview

Increment / Decrement is ideal for:
- Quantity selectors
- Age input
- Counter controls
- Difficulty levels
- Any stepped numeric adjustment

---

## Adding an Increment / Decrement Element

1. Open the **Website Builder**
2. Find **Increment / Decrement** in the Elements panel
3. Drag it onto your page
4. Configure the range in the **General Tab**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | Label displayed above the counter |
| **Min Value** | Lowest allowed value |
| **Max Value** | Highest allowed value |
| **Step Value** | Amount to add/subtract per click |
| **Default Value** | Initial counter value |

### Validation Rules

- Min value must be less than max value minus step
- Step value cannot be zero or empty
- Default value must be within [min, max] range

### Color Tab

| Property | Description |
|----------|-------------|
| **Panel Background** | Container background |
| **Button Colors** | +/- button styling |
| **Display Colors** | Current value display |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Font Size** | Value display size |
| **Button Size** | +/- button dimensions |
| **Padding** | Inner spacing |

---

## Visual Display

The counter displays the current value with +/- buttons:

```
      [ 5 ]
    [-]   [+]
```

Clicking - decreases and + increases the value.

---

## Decimal Support

The element supports decimal values:
- Step of 0.5 → 0, 0.5, 1, 1.5, 2...
- Step of 0.1 → 0, 0.1, 0.2, 0.3...

Decimal precision is automatically calculated.

---

## Use Cases

### Quantity Selector
```
Label: "Quantity"
Min: 1
Max: 99
Step: 1
Default: 1
```

### Age Input
```
Label: "Age"
Min: 0
Max: 120
Step: 1
Default: 25
```

### Difficulty Level
```
Label: "Difficulty"
Min: 1
Max: 5
Step: 1
Default: 3
```

### Portion Size
```
Label: "Portions"
Min: 0.5
Max: 10
Step: 0.5
Default: 1
```

---

## Increment/Decrement vs Other Elements

| Element | Best For |
|---------|----------|
| **Increment/Decrement** | Precise adjustments with buttons |
| **Slider** | Visual range selection |
| **Numeric Input** | Free-form number entry |
| **Dropdown** | Fixed set of options |

---

## Best Practices

1. **Set logical limits** - Prevent values that don't make sense

2. **Choose appropriate steps** - Match real-world increments

3. **Set sensible defaults** - Start at a common value

4. **Label clearly** - Show what the number represents

5. **Consider button size** - Make buttons easy to tap on mobile

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Numeric Input - https://help.acenji.com/#/./create-web-application/elements/numeric-input/index
<span class="triangle"></span> Slider - https://help.acenji.com/#/./create-web-application/elements/slider/index

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
