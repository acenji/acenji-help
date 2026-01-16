# Variable Center Settings

The **Settings** section of the Variable Center is where you configure your application's variable schema and create group sessions for data collection.

---

## Accessing Settings

1. Go to **Dashboard** → **Account** → **Variable Center** → **Settings**
2. Select your application from the dropdown
3. The settings panel displays your variables and group sessions

---

## Main Components

### Global Variables

Global Variables define the data schema for your application. These are the fields that can be tracked across group sessions and connected to elements in your builder.

**To add variables:**
1. Click **"Add Variables"** button
2. Define your variable with:
   - **Field Name** - Unique identifier for the variable
   - **Type** - Data type (text, number, boolean, datetime, enum)
   - **Values** - For enum types, define the allowed options
   - **Editable** - Whether the value can be modified at runtime
   - **Mandatory** - Whether the field is required for all users

[Learn more about Global Variables](./global-variables/index)

---

### Group Sessions

Group Sessions are time-bound containers for organizing users and collecting data. Each session has:

| Property | Description |
|----------|-------------|
| **Session Name** | Human-readable identifier for the session |
| **Start Date** | When the session opens for data entry |
| **End Date** | When the session closes |
| **Schema** | Which variables to track for this session |
| **Status** | Automatically calculated based on current time |

#### Session Statuses

| Status | Meaning |
|--------|---------|
| **Opens in Xh Xm** | Session has not started yet |
| **Open for editing** | Session is currently active |
| **Closed** | Session has ended |

[Learn more about Group Sessions](./group-session/index)

---

## Creating a Group Session

1. **Select your app** from the dropdown
2. Click **"Add Group Session"** button
3. Fill in the session details:
   - Enter a descriptive **Session Name**
   - Set the **Start Date** and time
   - Set the **End Date** and time
4. Click **Save**
5. Configure the **Schema** by clicking the Schema button to select which variables to track

---

## Managing Sessions

### Edit a Session

Click the **Edit** button to modify session properties:
- Change the name
- Adjust start/end dates
- Modify schema configuration

### Clone a Session

Click **Clone** to create a copy of an existing session. Useful for:
- Creating recurring sessions
- Setting up similar data collection periods
- Testing configurations

### Delete a Session

Click **Delete** to remove a session.

> **Warning:** Deleting a session removes all associated user data. This action cannot be undone.

---

## Session Schema Configuration

Each group session can have its own subset of variables. Click the **Schema** button to:

1. View all available global variables
2. Select which variables to track for this session
3. Configure variable-specific settings per session

This allows different sessions to collect different data while using the same underlying variable definitions.

---

## Best Practices

1. **Plan your variables first** - Define your complete schema before creating sessions

2. **Use descriptive names** - Both for variables and sessions to make management easier

3. **Set realistic time windows** - Consider time zones and user availability when setting session dates

4. **Test with short sessions** - Create brief test sessions to verify your configuration before production use

5. **Document your schema** - Keep notes on what each variable represents and its valid values

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
