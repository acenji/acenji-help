# Text Input Element

The **Text Input** element provides a single-line text field for collecting short text responses from users.

---

## Overview

Text Input is ideal for:
- Names (first name, last name)
- Usernames
- Short answers
- Single-line entries
- Search fields

---

## Adding a Text Input

1. Open the **Website Builder**
2. Find **Text Input** in the Elements panel
3. Drag it onto your page
4. Configure properties in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | Label displayed above the input |
| **Placeholder Text** | Hint text shown inside the empty input |
| **Default Value** | Pre-filled value when the page loads |

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Panel Background** | Container background | Transparent |
| **Input Background** | Input field background | White (#ffffff) |
| **Input Border** | Input field border | Transparent blue |
| **Input Text Color** | Typed text color | Dark gray (#2B2B2B) |

### Dimensions Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Font Size** | Text size | 18px |
| **Font Family** | Text font | Nunito-SemiBold |
| **Padding** | Inner spacing | 12-15px |
| **Border Radius** | Corner rounding | 5px |

---

## Database Integration

Text Input can save data to the card database:

1. Open the **Connect Tab**
2. Enable database connection
3. Choose the target field

Data is saved when users complete the input.

---

## Styling

The default styling includes:
- Clean white background
- Subtle box shadow for depth
- Rounded corners
- Readable font size

Customize in the Color and Dimensions tabs to match your design.

---

## Use Cases

### Name Field
```
Label: "First Name"
Placeholder: "Enter your first name"
Default: (empty)
```

### Username
```
Label: "Username"
Placeholder: "Choose a username"
Default: (empty)
```

### Search Box
```
Label: (empty)
Placeholder: "Search..."
Default: (empty)
```

### Pre-filled Field
```
Label: "Company"
Placeholder: "Your company name"
Default: "Acme Corp"
```

---

## Best Practices

1. **Use clear labels** - Tell users exactly what to enter

2. **Provide helpful placeholders** - Show the expected format

3. **Set appropriate defaults** - Pre-fill when the value is known

4. **Keep it focused** - For longer text, use Text Area instead

5. **Consider validation** - Mark required fields clearly

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Text Area - https://help.acenji.com/#/./create-web-application/elements/text-area/index
<span class="triangle"></span> Connect Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/connect-tab/index

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
