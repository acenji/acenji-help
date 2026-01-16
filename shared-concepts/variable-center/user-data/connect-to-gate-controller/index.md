# Connect to Gate Controller

This guide explains how to connect a group session to a Gate Controller for access control. Gate Controllers allow you to restrict when and how users can access your application based on time, variables, or preconditions.

---

## Overview

Connecting a session to a Gate Controller enables:
- **Time-based access control** - Restrict access to specific time windows
- **Variable-based locks** - Control access based on user data values
- **Precondition requirements** - Require certain conditions before allowing access

---

## Prerequisites

Before connecting:
1. A **Group Session** exists with users added
2. A **Gate Controller template** has been created
3. You understand the gate rules you want to apply

---

## Connecting a Session to Gate Controller

### Step 1: Navigate to User Data

1. Go to **Dashboard** → **Account** → **Variable Center** → **User Data**
2. Select your **Application**
3. Select the **Group Session** you want to configure

### Step 2: Locate Gate Controller Panel

In the User Data view, find the **Gate Controller** panel. This panel allows you to:
- View currently connected gate controller
- Select a different gate controller
- Configure gate-specific settings

### Step 3: Select a Gate Controller

1. Click the Gate Controller dropdown
2. Choose from available Gate Controller templates
3. The selected controller's rules now apply to this session

### Step 4: Configure Gate Settings

Depending on your Gate Controller configuration:
- Set any gate-specific variable values
- Review the access rules that will apply
- Verify the configuration matches your needs

---

## Gate Controller Types

### Time Lock

Restricts access based on date and time:

| Setting | Description |
|---------|-------------|
| **Start Time** | When access opens |
| **End Time** | When access closes |
| **Time Zone** | Reference time zone |

### Variable Lock

Restricts access based on variable values:

| Setting | Description |
|---------|-------------|
| **Variable** | Which variable to check |
| **Condition** | Comparison operation (equals, greater than, etc.) |
| **Value** | Value to compare against |

### Precondition Lock

Requires conditions to be met before access:

| Setting | Description |
|---------|-------------|
| **Precondition** | What must be completed first |
| **Check Type** | How to verify the condition |

---

## How Access Control Works

When a gate is connected:

1. **User attempts access** - Opens the application
2. **Gate checks conditions** - Evaluates all configured rules
3. **Access granted or denied**:
   - If all conditions pass → User can proceed
   - If any condition fails → User sees appropriate message

---

## Viewing Gate Status

In the User Data grid, you may see gate-related indicators:
- Which users meet gate conditions
- Which users are currently locked out
- Reason for access restrictions

---

## Modifying Gate Connection

### Change Gate Controller

1. Open the Gate Controller panel
2. Select a different controller from the dropdown
3. New rules apply immediately

### Remove Gate Controller

1. Open the Gate Controller panel
2. Select "None" or clear the selection
3. Access restrictions are removed

---

## Best Practices

1. **Test before production** - Verify gate rules with a test user before going live

2. **Communicate restrictions** - Let users know about access windows and requirements

3. **Consider time zones** - Set times appropriate for your user base

4. **Use meaningful messages** - Configure helpful error messages for locked users

5. **Review regularly** - Check that gate rules still match your needs

---

## Troubleshooting

### Users Can't Access When They Should

1. Check the session start/end dates
2. Verify Gate Controller time settings
3. Confirm user meets all variable conditions
4. Check for precondition requirements

### Gate Not Applying

1. Verify a Gate Controller is selected
2. Check that the gate is configured correctly
3. Ensure the session is active

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Gate Controller - https://help.acenji.com/#/./shared-concepts/gate-controller/index
<span class="triangle"></span> User Data - https://help.acenji.com/#/./shared-concepts/variable-center/user-data/index
<span class="triangle"></span> Group Session - https://help.acenji.com/#/./shared-concepts/variable-center/settings/group-session/index

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
