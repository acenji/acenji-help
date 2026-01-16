# Info Element

The **Info** element displays static informational text or HTML content to users. It's perfect for instructions, headings, descriptions, and any read-only content.

---

## Overview

Info elements are display-only components that render text or HTML without user interaction. They're commonly used for:
- Page headers and titles
- Instructions and guidance
- Disclaimers and notices
- Formatted content blocks

---

## Adding an Info Element

1. Open the **Website Builder**
2. Find **Info** in the Elements panel
3. Drag it onto your page
4. Configure the content in the **General Tab**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | The HTML content to display |

The Question Text field supports HTML formatting, allowing you to include:
- Headings (`<h1>`, `<h2>`, etc.)
- Paragraphs (`<p>`)
- Bold and italic text
- Lists (`<ul>`, `<ol>`)
- Links (`<a>`)

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

## Styling

Info elements have transparent backgrounds by default, allowing them to blend with the page. Customize styling to:
- Add background colors for callout boxes
- Add borders for emphasis
- Adjust padding for better spacing

---

## Use Cases

### Page Header
```html
<h1>Welcome to Our Survey</h1>
<p>Please answer the following questions.</p>
```

### Instructions
```html
<p><strong>Instructions:</strong> Complete all fields marked with an asterisk (*).
Your responses are confidential.</p>
```

### Warning Notice
```html
<p style="color: red;">⚠️ Warning: This action cannot be undone.</p>
```

### Feature Callout
```html
<div style="background: #e3f2fd; padding: 10px; border-radius: 5px;">
  <strong>Pro Tip:</strong> You can save your progress at any time.
</div>
```

---

## Best Practices

1. **Keep content concise** - Users scan rather than read

2. **Use clear formatting** - Headings, bullets, and bold text improve readability

3. **Provide context** - Help users understand what's expected

4. **Consider mobile** - Ensure text is readable on small screens

5. **Use for static content only** - For interactive content, use other elements

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Text Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/text-tab/index

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
