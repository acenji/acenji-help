# Gate Controller

The **Gate Controller** is a powerful access control feature in ACENji that lets you manage when and how users can access specific pages, tiles, or elements within your application. Gates act as "gatekeepers" that evaluate conditions before allowing access.

---

## Overview

Gate Controller enables you to:

- **Control timing** - Open content at specific dates/times or after delays
- **Personalize access** - Show or hide content based on user data
- **Enforce prerequisites** - Require completion of other tasks before access
- **Display status** - Show countdowns, completion states, and messages

---

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                     GATE CONTROLLER                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │  Time Lock   │    │Variable Lock │    │ Precondition │  │
│  │              │    │              │    │    Lock      │  │
│  │ Opens after  │    │ Show/hide    │    │ Requires     │  │
│  │ specific     │ +  │ based on     │ +  │ completion   │  │
│  │ date/time    │    │ user data    │    │ of inputs    │  │
│  └──────────────┘    └──────────────┘    └──────────────┘  │
│                            │                                 │
│                            ▼                                 │
│                    ┌──────────────┐                         │
│                    │    TARGET    │                         │
│                    │ Page / Tile  │                         │
│                    │  / Element   │                         │
│                    └──────────────┘                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

When a user tries to access gated content:
1. The gate evaluates all configured conditions
2. If **all** conditions pass, the content is accessible
3. If **any** condition fails, access is restricted with a status message

---

## Gate Components

### 1. Target Selection

Define what content the gate controls:

| Target Level | Description |
|--------------|-------------|
| **Page** | Control access to an entire page (required) |
| **Tile Instance** | Control access to a specific card/form on the page |
| **Single Element** | Control access to a specific field or widget |

[Learn about Select Target](./add-a-gate/select-target/index)

### 2. Lock Conditions

Configure when the gate opens:

| Lock Type | Description |
|-----------|-------------|
| **Time Lock** | Opens after a specific date/time with optional offsets |
| **Variable Lock** | Opens based on user data conditions |
| **Precondition Lock** | Opens after user completes required inputs |

### 3. Display Element

Choose where status messages appear:
- Countdown timers ("Opens in 2d 5h 30m")
- Status indicators ("Open for editing", "Closed")
- Completion confirmations ("Completed on Jan 15, 2024")

[Learn about Set Display Element](./add-a-gate/set-display-element/index)

---

## Gate Status Types

| Status | Description |
|--------|-------------|
| **Opens in...** | Shows countdown until gate opens |
| **Open for editing** | Content is currently accessible |
| **Blocked** | Condition not met (variable or precondition) |
| **Closed** | Gate has expired (past end time) |
| **Completed** | User has finished interacting with content |

---

## Accessing Gate Controller

1. Go to **Dashboard** → **Account** → **Variable Center** → **Gate Controller**
2. Select your **Application** from the dropdown
3. Create or manage Gate Controller templates
4. Add individual gates to your templates

---

## Gate Controller Templates

Gates are organized into **templates** that can be assigned to group sessions:

1. **Create a template** - Give it a descriptive name (e.g., "Weekly Training Gates")
2. **Add gates** - Configure individual gates within the template
3. **Assign to session** - Connect the template to a group session in User Data

This allows you to reuse gate configurations across multiple sessions.

---

## Common Use Cases

### Sequential Learning
Release content on a schedule:
- Day 1: Introduction (opens immediately)
- Day 2: Deep Dive (opens after 24 hours)
- Day 3: Assessment (opens after 48 hours)

### Role-Based Access
Show different content to different users:
- Show "Facilitator Dashboard" only to facilitators
- Show "Premium Content" only to premium members

### Progressive Workflows
Require completion before proceeding:
- Gate "Final Review" behind completion of "Self Reflection"
- Gate "Certificate" behind completion of all modules

### Combined Conditions
Use multiple locks together:
- Open "Day 3 Premium Review" when:
  - 48 hours have passed AND
  - User is a premium member AND
  - User completed the quiz

---

## Sub-sections

### Setup Global Variables
Configure the variables needed for time-based gates.

[Learn about Setup Global Variables](./setup-global-variables/index)

### Add a Gate
Step-by-step guide to creating and configuring gates.

[Learn about Add a Gate](./add-a-gate/index)

---

## Best Practices

1. **Plan your gate sequence** - Map out what unlocks when before building

2. **Use descriptive names** - "Day 2 - Reflection" is better than "Gate 2"

3. **Test with short intervals** - Use minutes instead of days during testing

4. **Consider time zones** - Set times appropriate for your user base

5. **Provide clear feedback** - Use display elements to show gate status

6. **Document your logic** - Keep notes on why each gate exists

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Variable Center - https://help.acenji.com/#/./shared-concepts/variable-center/index
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
