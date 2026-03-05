# Search Modal

The **Search Modal** element provides a search interface for finding and navigating to content. It supports two display modes (inline bar or full-screen modal) and two result actions (navigate to page or filter other elements).

---

## Overview

Search Modal renders as either an inline search bar or a trigger button that opens a modal overlay:

**Inline mode**: `[ 🔍 Search... ]` with dropdown results below

**Modal mode**: `[ 🔍 Search... ]` button that opens a full-screen overlay with search input and results

Common uses:
- Search bar on a browse page to find content across all items
- Live-filter connected elements (e.g., type in search bar to filter a Card Grid)
- Quick navigation — select a search result to jump to a specific page

---

## Adding a Search Modal

1. Open the **Website Builder**
2. Find **Search Modal** in the Elements panel (under Navigation)
3. Drag it onto your page
4. Configure search items and behavior in the **General Tab**

---

## Properties

### General Tab

#### Display Mode

| Option | Description |
|--------|-------------|
| **Inline Search Bar** | Always-visible search bar with dropdown results |
| **Full-Screen Modal** | Button that opens a modal overlay with search input |

#### Result Action

| Option | Description |
|--------|-------------|
| **Navigate to Page** | Clicking a result navigates to the result's target page |
| **Filter Other Element** | Typing filters a connected element (e.g., Card Grid) in real time |

When using **Filter** mode:
- Enter the **Filter Target Element ID** — the ID of the element to filter (e.g., a Card Grid)
- The target element must have a `searchFilterId` configured pointing back to this Search Modal's ID

#### Data Source

| Option | Description |
|--------|-------------|
| **Static** | Define search items manually |
| **From Element** | Pull data from another element (e.g., JSON Data Source) |

#### Static Search Items

Add items directly:
- Click **Add Item** to add a new search item
- Enter **Title**, **Subtitle**, **Image URL**, and select a **Target Page**
- Click the X button to remove an item

#### Element Data Source

When using "From Element":

| Property | Description |
|----------|-------------|
| **Source Element ID** | The ID of the source element |
| **Title Field** | Field name for item title (e.g., `name`) |
| **Subtitle Field** | Field name for item subtitle (e.g., `description`) |
| **Page ID Field** | Field name for target page (e.g., `pageId`) |
| **Image Field** | Field name for item image (e.g., `image`) |

#### Search Settings

| Property | Description | Default |
|----------|-------------|---------|
| **Placeholder Text** | Text shown in the empty search input | "Search..." |
| **Show Images** | Display item images in search results | On |
| **Search Fields** | Which fields to search (title, subtitle) | Both |

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

## Filter Mode

Search Modal can filter other elements in real time. To set this up:

1. Add a **Search Modal** to your page (set Result Action to "Filter")
2. Add a **Card Grid** (or other filterable element) to the same page
3. Copy the Search Modal's element ID and paste it into the Card Grid's **Search Filter Element ID** field
4. Copy the Card Grid's element ID is not needed — the Search Modal uses the **Filter Target Element ID** field

When the user types in the search bar, the connected Card Grid filters its items live.

---

## Use Cases

### Content Search
On a browse page with many items, let users search by title or description to quickly find what they need.

### Live Filtering
Pair with a Card Grid to create a filterable gallery — typing in the search bar instantly filters visible cards.

### Navigation Hub
Create a "jump to" interface where users can search for and navigate directly to specific pages.

### Modal Search
Use modal mode for a clean design — a search button that opens a full-screen search overlay when tapped.

---

## Best Practices

1. **Use meaningful search fields** - Include both title and subtitle in search fields for better results

2. **Write clear placeholder text** - Tell users what they can search for (e.g., "Search techniques...")

3. **Use inline mode for primary search** - When search is the main feature of a page

4. **Use modal mode for secondary search** - When search is supplementary and should not take space

5. **Pair with JSON Data Source** - For dynamic data, connect to a JSON Data Source element for live content

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
