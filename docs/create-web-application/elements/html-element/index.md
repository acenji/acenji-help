# HTML Element

The **HTML Element** lets you embed raw HTML, CSS, and JavaScript directly into your ACENji page. It includes a built-in code editor, live preview, and starter templates for common patterns.

---

## Overview

For cases where ACENji's built-in elements don't cover a specific need, the HTML Element gives you full control. Write custom markup, style it with CSS, and add interactivity with JavaScript -- all within a sandboxed preview.

---

## Adding an HTML Element

1. Open the **Website Builder**
2. Find **HTML Element** in the Elements panel (under Tools)
3. Drag it onto your page
4. Write your code in the **General Tab** editor

---

## Properties

### General Tab

| Property | Description | Default |
|----------|-------------|---------|
| **HTML** | Raw HTML markup | Empty |
| **CSS** | Scoped CSS styles | Empty |
| **JavaScript** | Client-side JavaScript | Empty |
| **Template** | Starter template to load | None |
| **Show Border** | Display a border around the element in the builder | `true` |

### Templates

Choose from built-in starter templates to get started quickly:

| Template | Description |
|----------|-------------|
| **Blank** | Empty starting point |
| **Card** | Styled card with image and text |
| **Banner** | Full-width banner with gradient background |
| **Table** | Styled data table |
| **Embed** | Container for third-party embeds |

### Live Preview

The builder shows a real-time preview of your HTML/CSS/JS below the code editor. Changes appear instantly as you type.

---

## Security Notes

- JavaScript runs in the context of the page. Avoid loading untrusted external scripts.
- CSS is scoped to the element container to prevent style leaks.
- The HTML Element is best suited for trusted content authored by app builders, not end-user input.

---

## Use Cases

- **Custom widgets** -- embed third-party widgets or charts
- **Styled content** -- create layouts not possible with standard elements
- **Embed codes** -- paste embed codes from external services
- **Prototyping** -- quickly test HTML/CSS ideas within your app

---

## Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
