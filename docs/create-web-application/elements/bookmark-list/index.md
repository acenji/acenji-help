# Bookmark List

The **Bookmark List** element displays items that users have bookmarked. Bookmarks are stored in the browser's localStorage and persist across sessions. Users can view, navigate to, or remove their bookmarked items.

---

## Overview

Bookmark List renders a list of previously saved items. Each item shows mapped fields (title, description, image) and supports click-to-navigate and remove actions.

Common uses:
- Saved articles or favorites lists
- Watchlists for content items
- Shortcut lists for frequently accessed pages
- Reading lists or wishlists

---

## Adding a Bookmark List

1. Open the **Website Builder**
2. Find **Bookmark List** in the Elements panel (under Display)
3. Drag it onto your page
4. Configure field mapping in the **General Tab**

> **Note:** This element works on both **web and mobile** applications.

---

## Properties

### General Tab

#### Source

| Property | Description |
|----------|-------------|
| **Source Element ID** | The ID of the element whose items can be bookmarked (e.g., Card Grid, Card List) |

#### Field Mapping

| Property | Description |
|----------|-------------|
| **Title Field** | Field name to display as the bookmark title |
| **Description Field** | Field name to display as a subtitle or summary |
| **Image Field** | Field name for an optional thumbnail image |

#### Behavior

| Property | Description | Default |
|----------|-------------|---------|
| **Navigate on Click** | Navigate to a page when a bookmark is tapped | On |
| **Target Page** | The page to navigate to when a bookmark is clicked | -- |
| **Allow Remove** | Show a remove button on each bookmark | On |
| **Empty Message** | Text shown when there are no bookmarks | "No bookmarks yet" |

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Background Color** | Container background | Transparent |
| **Item Background** | Individual bookmark card background | #ffffff |
| **Remove Button Color** | Color of the remove icon/button | #dc3545 |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Width** | Element width |
| **Height** | Element height (auto by default) |
| **Padding** | Inner spacing |
| **Margin** | Outer spacing |
| **Border Radius** | Corner rounding |

---

## Best Practices

1. **Pair with a bookmarkable element** - Use alongside Card Grid or Card List that has a bookmark action configured

2. **Provide a clear empty state** - Customize the empty message to guide users on how to bookmark items

3. **Enable remove** - Let users manage their bookmark list by removing items they no longer need

4. **Use navigation** - Make bookmarks actionable by navigating to a detail page on click

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
