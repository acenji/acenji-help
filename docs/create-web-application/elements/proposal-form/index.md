# Proposal Form

The **Proposal Form** element provides a configurable form with dynamic fields for collecting user submissions. Submitted data is stored in the Redux answers store, making it available to other elements and workflows.

---

## Overview

Proposal Form renders a self-contained form with a configurable set of fields. Each field can be a text input, textarea, or select dropdown. On submit, all field values are saved to the application's answer store and an optional success message is displayed.

Common uses:
- User-submitted proposals or suggestions
- Feedback and comment forms
- Quick data entry forms
- Contest or nomination submissions

---

## Adding a Proposal Form

1. Open the **Website Builder**
2. Find **Proposal Form** in the Elements panel (under Interactive)
3. Drag it onto your page
4. Configure fields in the **General Tab**

> **Note:** This element works on both **web and mobile** applications.

---

## Properties

### General Tab

#### Form Fields

Add fields to the form. Each field has:

| Property | Description |
|----------|-------------|
| **Field Label** | Display label above the field |
| **Field Type** | Text, Textarea, or Select |
| **Placeholder** | Hint text inside the field |
| **Required** | Whether the field must be filled before submit |
| **Options** | For Select type only: comma-separated list of options |

Click **Add Field** to add more fields. Click the X button to remove a field.

#### Submit Behavior

| Property | Description | Default |
|----------|-------------|---------|
| **Submit Button Label** | Text on the submit button | "Submit" |
| **Success Message** | Message displayed after successful submission | "Thank you!" |
| **Reset After Submit** | Clear all fields after submission | On |

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Background Color** | Form container background | Transparent |
| **Button Color** | Submit button background | #007bff |
| **Button Text Color** | Submit button text | #ffffff |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Width** | Element width |
| **Height** | Element height (auto by default) |
| **Padding** | Inner spacing |
| **Margin** | Outer spacing |
| **Border Radius** | Corner rounding |

---

## Best Practices

1. **Keep fields minimal** - Only ask for what you need; shorter forms have higher completion rates

2. **Use clear labels** - Make each field's purpose obvious

3. **Mark required fields** - Users should know which fields are mandatory before submitting

4. **Show a meaningful success message** - Confirm what happens next after submission

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index

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
