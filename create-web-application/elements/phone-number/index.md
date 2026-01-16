# Phone Number Element

The **Phone Number** element provides a specialized input field for entering phone numbers.

---

## Overview

Phone Number is ideal for:
- Contact information forms
- Support request forms
- User registration
- Any phone number collection

---

## Adding a Phone Number

1. Open the **Website Builder**
2. Find **Phone Number** in the Elements panel
3. Drag it onto your page
4. Configure properties in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | Label displayed above the input |
| **Placeholder Text** | Hint text inside the empty input |
| **Max Length** | Maximum number of characters allowed |
| **Default Value** | Pre-filled phone number |

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Panel Background** | Container background | Transparent |
| **Input Background** | Input field background | White |
| **Input Border** | Input field border | Transparent |
| **Input Text Color** | Phone number color | Dark gray |

### Dimensions Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Font Size** | Number text size | 18px |
| **Padding** | Inner spacing | 12-15px |
| **Border Radius** | Corner rounding | 5px |

---

## Input Behavior

The phone number input:
- Uses `type="tel"` for phone keyboard on mobile
- Respects max length constraints
- Accepts numbers and common phone characters (+, -, spaces, parentheses)

---

## Use Cases

### Contact Form
```
Label: "Phone Number"
Placeholder: "(555) 123-4567"
Max Length: 14
```

### International Format
```
Label: "Phone (with country code)"
Placeholder: "+1 555 123 4567"
Max Length: 16
```

### Simple Number
```
Label: "Mobile Number"
Placeholder: "5551234567"
Max Length: 10
```

### Extension Field
```
Label: "Phone Extension"
Placeholder: "1234"
Max Length: 4
```

---

## Formatting Considerations

| Format | Example | Max Length |
|--------|---------|------------|
| US Standard | (555) 123-4567 | 14 |
| US Simple | 555-123-4567 | 12 |
| International | +1 555 123 4567 | 16 |
| Digits Only | 5551234567 | 10 |

---

## Phone Number vs Text Input

| Feature | Phone Number | Text Input |
|---------|--------------|------------|
| Keyboard | Phone keypad (mobile) | Standard keyboard |
| Input type | tel | text |
| Validation | Phone-optimized | None |
| Best for | Phone numbers | General text |

---

## Best Practices

1. **Show expected format** - Use placeholder to demonstrate format

2. **Set appropriate max length** - Prevent overly long entries

3. **Consider international users** - Allow country codes if needed

4. **Label clearly** - Specify if mobile, landline, or either

5. **Make optional when possible** - Not everyone wants to share phone numbers

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Text Input - https://help.acenji.com/#/./create-web-application/elements/text-input/index
<span class="triangle"></span> Email - https://help.acenji.com/#/./create-web-application/elements/email/index

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
