# Gauge Chart

The **Gauge Chart** element displays a single value on a semicircular dial with colored segments and a needle indicator.

---

## Features

- **Semicircular gauge** with needle pointer
- **Colored segments** for ranges (e.g., red/yellow/green)
- **Tick labels** around the arc
- **Value display** with optional unit
- Pure SVG rendering — no external dependencies

---

## Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Title** | Chart title | `"Gauge"` |
| **Value** | Current value the needle points to | `65` |
| **Unit** | Unit label (e.g., "%", "km/h") | `"%"` |
| **Min** | Minimum scale value | `0` |
| **Max** | Maximum scale value | `100` |
| **Show Ticks** | Display tick labels around the arc | `true` |

---

## Segments

Each segment defines a range and color:
- **From** — start value
- **To** — end value
- **Color** — segment color

Default segments: 0-33 (red), 33-66 (yellow), 66-100 (green).

Click **+ Add** to add segments. Click **x** to remove.

---

## Use Cases

- KPI dashboards (goal completion)
- Speed/performance meters
- Health/risk indicators
- Battery/capacity levels

---

## Styling

Supports the standard **Container** color and dimension settings.
