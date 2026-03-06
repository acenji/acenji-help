# Funnel Chart

The **Funnel Chart** element visualizes a sequential process where values decrease at each stage, shown as narrowing trapezoid shapes.

---

## Features

- **Trapezoid stages** that narrow proportionally
- **Value labels** on each stage
- **Conversion percentages** relative to the first stage
- **Custom colors** per stage
- Pure SVG rendering — no external dependencies

---

## Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Title** | Chart title | `"Funnel"` |
| **Show Values** | Display numeric values on each stage | `true` |
| **Show Percentages** | Display conversion percentage relative to first stage | `true` |

---

## Stages

Each stage has:
- **Label** — stage name (e.g., "Visitors", "Leads", "Customers")
- **Value** — numeric value
- **Color** — stage color

Click **+ Add** to add stages. Click **x** to remove.

---

## Use Cases

- Sales pipeline (leads → opportunities → deals)
- Marketing funnels (impressions → clicks → conversions)
- Recruitment process (applicants → interviews → hires)
- User onboarding (signup → activation → retention)

---

## Styling

Supports the standard **Container** color and dimension settings.
