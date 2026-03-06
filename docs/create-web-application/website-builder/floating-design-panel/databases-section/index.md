# Databases Section

The **Databases Section** in the Floating Design Panel allows you to connect elements, tiles, and pages to data sources. This enables dynamic content that updates based on stored or retrieved data.

---

## Overview

The Databases Section enables you to:

- **Connect to data sources** for dynamic content
- **Bind elements** to database fields
- **Display lists** of records in card lists
- **Manage data submissions** from forms

---

## Accessing the Databases Section

1. Select an element, tile, or page in the builder
2. Open the **Floating Design Panel**
3. Click the **Databases** tab in the top menu

---

## How Database Connections Work

```
┌─────────────────────────────────────────────────────────────┐
│                   DATABASE CONNECTION                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────────┐         ┌──────────────┐                 │
│   │   DATABASE   │   ←→    │    TILE      │                 │
│   │   (Source)   │         │  (Display)   │                 │
│   └──────────────┘         └──────────────┘                 │
│         │                         │                          │
│         ▼                         ▼                          │
│   ┌──────────────┐         ┌──────────────┐                 │
│   │   Fields     │   →→→   │   Elements   │                 │
│   │  (Columns)   │         │  (Bindings)  │                 │
│   └──────────────┘         └──────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Database Types

### Internal Databases

Databases created within ACENji:

| Type | Description |
|------|-------------|
| **Project Databases** | Custom data tables created for your project |
| **User Data** | User information from Variable Center |
| **Session Data** | Group session participant data |

### External Connections

Connect to external data sources:

| Type | Description |
|------|-------------|
| **API Endpoints** | REST API connections |
| **Webhooks** | Incoming data from external services |

---

## Connecting to a Database

### Step 1: Select Data Source

1. In the Databases tab, click **"Select Database"**
2. Choose from available databases
3. The database schema loads

### Step 2: Map Fields to Elements

1. For each element that needs data:
2. Click the element in the builder
3. In the **Connect** tab, select the database field
4. The element now displays data from that field

### Step 3: Configure Display Options

| Option | Description |
|--------|-------------|
| **Single Record** | Display one record (current user, selected item) |
| **List View** | Display multiple records in a card list |
| **Filtered** | Apply conditions to limit displayed records |

---

## Data Binding

### Read Bindings

Display database values in elements:

```
Element: Text Label
Binding: [Database.firstName]
Result: Shows "John" from database
```

### Write Bindings

Save element values back to database:

```
Element: Text Input
Binding: [Database.notes]
Action: On save, writes input value to database
```

### Two-Way Bindings

Both read and write:

```
Element: Text Input
Binding: [Database.email]
Behavior: Loads current value, saves changes
```

---

## Working with Card Lists

Card Lists display multiple database records:

### Setup

1. Add a **Card List** element to your page
2. In Databases tab, select the data source
3. Design the card template with bound elements
4. Each record creates a card instance

### Card List Options

| Option | Description |
|--------|-------------|
| **Items Per Row** | Number of cards displayed horizontally |
| **Pagination** | Enable page navigation for large datasets |
| **Sorting** | Default sort order for records |
| **Filtering** | Conditions to limit displayed records |

---

## Data Operations

### Read Operations

Fetch and display data:

- Load on page open
- Refresh on user action
- Filter based on conditions

### Write Operations

Save data to the database:

- Submit form data
- Update existing records
- Create new records

### Delete Operations

Remove records:

- Delete single record
- Bulk delete with confirmation

---

## Filtering Data

Apply filters to limit displayed records:

### Static Filters

Predefined conditions:

```
Filter: [status] equals "active"
Result: Only shows active records
```

### Dynamic Filters

Based on user input or variables:

```
Filter: [category] equals [Selected Category]
Result: Shows records matching user's selection
```

---

## Common Use Cases

### User Profile Display

Show current user's information:

```
Database: User Data
Filter: [email] equals [Current User Email]
Display: Profile tile with bound fields
```

### Dynamic Lists

Show filtered content:

```
Database: Products
Filter: [category] equals [Selected Category]
Display: Card list of matching products
```

### Form Submissions

Save user input:

```
Elements: Text inputs, dropdowns
Action: On submit, create new database record
```

### Lookup Fields

Reference data from another table:

```
Element: Dropdown
Source: [Categories Database]
Display: Category names
Save: Category ID
```

---

## Database Schema

When a database is connected, you can view:

| Column | Description |
|--------|-------------|
| **Field Name** | Database column name |
| **Type** | Data type (text, number, date, etc.) |
| **Required** | Whether field must have a value |
| **Default** | Default value if none provided |

---

## Best Practices

1. **Plan your data structure** - Design databases before building UI

2. **Use meaningful field names** - Makes binding easier to understand

3. **Validate input** - Ensure data meets requirements before saving

4. **Handle empty states** - Show appropriate messages when no data exists

5. **Optimize queries** - Filter data server-side when possible

6. **Test with real data** - Verify bindings work with actual records

---

## Troubleshooting

### Data Not Displaying

- Verify the database connection is active
- Check that field bindings are correct
- Ensure records exist in the database
- Review filter conditions

### Data Not Saving

- Confirm write permissions are configured
- Check required field validation
- Verify the save action is triggered

### Wrong Data Showing

- Review filter conditions
- Check for multiple bindings on same element
- Verify the correct database is selected

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Floating Design Panel - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/index
<span class="triangle"></span> Card List Element - https://help.acenji.com/#/./create-web-application/elements/card-list/index
<span class="triangle"></span> Variable Center - https://help.acenji.com/#/./shared-concepts/variable-center/index

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
