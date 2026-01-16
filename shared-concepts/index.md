# Shared Concepts

The **Shared Concepts** section covers features and functionality that are common across ACENji applications, whether you're building for web or mobile. Understanding these concepts is essential for creating powerful, dynamic applications.

---

## Overview

Shared Concepts include features that work the same way across platforms:

- **Variable Center** - Manage dynamic data, users, and sessions
- **Gate Controller** - Control access timing and conditions
- **Roles and Permissions** - Define who can do what

---

## Why Shared Concepts Matter

```
┌─────────────────────────────────────────────────────────────┐
│                    SHARED CONCEPTS                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌────────────────────────────────────────────────────┐   │
│   │              Variable Center                        │   │
│   │         Gate Controller                             │   │
│   │         Roles and Permissions                       │   │
│   └────────────────────────────────────────────────────┘   │
│                          │                                   │
│            ┌─────────────┴─────────────┐                    │
│            ▼                           ▼                    │
│   ┌─────────────────┐         ┌─────────────────┐          │
│   │  Web Builder    │         │  Mobile Builder │          │
│   │                 │         │                 │          │
│   │  Same features  │         │  Same features  │          │
│   │  Same behavior  │         │  Same behavior  │          │
│   └─────────────────┘         └─────────────────┘          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

These concepts provide consistent functionality regardless of which platform you're building for.

---

## Variable Center

The **Variable Center** is your hub for managing dynamic data in your applications.

### What It Does

- **Global Variables** - Define data schemas used across your application
- **Group Sessions** - Organize users into groups with shared settings
- **User Data** - Manage individual user information and settings

### Key Features

| Feature | Description |
|---------|-------------|
| **Variable Types** | Text, number, boolean, datetime, enum |
| **Session Management** | Create and manage group sessions |
| **User Assignment** | Add users to sessions with specific data |
| **Data Grid** | View and edit user data in a spreadsheet-like interface |

[Learn about Variable Center](./variable-center/index)

---

## Gate Controller

The **Gate Controller** enables sophisticated access control based on timing, conditions, and prerequisites.

### What It Does

- **Time-Based Access** - Open content at specific dates/times
- **Condition-Based Access** - Show/hide based on user data
- **Prerequisite-Based Access** - Require completion before access

### Key Features

| Feature | Description |
|---------|-------------|
| **Time Locks** | Content opens after a specified time offset |
| **Variable Locks** | Content shows based on user variables |
| **Precondition Locks** | Content requires prior completion |
| **Status Display** | Show countdown, open, closed, completed states |

[Learn about Gate Controller](./gate-controller/index)

---

## Roles and Permissions

**Roles and Permissions** define what different users can see and do in your application.

### What It Does

- **Define Roles** - Create user categories (admin, user, guest)
- **Assign Permissions** - Control access to features
- **Page-Level Access** - Restrict entire pages
- **Element-Level Access** - Control individual elements

### Key Features

| Feature | Description |
|---------|-------------|
| **Role Definition** | Create custom roles with specific permissions |
| **Page Access** | Restrict who can view pages |
| **Content Visibility** | Show/hide elements by role |
| **Action Control** | Enable/disable features by role |

[Learn about Roles and Permissions](./roles-and-permissions/index)

---

## How These Concepts Work Together

### Example: Training Application

```
Variable Center:
├── Global Variables: trainee_status, completion_level
├── Group Session: "March 2024 Training Cohort"
└── User Data: Individual trainee records

Gate Controller:
├── Day 1: Opens immediately
├── Day 2: Opens +24h after session start
├── Day 3: Opens +48h AND requires Day 2 completion
└── Certificate: Opens when all modules complete

Roles and Permissions:
├── Trainee: View assigned content
├── Facilitator: View all content, manage trainees
└── Admin: Full access, manage sessions
```

---

## When to Use Each

| Scenario | Use This |
|----------|----------|
| Store user-specific data | Variable Center |
| Manage groups of users | Variable Center |
| Release content on a schedule | Gate Controller |
| Require completion before access | Gate Controller |
| Show different content to different roles | Roles and Permissions |
| Restrict administrative functions | Roles and Permissions |

---

## Getting Started

1. **Start with Variable Center** - Define your data structure
2. **Add Gate Controller** - If you need timed or conditional access
3. **Configure Roles** - Set up access control

---

## Best Practices

1. **Plan before building** - Map out your data, timing, and access needs

2. **Start simple** - Begin with basic roles and expand as needed

3. **Test thoroughly** - Verify access control works for all user types

4. **Document your configuration** - Keep notes on what each setting does

5. **Use consistent naming** - Clear names make maintenance easier

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Getting Started - https://help.acenji.com/#/./getting-started/index
<span class="triangle"></span> Web Application - https://help.acenji.com/#/./create-web-application/index
<span class="triangle"></span> Mobile Application - https://help.acenji.com/#/./create-native-mobile-app/index

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
