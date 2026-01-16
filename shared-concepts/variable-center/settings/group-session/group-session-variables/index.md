# Group Session Variables

**Group Session Variables** are the specific variables configured to be tracked within a particular group session. Each session can have its own subset of global variables, allowing flexible data collection for different purposes.

---

## Overview

While Global Variables define your application's complete data schema, Group Session Variables determine which of those variables are active for a specific session. This allows you to:

- Collect different data sets for different purposes
- Simplify the user interface by showing only relevant fields
- Phase in data collection over multiple sessions
- Run different types of data collection simultaneously

---

## Session Schema

Each group session has a **Schema** that defines which variables to track:

| Setting | Description |
|---------|-------------|
| **Selected** | Whether the variable is included in this session |
| **Editable** | Whether users can modify values during the session |

---

## Configuring Session Variables

### Step 1: Open Schema Editor

1. Go to **Variable Center** → **Settings**
2. Find your session in the grid
3. Click the **Schema** button

### Step 2: Select Variables

1. View the list of all Global Variables
2. Check the boxes for variables to include
3. Uncheck variables you don't need for this session

### Step 3: Configure Settings

For each selected variable:
1. Set **Editable** to control if users can change values
2. Review the variable type and ensure it matches your needs

### Step 4: Save

Click **Save** to apply the schema configuration.

---

## Variable Inheritance

Session variables inherit properties from their Global Variable definitions:

| Property | Inherited From |
|----------|---------------|
| Field Name | Global Variable |
| Data Type | Global Variable |
| Enum Values | Global Variable |
| Mandatory | Global Variable |

Session-specific settings:
| Property | Set Per Session |
|----------|----------------|
| Selected | Yes |
| Editable | Yes |

---

## Example Configurations

### Basic Survey Session
```
Variables: firstName, lastName, email, surveyResponse, submittedAt
All Editable: true
```

### View-Only Results Session
```
Variables: firstName, lastName, score, completionDate
Editable: false (all variables read-only)
```

### Phased Data Collection

**Phase 1 Session:**
```
Variables: firstName, lastName, email
```

**Phase 2 Session:**
```
Variables: firstName, lastName, email, detailedProfile, preferences
```

---

## Mandatory Variables

Some variables are marked as **Mandatory** in the Global Variables definition:
- These must have values for every user
- Typically includes: First Name, Last Name, Email
- Cannot be skipped when adding users to the session

---

## Variable Display in User Data

When viewing User Data for a session:
- Only selected variables appear as columns
- Column order follows the variable definition order
- Use the Variable Panel to show/hide columns temporarily

---

## Best Practices

1. **Start minimal** - Include only essential variables initially

2. **Consider user experience** - Fewer fields mean faster data entry

3. **Group related variables** - Include logically related fields together

4. **Test your schema** - Add a test user to verify the configuration

5. **Document your choices** - Keep notes on why certain variables are included/excluded

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Global Variables - https://help.acenji.com/#/./shared-concepts/variable-center/settings/global-variables/index
<span class="triangle"></span> Group Session - https://help.acenji.com/#/./shared-concepts/variable-center/settings/group-session/index
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
