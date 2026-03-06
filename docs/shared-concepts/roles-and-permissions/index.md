# Roles and Permissions

**Roles and Permissions** provide a comprehensive access control system for your ACENji applications. This feature allows you to define who can access what content and perform which actions.

---

## Overview

Roles and Permissions enable you to:

- **Create user roles** with different access levels
- **Control page visibility** based on roles
- **Restrict features** to specific user types
- **Build secure applications** with proper access control

---

## How Roles Work

```
┌─────────────────────────────────────────────────────────────┐
│                    ROLE HIERARCHY                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────────────┐                                      │
│   │      ADMIN       │  ← Full access to all features       │
│   │   (Highest)      │                                      │
│   └────────┬─────────┘                                      │
│            │ Inherits from                                   │
│            ▼                                                 │
│   ┌──────────────────┐                                      │
│   │   FACILITATOR    │  ← Manage content and users          │
│   │                  │                                      │
│   └────────┬─────────┘                                      │
│            │ Inherits from                                   │
│            ▼                                                 │
│   ┌──────────────────┐                                      │
│   │   PARTICIPANT    │  ← Access assigned content           │
│   │                  │                                      │
│   └────────┬─────────┘                                      │
│            │ Inherits from                                   │
│            ▼                                                 │
│   ┌──────────────────┐                                      │
│   │      GUEST       │  ← Limited public access             │
│   │    (Lowest)      │                                      │
│   └──────────────────┘                                      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Key Concepts

### Roles

A **role** is a named set of permissions:

| Role | Typical Use |
|------|-------------|
| **Admin** | System administrators with full control |
| **Facilitator** | Content managers, moderators |
| **Participant** | Standard users, members |
| **Guest** | Unauthenticated or limited users |

### Permissions

**Permissions** are specific capabilities:

| Permission Type | Examples |
|----------------|----------|
| **View** | See content, pages, data |
| **Create** | Add new content, records |
| **Edit** | Modify existing content |
| **Delete** | Remove content, records |
| **Manage** | Administer users, settings |

---

## Access Levels

### Page-Level Access

Control who can view entire pages:

| Setting | Who Can Access |
|---------|---------------|
| **Public** | Anyone (no authentication) |
| **Authenticated** | Any logged-in user |
| **Specific Roles** | Only selected roles |
| **Owner Only** | Only the content creator |

### Element-Level Access

Control individual elements:

- Show/hide based on role
- Enable/disable based on role
- Different content for different roles

---

## Configuring Roles

### Creating a Role

1. Go to **Project Settings** → **Roles and Permissions**
2. Click **"+ Add Role"**
3. Enter role name and description
4. Configure permissions
5. Save

### Role Properties

| Property | Description |
|----------|-------------|
| **Name** | Unique role identifier |
| **Description** | What this role is for |
| **Inherits From** | Parent role (optional) |
| **Permissions** | List of allowed actions |

---

## Permission Types

### Content Permissions

| Permission | Description |
|------------|-------------|
| `content.view` | View pages and content |
| `content.create` | Create new content |
| `content.edit` | Edit existing content |
| `content.delete` | Delete content |
| `content.publish` | Publish changes |

### User Permissions

| Permission | Description |
|------------|-------------|
| `users.view` | View user list |
| `users.create` | Create new users |
| `users.edit` | Edit user profiles |
| `users.delete` | Remove users |
| `users.assign_roles` | Change user roles |

### System Permissions

| Permission | Description |
|------------|-------------|
| `settings.view` | View system settings |
| `settings.edit` | Modify settings |
| `analytics.view` | Access analytics |
| `logs.view` | View system logs |

---

## Role Inheritance

Roles can inherit from other roles:

```
Guest Role
├── Permission: content.view

Participant Role (inherits Guest)
├── Permission: content.view (inherited)
├── Permission: content.create
└── Permission: own.edit

Facilitator Role (inherits Participant)
├── Permission: content.view (inherited)
├── Permission: content.create (inherited)
├── Permission: own.edit (inherited)
├── Permission: content.edit
└── Permission: users.view
```

---

## Applying Access Control

### To Pages

1. Select a page
2. Open Page Settings
3. Find **Access Control**
4. Select allowed roles
5. Save

### To Elements

1. Select an element
2. Open Conditions section
3. Add role-based condition:
   ```
   Show IF user.role in ["Admin", "Facilitator"]
   ```

### To Features

1. Select the feature element (button, link)
2. Add condition:
   ```
   Enable IF user.role == "Admin"
   ```

---

## Common Patterns

### Admin-Only Features

```
Page: Admin Dashboard
Access: Admin only

Elements:
- User Management Button: Admin only
- System Settings: Admin only
- Delete Actions: Admin only
```

### Self-Service Access

```
User Profile Page
- View own data: All authenticated
- Edit own data: All authenticated
- View others: Facilitator, Admin
- Edit others: Admin only
```

### Tiered Content

```
Free Tier:
- Basic features: Yes
- Premium features: No

Premium Tier:
- Basic features: Yes
- Premium features: Yes
```

---

## Best Practices

1. **Start with least privilege** - Give minimum necessary permissions

2. **Use role inheritance** - Build on existing roles

3. **Keep roles simple** - Fewer roles are easier to manage

4. **Name roles clearly** - Descriptive names prevent confusion

5. **Document your roles** - Keep notes on what each role does

6. **Test all scenarios** - Verify access for each role type

7. **Review regularly** - Audit permissions periodically

---

## Security Considerations

### Defense in Depth

- Don't rely only on UI hiding
- Validate permissions on the server
- Log access attempts

### Separation of Duties

- Critical actions require multiple approvals
- Admin actions are logged
- No single point of failure

### Regular Audits

- Review who has what access
- Remove unused roles
- Update permissions as needs change

---

## Troubleshooting

### User Can't Access Page

- Verify user's role assignment
- Check page access settings
- Review any conditions blocking access

### Wrong Content Showing

- Check visibility conditions
- Verify role is correct
- Test with a user who has expected role

### Permissions Not Working

- Confirm role configuration
- Check for conflicting conditions
- Verify inheritance chain

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Shared Concepts - https://help.acenji.com/#/./shared-concepts/index
<span class="triangle"></span> Variable Center - https://help.acenji.com/#/./shared-concepts/variable-center/index
<span class="triangle"></span> User Roles - https://help.acenji.com/#/./getting-started/user-roles/index

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
