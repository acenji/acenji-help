# Set Variable Lock

The **Variable Lock** condition controls gate access based on user data values. This allows you to show or hide content based on user attributes, roles, or any other variable stored in the system.

---

## Overview

Variable Lock enables you to:

- Show content only to specific user types
- Hide content based on user attributes
- Create role-based access control
- Personalize content visibility

---

## Enabling Variable Lock

1. In the gate editor, find the **Page Access Condition** section
2. Toggle the **"Use Variable Lock"** switch to enable
3. Configure the condition settings

---

## Configuration Options

| Field | Description | Example |
|-------|-------------|---------|
| **Variable** | The user variable to check | `is-focus-person` |
| **Operator** | How to compare values | `==`, `!=`, `>`, `<` |
| **Value** | The value to compare against | `true`, `50`, `"admin"` |

---

## Selecting a Variable

1. Click the **Variable** dropdown
2. Select the variable to check
3. Only non-mandatory variables appear

The dropdown shows:
- Variable name
- Variable type (boolean, number, string)

---

## Available Operators

| Operator | Description | Use With |
|----------|-------------|----------|
| `==` | Equal to | All types |
| `!=` | Not equal to | All types |
| `>` | Greater than | Numbers only |
| `<` | Less than | Numbers only |

---

## Setting the Comparison Value

The value input changes based on variable type:

### Boolean Variables

Radio buttons for True/False selection:
```
Variable: is-premium-member
Operator: ==
Value: ○ True  ● False

Result: Shows content only when is-premium-member is false
```

### Number Variables

Numeric input field:
```
Variable: completed-modules
Operator: >
Value: 5

Result: Shows content only when user has completed more than 5 modules
```

### String Variables

Text input field:
```
Variable: user-role
Operator: ==
Value: facilitator

Result: Shows content only to users with role "facilitator"
```

---

## Common Use Cases

### Role-Based Access

Show content only to specific roles:

```
Variable: user-role (string)
Operator: ==
Value: "admin"

Result: Only administrators see this content
```

### Premium Content

Gate content behind premium status:

```
Variable: is-premium-member (boolean)
Operator: ==
Value: true

Result: Only premium members access this content
```

### Progress-Based Access

Show content after reaching a milestone:

```
Variable: points-earned (number)
Operator: >
Value: 100

Result: Content visible after earning more than 100 points
```

### Exclude Certain Users

Hide content from specific users:

```
Variable: is-focus-person (boolean)
Operator: ==
Value: false

Result: Focus persons don't see this content
```

---

## Status Display

When Variable Lock blocks access, users see:

```
"Blocked – condition is not met"
```

This message appears in the configured overlay element.

---

## Combining with Other Locks

Variable Lock works alongside other conditions:

```
Gate: "Premium Day 2 Content"

Time Lock: Opens +24h after start
Variable Lock: is-premium-member == true

Result: Content opens 24 hours after start,
        but ONLY for premium members
```

All enabled conditions must be met for the gate to open.

---

## Variable Types and Operators

### Boolean Conditions

| Condition | Meaning |
|-----------|---------|
| `is-admin == true` | User is an admin |
| `is-admin == false` | User is not an admin |
| `is-admin != true` | User is not an admin |
| `is-admin != false` | User is an admin |

### Number Conditions

| Condition | Meaning |
|-----------|---------|
| `score == 100` | Score is exactly 100 |
| `score != 0` | Score is not zero |
| `score > 50` | Score is greater than 50 |
| `score < 75` | Score is less than 75 |

### String Conditions

| Condition | Meaning |
|-----------|---------|
| `role == "admin"` | Role is exactly "admin" |
| `role != "guest"` | Role is not "guest" |
| `status == "active"` | Status is "active" |

---

## Best Practices

1. **Use descriptive variable names** - `is-focus-person` is clearer than `flag1`

2. **Plan your access patterns** - Map out who should see what

3. **Test with different users** - Verify access works for each user type

4. **Document your conditions** - Keep notes on what each lock controls

5. **Keep conditions simple** - Complex logic can be confusing

---

## Troubleshooting

### Variable Not Appearing in Dropdown

- Verify the variable exists in your schema
- Confirm the variable is not mandatory
- Refresh the page and try again

### Gate Not Responding to Variable

- Check that the variable has a value for the user
- Verify the operator and value are correct
- Test with a user who should definitely pass/fail the condition

### Unexpected Access Results

- Review the complete gate configuration
- Check if other locks are also active
- Verify the user's actual variable value in User Data

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Add a Gate - https://help.acenji.com/#/./shared-concepts/gate-controller/add-a-gate/index
<span class="triangle"></span> Set Time Lock - https://help.acenji.com/#/./shared-concepts/gate-controller/add-a-gate/set-time-lock/index
<span class="triangle"></span> Set Precondition Lock - https://help.acenji.com/#/./shared-concepts/gate-controller/add-a-gate/set-precondition-lock/index

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
