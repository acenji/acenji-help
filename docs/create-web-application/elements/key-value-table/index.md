# Key-Value Table

The **Key-Value Table** element displays structured label-value pairs in a clean two-column table layout. Use it for product specs, profile details, technique breakdowns, or any structured data.

---

## Overview

Key-Value Tables present information in a scannable format with labels on the left and values on the right:

| Label | Value |
|-------|-------|
| Style | Muay Thai |
| Origin | Thailand |
| Difficulty | Advanced |

---

## Adding a Key-Value Table

1. Open the **Website Builder**
2. Find **Key-Value Table** in the Elements panel (under Display)
3. Drag it onto your page
4. Configure data rows in the **General Tab**

---

## Properties

### General Tab

#### Data Source

| Option | Description |
|--------|-------------|
| **Static** | Define rows manually in the builder |
| **From Element** | Pull data from another element (e.g., JSON Data Source) |

#### Static Data Rows

Add label-value pairs directly:
- Click **Add Row** to add a new pair
- Enter the **Label** (left column) and **Value** (right column)
- Click the X button to remove a row

#### Element Data Source

When using "From Element":

| Property | Description |
|----------|-------------|
| **Source Element ID** | The ID of the source element (e.g., a JSON Data Source) |
| **Key Field** | The field name to use as the label (e.g., `label`) |
| **Value Field** | The field name to use as the value (e.g., `value`) |

If the source provides a plain object (not an array), the object's keys become labels and values become display values automatically.

#### Display Settings

| Property | Description | Default |
|----------|-------------|---------|
| **Columns** | 1 (single table) or 2 (side-by-side tables) | 1 |
| **Label Width (%)** | Width percentage of the label column (10-80) | 40 |
| **Striped Rows** | Alternate row backgrounds for readability | On |
| **Show Border** | Bottom border on each row | On |

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

## Use Cases

### Product Specifications
Display technical details for products or items.

### User Profile Details
Show user information in a structured format.

### Technique Breakdown
Present technique attributes like style, difficulty, and category.

### Settings Summary
Display configuration values in a readable format.

---

## Best Practices

1. **Keep labels short** - Use concise, descriptive labels

2. **Use 2-column layout for many rows** - Split long tables side-by-side for better use of space

3. **Enable striped rows** - Improves readability for tables with many rows

4. **Adjust label width** - If labels are short, reduce width to give more space to values

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
