# User Data Variables

**User Data Variables** describe how variables display and behave within the User Data grid. This page explains how different variable types render, how editing works, and how to customize the view.

---

## Overview

When viewing User Data for a group session, variables appear as columns in a spreadsheet-like grid. Each variable type has specific display and editing behaviors.

---

## Variable Display by Type

### Text Variables

| Aspect | Behavior |
|--------|----------|
| **Display** | Plain text, truncated if too long |
| **Editor** | Text input field |
| **Sorting** | Alphabetical (A-Z, Z-A) |

### Number Variables

| Aspect | Behavior |
|--------|----------|
| **Display** | Numeric value |
| **Editor** | Number input (supports decimals) |
| **Sorting** | Numeric (low to high, high to low) |

### Boolean Variables

| Aspect | Behavior |
|--------|----------|
| **Display** | "Yes" or "No" text |
| **Editor** | Dropdown with Yes/No options |
| **Sorting** | Groups by Yes/No |

### Datetime Variables

| Aspect | Behavior |
|--------|----------|
| **Display** | Formatted date and time |
| **Editor** | Date/time picker |
| **Sorting** | Chronological |

### Enum Variables

| Aspect | Behavior |
|--------|----------|
| **Display** | Selected option text |
| **Editor** | Dropdown with predefined options |
| **Sorting** | By option value |

---

## Grid Features

### Column Headers

Each variable displays as a column with:
- Variable name as header
- Sort controls (click header to sort)
- Filter input below header

### Cell Editing

**Inline Editing:**
1. Click any editable cell
2. The appropriate editor appears based on variable type
3. Make your change
4. Press Enter or click away to save

**Modal Editing:**
1. Click the Edit button for a row
2. All editable fields appear in a form
3. Make changes to multiple fields
4. Click Save to apply all changes

### Read-Only Cells

Cells appear read-only when:
- The variable is marked as non-editable in the schema
- The session is closed
- The user lacks edit permissions

---

## Variable Panel

The Variable Panel controls which variables are visible in the grid:

### Showing/Hiding Variables

1. Expand the **Variable Panel** section
2. Each variable has a checkbox
3. Check to show, uncheck to hide
4. Changes apply immediately

### Use Cases for Hiding Variables

- **Focus on specific data** - Hide irrelevant fields temporarily
- **Reduce clutter** - Show only what you need to see
- **Export preparation** - Show only fields you want to export

---

## Mandatory vs Optional Variables

### Mandatory Variables (Always Visible)

These typically include:
- First Name
- Last Name
- Email

Mandatory variables:
- Cannot be hidden from the grid
- Must have values for every user
- Appear first in the column order

### Optional Variables

Custom variables you've defined:
- Can be shown or hidden as needed
- May have empty values
- Appear after mandatory variables

---

## Data Validation

When editing values, the system validates:

| Type | Validation |
|------|------------|
| **Text** | No validation (any text allowed) |
| **Number** | Must be a valid number |
| **Boolean** | Must select Yes or No |
| **Datetime** | Must be a valid date/time |
| **Enum** | Must select from defined options |

Invalid entries show an error message and are not saved.

---

## Sorting and Filtering

### Sorting

Click a column header to sort:
- First click: Ascending (A-Z, low to high, oldest first)
- Second click: Descending (Z-A, high to low, newest first)
- Third click: Remove sort

### Filtering

Use the filter row below headers:
- Type text to filter that column
- Filters are case-insensitive
- Multiple column filters work together (AND logic)

---

## Best Practices

1. **Use the Variable Panel** - Hide columns you don't need to reduce visual clutter

2. **Sort by relevant fields** - Sort by status or date to find records quickly

3. **Filter before bulk actions** - Use filters to isolate the records you need

4. **Check after edits** - Verify changes saved correctly

5. **Export filtered views** - Filters affect what gets exported

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> User Data - https://help.acenji.com/#/./shared-concepts/variable-center/user-data/index
<span class="triangle"></span> Global Variables - https://help.acenji.com/#/./shared-concepts/variable-center/settings/global-variables/index
<span class="triangle"></span> Group Session Variables - https://help.acenji.com/#/./shared-concepts/variable-center/settings/group-session/group-session-variables/index

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
