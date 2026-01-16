# Yes / No / Unknown Element

The **Yes / No / Unknown** element creates a three-option button group for simple three-state responses.

---

## Overview

Yes / No / Unknown is ideal for:
- Binary questions with an uncertain option
- Agreement confirmations
- Status indicators
- Any three-state decision

---

## Adding a Yes / No / Unknown Element

1. Open the **Website Builder**
2. Find **Yes / No / Unknown** in the Elements panel
3. Drag it onto your page
4. Configure properties in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | The question or label text |
| **Default Value** | Initially selected option |
| **Agreement Options** | The three option labels and values |

### Options Configuration

The element has three options that can be customized:
- Option 1 (typically "Yes")
- Option 2 (typically "No")
- Option 3 (typically "Unknown" or "N/A")

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Unselected Background** | Inactive option background | White |
| **Unselected Border** | Inactive option border | Blue (#2B98E0) |
| **Unselected Text** | Inactive option text | Blue (#2B98E0) |
| **Selected Background** | Active option background | Blue (#2B98E0) |
| **Selected Border** | Active option border | Blue (#2B98E0) |
| **Selected Text** | Active option text | White |

### Dimensions Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Border Radius** | Corner rounding | 16px (pill-shaped) |
| **Padding** | Inner spacing | Standard |
| **Gap** | Space between buttons | Standard |

---

## Visual Display

The three options display as horizontally aligned buttons:

```
[ Yes ] [ No ] [ Unknown ]
```

Selected option shows inverted colors (filled background).

---

## Use Cases

### Agreement Question
```
Question: "Do you agree to the terms?"
Options: Yes | No | Not Sure
Default: (none)
```

### Availability Check
```
Question: "Are you available on this date?"
Options: Yes | No | Maybe
Default: (none)
```

### Feature Request
```
Question: "Would you use this feature?"
Options: Yes | No | Don't Know
Default: (none)
```

### Status Indicator
```
Question: "Is the task complete?"
Options: Complete | Incomplete | In Progress
Default: In Progress
```

### Consent Form
```
Question: "I have read and understood the information"
Options: Yes | No | Need Clarification
Default: (none)
```

---

## Customizing Options

While the default is "Yes / No / Unknown", you can customize labels:

| Use Case | Option 1 | Option 2 | Option 3 |
|----------|----------|----------|----------|
| Agreement | Yes | No | Unsure |
| Status | Done | Not Done | In Progress |
| Preference | Like | Dislike | Neutral |
| Rating | Good | Bad | Average |
| Availability | Available | Unavailable | Maybe |

---

## Yes/No/Unknown vs Other Elements

| Element | Options | Best For |
|---------|---------|----------|
| **Yes/No/Unknown** | 3 fixed options | Simple three-state choices |
| **Single Selection** | Custom options | More than 3 choices |
| **Checkbox** | 2 states (on/off) | Simple yes/no |

---

## Best Practices

1. **Keep questions clear** - Make it obvious what Yes/No means

2. **Consider the third option** - "Unknown" isn't always appropriate

3. **Set defaults when sensible** - Pre-select if there's a common answer

4. **Match colors to meaning** - Consider green for positive, red for negative

5. **Use for simple decisions** - For complex choices, use Single Selection

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Single Selection Group - https://help.acenji.com/#/./create-web-application/elements/single-selection-group/index
<span class="triangle"></span> Checkbox - https://help.acenji.com/#/./create-web-application/elements/checkbox/index

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
