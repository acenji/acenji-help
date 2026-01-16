# Text Area Element

The **Text Area** element provides a multi-line text field for collecting longer text responses from users.

---

## Overview

Text Area is ideal for:
- Comments and feedback
- Descriptions
- Detailed responses
- Notes and messages
- Any multi-line text input

---

## Adding a Text Area

1. Open the **Website Builder**
2. Find **Text Area** in the Elements panel
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
| **Rows** | Number of visible text rows |

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Panel Background** | Container background | Transparent |
| **Input Background** | Text area background | White (#ffffff) |
| **Input Border** | Text area border | Transparent blue |
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

Text Area can save data to the card database:

1. Open the **Connect Tab**
2. Enable database connection
3. Choose the target field

Data is saved with debounced updates as users type.

---

## Sizing

Control the visible size with the **Rows** property:
- **Small (2-3 rows)** - Brief comments
- **Medium (4-6 rows)** - Standard feedback
- **Large (8+ rows)** - Detailed descriptions

The text area expands as users type more content.

---

## Use Cases

### Feedback Form
```
Label: "Your Feedback"
Placeholder: "Tell us what you think..."
Rows: 5
```

### Description Field
```
Label: "Project Description"
Placeholder: "Describe your project in detail"
Rows: 6
```

### Notes Section
```
Label: "Additional Notes"
Placeholder: "Any other information..."
Rows: 4
```

### Comment Box
```
Label: "Comments"
Placeholder: "Leave a comment"
Rows: 3
```

---

## Text Area vs Text Input

| Feature | Text Input | Text Area |
|---------|------------|-----------|
| Lines | Single line | Multiple lines |
| Use case | Short entries | Long responses |
| Resizable | No | Yes (by user) |
| Best for | Names, usernames | Comments, descriptions |

---

## Best Practices

1. **Size appropriately** - Set rows based on expected content length

2. **Use clear placeholders** - Guide users on what to write

3. **Consider character limits** - For very long content, inform users of limits

4. **Provide context** - Help users know how detailed to be

5. **Label clearly** - Make the purpose obvious

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Text Input - https://help.acenji.com/#/./create-web-application/elements/text-input/index
<span class="triangle"></span> Rich Editor - https://help.acenji.com/#/./create-web-application/elements/rich-editor/index

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
