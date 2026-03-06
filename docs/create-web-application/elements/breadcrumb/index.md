# Breadcrumb

The **Breadcrumb** element displays a navigation trail showing the user's current location within a multi-page app. Users can click breadcrumb items to navigate back to previous pages.

---

## Overview

Breadcrumbs render as a horizontal trail of clickable page links separated by a configurable separator:

`Home > Muay Thai > Techniques > Elbow Strike`

Common uses:
- Multi-page app navigation
- Content hierarchy display (e.g., Category > Sub-Category > Item)
- Page context awareness
- Quick back-navigation

---

## Adding a Breadcrumb

1. Open the **Website Builder**
2. Find **Breadcrumb** in the Elements panel (under Navigation)
3. Drag it onto your page
4. Configure breadcrumb items in the **General Tab**

---

## Properties

### General Tab

#### Data Source

| Option | Description |
|--------|-------------|
| **Static** | Define breadcrumb items manually |
| **From Element** | Pull data from another element (e.g., JSON Data Source) |

#### Static Breadcrumb Items

Add items directly:
- Click **Add Item** to add a new breadcrumb item
- Enter the **Label** (display text)
- Select a **Target Page** from the dropdown (or "No Link" for the current page)
- Click the X button to remove an item
- The **last item** is automatically styled as the current page (non-clickable)

#### Element Data Source

When using "From Element":

| Property | Description |
|----------|-------------|
| **Source Element ID** | The ID of the source element |
| **Label Field** | Field name for breadcrumb label (e.g., `name`) |
| **Page ID Field** | Field name for target page ID (e.g., `pageId`) |

#### Appearance Settings

| Property | Options | Default |
|----------|---------|---------|
| **Separator** | Chevron (>), Slash (/), Arrow (&rarr;), Dot (&middot;) | Chevron |
| **Size** | Small, Medium, Large | Medium |
| **Active Item Style** | Bold, Muted, None | Bold |

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Background Color** | Container background | Transparent |
| **Border Color** | Container border | Transparent |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Width** | Element width |
| **Height** | Element height (auto by default) |
| **Padding** | Inner spacing |
| **Margin** | Outer spacing |
| **Border Radius** | Corner rounding |

---

## Use Cases

### Multi-Page App Navigation
Show users where they are in a page hierarchy and let them navigate back.

### Content Browsing
Display the path through a content taxonomy (e.g., Home > Category > Article).

### Wizard / Multi-Step Forms
Show progress through a multi-step process with clickable steps.

---

## Best Practices

1. **Always include a "Home" item** - Give users a way back to the start

2. **Make the last item non-clickable** - It represents the current page

3. **Keep labels short** - Use 1-3 word labels for each breadcrumb item

4. **Use Chevron separator** - It's the most universally recognized breadcrumb style

5. **Place at the top of the page** - Breadcrumbs are most useful at the top of content areas

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
