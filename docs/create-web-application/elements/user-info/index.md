# User Info Element

The **User Info** element displays information about the currently logged-in user in a formatted table.

---

## Overview

User Info is ideal for:
- User profile displays
- Account information sections
- Personalized dashboards
- User verification displays

---

## Adding a User Info Element

1. Open the **Website Builder**
2. Find **User Info** in the Elements panel
3. Drag it onto your page
4. Configure which fields to display in the **General Tab**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Show First Name** | Display user's first name |
| **Show Last Name** | Display user's last name |
| **Show Email** | Display user's email |
| **Show Roles** | Display user's assigned roles |

### Display Fields

Toggle which user information to show:

| Field | Description |
|-------|-------------|
| **First Name** | User's first name from their profile |
| **Last Name** | User's last name from their profile |
| **Email** | User's email address |
| **Role(s)** | Assigned roles (comma-separated if multiple) |
| **Custom Fields** | Schema-defined custom fields |

---

## Visual Display

User info displays as a bordered table:

```
┌──────────────┬─────────────────────┐
│ First Name   │ John                │
├──────────────┼─────────────────────┤
│ Last Name    │ Smith               │
├──────────────┼─────────────────────┤
│ Email        │ john@example.com    │
├──────────────┼─────────────────────┤
│ Role(s)      │ Admin, Editor       │
└──────────────┴─────────────────────┘
```

---

## Availability

> **Note:** User Info is only available in **Web Card** applications. It's not available in Form or Mobile Card builders.

---

## Database Integration

User Info can connect to the card database:
1. Open the **Connect Tab**
2. Enable database connection
3. User data can be stored/retrieved

---

## Use Cases

### User Dashboard
```
Display: First Name, Last Name, Role(s)
Purpose: Welcome message with role indicator
```

### Account Settings
```
Display: All fields
Purpose: Show complete user profile
```

### Verification Display
```
Display: Email, Role(s)
Purpose: Confirm user identity
```

### Personalized Header
```
Display: First Name only
Purpose: "Welcome, [Name]" greeting
```

---

## Custom Fields

If your project schema includes custom fields, they can also be displayed:
- Custom fields show with sample/fake values in the builder
- Real values appear at runtime for logged-in users

---

## Best Practices

1. **Show relevant info only** - Don't display unnecessary fields

2. **Consider privacy** - Be thoughtful about what user data is visible

3. **Position appropriately** - Place where users expect to see their info

4. **Test with real users** - Verify correct data displays at runtime

5. **Style to match** - Ensure the table fits your app's design

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
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
