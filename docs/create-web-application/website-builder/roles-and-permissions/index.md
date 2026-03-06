# Roles and Permissions

The **Roles and Permissions** feature in the Website Builder allows you to control who can access different parts of your application and what actions they can perform. This is essential for building secure, multi-user applications.

---

## Overview

Roles and Permissions enable you to:

- **Define user roles** with specific access levels
- **Control page access** based on user role
- **Show/hide content** for different user types
- **Restrict actions** based on permissions

---

## Understanding Roles

### What is a Role?

A **role** is a named set of permissions that can be assigned to users:

```
┌─────────────────────────────────────────────────────────────┐
│                      ROLE HIERARCHY                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────────────┐                                      │
│   │      ADMIN       │  ← Full access to everything         │
│   └────────┬─────────┘                                      │
│            │                                                 │
│   ┌────────┴─────────┐                                      │
│   │    FACILITATOR   │  ← Manage content and users          │
│   └────────┬─────────┘                                      │
│            │                                                 │
│   ┌────────┴─────────┐                                      │
│   │    PARTICIPANT   │  ← View and interact with content    │
│   └────────┬─────────┘                                      │
│            │                                                 │
│   ┌────────┴─────────┐                                      │
│   │      GUEST       │  ← Limited view-only access          │
│   └──────────────────┘                                      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Default Roles

ACENji provides default roles that can be used or customized:

| Role | Description | Typical Permissions |
|------|-------------|---------------------|
| **Admin** | Full system access | All permissions |
| **Facilitator** | Content management | Create, edit, view |
| **Participant** | Standard user | View, submit forms |
| **Guest** | Limited access | View only |

---

## Configuring Roles

### Accessing Role Settings

1. Open your project settings
2. Navigate to **Roles and Permissions**
3. View and manage available roles

### Creating a Custom Role

1. Click **"Add Role"**
2. Enter a role name
3. Configure permissions
4. Save the role

### Role Properties

| Property | Description |
|----------|-------------|
| **Name** | Role identifier |
| **Description** | What this role is for |
| **Permissions** | List of granted permissions |
| **Inherits From** | Parent role to inherit permissions |

---

## Permissions

Permissions define specific actions users can take:

### Content Permissions

| Permission | Description |
|------------|-------------|
| **View Content** | See pages and content |
| **Edit Content** | Modify content |
| **Create Content** | Add new content |
| **Delete Content** | Remove content |

### User Permissions

| Permission | Description |
|------------|-------------|
| **View Users** | See user list |
| **Edit Users** | Modify user profiles |
| **Create Users** | Add new users |
| **Delete Users** | Remove users |

### Data Permissions

| Permission | Description |
|------------|-------------|
| **View Data** | Read database records |
| **Edit Data** | Modify records |
| **Create Data** | Add new records |
| **Delete Data** | Remove records |
| **Export Data** | Download data |

---

## Page-Level Access Control

### Restricting Page Access

1. Select a page in the builder
2. Open page settings
3. Find **Access Control** section
4. Select which roles can access

### Access Options

| Option | Description |
|--------|-------------|
| **Public** | Anyone can view |
| **Authenticated** | Any logged-in user |
| **Specific Roles** | Only selected roles |
| **Custom Condition** | Based on variable/condition |

### Example Configuration

```
Page: Admin Dashboard
Access: Specific Roles
Allowed Roles: [Admin, Facilitator]

Result: Only admins and facilitators can view this page
```

---

## Element-Level Permissions

Control visibility and interaction at the element level:

### Showing/Hiding Elements

1. Select the element
2. Open **Conditions** section
3. Add a role-based condition

### Example

```
Element: Delete Button
Condition: Show only if user.role == "Admin"

Result: Only admins see the delete button
```

### Enabling/Disabling Elements

```
Element: Edit Button
Condition: Enable if user.role in ["Admin", "Facilitator"]

Result: Button is disabled for participants/guests
```

---

## Tile-Level Permissions

Control entire tiles based on roles:

### Tile Visibility

```
Tile: Management Panel
Visibility: user.role == "Admin"

Result: Management panel only shows for admins
```

### Tile Access

```
Tile: User Profile Form
Edit Permission: user.role in ["Admin", "Facilitator"] OR user.id == profile.userId

Result: Admins/facilitators can edit any profile
        Users can edit their own profile
```

---

## Role Assignment

### Manual Assignment

1. Go to user management
2. Select a user
3. Assign role(s)
4. Save changes

### Automatic Assignment

Set default role for new users:

```
Setting: Default Role
Value: "Participant"

Result: New users automatically get Participant role
```

### Dynamic Role Assignment

Based on conditions or data:

```
IF user.subscription == "Premium"
THEN Assign "Premium Member" role
```

---

## Role-Based Navigation

### Conditional Navigation Items

Show different navigation based on role:

```
Navigation Menu:
├── Home (all roles)
├── Dashboard (authenticated)
├── Reports (Facilitator, Admin)
├── Settings (Admin only)
└── Logout (authenticated)
```

### Redirect Based on Role

```
After Login:
IF user.role == "Admin"
  → Redirect to Admin Dashboard
ELSE IF user.role == "Facilitator"
  → Redirect to Facilitator Dashboard
ELSE
  → Redirect to User Home
```

---

## Common Patterns

### Admin-Only Features

```
Page: System Settings
Access: Admin role only

Elements:
- All visible to Admin
- Hidden for other roles
```

### Self-Service Access

```
User Profile Page
Access: Authenticated users

Conditions:
- View own data: Always
- Edit own data: Always
- View others' data: Facilitator, Admin
- Edit others' data: Admin only
```

### Tiered Access

```
Free User: Basic content
Premium User: All content + extra features
Enterprise User: Premium + admin tools
```

---

## Best Practices

1. **Start with least privilege** - Give minimum necessary permissions

2. **Use role inheritance** - Build on base roles

3. **Keep roles simple** - Fewer roles are easier to manage

4. **Document roles** - Explain what each role can do

5. **Test thoroughly** - Verify access with test accounts

6. **Review regularly** - Audit roles and permissions periodically

7. **Handle edge cases** - Consider what happens with no role

---

## Troubleshooting

### User Can't Access Page

- Verify user has correct role
- Check page access settings
- Review any conditions that might block access

### Element Not Showing

- Check element visibility conditions
- Verify role-based conditions
- Test with a user who should see it

### Too Much Access

- Review role permissions
- Check for overly broad conditions
- Audit what each role can access

### Role Not Saving

- Check for validation errors
- Ensure role name is unique
- Verify permissions are valid

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Website Builder - https://help.acenji.com/#/./create-web-application/website-builder/index
<span class="triangle"></span> Conditions Section - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/conditions-section/index
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
