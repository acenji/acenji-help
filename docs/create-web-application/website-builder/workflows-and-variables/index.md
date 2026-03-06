# Workflows and Variables

The **Workflows and Variables** section allows you to manage application logic, define events, and configure variables that control your application's behavior and data flow.

---

## Overview

This section enables you to:

- **Define workflows** that respond to user actions
- **Configure events** that trigger actions
- **Manage variables** for storing and passing data
- **Create dynamic behavior** in your application

---

## Accessing Workflows and Variables

1. Open the **Website Builder**
2. Look for the **Workflows** or **Variables** section in the builder interface
3. Access workflow configuration from element events

---

## Understanding Workflows

### What is a Workflow?

A **workflow** is a sequence of actions that execute in response to a trigger:

```
┌─────────────────────────────────────────────────────────────┐
│                      WORKFLOW STRUCTURE                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────────┐                                          │
│   │   TRIGGER    │  ← User clicks button                    │
│   │  (Event)     │                                          │
│   └──────┬───────┘                                          │
│          │                                                   │
│          ▼                                                   │
│   ┌──────────────┐                                          │
│   │   ACTION 1   │  ← Validate form                         │
│   └──────┬───────┘                                          │
│          │                                                   │
│          ▼                                                   │
│   ┌──────────────┐                                          │
│   │   ACTION 2   │  ← Save data                             │
│   └──────┬───────┘                                          │
│          │                                                   │
│          ▼                                                   │
│   ┌──────────────┐                                          │
│   │   ACTION 3   │  ← Navigate to next page                 │
│   └──────────────┘                                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Events (Triggers)

Events initiate workflows. Common events include:

### User Interaction Events

| Event | Description |
|-------|-------------|
| **Click** | User clicks on an element |
| **Submit** | Form is submitted |
| **Change** | Input value changes |
| **Focus** | Element gains focus |
| **Blur** | Element loses focus |

### Page Events

| Event | Description |
|-------|-------------|
| **Page Load** | Page finishes loading |
| **Page Exit** | User leaves the page |
| **Scroll** | User scrolls the page |

### Data Events

| Event | Description |
|-------|-------------|
| **Data Loaded** | Data fetch completes |
| **Data Changed** | Database record updates |
| **Error** | An error occurs |

---

## Actions

Actions are what happen when an event triggers:

### Navigation Actions

| Action | Description |
|--------|-------------|
| **Navigate to Page** | Go to another page |
| **Open URL** | Open external link |
| **Go Back** | Return to previous page |
| **Open Modal** | Display a modal/popup |

### Data Actions

| Action | Description |
|--------|-------------|
| **Set Variable** | Assign a value to a variable |
| **Save Data** | Write to database |
| **Fetch Data** | Retrieve data from source |
| **Calculate** | Perform calculations |

### Visual Actions

| Action | Description |
|--------|-------------|
| **Show Element** | Make element visible |
| **Hide Element** | Make element invisible |
| **Change Style** | Modify element styling |
| **Scroll To** | Scroll to an element |

### Tile Actions

| Action | Description |
|--------|-------------|
| **Clone Tile** | Create a copy of a tile |
| **Delete Tile** | Remove a tile |
| **Refresh Tile** | Reload tile content |

---

## Variables

Variables store data that can be used throughout your application.

### Variable Types

| Type | Description | Example |
|------|-------------|---------|
| **Text** | String values | "Hello World" |
| **Number** | Numeric values | 42, 3.14 |
| **Boolean** | True/false values | true |
| **Date/Time** | Date and time values | 2024-01-15 |
| **Object** | Complex data structures | {name: "John"} |
| **Array** | Lists of values | [1, 2, 3] |

### Variable Scope

| Scope | Description | Lifetime |
|-------|-------------|----------|
| **Page** | Available on current page only | Page session |
| **Session** | Available across pages | Browser session |
| **User** | Tied to user account | Until changed |
| **Global** | Shared across users | Persistent |

---

## Creating Variables

### Step 1: Open Variables Panel

1. Access the Variables section
2. Click **"Add Variable"**

### Step 2: Configure Variable

| Property | Description |
|----------|-------------|
| **Name** | Unique identifier (no spaces) |
| **Type** | Data type (text, number, etc.) |
| **Default Value** | Initial value |
| **Scope** | Where variable is accessible |

### Step 3: Save

1. Click **Save**
2. Variable is now available for use

---

## Using Variables

### In Element Content

Reference variables in text:

```
Welcome, {userName}!
You have {notificationCount} new messages.
```

### In Conditions

Use variables in conditional logic:

```
IF {userRole} equals "admin"
THEN Show admin panel
ELSE Hide admin panel
```

### In Actions

Set or modify variable values:

```
Action: Set Variable
Variable: {totalPrice}
Value: {itemPrice} * {quantity}
```

---

## Building Workflows

### Example: Form Submission Workflow

```
Trigger: Submit Button Click

Actions:
1. Validate Form
   └─ Check required fields

2. IF Validation Passes
   ├─ Save Data to Database
   ├─ Set Variable: {submissionSuccess} = true
   └─ Navigate to Thank You Page

3. IF Validation Fails
   ├─ Set Variable: {submissionSuccess} = false
   └─ Show Error Message
```

### Example: Dynamic Content Loading

```
Trigger: Page Load

Actions:
1. Fetch User Data
   └─ GET /api/user/{userId}

2. Set Variables
   ├─ {userName} = response.name
   ├─ {userEmail} = response.email
   └─ {userRole} = response.role

3. Show User Content Tile
```

---

## Workflow Conditions

Add conditions to control action execution:

### IF/ELSE Logic

```
IF {condition}
  THEN [Action A]
  ELSE [Action B]
```

### AND/OR Logic

```
IF {condition1} AND {condition2}
  THEN [Action]

IF {condition1} OR {condition2}
  THEN [Action]
```

---

## Common Workflow Patterns

### Login Flow

```
Button Click → Validate Credentials →
IF Valid → Navigate to Dashboard
IF Invalid → Show Error Message
```

### Data Submission

```
Submit Click → Validate Data → Save to Database →
Show Success Message → Reset Form
```

### Dynamic Filtering

```
Dropdown Change → Set Filter Variable →
Refresh Data List → Display Results
```

### Modal Open/Close

```
Button Click → Open Modal →
Close Button Click → Close Modal
```

---

## Best Practices

1. **Name variables clearly** - Use descriptive names like `userEmail` not `x`

2. **Keep workflows focused** - One purpose per workflow

3. **Handle errors** - Always include error handling

4. **Test thoroughly** - Verify all paths work correctly

5. **Document complex workflows** - Keep notes on what each does

6. **Use appropriate scope** - Don't use global scope unnecessarily

7. **Validate inputs** - Check data before processing

---

## Troubleshooting

### Variable Not Updating

- Verify the action is setting the correct variable
- Check variable scope
- Ensure the trigger is firing

### Workflow Not Executing

- Verify the trigger is configured correctly
- Check condition logic
- Look for errors in the console

### Actions Not Running in Order

- Verify action sequence
- Check for async operations
- Add appropriate delays if needed

### Data Not Persisting

- Verify save action is completing
- Check database permissions
- Review error messages

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Website Builder - https://help.acenji.com/#/./create-web-application/website-builder/index
<span class="triangle"></span> Events Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/events-tab/index
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
