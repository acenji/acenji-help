# Stat Card

The **Stat Card** element displays a dashboard-style metric with a large value, descriptive label, and optional icon. It's a display-only element — no user interaction required.

---

## Adding a Stat Card

1. Open the **Website Builder** and select a page
2. Find **Stat Card** in the **Display** category of the Elements Panel
3. Drag it onto your page
4. Configure the value and label in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Data Source** | `Static` (manual value) or `From Element` (data binding) |
| **Value** | The metric value to display |
| **Label** | Description text below the value |
| **Icon** | MDI icon class displayed alongside the value |
| **Format** | How the value is formatted: `Number`, `Currency`, or `Percent` |
| **Prefix** | Text before the value (e.g., "$") |
| **Suffix** | Text after the value (e.g., "%") |
| **Size** | Value font size: `Small` (24px), `Medium` (36px), or `Large` (48px) |
| **Alignment** | Horizontal alignment: `Left`, `Center`, or `Right` |

### Data Source (From Element)

| Field | Description |
|-------|-------------|
| **Value Field** | Field containing the metric value |
| **Label Field** | Field containing the metric label |

### Color Tab

Customize the container background and border colors.

### Dimensions Tab

Adjust padding, margin, border radius, and size.

---

## Value Formatting

| Format | Example Input | Output |
|--------|--------------|--------|
| Number | 1234567 | 1,234,567 |
| Currency | 1234.50 | $1,234.50 |
| Percent | 78 | 78% |

Use **Prefix** and **Suffix** for custom formatting (e.g., prefix "~" for approximate values).

---

## Use Cases

- **Dashboard KPIs**: Total Users, Revenue, Completion Rate
- **Statistics**: Win Rate, Total Items, Average Score
- **Summary Cards**: Quick metric overview on a page

---

<div style="display: flex; justify-content: space-between; margin-top: 40px;">
  <a href="../video-gallery/index">Previous: Video Gallery</a>
  <a href="../sticky-header/index">Next: Sticky Header</a>
</div>
