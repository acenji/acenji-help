# Add a Gate

This guide walks you through the process of adding a gate to your Gate Controller template. Gates control access to specific content based on time, user data, or completion of prerequisites.

---

## Overview

Adding a gate involves four main steps:

1. **Select Target** - Choose what content to gate (page, tile, or element)
2. **Set Conditions** - Configure when the gate opens (time, variable, or precondition locks)
3. **Set Display Element** - Choose where status messages appear
4. **Save** - Apply your configuration

---

## Prerequisites

Before adding a gate:

1. A **Gate Controller template** exists (or create one)
2. Your application has **pages and tiles** built
3. If using time locks, **datetime variables** are configured
4. If using variable locks, the **comparison variables** exist

---

## Step-by-Step Guide

### Step 1: Open Gate Controller

1. Go to **Variable Center** → **Gate Controller**
2. Select your **Application**
3. Find your Gate Controller template (or create one with "Add Gate Controller Template")

### Step 2: Add New Gate

1. Click the **"Add Gate"** button within your template
2. The gate editor modal opens
3. Enter a **Gate Name** (required) - e.g., "Day 2 - Reflection"

### Step 3: Configure Target

In the **"Section: Target"** tab:

1. Select a **Page** (required)
2. Optionally select a **Tile Instance**
3. Optionally select a **Single Element**
4. Select an **Overlay Element** for status display

[Learn more about Select Target](./select-target/index)

### Step 4: Configure Conditions

Enable and configure one or more lock conditions:

**Time Lock:**
- Enable the time lock toggle
- Select start time variables
- Set offset (e.g., "+24h", "+2d")
- Optionally set end time offset

[Learn more about Time Lock](./set-time-lock/index)

**Variable Lock:**
- Enable the variable lock toggle
- Select the variable to check
- Choose an operator (==, !=, >, <)
- Enter the comparison value

[Learn more about Variable Lock](./set-variable-lock/index)

**Precondition Lock:**
- Enable the precondition lock toggle
- Select the dependency source page
- Optionally select tile and element

[Learn more about Precondition Lock](./set-precondition-lock/index)

### Step 5: Configure Display

Set up how the gate status appears to users:

[Learn more about Display Element](./set-display-element/index)

### Step 6: Save

Click **Save** to add the gate to your template.

---

## Gate Editor Sections

The gate editor is organized into sections:

| Section | Purpose |
|---------|---------|
| **Name** | Identify the gate |
| **Target** | What content is being gated |
| **Time Lock Condition** | Time-based access control |
| **Page Access Condition** | Variable-based visibility |
| **Precondition Lock** | Completion-based access |
| **Display** | Status message configuration |

---

## Combining Multiple Conditions

Gates can use **multiple lock types simultaneously**. When multiple locks are enabled, the gate opens only when **ALL** conditions are met:

```
Example: Complex Gate
├─ Time Lock: Opens 48 hours after start
├─ Variable Lock: User is premium member
└─ Precondition Lock: Completed quiz

Gate opens when:
• 48 hours have passed AND
• User's premium status is true AND
• User has completed the quiz
```

---

## Gate Icons

In the gate list, icons indicate which conditions are active:

| Icon | Meaning |
|------|---------|
| 🕐 Clock | Time Lock enabled |
| 🔒 Lock | Precondition Lock enabled |
| # Hash | Variable Lock enabled |
| ✉️ Mail | Email notification enabled |

---

## Editing an Existing Gate

1. Find the gate in your template list
2. Click the **Edit** button (pencil icon)
3. Modify settings as needed
4. Click **Save**

---

## Deleting a Gate

1. Find the gate in your template list
2. Click the **Delete** button (trash icon)
3. Confirm the deletion

> **Warning:** Deleting a gate cannot be undone.

---

## Reordering Gates

Gates are evaluated in order. To change the order:

1. Click the **"Sort Pages"** button
2. Drag gates to reorder them
3. Click **Save**

This is useful when creating sequential content where order matters.

---

## Best Practices

1. **Name gates descriptively** - Include timing info like "Day 2" or "Week 1"

2. **Start simple** - Add one condition first, test, then add more

3. **Test thoroughly** - Verify gates work before going live

4. **Document your logic** - Keep notes on why each gate exists

5. **Use consistent patterns** - If Day 1 opens at +0h, Day 2 at +24h, keep the pattern

---

## Sub-sections

### Select Target
Choose what content the gate controls.

[Learn about Select Target](./select-target/index)

### Set Time Lock
Configure time-based access control.

[Learn about Set Time Lock](./set-time-lock/index)

### Set Variable Lock
Configure data-based visibility.

[Learn about Set Variable Lock](./set-variable-lock/index)

### Set Precondition Lock
Configure completion-based access.

[Learn about Set Precondition Lock](./set-precondition-lock/index)

### Set Display Element
Configure status message display.

[Learn about Set Display Element](./set-display-element/index)

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Gate Controller - https://help.acenji.com/#/./shared-concepts/gate-controller/index
<span class="triangle"></span> Setup Global Variables - https://help.acenji.com/#/./shared-concepts/gate-controller/setup-global-variables/index
<span class="triangle"></span> Variable Center - https://help.acenji.com/#/./shared-concepts/variable-center/index

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
