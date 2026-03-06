# Add Users to a Group Session

This guide explains how to add participants to a group session in the Variable Center. Users must be added to a session before they can interact with your application's data collection features.

---

## Overview

Adding users to a group session involves:
- Navigating to the User Data section
- Selecting the appropriate session
- Entering user information
- Saving the new participant record

---

## Prerequisites

Before adding users, ensure:
1. A **Group Session** has been created in Settings
2. The session **Schema** is configured with the variables you want to track
3. The session is either active or scheduled to start

---

## Step-by-Step Guide

### Step 1: Navigate to User Data

1. Go to **Dashboard** → **Account** → **Variable Center** → **User Data**
2. Select your **Application** from the dropdown
3. Select the **Group Session** where you want to add users

### Step 2: Click Add User

1. Locate the **"Add User"** button above the data grid
2. Click the button to open the Add User form

### Step 3: Fill in Required Fields

The form displays all mandatory variables:

| Field | Description |
|-------|-------------|
| **First Name** | User's first name (required) |
| **Last Name** | User's last name (required) |
| **Email** | User's email address (required) |
| **Custom Fields** | Any other mandatory variables defined in your schema |

### Step 4: Fill in Optional Fields

If your session schema includes optional variables, you can:
- Enter values now
- Leave them blank to fill in later
- Let users populate them through your application

### Step 5: Save

1. Review the entered information
2. Click **Save** to add the user
3. The new user appears in the data grid

---

## Adding Multiple Users

### One at a Time

For small numbers of users:
1. Add each user individually through the interface
2. Verify data after each addition

### Bulk Import Considerations

For large numbers of users:
1. Prepare your data in a spreadsheet format
2. Use the API for programmatic import
3. Verify imported data in the User Data grid

---

## Field Validation

When adding users, the system validates:

| Validation | Description |
|------------|-------------|
| **Required Fields** | Mandatory variables must have values |
| **Data Types** | Values must match the variable type (text, number, etc.) |
| **Enum Values** | Dropdown selections must be from defined options |

If validation fails, you'll see an error message indicating which field needs correction.

---

## Email Considerations

- Email addresses should be unique within a session
- Valid email format is required
- Email is used to identify users in the system

---

## After Adding Users

Once users are added:

1. **Verify the data** - Check the grid to ensure information is correct
2. **Configure Gate Controller** - Set up access control if needed
3. **Share access** - Provide users with the application link
4. **Monitor activity** - Watch for data entries as users interact

---

## Editing After Addition

If you need to modify user data after adding:

1. Find the user in the data grid
2. Click directly on a cell to edit inline, OR
3. Click the **Edit** button (pencil icon) for the full edit modal
4. Make your changes
5. Save

---

## Removing Users

If you added a user by mistake:

1. Find the user in the data grid
2. Click the **Delete** button (trash icon)
3. Confirm the deletion

> **Warning:** Deleting a user removes all their data from the session. This cannot be undone.

---

## Best Practices

1. **Double-check email addresses** - Typos can prevent user access

2. **Use consistent naming** - Standardize name formats (e.g., capitalize first letters)

3. **Add users before session starts** - Have participants ready when the session opens

4. **Verify mandatory fields** - Ensure all required information is complete

5. **Keep records** - Maintain a separate list of participants for reference

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> User Data - https://help.acenji.com/#/./shared-concepts/variable-center/user-data/index
<span class="triangle"></span> Group Session - https://help.acenji.com/#/./shared-concepts/variable-center/settings/group-session/index
<span class="triangle"></span> Gate Controller - https://help.acenji.com/#/./shared-concepts/gate-controller/index

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
