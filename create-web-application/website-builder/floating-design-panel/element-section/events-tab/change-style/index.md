# Change Style Event

The **Change Style Event** allows you to dynamically modify the visual appearance of elements at runtime based on user interactions. This enables responsive visual feedback without writing code.

---

## Concept

Think of **Change Style** as a way to make your UI respond visually to user actions.
For example:

> A button changes color when a form is completed, or a panel highlights when important data is displayed.

---

## Adding a Change Style Event

1. **Select the element** on your page that should trigger the style change.
2. Open the **Floating Design Panel** and go to the **Events Tab**.
3. From the **Available Events**, **drag the _Change Style_ event** into the **Perform an Action** section on the left.
4. A **properties window** will open, where you can configure:
   - **Title** — internal name to help you identify the event
   - **Description** — internal notes to explain the purpose
   - **Style settings** — configure which styles to change

> The Title and Description are only visible to creators inside the design panel — they are not shown to end users.

5. Click **Save**.
   The event will now appear in the **Perform an Action** list.

---

## Configuration Options

| Field | Required | Description |
|-------|----------|-------------|
| **Title** | Yes | Internal name for the event |
| **Description** | Yes | Internal notes about the event |
| **Style Properties** | Varies | The visual properties to modify |

---

## Style Properties

Change Style can modify various visual properties:

| Property | Description | Example |
|----------|-------------|---------|
| **Background Color** | Element background | Blue → Green |
| **Text Color** | Font color | Black → Red |
| **Border** | Border appearance | None → Solid |
| **Visibility** | Show/hide element | Visible → Hidden |
| **Opacity** | Transparency level | 100% → 50% |

---

## Editing or Deleting

Once the Change Style event has been created, you can manage it from the **Perform an Action** section:

- Click the **three dots (⋯)** next to the event to:
  - **Edit** — reopen the properties window and modify settings
  - **Delete** — remove the event entirely

---

## Common Use Cases

### Visual Feedback
Highlight a button when a required field is filled:
```
Trigger: Form field completed
Style: Button background → Green
```

### Status Indicators
Change panel color based on status:
```
Trigger: Status change
Style: Panel border → Success/Warning/Error color
```

### Interactive Elements
Highlight selected items:
```
Trigger: Item selection
Style: Background → Highlight color
```

### Conditional Formatting
Show/hide elements based on conditions:
```
Trigger: Condition met
Style: Element visibility → Show/Hide
```

---

## Pro Tip

Change Style events work well in combination with other events.
For example, when a calculation completes, you can **change the result box color** to green to indicate success.

---

## Best Practices

1. **Use consistent colors** — Follow your app's color scheme

2. **Provide clear feedback** — Make style changes obvious and meaningful

3. **Don't overdo it** — Too many style changes can be distracting

4. **Test on mobile** — Ensure changes are visible on smaller screens

5. **Consider accessibility** — Don't rely solely on color for information

---

## Need Help?

- Open a support ticket from your ACENji admin panel
- Or reach us via [ACENji.com](https://www.acenji.com/contact)

---

That's it!
You've learned about the **Change Style Event** — enabling dynamic visual feedback in your ACENji app.
