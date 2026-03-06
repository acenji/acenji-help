# Bar Chart

The **Bar Chart** element displays data as vertical or horizontal bars. Each bar represents a data point with a label and value.

---

## Features

- **Vertical or horizontal** orientation
- **Custom colors** per bar or a single bar color
- **Value labels** above each bar
- **Grid lines** for readability
- Pure SVG rendering — no external dependencies

---

## Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Title** | Chart title displayed above the chart | `"Bar Chart"` |
| **Orientation** | `vertical` or `horizontal` | `vertical` |
| **Bar Color** | Default color for all bars | `#3498db` |
| **Use Custom Colors** | Enable per-bar colors | `false` |
| **Show Values** | Display value above each bar | `true` |
| **Show Grid** | Display horizontal grid lines | `true` |

---

## Data Items

Each bar has:
- **Label** — category name (e.g., "Q1", "January")
- **Value** — numeric value
- **Color** — custom color (when "Use Custom Colors" is enabled)

Click **+ Add** to add bars. Click **x** to remove.

---

## Use Cases

- Revenue by quarter
- Survey response counts
- Product comparison metrics
- Team performance scores

---

## Styling

The Bar Chart supports the standard **Container** color and dimension settings:
- Background color, border, padding, margin
- Border radius and width
