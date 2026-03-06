# Line Chart

The **Line Chart** element plots data points connected by a line, ideal for showing trends over time.

---

## Features

- **Area fill** option for shaded region under the line
- **Smooth curves** (cubic Bezier) or straight segments
- **Data point dots** at each value
- **Value labels** on each point
- **Grid lines** for readability
- Pure SVG rendering — no external dependencies

---

## Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Title** | Chart title | `"Line Chart"` |
| **Line Color** | Color of the line | `#3498db` |
| **Fill Area** | Shade the area under the line | `false` |
| **Show Dots** | Show circles at data points | `true` |
| **Show Values** | Display value above each point | `false` |
| **Show Grid** | Display horizontal grid lines | `true` |
| **Smooth** | Use smooth curves instead of straight lines | `false` |

---

## Data Items

Each point has:
- **Label** — x-axis label (e.g., "Jan", "Week 1")
- **Value** — numeric y-axis value

Click **+ Add** to add points. Click **x** to remove.

---

## Use Cases

- Monthly revenue trends
- Temperature over time
- User growth metrics
- Stock price history

---

## Styling

Supports the standard **Container** color and dimension settings.
