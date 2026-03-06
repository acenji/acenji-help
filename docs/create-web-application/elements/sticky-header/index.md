# Sticky Header

The **Sticky Header** element creates a fixed header that stays at the top of the page as the user scrolls. It displays a title, optional back button, and optional icon.

---

## Adding a Sticky Header

1. Open the **Website Builder** and select a page
2. Find **Sticky Header** in the **Navigation** category of the Elements Panel
3. Drag it onto your page (ideally as the first element)
4. Configure the title and back button in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Title** | The header title text |
| **Icon** | MDI icon class displayed left of the title |
| **Show Back Button** | Display a back arrow button |
| **Back Page** | Target page when back button is clicked |
| **Sticky** | When enabled, header sticks to the top on scroll |

### Color Tab

Customize the container background and border colors.

### Dimensions Tab

Adjust padding, margin, border radius, and size.

---

## Sticky Behavior

When **Sticky** is enabled, the header uses `position: sticky` with `z-index: 100` to remain visible as the user scrolls down the page. Disable sticky to let the header scroll normally with content.

---

## Use Cases

- **Page Headers**: Persistent title bar for content-heavy pages
- **Detail Views**: Back navigation from a detail page to a list page
- **Section Headers**: Label a section with a sticky indicator

---

## Best Practices

- Place the Sticky Header as the **first element** on the page
- Set a background color so it covers content that scrolls behind it
- Use the back button to link to the previous page in your navigation flow

---

<div style="display: flex; justify-content: space-between; margin-top: 40px;">
  <a href="../stat-card/index">Previous: Stat Card</a>
  <a href="../index">Back to Elements</a>
</div>
