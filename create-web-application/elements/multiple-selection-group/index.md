# Multiple Selection Group Element

The **Multiple Selection Group** element creates a checkbox-style group where users can select multiple options from a list.

---

## Overview

Multiple Selection Group is ideal for:
- "Select all that apply" questions
- Multi-choice preferences
- Feature selection
- Tag/category assignment

---

## Adding a Multiple Selection Group

1. Open the **Website Builder**
2. Find **Multiple Selection Group** in the Elements panel
3. Drag it onto your page
4. Configure options in the **General Tab**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | Label displayed above the options |
| **Options** | Array of choices with text and values |
| **Min Selection** | Minimum number of required selections |
| **Max Selection** | Maximum number of allowed selections |

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

## Selection Constraints

Control how many options users can select:

| Setting | Description |
|---------|-------------|
| **Min Selection** | Require at least X selections |
| **Max Selection** | Allow at most X selections |

Example: Set min=1, max=3 to require 1-3 selections.

---

## Visual Display

Options display as button-style choices:

```
[✓ Option A] [Option B] [✓ Option C] [Option D]
```

Selected options show with the "active" color scheme.

---

## Use Cases

### Survey - Multi-Select
```
Question: "Which features do you use? (Select all that apply)"
Options:
- Dashboard
- Reports
- Analytics
- Notifications
- Settings
```

### Interest Selection
```
Question: "What topics interest you?"
Options:
- Technology
- Sports
- Travel
- Food
- Music
Min: 1, Max: 3
```

### Feature Requirements
```
Question: "Select required features"
Options:
- User Authentication
- Payment Processing
- Email Notifications
- File Upload
- API Access
```

### Dietary Preferences
```
Question: "Any dietary restrictions?"
Options:
- Vegetarian
- Vegan
- Gluten-Free
- Nut-Free
- Dairy-Free
```

---

## Single vs Multiple Selection

| Feature | Single Selection | Multiple Selection |
|---------|-----------------|-------------------|
| Choices | One only | Multiple allowed |
| Constraints | N/A | Min/Max limits |
| Use case | "Choose one" | "Select all that apply" |
| Data stored | Single value | Array of values |

---

## Best Practices

1. **Set appropriate limits** - Use min/max to guide selections

2. **Keep options scannable** - Use short, clear labels

3. **Order logically** - Group related options together

4. **Indicate requirements** - Show if selection is required

5. **Consider "None" option** - Include if applicable

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
