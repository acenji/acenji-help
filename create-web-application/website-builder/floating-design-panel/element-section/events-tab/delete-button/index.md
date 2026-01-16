# Delete Button Event

The **Delete Button Event** allows you to remove tiles or elements from the interface at runtime. This is essential for creating dynamic lists where users can add and remove items.

---

## Concept

Think of **Delete Button** as a way to let users remove content they no longer need.
For example:

> A user has added several items to an order. They realize they don't need one, click the **delete button** on that item's row, and it's removed from the list.

---

## Adding a Delete Button Event

1. **Select the element** (typically a button or icon) that will trigger the deletion.
2. Open the **Floating Design Panel** and go to the **Events Tab**.
3. From the **Available Events**, **drag the _Delete Button_ event** into the **Perform an Action** section on the left.
4. A **properties window** will open, where you can configure:
   - **Title** — internal name to help you identify the event
   - **Description** — internal notes to explain the purpose
   - **Confirmation** — optional confirmation dialog settings
   - **Button styling** — position and color (for tiles)

> The Title and Description are only visible to creators inside the design panel — they are not shown to end users.

5. Click **Save**.
   The event will now appear in the **Perform an Action** list.

---

## Configuration Options

| Field | Required | Description |
|-------|----------|-------------|
| **Title** | Yes | Internal name for the event |
| **Description** | Yes | Internal notes about the event |
| **Require Confirmation** | No | Show confirmation dialog before deleting |
| **Confirmation Message** | Conditional | Custom message for confirmation dialog |
| **Button Position** | For tiles | Corner placement of delete button |
| **Button Color** | For tiles | Visual style of delete button |

---

## Confirmation Settings

Prevent accidental deletions with a confirmation dialog:

| Setting | Description |
|---------|-------------|
| **Enabled** | Shows confirmation before deleting |
| **Disabled** | Deletes immediately without confirmation |

When enabled, enter a **Confirmation Message** such as:
- "Are you sure you want to delete this item?"
- "This action cannot be undone. Continue?"
- "Remove this entry from the list?"

---

## Button Position (Tiles Only)

For delete buttons on tiles, choose the corner position:

| Position | Location |
|----------|----------|
| **Top Left** | Upper-left corner |
| **Top Right** | Upper-right corner |
| **Bottom Left** | Lower-left corner |
| **Bottom Right** | Lower-right corner |

---

## Button Color (Tiles Only)

Choose a color that matches your design:

| Color | Style | Common Use |
|-------|-------|------------|
| **Red** | Danger | Destructive actions (default) |
| **Blue** | Primary | Neutral removal |
| **Green** | Success | Positive actions |
| **Yellow** | Warning | Cautionary removal |

---

## Editing or Deleting

Once the Delete Button event has been created, you can manage it from the **Perform an Action** section:

- Click the **three dots (⋯)** next to the event to:
  - **Edit** — reopen the properties window and modify settings
  - **Delete** — remove the event entirely

---

## Common Use Cases

### Order Line Items
Remove items from an order:
```
Trigger: Delete icon on each row
Confirmation: "Remove this item from your order?"
Position: Top Right
Color: Red
```

### Contact Lists
Remove contacts:
```
Trigger: Delete button on contact card
Confirmation: "Delete this contact?"
Position: Top Right
Color: Red
```

### Photo Galleries
Remove photos:
```
Trigger: X button on image
Confirmation: Disabled (quick removal)
Position: Top Right
Color: Red
```

### Task Lists
Remove completed tasks:
```
Trigger: Remove button
Confirmation: Disabled
Position: Top Right
Color: Blue
```

### Survey Responses
Remove optional sections:
```
Trigger: "Remove Section" button
Confirmation: "Remove this section and its answers?"
Position: Bottom Right
Color: Yellow
```

---

## Behavior on Different Elements

### On Tiles
- Renders as a floating delete button in the specified corner
- Button shows "✖" character
- Position and color options apply
- Ideal for card-based layouts

### On Other Elements
- Delete functionality still works
- Visual styling options may differ
- Consider using a dedicated button element

---

## Pro Tip

Pair Delete Button events with **Clone Tile** events to create fully dynamic lists:

```
"Add Item" button → Clone Tile (creates new row)
Each row's "X" button → Delete Button (removes that row)
```

This pattern lets users build and edit lists of any length.

---

## Best Practices

1. **Always confirm destructive actions** — Use confirmation for important data

2. **Position consistently** — Place delete buttons in the same corner across your app

3. **Use clear messaging** — Confirmation messages should be specific

4. **Consider undo** — For critical data, consider implementing undo functionality

5. **Visual clarity** — Make delete buttons visible but not dominant

---

## Important Notes

- Deletion removes the element from the current view
- Data may or may not be permanently deleted depending on your app configuration
- Deleted cloned tiles cannot be recovered
- Original template tiles should not have delete buttons (only clones)

---

## Need Help?

- Open a support ticket from your ACENji admin panel
- Or reach us via [ACENji.com](https://www.acenji.com/contact)

---

That's it!
You've learned about the **Delete Button Event** — enabling dynamic content removal in your ACENji app.
