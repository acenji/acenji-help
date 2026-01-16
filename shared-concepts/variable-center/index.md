# Variable Center

The **Variable Center** is a powerful feature in ACENji that allows you to manage dynamic data across your applications. It provides centralized control over variables, user data, and access through Group Sessions and Gate Controllers.

---

## Overview

The Variable Center enables you to:

- **Define Global Variables** - Create custom variables that persist across your application
- **Manage Group Sessions** - Organize users into time-bound sessions for data collection
- **Control Access** - Use Gate Controllers to manage when and how users can interact with your app
- **Store User Data** - Collect and manage participant data within group sessions

---

## Main Components

### 1. Settings

The **Settings** section is where you configure your application's variable schema and group sessions.

| Feature | Description |
|---------|-------------|
| **Global Variables** | Define custom variables for your application (text, number, boolean, datetime, enum types) |
| **Group Sessions** | Create time-bound sessions with start/end dates for data collection |
| **Session Schema** | Configure which variables each session tracks |

[Learn more about Settings](./settings/index)

### 2. User Data

The **User Data** section is where you manage participants and their data within group sessions.

| Feature | Description |
|---------|-------------|
| **Participant Management** | Add, edit, and remove users from group sessions |
| **Data Entry** | View and edit user data for each session variable |
| **Gate Controller Assignment** | Connect sessions to gate controllers for access control |

[Learn more about User Data](./user-data/index)

### 3. Gate Controller

The **Gate Controller** provides advanced access control for your group sessions.

| Feature | Description |
|---------|-------------|
| **Time Locks** | Restrict access based on date/time windows |
| **Variable Locks** | Restrict access based on variable conditions |
| **Precondition Locks** | Set prerequisites for user access |

[Learn more about Gate Controller](../gate-controller/index)

---

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                     VARIABLE CENTER                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │   Settings   │    │  User Data   │    │    Gate      │  │
│  │              │    │              │    │  Controller  │  │
│  │ • Variables  │───▶│ • Sessions   │◀───│              │  │
│  │ • Sessions   │    │ • Users      │    │ • Time Lock  │  │
│  │ • Schema     │    │ • Data Entry │    │ • Var Lock   │  │
│  └──────────────┘    └──────────────┘    └──────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Typical Workflow

1. **Define Variables** in Settings - Create the schema for your data
2. **Create Group Sessions** - Set up time-bound sessions with start/end dates
3. **Configure Gates** (optional) - Set up access control rules
4. **Add Users** - Populate sessions with participants
5. **Collect Data** - Users interact with your app, data is stored in Variable Center

---

## Accessing Variable Center

The Variable Center is accessed from the main dashboard:

1. Go to **Dashboard**
2. Navigate to **Account** → **Variable Center**
3. Choose the section you need:
   - **Settings** - Configure variables and sessions
   - **User Data** - Manage participants and data
   - **Gate Controller** - Set up access control

---

## Use Cases

### Research Studies
- Create group sessions for study periods
- Define variables for data collection (responses, timestamps, consent)
- Gate access to specific time windows

### Training Programs
- Set up sessions for cohorts
- Track completion status with boolean variables
- Control when participants can access materials

### Event Management
- Create sessions for events
- Collect attendee information
- Lock registration after deadlines

### Data Collection Campaigns
- Define data schema upfront
- Organize collectors into groups
- Monitor progress through User Data view

---

## Connecting Elements to Variables

Elements in your application can connect to Variable Center variables through the **Connect Tab** in the builder.

1. Select an element
2. Open the Connect Tab
3. Choose "Connect to Variable Center"
4. Select the variable to bind

When connected, element values automatically sync with Variable Center data.

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Settings - https://help.acenji.com/#/./shared-concepts/variable-center/settings/index
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
