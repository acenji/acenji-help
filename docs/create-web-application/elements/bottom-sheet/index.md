# Bottom Sheet

The **Bottom Sheet** element is a slide-up panel that appears from the bottom of the screen when triggered by a button click. It references another page for its content, allowing you to build rich overlay experiences.

---

## Overview

Bottom Sheet provides a modal-like panel that slides up from the bottom edge. It is commonly used on mobile-style interfaces but works on both web and mobile platforms.

Common uses:
- Action menus and option pickers
- Detail views triggered from a list
- Quick-edit forms
- Confirmation dialogs with rich content

---

## Adding a Bottom Sheet

1. Open the **Website Builder**
2. Find **Bottom Sheet** in the Elements panel (under Tools)
3. Drag it onto your page
4. Configure its properties in the **General Tab**

> **Note:** This element works on both **web and mobile** applications.

---

## Properties

### General Tab

#### Content

| Property | Description |
|----------|-------------|
| **Source Page** | The page whose content is rendered inside the bottom sheet |

#### Trigger

| Property | Description | Default |
|----------|-------------|---------|
| **Trigger Button Label** | Text displayed on the trigger button | "Open" |
| **Auto-Open** | Open the bottom sheet automatically when the page loads | Off |

#### Appearance

| Property | Description | Default |
|----------|-------------|---------|
| **Height** | Maximum height of the sheet (percentage of screen) | 50% |
| **Show Handle** | Display a drag handle bar at the top of the sheet | On |
| **Show Backdrop** | Display a semi-transparent backdrop behind the sheet | On |
| **Backdrop Closes** | Tapping the backdrop closes the sheet | On |

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Background Color** | Sheet background | #ffffff |
| **Handle Color** | Drag handle bar color | #cccccc |
| **Backdrop Color** | Backdrop overlay color | rgba(0,0,0,0.5) |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Width** | Element width (trigger button area) |
| **Padding** | Inner spacing of the sheet content |
| **Border Radius** | Corner rounding on the top edges of the sheet |

---

## Best Practices

1. **Keep content concise** - Bottom sheets work best for focused, short interactions

2. **Always show a handle** - The handle gives users a visual cue that the panel is draggable or dismissible

3. **Use backdrop for focus** - The backdrop prevents interaction with the page behind and signals a modal context

4. **Avoid auto-open on every visit** - Reserve auto-open for one-time prompts or onboarding flows

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index

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
