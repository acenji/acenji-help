# CRUD Grid Element

The **CRUD Grid** element provides a full-featured data table with inline editing, sorting, filtering, pagination, and CSV import/export capabilities. It is ideal for managing structured data directly within your web application.

<p style="margin-top:50px;"></p>

## Overview

CRUD Grid is ideal for:
- Inventory management
- User directories and contact lists
- Task trackers and to-do lists
- Any structured data that users need to view, add, edit, or delete

<p style="margin-top:50px;"></p>

## Adding a CRUD Grid Element

1. Open the **Website Builder**
2. Find **CRUD Grid** in the Elements panel under **Data & Tables**
3. Drag it onto your page
4. Configure columns and settings in the **General Tab**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | Label displayed above the grid |
| **Columns** | Define the columns of your data table |
| **Settings** | Configure grid behavior (sorting, filtering, etc.) |

### Column Configuration

Each column has:
- **Header Name** - Column header text displayed to users
- **Field** - Internal field identifier
- **Type** - Data type: `text`, `number`, `date`, `boolean`
- **Editable** - Whether users can edit values in this column
- **Required** - Whether the field must have a value

### Grid Settings

| Setting | Description |
|---------|-------------|
| **Enable Sorting** | Allow users to sort by clicking column headers |
| **Enable Filtering** | Show filter inputs above columns |
| **Enable Pagination** | Split data into pages |
| **Page Size** | Number of rows per page (when pagination is enabled) |
| **Enable CSV Export** | Allow users to download data as CSV |
| **Enable CSV Import** | Allow users to upload data from CSV |
| **Row Height** | Height of each row in pixels |
| **Show Add Button** | Display a button to add new rows |
| **Show Delete Button** | Display a delete button on each row |
| **Enable Inline Edit** | Allow direct editing by clicking cells |

### Grid Style

| Setting | Description |
|---------|-------------|
| **Theme** | Visual theme (e.g., `ag-theme-alpine`) |
| **Density** | Row spacing: comfortable, compact, or spacious |
| **Zebra Striping** | Alternate row background colors |
| **Zebra Color** | Color for alternating rows |
| **Header Background** | Column header background color |
| **Header Text Color** | Column header text color |

### Color Tab

| Property | Description |
|----------|-------------|
| **Panel Background** | Container background |
| **Border Color** | Grid border color |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Padding** | Inner spacing |
| **Border Radius** | Corner rounding |

---

## Working with Data

### Adding Rows
Click the **+ Add** button (when enabled) to insert a new empty row at the bottom of the grid.

### Editing Cells
When inline editing is enabled, click any editable cell to modify its value. Press **Enter** or click outside to save.

### Deleting Rows
Click the **delete icon** on a row to remove it from the grid.

### Sorting
Click a column header to sort ascending. Click again for descending. Click a third time to clear sorting.

### Filtering
When filtering is enabled, type in the filter input above a column to filter rows containing that text.

---

## CSV Import / Export

### Exporting Data
1. Enable **CSV Export** in grid settings
2. A download button appears in the grid toolbar
3. Click to download all grid data as a `.csv` file

### Importing Data
1. Enable **CSV Import** in grid settings
2. An upload button appears in the grid toolbar
3. Select a `.csv` file — columns are matched by header names

---

## Database Integration

CRUD Grid data can be saved to the card database:
1. Open the **Connect Tab**
2. Enable database connection
3. All grid data (rows and columns) is stored and retrieved automatically

---

## Use Cases

### Inventory Table
```
Columns: Product Name, SKU, Quantity, Price
Sorting: Enabled
Filtering: Enabled
Pagination: 25 rows per page
CSV Export: Enabled
```

### Contact List
```
Columns: Name, Email, Phone, Department
Inline Edit: Enabled
Add Button: Enabled
Delete Button: Enabled
```

### Task Tracker
```
Columns: Task, Assignee, Status, Due Date
Sorting: Enabled
Filtering: Enabled
```

---

## Best Practices

1. **Keep columns focused** - Include only the fields users need to see and edit

2. **Use appropriate types** - Set column types correctly so sorting and filtering work as expected

3. **Enable pagination for large data** - Grids with many rows perform better with pagination enabled

4. **Mark required fields** - Prevent incomplete data entry by marking essential columns as required

5. **Use CSV import for bulk data** - Instead of adding rows one by one, prepare data in a spreadsheet and import it

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Dropdown Element - https://help.acenji.com/#/./create-web-application/elements/dropdown/index
<span class="triangle"></span> Tree Navigation Element - https://help.acenji.com/#/./create-web-application/elements/tree-navigation/index

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
