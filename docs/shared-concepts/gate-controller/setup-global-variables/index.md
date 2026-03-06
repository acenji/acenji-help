# Setup Global Variables

Before creating time-based gates, you need to set up **Global Variables** that store the date/time values your gates will reference. This page explains how to configure variables for use with Gate Controller.

---

## Overview

Time Lock conditions in Gate Controller reference datetime variables to determine when gates open. These variables are typically set at the group session level and used to calculate gate timing.

---

## Accessing Variable Setup

1. Go to **Variable Center** → **Gate Controller**
2. Select your **Application**
3. Click the **"Variables"** button
4. The Variables modal opens for editing

---

## Adding a Datetime Variable

### Step 1: Open Variables Editor

Click the **"Variables"** button in the Gate Controller interface.

### Step 2: Add New Variable

1. Click **"Add Variable"** or the **"+"** button
2. A new row appears in the variable list

### Step 3: Configure Variable Properties

| Property | Description | Example |
|----------|-------------|---------|
| **Field** | Unique identifier (no spaces, use camelCase) | `GC-Start-Cycle-Time` |
| **Type** | Must be `datetime` for time locks | `datetime` |
| **Editable** | Whether value can be changed | `true` |
| **Mandatory** | Must be `false` for gate variables | `false` |

### Step 4: Save

Click **Save** to apply your changes.

---

## Variable Requirements for Gates

### Time Lock Variables

For variables used in Time Lock conditions:

| Requirement | Reason |
|-------------|--------|
| Type must be `datetime` | Gates calculate time offsets from this value |
| Must be non-mandatory | Mandatory fields cannot be used in gate expressions |
| Should be editable | Allows setting different start times per session |

### Variable Lock Variables

For variables used in Variable Lock conditions:

| Requirement | Reason |
|-------------|--------|
| Any type allowed | Boolean, number, or string |
| Must be non-mandatory | Mandatory fields cannot be used in locks |
| Should match expected type | Boolean for true/false checks, number for comparisons |

---

## Common Variable Examples

### Session Timing Variables

```
Field: GC-Start-Cycle-Time
Type: datetime
Purpose: Main reference point for all time-based gates

Field: GC-End-Cycle-Time
Type: datetime
Purpose: When the entire session/cycle closes
```

### User Role Variables

```
Field: is-focus-person
Type: boolean
Purpose: Identify users with special access

Field: user-role
Type: string
Purpose: Role-based access control (admin, facilitator, participant)
```

### Progress Variables

```
Field: completed-modules
Type: number
Purpose: Track how many modules user has finished

Field: certification-status
Type: enum
Values: ["not-started", "in-progress", "completed"]
Purpose: Track certification progress
```

---

## Setting Variable Values

Once variables are defined, values are set in **User Data**:

1. Go to **Variable Center** → **User Data**
2. Select your application and group session
3. Find the datetime column in the data grid
4. Click to edit and set the value using the date/time picker

### Per-User Values

Each user in a session can have different variable values:
- Different start times for staggered access
- Different roles for personalized content
- Different completion statuses

---

## Mandatory Fields

Some fields are **automatically included** and cannot be removed:

| Field | Type | Purpose |
|-------|------|---------|
| `firstName` | text | User's first name |
| `lastName` | text | User's last name |
| `email` | text | User's email address |

These mandatory fields **cannot** be used in gate conditions.

---

## Best Practices

1. **Use descriptive names** - `GC-Start-Cycle-Time` is clearer than `start`

2. **Prefix gate variables** - Use `GC-` prefix to identify gate-related variables

3. **Document purpose** - Keep notes on what each variable controls

4. **Test with short intervals** - During development, use minutes instead of days

5. **Plan variable structure** - Define all needed variables before creating gates

6. **Keep it simple** - Only create variables you actually need

---

## Troubleshooting

### Variable Not Appearing in Gate Editor

- Verify the variable type is `datetime` for time locks
- Confirm the variable is not marked as mandatory
- Refresh the page and try again

### Gate Not Responding to Variable

- Check that a value has been set for the variable in User Data
- Verify the datetime format is correct
- Ensure the user record has the variable populated

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Gate Controller - https://help.acenji.com/#/./shared-concepts/gate-controller/index
<span class="triangle"></span> Global Variables - https://help.acenji.com/#/./shared-concepts/variable-center/settings/global-variables/index
<span class="triangle"></span> User Data - https://help.acenji.com/#/./shared-concepts/variable-center/user-data/index

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
