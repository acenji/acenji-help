# Connect Tab

The **Connect Tab** allows you to link an Element to external data sources and the Variable Center. This tab enables data persistence, variable binding, and database integration for your elements.

The Connect Tab provides two main connection types:
1. **Variable Center** - Connect elements to global or session variables
2. **Database Connections** - Generate or merge with databases for data storage

---

## Connect to Variable Center

The Variable Center connection allows you to bind an element's value to a variable. This enables:

- **Data persistence** across pages and sessions
- **Sharing values** between different elements
- **Workflow automation** using variable states

### How to Connect to Variable Center

1. Select an element on the canvas
2. Open the **Connect Tab** in the Floating Design Panel
3. In the "Connect to Variable Center" section, choose a variable to bind

Once connected, the element's value will:
- Read from the variable when the page loads
- Write to the variable when the user makes changes

> **Note:** Variable Center connections are not available when editing Tile Templates. Use actual tile instances or elements on the page instead.

---

## Database Connections

The Database Connections section allows you to persist element data to a database. This is useful for:

- **Storing user input** for later retrieval
- **Creating data-driven applications**
- **Building reports and analytics**

### Merge with Database

Click **"Merge with Database"** to connect the element to an existing database table. This allows you to:

- Map element fields to database columns
- Update existing records
- Query and display data

### Generate Database

Click **"Generate Database"** to automatically create a database structure based on the element's fields. The system will:

1. Analyze the element's data structure
2. Create appropriate database tables
3. Set up the connection automatically

> **Note:** You can only generate one database per element. The "Generate Database" button is disabled if a generated database already exists for the element.

---

## Managing Database Connections

Once connections are created, they appear in the "Database Connections" list. Each connection shows:

- **Connection name** - Identifies the database link
- **Entity count** - Number of fields/entities in the connection
- **Generation status** - Progress indicator for database generation

### Actions

| Action | Description |
|--------|-------------|
| **Click connection** | View and edit the connection details |
| **Delete** | Remove the database connection |

---

## Connection Details Modal

Clicking on a connection opens a modal showing the connection structure in JSON format. This allows you to:

- View the field mappings
- Edit connection properties
- Understand the data structure

---

## Use Cases

### Storing Form Data

1. Add input elements to your page
2. Open the Connect Tab for each element
3. Generate a database or connect to Variable Center
4. User input is now persisted

### Pre-filling Elements

1. Connect an element to a Variable Center variable
2. Set the variable value in a previous workflow step
3. The element displays the pre-filled value

### Building Data-Driven Apps

1. Connect elements to a database
2. Use the Events Tab to trigger data operations
3. Display, update, and manage data through your elements

---

## Tips for Connect Tab

1. **Plan your data model:** Before connecting elements, think about how data should flow through your application.

2. **Use Variable Center for workflows:** Variables are ideal for passing data between pages and controlling app behavior.

3. **Use databases for persistence:** Databases are best for data that needs to survive sessions and be queried later.

4. **Test connections:** After setting up connections, test that data saves and loads correctly.

5. **Avoid redundant connections:** Don't connect the same element to both Variable Center and a database unless you have a specific need.

---

## Troubleshooting

### "Not possible to create or bind tile template fields"

This message appears when trying to connect elements inside a Tile Template. To fix:
- Navigate to an actual page
- Select a tile instance (not template)
- Connect elements at the page level

### Connection not saving

Ensure you:
- Have a valid database configuration
- The element type supports data binding
- You've saved changes after configuring

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Variable Center - https://help.acenji.com/#/./shared-concepts/variable-center/index
<span class="triangle"></span> General Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/general-tab/index
<span class="triangle"></span> Events Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/events-tab/index

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
