# User Data

The **User Data** section of the Variable Center is where you manage participants and their data within group sessions. This is where you add users to sessions, view and edit their data, and connect sessions to Gate Controllers.

---

## Overview

User Data enables you to:
- Add and manage participants in group sessions
- View and edit user data in a spreadsheet-like interface
- Connect sessions to Gate Controllers for access control
- Export data for analysis

---

## Accessing User Data

1. Go to **Dashboard** → **Account** → **Variable Center** → **User Data**
2. Select your **Application** from the dropdown
3. Select a **Group Session** from the dropdown
4. The data grid displays all participants and their data

---

## Interface Components

### App Selection
Select which application you want to work with. Only web card applications are shown.

### Session Selection
Choose the group session to view. Shows:
- Session name
- Start date
- End date
- Current status

### Gate Controller Panel
Connect your session to a Gate Controller template to control access.

### Variable Panel
Toggle which variables are visible in the data grid.

### Data Grid
Spreadsheet-like view of all participants and their data.

---

## Managing Participants

### Adding Users

1. Click **"Add User"** button
2. Fill in the required fields:
   - First Name
   - Last Name
   - Email
   - Any other mandatory variables
3. Click **Save**

The new user appears in the data grid.

### Editing User Data

**Inline Editing:**
- Click any editable cell in the grid
- Modify the value
- Press Enter or click away to save

**Modal Editing:**
- Click the **Edit** button (pencil icon) for a user row
- Modify values in the edit modal
- Click **Save**

### Removing Users

1. Click the **Delete** button (trash icon) for the user row
2. Confirm the deletion

> **Warning:** Deleting a user removes all their data from the session. This cannot be undone.

---

## Data Grid Features

### Column Types

The grid adapts to your variable types:

| Type | Display | Editor |
|------|---------|--------|
| Text | Plain text | Text input |
| Number | Numeric value | Number input |
| Boolean | "Yes" or "No" | Yes/No dropdown |
| Datetime | Formatted date/time | Date/time picker |
| Enum | Selected value | Dropdown with options |

### Sorting
Click column headers to sort ascending/descending.

### Filtering
Use the filter row below headers to filter data.

### Resizing
Drag column edges to resize.

---

## Connecting to Gate Controller

Gate Controllers provide access control for your session. To connect:

1. In the User Data view, find the **Gate Controller** panel
2. Select a Gate Controller template from the dropdown
3. Configure any gate-specific variable values
4. The gate rules now apply to this session

[Learn more about Gate Controller](../gate-controller/index)

---

## Variable Panel

The Variable Panel lets you configure which variables appear in the data grid:

1. Expand the **Variable Panel** section
2. Check/uncheck variables to show/hide columns
3. Configure editability for each variable
4. Changes apply immediately to the grid

---

## Sub-sections

### User Data Variables
Information about how variables display and behave in the User Data view.

[Learn about User Data Variables](./user-data-variables/index)

### Add Users to a Group Session
Detailed guide on adding participants to sessions.

[Learn about Adding Users](./add-users-to-a-group-session/index)

### Connect to Gate Controller
How to set up access control for your session.

[Learn about Gate Controller Connection](./connect-to-gate-controller/index)

---

## Common Tasks

### Bulk Data Entry
For large numbers of users, consider:
1. Prepare data in a spreadsheet
2. Add users one by one through the interface
3. Or use the API for programmatic bulk import

### Data Review
To review all data:
1. Select the session
2. Ensure all relevant variables are visible
3. Use sorting and filtering to organize the view
4. Export if needed for external analysis

### Status Updates
To update user statuses:
1. Find the status column (if configured)
2. Click the cell to edit
3. Select the new status from the dropdown

---

## Best Practices

1. **Verify before deleting** - Always confirm you have the right user before deletion

2. **Use filters wisely** - Filter by status or completion to focus on relevant records

3. **Regular reviews** - Check data periodically during active sessions

4. **Document changes** - Keep notes on any significant data modifications

5. **Export backups** - Before session close, export data for safekeeping

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Settings - https://help.acenji.com/#/./shared-concepts/variable-center/settings/index
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
