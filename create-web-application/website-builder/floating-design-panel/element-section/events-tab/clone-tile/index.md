# Clone Tile Event

The **Clone Tile Event** allows you to dynamically duplicate tiles at runtime. This is useful for creating expandable lists, repeating sections, and dynamic layouts that grow based on user actions.

---

## Concept

Think of **Clone Tile** as a way to create copies of a tile template on demand.
For example:

> A user is filling out an order form and needs to add multiple line items. They click **"Add Item"**, and a new row (cloned tile) appears for them to fill in.

---

## Adding a Clone Tile Event

1. **Select the element** (typically a button) that will trigger the cloning.
2. Open the **Floating Design Panel** and go to the **Events Tab**.
3. From the **Available Events**, **drag the _Clone Tile_ event** into the **Perform an Action** section on the left.
4. A **properties window** will open, where you can configure:
   - **Title** — internal name to help you identify the event
   - **Description** — internal notes to explain the purpose
   - **Cloning Direction** — horizontal or vertical
   - **Source Page** — the page containing the tile to clone
   - **Source Tile** — the specific tile to duplicate

> The Title and Description are only visible to creators inside the design panel — they are not shown to end users.

5. Click **Save**.
   The event will now appear in the **Perform an Action** list.

---

## Configuration Options

| Field | Required | Description |
|-------|----------|-------------|
| **Title** | Yes | Internal name for the event |
| **Description** | Yes | Internal notes about the event |
| **Cloning Direction** | Yes | Horizontal (side-by-side) or Vertical (stacked) |
| **Source Page** | Yes | Page containing the tile template |
| **Source Tile** | Yes | The tile to clone |

---

## Cloning Direction

Choose how cloned tiles are arranged:

| Direction | Layout | Use Case |
|-----------|--------|----------|
| **Horizontal** | Tiles appear side-by-side | Card grids, gallery items |
| **Vertical** | Tiles stack on top of each other | List items, form rows |

### Visual Example

**Horizontal Cloning:**
```
[Original] [Clone 1] [Clone 2] [Clone 3]
```

**Vertical Cloning:**
```
[Original]
[Clone 1]
[Clone 2]
[Clone 3]
```

---

## Selecting the Source Tile

1. After choosing the cloning direction, select the **Source Page**
2. A visual grid shows all available pages
3. Click to select the page
4. Then select the **Source Tile** from that page
5. The tile preview helps you identify the correct tile

---

## Editing or Deleting

Once the Clone Tile event has been created, you can manage it from the **Perform an Action** section:

- Click the **three dots (⋯)** next to the event to:
  - **Edit** — reopen the properties window and modify settings
  - **Delete** — remove the event entirely

---

## Common Use Cases

### Order Line Items
Add rows for multiple products:
```
Trigger: "Add Item" button
Clone: Product row tile (vertical)
Result: New row for each product
```

### Contact Lists
Add multiple contacts:
```
Trigger: "Add Contact" button
Clone: Contact card tile (vertical)
Result: Expandable contact list
```

### Image Galleries
Add photos dynamically:
```
Trigger: "Add Photo" button
Clone: Image card tile (horizontal)
Result: Growing photo gallery
```

### Survey Sections
Add repeating question groups:
```
Trigger: "Add Section" button
Clone: Question group tile (vertical)
Result: Dynamic survey length
```

### Team Members
Add team member cards:
```
Trigger: "Add Member" button
Clone: Member card tile (horizontal)
Result: Expandable team roster
```

---

## Pro Tip

Combine Clone Tile with **Delete Button** events to let users both add and remove items dynamically.

For example:
- "Add Item" button → Clone Tile event
- Each cloned tile has a "Remove" button → Delete Button event

---

## Best Practices

1. **Design the template tile** — Create a well-structured tile before cloning

2. **Consider layout** — Plan how clones will fit on the page

3. **Include delete options** — Let users remove clones they don't need

4. **Test responsiveness** — Verify clones work on different screen sizes

5. **Keep clones consistent** — All clones inherit the template's design

---

## Important Notes

- Cloned tiles start with empty/default values
- Each clone is independent — changes to one don't affect others
- The original tile remains unchanged
- Clones are added after the last existing clone

---

## Need Help?

- Open a support ticket from your ACENji admin panel
- Or reach us via [ACENji.com](https://www.acenji.com/contact)

---

That's it!
You've learned about the **Clone Tile Event** — enabling dynamic, expandable content in your ACENji app.
