# Slider Element

The **Slider** element provides a range slider for selecting values between defined minimum and maximum bounds.

---

## Overview

Slider is ideal for:
- Rating scales
- Price ranges
- Volume/intensity controls
- Satisfaction scores
- Any bounded numeric selection

---

## Adding a Slider Element

1. Open the **Website Builder**
2. Find **Slider** in the Elements panel
3. Drag it onto your page
4. Configure the range in the **General Tab**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | Label displayed above the slider |
| **Min Value** | Lowest selectable value |
| **Max Value** | Highest selectable value |
| **Step Value** | Increment between values |
| **Default Value** | Initial slider position |

### Validation Rules

- Min value must be less than max value minus step
- Step value cannot be zero or empty
- Default value must be within [min, max] range

### Color Tab

| Property | Description |
|----------|-------------|
| **Panel Background** | Container background |
| **Track Color** | Slider track color |
| **Handle Color** | Slider handle color |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Width** | Slider width |
| **Height** | Track height |
| **Handle Size** | Slider handle dimensions |

---

## Step Values

The step determines selectable increments:

| Min | Max | Step | Selectable Values |
|-----|-----|------|-------------------|
| 0 | 10 | 1 | 0, 1, 2, 3... 10 |
| 0 | 100 | 10 | 0, 10, 20... 100 |
| 0 | 1 | 0.1 | 0, 0.1, 0.2... 1 |

---

## Use Cases

### Satisfaction Scale (1-10)
```
Label: "Rate your satisfaction"
Min: 1
Max: 10
Step: 1
Default: 5
```

### Price Range
```
Label: "Budget ($)"
Min: 0
Max: 1000
Step: 50
Default: 500
```

### Percentage
```
Label: "Completion (%)"
Min: 0
Max: 100
Step: 5
Default: 0
```

### Rating (0-5 stars)
```
Label: "Rating"
Min: 0
Max: 5
Step: 0.5
Default: 3
```

---

## Slider vs Other Numeric Inputs

| Element | Best For |
|---------|----------|
| **Slider** | Visual range selection |
| **Numeric Input** | Exact number entry |
| **Rating** | Star-based scoring |
| **Increment/Decrement** | Small adjustments |

---

## Best Practices

1. **Show current value** - Display the selected value near the slider

2. **Use logical ranges** - Match real-world constraints

3. **Choose appropriate steps** - Too many or too few steps is confusing

4. **Set sensible defaults** - Start at a common or neutral value

5. **Consider mobile** - Ensure the handle is large enough to drag

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Numeric Input - https://help.acenji.com/#/./create-web-application/elements/numeric-input/index
<span class="triangle"></span> Rating - https://help.acenji.com/#/./create-web-application/elements/rating/index

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
