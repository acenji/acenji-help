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

## Two Different Grids on the User Data Page — Don't Confuse Them

The User Data page shows up to two separate grids for a session, and they serve different purposes:

| | Top grid ("Add gate controller section") | Bottom grid ("Group session participants") |
|---|---|---|
| **One row per** | Session (one value, shared by everyone) | Participant |
| **What appears there** | Only variable names already used as a *Start Time Variable* by the assigned Gate Controller template | Every variable added to this session via Add Variables |
| **How you set a value** | Enter it once | Enter it on every participant's row — there is no single shared "group" row |

A brand-new variable you just created in **Variable Center → Settings → Variables** will **not** appear in the top grid automatically, even if you intend it as a cycle-open time — it only shows up there once some gate's *Start Time Variable* is actually re-pointed at it (see [Set Time Lock](../../gate-controller/add-a-gate/set-time-lock/index.md)). If you want a custom-named variable (e.g. a "Cycle 2 Open Time") to work through the top grid, re-point the relevant gate first; otherwise use the bottom grid and enter the value on each participant's row.

A value entered in the top grid is automatically copied into every participant's own data, including a participant who joins the session later — you do not need to also enter it in the bottom grid.

---

## Showing a Live Countdown in Your Own Text

Before building a custom countdown, check whether the **built-in** one already covers what you need: every time-locked gate can show a live "Opens in Xd Xh Xm" status automatically in its own Display Element, with no variable required at all — see [Set Display Element](../../gate-controller/add-a-gate/set-display-element/index.md). This is almost always the simpler option, and it's the first thing to check if a gate used to show a countdown and stopped.

If you want a countdown to appear somewhere other than the gate's own overlay — for example, proactively on an earlier page, before anyone has been blocked by anything — you can build one from a Gate-Controller time variable:

1. Give the variable a value (top grid if it is a real gate's Start Time Variable, otherwise the bottom grid, on every participant's row — see the table above)
2. On any Info element, add text using the countdown tokens:
   - `[countdown: VarName]` → "3 hours and 45 minutes"
   - `[countdown-hours: VarName]` → "3" (total whole hours, can exceed 24)
   - `[countdown-minutes: VarName]` → "45"
   - `[VarName]` on its own renders the raw date/time itself, not a countdown
3. `VarName` is the exact variable name — e.g. `[countdown-hours: GC-Start-Cycle-Time]`

The token ticks on its own (re-renders every minute) once the variable has a value. If it never leaves the page as literal bracketed text, the variable simply has no value yet for that participant — go back and check which of the two grids above it needs to be entered into.

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
