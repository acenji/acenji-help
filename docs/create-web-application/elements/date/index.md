# Date Element

The **Date** element provides a date picker input for selecting dates.

---

## Overview

Date is ideal for:
- Birth dates
- Appointment scheduling
- Event dates
- Deadlines and due dates
- Any date selection

---

## Adding a Date Element

1. Open the **Website Builder**
2. Find **Date** in the Elements panel
3. Drag it onto your page
4. Configure properties in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | Label displayed above the picker |
| **Default Date** | Initial date value |

### Default Date Options

| Setting | Behavior |
|---------|----------|
| **Current** | Automatically sets to today's date |
| **Specific Date** | Pre-set to a particular date |
| **Empty** | No default selection |

### Color Tab

| Property | Description |
|----------|-------------|
| **Panel Background** | Container background |
| **Input Background** | Picker background |
| **Input Border** | Picker border |
| **Input Text** | Date text color |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Font Size** | Date text size |
| **Padding** | Inner spacing |
| **Border Radius** | Corner rounding |

---

## Visual Display

The date element uses the browser's native HTML5 date picker:
- Click to open calendar view
- Navigate months/years
- Select a specific date
- Format adapts to user's locale

---

## Use Cases

### Birth Date
```
Label: "Date of Birth"
Default: (empty)
```

### Event Date
```
Label: "Event Date"
Default: Current date
```

### Deadline
```
Label: "Due Date"
Default: (specific future date)
```

### Appointment
```
Label: "Preferred Date"
Default: Current date
```

---

## Date Handling

- Dates are stored in ISO format (YYYY-MM-DD)
- Display format depends on browser/locale
- State updates are debounced for performance

---

## Best Practices

1. **Set sensible defaults** - Use "current" for near-future dates

2. **Label clearly** - Specify what the date represents

3. **Consider range limits** - Some dates may not be valid choices

4. **Account for time zones** - Be aware of date interpretation

5. **Test across browsers** - Date pickers vary by browser

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Text Input - https://help.acenji.com/#/./create-web-application/elements/text-input/index

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
