# Sidebar Layout

The **Sidebar Layout** element creates a two-column layout with a collapsible sidebar and a main content area. The sidebar references another page in your application, allowing you to build complex navigation structures.

---

## Overview

Sidebar Layout splits the screen into two regions: a sidebar panel and a main content area. The sidebar can be collapsed or expanded by the user, and on smaller screens it can overlay the content instead of pushing it aside.

Common uses:
- Application navigation menus
- Filter panels alongside content
- Settings panels with a detail view
- Documentation-style layouts

---

## Adding a Sidebar Layout

1. Open the **Website Builder**
2. Find **Sidebar Layout** in the Elements panel (under Layout)
3. Drag it onto your page
4. Configure sidebar properties in the **General Tab**

> **Note:** This element is available for **web applications only**.

---

## Properties

### General Tab

#### Sidebar Content

| Property | Description |
|----------|-------------|
| **Source Page** | The page whose content is rendered inside the sidebar |

#### Sidebar Configuration

| Property | Description | Default |
|----------|-------------|---------|
| **Width** | Sidebar width in pixels or percentage | 260px |
| **Position** | Which side the sidebar appears on (Left or Right) | Left |
| **Default State** | Whether the sidebar starts Expanded or Collapsed | Expanded |
| **Collapse Behavior** | How the sidebar collapses: Slide (slides out) or Push (pushes content) | Slide |
| **Overlay Mode** | When enabled, sidebar overlays content instead of resizing it | Off |

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Sidebar Background** | Background color of the sidebar panel | #f5f5f5 |
| **Divider Color** | Color of the border between sidebar and content | #e0e0e0 |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Width** | Total element width |
| **Height** | Total element height |
| **Padding** | Inner spacing |
| **Margin** | Outer spacing |

---

## Best Practices

1. **Keep sidebar content focused** - Use the sidebar for navigation or filters, not heavy content

2. **Use Overlay Mode on narrow pages** - Prevents the main content from becoming too cramped

3. **Set a sensible default state** - Collapse by default on content-heavy pages

4. **Test at different widths** - Ensure the layout works well at various browser sizes

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
