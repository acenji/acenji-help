# Tutorial: Pages and Navigation

This tutorial teaches you how to create and manage pages in your mobile application, and how to set up navigation between them for a seamless user experience.

---

## What You'll Learn

By the end of this tutorial, you'll know how to:
- Create and organize multiple pages
- Set up different navigation patterns
- Use navigation actions and gestures
- Build a complete navigation flow

---

## Prerequisites

Before starting:
- Complete the "Creating Your First Mobile App" tutorial
- Have a mobile app project with at least one page
- Understand basic card and element concepts

---

## Step 1: Understanding Mobile Pages

### 1.1 What is a Page?

A **page** in mobile apps is a full-screen view that contains cards and elements:

```
┌─────────────────────────────────────────────────────────────┐
│                       MOBILE PAGE                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌─────────────────────────────────────────────────────┐  │
│   │                    Status Bar                        │  │
│   ├─────────────────────────────────────────────────────┤  │
│   │                    Header/Nav                        │  │
│   ├─────────────────────────────────────────────────────┤  │
│   │                                                      │  │
│   │                                                      │  │
│   │                   Content Area                       │  │
│   │                     (Cards)                          │  │
│   │                                                      │  │
│   │                                                      │  │
│   ├─────────────────────────────────────────────────────┤  │
│   │                   Tab Bar (optional)                 │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Page Types

| Type | Description | Use Case |
|------|-------------|----------|
| **Content Page** | Standard scrollable page | Main content, forms |
| **Modal Page** | Overlay that slides up | Quick actions, confirmations |
| **Tab Page** | Page within a tab bar | Main navigation sections |

---

## Step 2: Creating Pages

### 2.1 Add a New Page

1. In the left panel, find the **Pages** section
2. Click **"+ Add Page"**
3. Enter a page name
4. Select page type (if options available)
5. Click **Create**

### 2.2 Organize Your Pages

Create a logical page structure:

```
App Pages
├── Home (default/start page)
├── Dashboard
├── Profile
├── Settings
└── About
```

### 2.3 Set the Start Page

1. Find your Home page
2. Right-click or use the menu
3. Select **"Set as Start Page"**
4. This page loads first when the app opens

---

## Step 3: Basic Navigation

### 3.1 Button Navigation

The most common navigation pattern:

1. Add a **Button** to your page
2. Select the button
3. Open **Events/Actions**
4. Configure:
   - Event: **On Tap**
   - Action: **Navigate to Page**
   - Target: Select destination page

### 3.2 Card Link Navigation

Use card links for navigation items:

1. Add a **Card Link** element
2. Configure the link target
3. The entire area becomes tappable

---

## Step 4: Navigation Patterns

### 4.1 Stack Navigation (Push/Pop)

Navigate forward and back:

```
Home → Details → Edit
  ↑       ↑       │
  └───────┴───────┘
      (Back)
```

**Configuration:**
- Forward: Navigate to Page action
- Back: Navigate Back action (or system back)

### 4.2 Tab Navigation

Switch between main sections:

```
┌────────────────────────────────────────┐
│              Content Area               │
├──────────┬──────────┬──────────────────┤
│   Home   │  Search  │    Profile       │
│    ●     │    ○     │      ○           │
└──────────┴──────────┴──────────────────┘
```

**Setup:**
1. Create a tab bar element
2. Add tab items for each section
3. Configure each tab's target page

### 4.3 Drawer Navigation

Side menu that slides in:

```
┌─────┬─────────────────────┐
│     │                     │
│Menu │    Content Area     │
│     │                     │
│Home │                     │
│     │                     │
│Sett-│                     │
│ings │                     │
└─────┴─────────────────────┘
```

**Setup:**
1. Add a drawer/menu element
2. Configure menu items
3. Each item navigates to a page

---

## Step 5: Navigation Actions

### 5.1 Navigate to Page

Go to a specific page:

```
Action: Navigate to Page
Target: Profile Page
Transition: Slide Left (default)
```

### 5.2 Navigate Back

Return to the previous page:

```
Action: Navigate Back
(Returns to wherever user came from)
```

### 5.3 Navigate to Home

Jump to the start page:

```
Action: Navigate to Home
(Clears navigation stack, goes to start page)
```

### 5.4 Replace Page

Navigate without adding to history:

```
Action: Replace Page
Target: Dashboard
(User can't go "back" to replaced page)
```

---

## Step 6: Passing Data Between Pages

### 6.1 Using Variables

Set a variable before navigating:

```
Action 1: Set Variable
  Variable: selectedItemId
  Value: [item.id]

Action 2: Navigate to Page
  Target: Details Page
```

### 6.2 Reading Data on Target Page

On the destination page:

```
Element binding: {selectedItemId}
(Element displays the passed value)
```

---

## Step 7: Conditional Navigation

### 7.1 Navigate Based on Conditions

```
IF user.isLoggedIn == true
  THEN Navigate to Dashboard
  ELSE Navigate to Login
```

### 7.2 Role-Based Navigation

```
IF user.role == "admin"
  THEN Navigate to Admin Panel
ELSE IF user.role == "user"
  THEN Navigate to User Dashboard
ELSE
  Navigate to Guest View
```

---

## Step 8: Navigation Header

### 8.1 Configure Header

Set up the page header:

| Element | Purpose |
|---------|---------|
| **Back Button** | Return to previous page |
| **Title** | Current page name |
| **Action Button** | Page-specific action |

### 8.2 Custom Header Actions

Add buttons to the header:

1. Select the page
2. Open header settings
3. Add action buttons (save, edit, share)
4. Configure their actions

---

## Step 9: Building a Navigation Flow

### 9.1 Example: E-commerce Flow

```
Home Page
├── [Browse Products] → Product List
│                        ├── [Product Tap] → Product Details
│                        │                   ├── [Add to Cart] → Cart
│                        │                   └── [Back] → Product List
│                        └── [Back] → Home
├── [View Cart] → Cart Page
│                 ├── [Checkout] → Checkout
│                 └── [Back] → Home
└── [Profile] → Profile Page
```

### 9.2 Implement the Flow

1. Create all pages
2. Add navigation buttons/links
3. Configure each action
4. Test the complete flow

---

## Step 10: Testing Navigation

### 10.1 Test Each Path

Walk through every navigation path:

- [ ] Home to each destination
- [ ] Back navigation works
- [ ] Tab switches work
- [ ] Deep navigation chains work

### 10.2 Test Edge Cases

- What if user rapidly taps?
- Does back button work correctly?
- Are there any dead ends?

---

## Best Practices

1. **Keep navigation simple** - Users should always know where they are

2. **Consistent back behavior** - Back should always go to previous page

3. **Clear visual indicators** - Show which tab/section is active

4. **Limit navigation depth** - Try to stay within 3-4 levels deep

5. **Provide escape routes** - Users should easily get back to home

6. **Test on device** - Navigation feels different on actual phones

---

## Common Patterns

### Master-Detail

```
List Page (Master) ──tap item──→ Detail Page
                    ←──back────
```

### Wizard/Step Flow

```
Step 1 ──next──→ Step 2 ──next──→ Step 3 ──submit──→ Confirmation
   ←──back──        ←──back──
```

### Authentication Flow

```
App Start
    │
    ├── If logged in → Dashboard
    │
    └── If not logged in → Login
                            ├── [Login Success] → Dashboard
                            └── [Sign Up] → Registration → Dashboard
```

---

## Troubleshooting

### Navigation Not Working

- Verify the action is configured correctly
- Check target page exists
- Test in preview mode

### Back Button Issues

- Ensure navigation stack isn't cleared
- Check for "replace" actions that remove history

### Pages Loading Slowly

- Optimize page content
- Reduce number of elements
- Check for large images

### Lost Navigation State

- Check if you're using "replace" vs "navigate"
- Verify variables persist correctly

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Creating Your First Mobile App - https://help.acenji.com/#/./create-native-mobile-app/tutorials/creating-your-first-mobile-app/index
<span class="triangle"></span> Cards - https://help.acenji.com/#/./create-native-mobile-app/tutorials/cards/index
<span class="triangle"></span> Card Link Element - https://help.acenji.com/#/./create-native-mobile-app/tutorials/cards/elements/card-link/index

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
