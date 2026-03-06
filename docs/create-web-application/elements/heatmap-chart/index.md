# Heatmap

The **Heatmap** element displays tabular data as a color-coded grid, where cell colors interpolate between a low and high color based on values.

---

## Features

- **Color interpolation** from low to high color
- **Row and column labels**
- **Value display** in each cell
- **Dynamic grid** — add rows and columns
- Pure SVG rendering — no external dependencies

---

## Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Title** | Chart title | `"Heatmap"` |
| **Low Color** | Color for the lowest value | `#ebedf0` |
| **High Color** | Color for the highest value | `#216e39` |
| **Show Values** | Display numeric values in cells | `true` |

---

## Labels

- **Row Labels** — enter as comma-separated values (e.g., `Mon, Tue, Wed`)
- **Column Labels** — enter as comma-separated values (e.g., `Q1, Q2, Q3, Q4`)

---

## Grid Data

Use the **+ Row** and **+ Col** buttons to expand the grid. Enter numeric values in each cell.

---

## Use Cases

- GitHub-style contribution charts
- Weekly schedule heat mapping
- Correlation matrices
- Geographic intensity data

---

## Styling

Supports the standard **Container** color and dimension settings.
