# Global Variables

**Global Variables** define the data schema for your application in the Variable Center. They determine what types of information can be collected and stored across group sessions.

---

## Overview

Global Variables are the foundation of your Variable Center configuration. They define:
- What data can be collected
- What type each piece of data should be
- Whether the data is required or optional
- Whether users can edit the data

---

## Adding Global Variables

1. Navigate to **Variable Center** → **Settings**
2. Select your application
3. Click the **"Add Variables"** button
4. Configure each variable's properties
5. Click **Save** to apply changes

---

## Variable Properties

| Property | Description | Required |
|----------|-------------|----------|
| **Field** | Unique identifier for the variable (no spaces, use camelCase) | Yes |
| **Type** | Data type of the variable | Yes |
| **Values** | Allowed options (for enum type only) | Conditional |
| **Editable** | Whether users can modify the value at runtime | No |
| **Mandatory** | Whether the field must have a value for every user | No |
| **Selected** | Whether the field is active/included in sessions | No |

---

## Variable Types

### Text
Free-form text input. Use for names, descriptions, comments, etc.

```
Type: text
Example values: "John Doe", "This is a comment", "ABC-123"
```

### Number
Numeric values (integers or decimals). Use for quantities, scores, measurements.

```
Type: number
Example values: 42, 3.14, -10, 0
```

### Boolean
True/False values. Displayed as "Yes" or "No" in the interface.

```
Type: boolean
Example values: true, false
```

### Datetime
Date and time values. Use for timestamps, deadlines, scheduled events.

```
Type: datetime
Example values: "2024-01-15T14:30:00Z"
```

### Enum
Predefined list of allowed values. Use for status fields, categories, selections.

```
Type: enum
Values: ["Option A", "Option B", "Option C"]
```

---

## Common Variable Examples

### User Information
```
Field: firstName    Type: text      Mandatory: true
Field: lastName     Type: text      Mandatory: true
Field: email        Type: text      Mandatory: true
```

### Status Tracking
```
Field: completionStatus    Type: enum    Values: ["Not Started", "In Progress", "Completed"]
Field: isApproved          Type: boolean
Field: submittedAt         Type: datetime
```

### Data Collection
```
Field: score               Type: number   Editable: true
Field: comments            Type: text     Editable: true
Field: agreedToTerms       Type: boolean  Mandatory: true
```

---

## Mandatory vs Optional Variables

### Mandatory Variables
- **First Name**, **Last Name**, and **Email** are typically mandatory
- These are automatically included in all group sessions
- Cannot be skipped when adding users

### Optional Variables
- Custom variables you define for your specific use case
- Can be included or excluded from individual sessions
- May or may not have values for each user

---

## Editing Variables

### Modify Existing Variables
1. Click on a variable row to select it
2. Update the properties as needed
3. Click **Save**

> **Warning:** Changing a variable's type may affect existing data. Consider creating a new variable instead.

### Remove Variables
1. Select the variable to remove
2. Click **Delete**
3. Confirm the deletion

> **Note:** Removing a variable does not delete data already collected. However, removed variables will not appear in new sessions.

---

## Connecting Variables to Elements

Global Variables can be connected to elements in your application builder:

1. In the builder, select an element
2. Go to **Connect Tab**
3. Under "Connect to Variable Center", select the variable
4. The element's value will sync with the variable

This allows form inputs to automatically save to Variable Center and pre-populate from existing data.

---

## Best Practices

1. **Use clear field names** - `firstName` is better than `fn` or `field1`

2. **Choose appropriate types** - Use `number` for values you'll calculate with, `text` for free-form input

3. **Set sensible defaults** - Use `mandatory` only for truly required fields

4. **Plan for growth** - Consider what data you might need in the future

5. **Document your schema** - Keep a record of what each variable represents

6. **Test before production** - Verify variables work correctly in a test session

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Settings Overview - https://help.acenji.com/#/./shared-concepts/variable-center/settings/index
<span class="triangle"></span> Group Session - https://help.acenji.com/#/./shared-concepts/variable-center/settings/group-session/index
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
