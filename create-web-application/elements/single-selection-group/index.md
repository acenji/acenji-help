# Single Selection Group Element

The **Single Selection Group** element creates a radio-button style group where users select one option from multiple choices.

---

## Overview

Single Selection Group is ideal for:
- Multiple choice questions
- Preference selection
- Category selection
- Any "choose one" scenario

---

## Adding a Single Selection Group

1. Open the **Website Builder**
2. Find **Single Selection Group** in the Elements panel
3. Drag it onto your page
4. Configure options in the **General Tab**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | Label displayed above the options |
| **Options** | Array of choices with text and values |
| **Allow Deselect** | Let users clear their selection |

### Options Configuration

Each option has:
- **Option Text** - Display text shown to users
- **Value** - Internal value stored when selected

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Unselected Background** | Option background | Blue (#2B98E0) |
| **Unselected Text** | Option text color | White (#ffffff) |
| **Selected Background** | Active option background | Green (#22AD41) |
| **Selected Text** | Active option text | White (#ffffff) |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Font Size** | Option text size |
| **Padding** | Option inner spacing |
| **Border Radius** | Option corner rounding |
| **Gap** | Space between options |

---

## Visual Display

Options display as button-style choices in a horizontal layout:

```
[Option A] [Option B] [Option C]
```

When selected, the active option changes to the "selected" color scheme.

---

## Database Integration

Selection values can be saved to the card database:
1. Open the **Connect Tab**
2. Enable database connection
3. The selected option's value is stored

---

## Use Cases

### Survey Question
```
Question: "How satisfied are you?"
Options:
- Very Satisfied (value: 5)
- Satisfied (value: 4)
- Neutral (value: 3)
- Dissatisfied (value: 2)
- Very Dissatisfied (value: 1)
```

### Category Selection
```
Question: "Select a category"
Options:
- Electronics
- Clothing
- Home & Garden
- Sports
```

### Yes/No Question
```
Question: "Would you recommend us?"
Options:
- Yes
- No
```

### Rating Scale
```
Question: "Rate your experience"
Options:
- Excellent
- Good
- Average
- Poor
```

---

## Single vs Multiple Selection

| Feature | Single Selection | Multiple Selection |
|---------|-----------------|-------------------|
| Choices | One option only | Multiple options |
| Visual | Radio-style | Checkbox-style |
| Use case | "Choose one" | "Select all that apply" |

---

## Best Practices

1. **Limit options** - Keep to 5-7 options for best usability

2. **Use clear labels** - Make each option distinct

3. **Order logically** - Alphabetical, numerical, or by frequency

4. **Provide all options** - Include "Other" or "N/A" if needed

5. **Match colors to meaning** - Green for positive, red for negative

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Multiple Selection Group - https://help.acenji.com/#/./create-web-application/elements/multiple-selection-group/index
<span class="triangle"></span> Dropdown - https://help.acenji.com/#/./create-web-application/elements/dropdown/index

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
