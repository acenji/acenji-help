# Group Sessions

**Group Sessions** are time-bound containers in the Variable Center that organize users and data collection into discrete periods. Each session has defined start and end times, and can track a specific subset of your global variables.

---

## Overview

Group Sessions enable you to:
- Organize data collection into defined time periods
- Control when users can enter or modify data
- Track different variable sets for different purposes
- Manage multiple concurrent or sequential data collection efforts

---

## Session Properties

| Property | Description |
|----------|-------------|
| **Session Name** | Human-readable identifier (e.g., "Q1 2024 Survey", "Training Cohort A") |
| **Start Date** | Date and time when the session opens for data entry |
| **End Date** | Date and time when the session closes |
| **Created At** | Timestamp when the session was created |
| **Schema** | Configuration of which variables to track |
| **Status** | Automatically calculated based on current time |

---

## Session Status

Sessions automatically display their status based on the current time:

| Status | Icon | Description |
|--------|------|-------------|
| **Opens in Xh Xm** | ⏳ | Session has not started yet. Shows countdown. |
| **Open for editing** | ✅ | Session is currently active. Users can enter data. |
| **Closed** | ❌ | Session has ended. Data entry is locked. |

Status updates automatically - no manual intervention needed.

---

## Creating a Group Session

### Step 1: Navigate to Settings
1. Go to **Variable Center** → **Settings**
2. Select your application from the dropdown

### Step 2: Add New Session
1. Click **"Add Group Session"** button
2. A new row appears in the session grid

### Step 3: Configure Properties
1. **Session Name** - Enter a descriptive name
2. **Start Date** - Click to open date/time picker, select when the session should open
3. **End Date** - Click to open date/time picker, select when the session should close
4. Press Enter or click away to save

### Step 4: Configure Schema
1. Click the **Schema** button for your session
2. Select which variables to include in this session
3. Configure any session-specific variable settings
4. Save the schema

---

## Managing Sessions

### Edit a Session
1. Click the **Edit** button in the Actions column
2. Modify any properties in the modal
3. Click **Save**

### Clone a Session
1. Click the **Clone** button
2. A copy is created with the same settings
3. Edit the clone as needed (e.g., change dates, rename)

### Delete a Session
1. Click the **Delete** button
2. Confirm the deletion in the dialog

> **Warning:** Deleting a session permanently removes all associated user data.

---

## Session Schema

Each session can have its own schema configuration determining which variables to track:

### Configuring the Schema
1. Click the **Schema** button for the session
2. The schema editor shows all available global variables
3. Check/uncheck variables to include/exclude them
4. Configure variable-specific settings:
   - **Selected** - Include in this session
   - **Editable** - Allow modification during the session

### Why Different Schemas?
- **Focused data collection** - Only show relevant fields to users
- **Phased rollouts** - Start with basic fields, add more over time
- **Different use cases** - Same app, different data needs

---

## Session Statuses

For detailed information about session statuses and their management:

[Learn about Group Session Statuses](./group-session-statuses/index)

---

## Session Variables

For information about how variables work within sessions:

[Learn about Group Session Variables](./group-session-variables/index)

---

## Use Cases

### Survey Campaign
```
Session: "Customer Feedback Q1 2024"
Start: Jan 1, 2024 00:00
End: Mar 31, 2024 23:59
Variables: satisfaction, feedback, nps_score
```

### Training Cohort
```
Session: "Onboarding Cohort March"
Start: Mar 1, 2024 09:00
End: Mar 15, 2024 17:00
Variables: firstName, lastName, completedModules, certificationStatus
```

### Event Registration
```
Session: "Annual Conference 2024"
Start: Jan 15, 2024 00:00
End: Mar 1, 2024 23:59
Variables: firstName, lastName, email, dietaryRestrictions, sessionPreferences
```

---

## Best Practices

1. **Use descriptive names** - Include dates, cohort identifiers, or purpose in session names

2. **Set appropriate time windows** - Consider time zones of your users

3. **Plan ahead** - Create sessions before they need to start

4. **Test first** - Create a short test session to verify configuration

5. **Don't delete active sessions** - Wait until data is exported/backed up

6. **Consider overlapping sessions** - Multiple sessions can run simultaneously for different purposes

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Global Variables - https://help.acenji.com/#/./shared-concepts/variable-center/settings/global-variables/index
<span class="triangle"></span> User Data - https://help.acenji.com/#/./shared-concepts/variable-center/user-data/index
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
