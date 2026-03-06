# Tutorial: Roles and Permissions

This tutorial teaches you how to implement access control in your mobile application. You'll learn to create roles, restrict features, and show different content to different user types.

---

## What You'll Learn

By the end of this tutorial, you'll know how to:
- Set up user roles in your mobile app
- Control page and feature access
- Show different content to different roles
- Build secure, multi-user applications

---

## Prerequisites

Before starting:
- Complete the "Workflow and Variables" tutorial
- Understand basic app navigation
- Have a multi-page mobile app

---

## Step 1: Understanding Mobile App Roles

### 1.1 Why Roles Matter

In a mobile app, different users need different access:

```
┌─────────────────────────────────────────────────────────────┐
│                    USER TYPES                                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│   │    ADMIN     │  │    USER      │  │    GUEST     │     │
│   │              │  │              │  │              │     │
│   │ Full access  │  │ Standard     │  │ Limited      │     │
│   │ Manage users │  │ Own content  │  │ View only    │     │
│   │ Settings     │  │ Basic        │  │ Public       │     │
│   └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Common Role Patterns

| Role | Description | Typical Access |
|------|-------------|----------------|
| **Admin** | System administrator | Everything |
| **Manager** | Content/user manager | Most features |
| **User** | Regular user | Standard features |
| **Guest** | Non-authenticated | Public only |

---

## Step 2: Setting Up Roles

### 2.1 Access Role Configuration

1. Go to **Project Settings** → **Roles and Permissions**
2. View existing roles
3. Add or modify roles as needed

### 2.2 Create a Custom Role

1. Click **"+ Add Role"**
2. Enter role details:
   - Name: "Premium User"
   - Description: "Users with premium subscription"
3. Configure permissions
4. Save

### 2.3 Role Properties

| Property | Description |
|----------|-------------|
| **Name** | Role identifier |
| **Description** | What this role does |
| **Permissions** | Allowed actions |
| **Parent Role** | Role to inherit from |

---

## Step 3: Assigning Roles to Users

### 3.1 Manual Assignment

1. Go to **User Management**
2. Select a user
3. Choose their role
4. Save

### 3.2 Automatic Assignment

Set default role for new users:

```
On user signup:
  Assign role: "User"
```

### 3.3 Role via Variable

Store role in a user variable:

```
Variable: userRole
Type: Text
Value: "admin" | "user" | "guest"
```

---

## Step 4: Page-Level Access Control

### 4.1 Restrict a Page

1. Select the page
2. Open page settings
3. Find **Access Control**
4. Choose restriction type:

| Option | Who Can Access |
|--------|---------------|
| **Public** | Anyone |
| **Authenticated** | Any logged-in user |
| **Specific Roles** | Only selected roles |

### 4.2 Example: Admin Dashboard

```
Page: Admin Dashboard
Access: Specific Roles
Allowed: ["Admin"]

Result: Only admins can access this page
```

### 4.3 Handle Unauthorized Access

Configure what happens when access is denied:

```
On unauthorized access:
  Option 1: Show "Access Denied" message
  Option 2: Redirect to login
  Option 3: Navigate to previous page
```

---

## Step 5: Element-Level Access

### 5.1 Hide Elements by Role

Show elements only to specific roles:

1. Select the element
2. Open Conditions
3. Add condition:
   ```
   Show IF {userRole} == "admin"
   ```

### 5.2 Disable Elements by Role

Allow viewing but not interaction:

```
Element: Delete Button
Condition: Enable IF {userRole} in ["admin", "manager"]
```

### 5.3 Different Content by Role

Show different content:

```
Card 1: User Dashboard
  Show IF {userRole} == "user"

Card 2: Admin Dashboard
  Show IF {userRole} == "admin"
```

---

## Step 6: Role-Based Navigation

### 6.1 Different Home Screens

Navigate based on role after login:

```
On Login Success:
  IF {userRole} == "admin"
    Navigate to Admin Home
  ELSE IF {userRole} == "user"
    Navigate to User Home
  ELSE
    Navigate to Guest Home
```

### 6.2 Dynamic Navigation Menu

Show different menu items:

```
Menu Items:
├── Home (all roles)
├── Dashboard (authenticated)
├── Settings (user, admin)
├── Admin Panel (admin only)
└── Logout (authenticated)
```

---

## Step 7: Protecting Features

### 7.1 Premium Features

Gate features behind subscription:

```
Feature: Export Data
Condition: Show IF {isPremium} == true OR {userRole} == "admin"
```

### 7.2 Admin Actions

Restrict dangerous actions:

```
Action: Delete User
Condition: Enable IF {userRole} == "admin"
Confirmation: "Are you sure you want to delete this user?"
```

### 7.3 Edit Permissions

Control who can edit content:

```
Edit Button on Profile Card:
  Show IF {userRole} == "admin" OR {profileOwnerId} == {currentUserId}
```

---

## Step 8: Checking Roles in Workflows

### 8.1 Role Check Action

Add role verification in workflows:

```
On Submit:
  IF {userRole} != "admin"
    Show error: "Admin access required"
    Stop workflow
  ELSE
    Continue with action
```

### 8.2 Log Role-Based Actions

Track who does what:

```
On Delete:
  Log: "{userName} ({userRole}) deleted item {itemId}"
```

---

## Step 9: Building a Complete Example

### 9.1 App Structure

```
Pages:
├── Login (public)
├── Home (authenticated)
├── Profile (authenticated)
├── Admin Panel (admin only)
├── Settings (admin, manager)
└── Reports (manager, admin)
```

### 9.2 Implementation Steps

1. **Set up roles**: Admin, Manager, User, Guest

2. **Create pages**: All pages in the structure

3. **Configure access**:
   - Login: Public
   - Home: Authenticated
   - Admin Panel: Admin only
   - Reports: Manager, Admin

4. **Add role-based content**:
   - Admin sees management tools
   - Users see their content
   - Guests see signup prompt

5. **Test each role**:
   - Login as admin
   - Login as regular user
   - Test as guest

---

## Step 10: Testing Roles

### 10.1 Create Test Users

Create users with each role:
- testadmin@example.com (Admin)
- testuser@example.com (User)
- testmanager@example.com (Manager)

### 10.2 Test Each Scenario

| Scenario | Expected Result |
|----------|-----------------|
| Admin accesses admin panel | Success |
| User accesses admin panel | Denied/Redirected |
| Guest views public content | Success |
| User edits own profile | Success |
| User edits others' profile | Denied |

### 10.3 Edge Cases

- What if role is undefined?
- What if user's role changes mid-session?
- What if multiple roles apply?

---

## Best Practices

1. **Start restrictive** - Add access as needed, not the other way

2. **Use role inheritance** - Build on base roles

3. **Keep roles simple** - Fewer roles = easier management

4. **Test thoroughly** - Verify with different accounts

5. **Document roles** - Keep track of what each role can do

6. **Handle edge cases** - What if no role is assigned?

---

## Troubleshooting

### User Sees Restricted Content

- Check role assignment
- Verify condition logic
- Test element visibility

### Can't Access Expected Page

- Confirm user role is correct
- Check page access settings
- Review any blocking conditions

### Role Changes Not Taking Effect

- User may need to re-login
- Check if role is cached
- Verify role update succeeded

### Conditions Not Working

- Check variable names
- Verify role value format
- Test condition separately

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Shared Roles and Permissions - https://help.acenji.com/#/./shared-concepts/roles-and-permissions/index
<span class="triangle"></span> Conditional Logic - https://help.acenji.com/#/./create-native-mobile-app/tutorials/conditional-logic/index
<span class="triangle"></span> Signup - https://help.acenji.com/#/./create-native-mobile-app/tutorials/signup/index

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
