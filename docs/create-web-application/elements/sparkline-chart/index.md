# Sparkline

The **Sparkline** element is a compact inline chart designed to show trends at a glance. It renders as a tiny line or bar chart alongside a text label.

---

## Features

- **Line or bar** variant
- **Area fill** under the line
- **End dot** indicator on the last data point
- **Compact size** — fits inside table cells or stat cards
- Pure SVG rendering — no external dependencies

---

## Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Label** | Text displayed next to the sparkline | `"Trend"` |
| **Variant** | `line` or `bar` | `line` |
| **Line Color** | Color of the line or bars | `#3498db` |
| **Fill Area** | Shade the area under the line | `true` |
| **Show End Dot** | Show a dot on the last data point | `true` |

---

## Data

Enter values as a **comma-separated string**:

```
10, 20, 15, 30, 25, 40, 35
```

---

## Use Cases

- Dashboard KPI trends
- Table cell micro-charts
- Stat card trend indicators
- Inline data visualizations

---

## Styling

Supports the standard **Container** color and dimension settings.
