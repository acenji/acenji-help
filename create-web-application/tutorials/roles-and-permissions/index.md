# Tutorial: Roles and Permissions

This tutorial teaches you how to implement access control in your web application. You'll learn to create roles, restrict page access, and show different content to different user types.

---

## What You'll Build

By the end of this tutorial, you'll have:
- Different user roles (Admin, User, Guest)
- Role-restricted pages
- Content that adapts to user roles
- A secure application structure

---

## Prerequisites

Before starting:
- Complete the "Adding Workflows" tutorial
- Have a multi-page application
- Understand conditions and variables

---

## Step 1: Plan Your Access Control

Before implementing, plan what access each role needs.

### 1.1 Define Your Roles

| Role | Description | Access Level |
|------|-------------|--------------|
| **Admin** | Full control | All pages, all features |
| **User** | Standard access | Most pages, own content |
| **Guest** | Limited access | Public pages only |

### 1.2 Plan Page Access

| Page | Admin | User | Guest |
|------|-------|------|-------|
| Home | ✓ | ✓ | ✓ |
| Dashboard | ✓ | ✓ | ✗ |
| Settings | ✓ | ✓ (own only) | ✗ |
| Admin Panel | ✓ | ✗ | ✗ |

---

## Step 2: Configure Roles

### 2.1 Access Role Settings

1. Open your project settings
2. Navigate to **Roles and Permissions**
3. View the default roles

### 2.2 Create Custom Roles

1. Click **"+ Add Role"**
2. Enter role name: "Admin"
3. Configure permissions:
   - View all content: ✓
   - Edit all content: ✓
   - Manage users: ✓
4. Save the role

Repeat for "User" and "Guest" roles with appropriate permissions.

---

## Step 3: Restrict Page Access

### 3.1 Set Up an Admin-Only Page

1. Create a page called "Admin Panel"
2. Select the page
3. Open **Page Settings**
4. Find **Access Control**
5. Set to: **Specific Roles**
6. Select: **Admin**
7. Save

### 3.2 Set Up a Members-Only Page

1. Select your Dashboard page
2. Open **Page Settings**
3. Set Access to: **Authenticated Users**
4. Or select specific roles: Admin, User
5. Save

### 3.3 Configure Public Pages

1. Select your Home page
2. Set Access to: **Public**
3. Anyone can view this page

---

## Step 4: Role-Based Navigation

### 4.1 Create Dynamic Navigation

Your navigation should only show links users can access.

1. Open your header tile
2. Select the Admin Panel link
3. Open **Conditions** section
4. Add condition:
   ```
   Show IF user.role equals "Admin"
   ```

### 4.2 Configure All Navigation Links

| Link | Condition |
|------|-----------|
| Home | Always show |
| Dashboard | Show if authenticated |
| Settings | Show if authenticated |
| Admin Panel | Show if role = Admin |
| Login | Show if not authenticated |
| Logout | Show if authenticated |

---

## Step 5: Role-Based Content

Show different content to different roles.

### 5.1 Admin-Only Features

In your Dashboard:

1. Add an "Admin Actions" tile
2. Select the tile
3. Add condition:
   ```
   Show IF user.role equals "Admin"
   ```

### 5.2 User-Specific Content

Show personalized content:

1. Add a "Your Profile" tile
2. Bind to current user data
3. Add condition:
   ```
   Show IF user is authenticated
   ```

### 5.3 Guest Teaser Content

Encourage guests to sign up:

1. Add a "Sign Up for More" tile
2. Add condition:
   ```
   Show IF user.role equals "Guest" OR user is not authenticated
   ```

---

## Step 6: Protect Sensitive Elements

Not just pages, but individual elements can be restricted.

### 6.1 Admin-Only Buttons

1. Select the "Delete User" button
2. Add condition:
   ```
   Show IF user.role equals "Admin"
   ```

### 6.2 Edit Permissions

Allow users to edit only their own content:

1. Select the "Edit" button on a profile card
2. Add condition:
   ```
   Enable IF user.role equals "Admin"
   OR user.id equals profile.userId
   ```

### 6.3 View Permissions

Control what data users can see:

1. Select sensitive data elements (email, phone)
2. Add conditions to restrict visibility

---

## Step 7: Handle Unauthorized Access

What happens when someone tries to access restricted content?

### 7.1 Redirect Unauthorized Users

Configure page access behavior:

1. Open restricted page settings
2. Set **Unauthorized Behavior**:
   - Redirect to: Login page
   - Or show: Access Denied message

### 7.2 Create an Access Denied Page

1. Create a page called "Access Denied"
2. Add a message: "You don't have permission to view this page"
3. Add a "Go Home" button

---

## Step 8: Test Your Access Control

### 8.1 Test as Different Roles

1. Open Preview mode
2. If possible, switch between user roles
3. Or create test accounts for each role

### 8.2 Verify Page Access

Test each page:
- Can Admin access all pages?
- Can User access member pages but not admin?
- Can Guest only see public pages?

### 8.3 Verify Element Visibility

Check that:
- Admin-only buttons appear only for admins
- User content shows only for logged-in users
- Guest content hides when authenticated

### 8.4 Test Edge Cases

- What if user logs out?
- What if session expires?
- What if user's role changes?

---

## Step 9: Security Best Practices

### 9.1 Defense in Depth

Don't rely only on hiding elements:
- Validate permissions on the server
- Restrict API access by role
- Log access attempts

### 9.2 Least Privilege

Give users only the permissions they need:
- Start with minimal access
- Add permissions as needed
- Review regularly

### 9.3 Keep Roles Simple

- Fewer roles are easier to manage
- Use clear, descriptive role names
- Document what each role can do

---

## What You've Learned

In this tutorial, you learned how to:

- Plan access control strategy
- Create and configure roles
- Restrict page access by role
- Build dynamic, role-based navigation
- Show/hide content based on roles
- Protect sensitive elements
- Handle unauthorized access
- Apply security best practices

---

## Next Steps

Learn how to publish your application:

[Publishing Tutorial](../publishing/index)

---

## Troubleshooting

### User Can Access Restricted Page

- Verify page access settings
- Check if user has the expected role
- Review any conditions that might grant access

### Navigation Links Showing Incorrectly

- Check visibility conditions
- Verify role variable is set correctly
- Test with a user who should/shouldn't see it

### Role Not Being Applied

- Confirm role is assigned to user
- Check role name matches exactly
- Verify authentication state

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Roles and Permissions - https://help.acenji.com/#/./create-web-application/website-builder/roles-and-permissions/index
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
