# Checkbox Element

The **Checkbox** element provides a toggle input for boolean (true/false) values with a customizable label.

---

## Overview

Checkbox is ideal for:
- Agreement confirmations
- Feature toggles
- Boolean options
- Opt-in/opt-out selections

---

## Adding a Checkbox

1. Open the **Website Builder**
2. Find **Checkbox** in the Elements panel
3. Drag it onto your page
4. Configure properties in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | Label displayed next to the checkbox |
| **Default Value** | Initial checked state (true/false) |
| **Position** | Label position relative to checkbox |

### Position Options

| Setting | Layout |
|---------|--------|
| **Left** | Checkbox on left, label on right |
| **Right** | Label on left, checkbox on right |

### Color Tab

| Property | Description |
|----------|-------------|
| **Panel Background** | Container background |
| **Input Colors** | Checkbox styling |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Size** | Checkbox dimensions |
| **Padding** | Inner spacing |
| **Margin** | Outer spacing |

---

## Visual Display

The checkbox renders as a toggle switch with a rounded slider:

```
Position: Left
[●——] Label text here

Position: Right
Label text here [——●]
```

---

## Database Integration

Checkbox values can be saved to the card database:

1. Open the **Connect Tab**
2. Enable database connection
3. Values are stored as boolean (true/false)

---

## Use Cases

### Terms Agreement
```
Label: "I agree to the Terms and Conditions"
Default: false (unchecked)
Position: Left
```

### Newsletter Opt-in
```
Label: "Subscribe to our newsletter"
Default: false (unchecked)
Position: Left
```

### Feature Toggle
```
Label: "Enable notifications"
Default: true (checked)
Position: Right
```

### Remember Me
```
Label: "Remember my login"
Default: false
Position: Left
```

### Confirmation
```
Label: "I confirm the information above is correct"
Default: false
Position: Left
```

---

## Checkbox vs Other Elements

| Element | Best For |
|---------|----------|
| **Checkbox** | Single boolean toggle |
| **Yes/No/Unknown** | Three-state decision |
| **Single Selection** | Multiple exclusive options |
| **Multiple Selection** | Multiple non-exclusive options |

---

## Best Practices

1. **Use positive phrasing** - "Enable X" is clearer than "Disable X"

2. **Make labels complete** - Users should understand without context

3. **Set sensible defaults** - Opt-in should typically default to unchecked

4. **Position consistently** - Keep checkbox position the same across your app

5. **Keep labels concise** - Long labels wrap awkwardly

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Yes / No / Unknown - https://help.acenji.com/#/./create-web-application/elements/yes-no-unknown/index
<span class="triangle"></span> Multiple Selection Group - https://help.acenji.com/#/./create-web-application/elements/multiple-selection-group/index

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
