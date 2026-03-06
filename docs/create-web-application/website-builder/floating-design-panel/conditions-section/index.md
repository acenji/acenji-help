# Conditions Section

The **Conditions Section** in the Floating Design Panel allows you to apply conditional logic that controls when elements, tiles, or pages are displayed or hidden based on specific criteria.

---

## Overview

Conditions enable dynamic behavior in your application by:

- **Showing/hiding elements** based on user input or data values
- **Controlling visibility** of tiles or entire pages
- **Creating personalized experiences** for different users
- **Building interactive forms** that adapt to user responses

---

## Accessing the Conditions Section

1. Select an element, tile, or page in the builder
2. Open the **Floating Design Panel**
3. Click the **Conditions** tab in the top menu

---

## How Conditions Work

```
┌─────────────────────────────────────────────────────────────┐
│                      CONDITION LOGIC                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────────┐         ┌──────────────┐                 │
│   │   SOURCE     │   →→→   │   OPERATOR   │                 │
│   │  (Variable,  │         │  (equals,    │                 │
│   │   Element)   │         │   contains)  │                 │
│   └──────────────┘         └──────────────┘                 │
│                                   │                          │
│                                   ▼                          │
│                          ┌──────────────┐                   │
│                          │    VALUE     │                   │
│                          │  (Expected   │                   │
│                          │   result)    │                   │
│                          └──────────────┘                   │
│                                   │                          │
│                                   ▼                          │
│                    ┌─────────────────────────┐              │
│                    │   IF TRUE → Show/Enable │              │
│                    │   IF FALSE → Hide       │              │
│                    └─────────────────────────┘              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Creating a Condition

### Step 1: Add a New Condition

1. Click the **"Add Condition"** or **"+"** button
2. A new condition row appears

### Step 2: Select the Source

Choose what value to evaluate:

| Source Type | Description |
|-------------|-------------|
| **Element Value** | Value from another element (text input, dropdown, etc.) |
| **Variable** | A global or session variable |
| **User Property** | User-specific data (role, email, etc.) |

### Step 3: Choose the Operator

| Operator | Description | Use With |
|----------|-------------|----------|
| `equals` | Exact match | All types |
| `not equals` | Does not match | All types |
| `contains` | Text includes value | Text/String |
| `is empty` | No value present | All types |
| `is not empty` | Has a value | All types |
| `greater than` | Numeric comparison | Numbers |
| `less than` | Numeric comparison | Numbers |

### Step 4: Set the Expected Value

Enter the value that makes the condition true:

- For text: Enter the exact string
- For numbers: Enter the numeric value
- For booleans: Select true/false

---

## Condition Types

### Show/Hide Conditions

Control element visibility:

```
IF [Dropdown Value] equals "Premium"
THEN Show [Premium Features Tile]
ELSE Hide
```

### Enable/Disable Conditions

Control element interactivity:

```
IF [Checkbox "I Agree"] equals true
THEN Enable [Submit Button]
ELSE Disable
```

---

## Multiple Conditions

You can combine multiple conditions using logic operators:

### AND Logic

All conditions must be true:

```
Condition 1: [Role] equals "Admin"
AND
Condition 2: [Status] equals "Active"

Result: Element shows only for active admins
```

### OR Logic

Any condition can be true:

```
Condition 1: [Role] equals "Admin"
OR
Condition 2: [Role] equals "Manager"

Result: Element shows for admins or managers
```

---

## Condition Scope

| Scope | Description |
|-------|-------------|
| **Element** | Condition affects a single element |
| **Tile** | Condition affects an entire tile and its contents |
| **Page** | Condition affects the entire page |

---

## Common Use Cases

### Role-Based Content

Show different content based on user roles:

```
Condition: [User Role] equals "Facilitator"
Show: [Facilitator Dashboard Tile]
```

### Progressive Disclosure

Show additional fields based on selections:

```
Condition: [Dropdown "Has Children"] equals "Yes"
Show: [Number of Children Input]
```

### Form Validation Display

Show error messages conditionally:

```
Condition: [Email Input] is empty
Show: [Email Required Warning]
```

### Premium Features

Gate content for premium users:

```
Condition: [Is Premium Member] equals true
Show: [Advanced Settings Section]
```

---

## Saved Conditions

Conditions can be saved for reuse across your application:

1. Create and configure a condition
2. Click **"Save Condition"**
3. Give it a descriptive name
4. Access saved conditions from the conditions library

---

## Best Practices

1. **Use descriptive names** - Name conditions by their purpose

2. **Test all scenarios** - Verify both true and false states work correctly

3. **Keep conditions simple** - Complex nested conditions are harder to debug

4. **Document your logic** - Keep notes on why each condition exists

5. **Consider defaults** - Decide what should show when no conditions match

---

## Troubleshooting

### Element Not Showing When Expected

- Verify the condition source has the expected value
- Check that the operator matches your intent
- Ensure all AND conditions are satisfied

### Condition Not Updating

- Confirm the source element's value is being saved
- Check for typos in the expected value
- Refresh the preview to see changes

### Multiple Conditions Conflicting

- Review the order of conditions
- Check if AND vs OR logic is correct
- Simplify by combining related conditions

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Floating Design Panel - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/index
<span class="triangle"></span> Styles Section - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/styles-section/index
<span class="triangle"></span> Events Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/events-tab/index

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
