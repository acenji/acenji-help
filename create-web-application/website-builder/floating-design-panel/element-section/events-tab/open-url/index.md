# Open URL Event

The **Open URL Event** allows you to open an external web address when a user interacts with an element. This is perfect for linking to external resources, documentation, or third-party services.

---

## Concept

Think of an **Open URL** action as a way to send users to any web address.
For example:

> You have a **"Learn More"** button on your page that should open your company's documentation site. Wire it with an **Open URL Event**, and when clicked — the user is taken to the external URL.

---

## Adding an Open URL Event

1. **Select the element** (e.g., button, image, or link) on your page.
2. Open the **Floating Design Panel** and go to the **Events Tab**.
3. From the **Available Events**, **drag the _Open Url_ event** into the **Perform an Action** section on the left.
4. A **properties window** will open, where you can configure:
   - **Title** — internal name to help you identify the event
   - **Description** — internal notes to explain the purpose
   - **URL** — the web address to open (e.g., `https://example.com`)

> The Title and Description are only visible to creators inside the design panel — they are not shown to end users.

5. Click **Save**.
   The event will now appear in the **Perform an Action** list.

---

## Configuration Options

| Field | Required | Description |
|-------|----------|-------------|
| **Title** | Yes | Internal name for the event |
| **Description** | Yes | Internal notes about the event |
| **URL** | Yes | The web address to open |

---

## URL Format

Enter a complete URL including the protocol:

| Format | Example |
|--------|---------|
| **HTTPS** | `https://www.example.com` |
| **HTTP** | `http://example.com` |
| **With path** | `https://docs.example.com/guide` |
| **With parameters** | `https://example.com?ref=acenji` |

---

## Editing or Deleting

Once the Open URL event has been created, you can manage it from the **Perform an Action** section:

- Click the **three dots (⋯)** next to the event to:
  - **Edit** — reopen the properties window and change Title, Description, or URL
  - **Delete** — remove the event entirely

---

## Common Use Cases

### External Documentation
```
URL: https://docs.yourcompany.com
Purpose: Link to help documentation
```

### Social Media Links
```
URL: https://twitter.com/yourcompany
Purpose: Connect users to social profiles
```

### Resource Downloads
```
URL: https://yoursite.com/downloads/guide.pdf
Purpose: Provide downloadable resources
```

### Third-Party Services
```
URL: https://calendly.com/your-booking
Purpose: Link to scheduling or booking tools
```

---

## Pro Tip

Open URL events can be combined with other events on the same element.
For example, a button can **track analytics** and **open an external link** at the same time.

---

## Best Practices

1. **Use HTTPS** — Always prefer secure URLs when possible

2. **Test links** — Verify URLs work before publishing

3. **Provide context** — Make it clear to users where the link will take them

4. **Consider mobile** — Ensure external sites work well on mobile devices

---

## Need Help?

- Open a support ticket from your ACENji admin panel
- Or reach us via [ACENji.com](https://www.acenji.com/contact)

---

That's it!
You've successfully wired an **Open URL Event** — enabling seamless connections to external resources from your ACENji app.
