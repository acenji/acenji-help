# Position Tab

The **Position Tab** controls the **alignment and positioning** of an Element within its container. These settings determine how the Element is placed horizontally within the available space.

The Position Tab is available for most element types. Some elements (like Email, Filter Grid, and Drill Down Grid) do not have position settings.

---

## Available Position Settings

### Justify Content

The primary setting in the Position Tab is **Justify Content**, which controls horizontal alignment of the element within its container.

| Value | Description |
|-------|-------------|
| **Start** | Aligns the element to the left (start) of its container. This is the default. |
| **Center** | Centers the element horizontally within its container. |
| **End** | Aligns the element to the right (end) of its container. |

---

## How Justify Content Works

The Justify Content setting uses CSS flexbox alignment:

```
Container
┌──────────────────────────────────────┐
│ [Element]                            │  ← Start
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│            [Element]                 │  ← Center
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│                            [Element] │  ← End
└──────────────────────────────────────┘
```

---

## Elements with Position Settings

The following elements support position settings:

| Element Type | Position Support |
|--------------|------------------|
| Info | Yes |
| Text Input | Yes |
| Text Area | Yes |
| Button | Yes |
| Selection Group | Yes |
| Multiple Selection Group | Yes |
| Numeric Input | Yes |
| Yes/No/Unknown | Yes |
| Checkbox | Yes |
| Phone Number | Yes |
| User Element | Yes |
| Date | Yes |
| Camera | Yes |
| Video | Yes |
| GPS | Yes |
| Signature | Yes |
| Image | Yes |
| Link | Yes |
| Card Link | Yes |
| Slider | Yes |
| Rating | Yes |
| Increment/Decrement | Yes |
| Dropdown | Yes |
| Email | No |
| Filter Grid | No |
| Drill Down Grid | No |

---

## Common Use Cases

### Centering a Button

To center a button (like a submit button) on the page:
1. Select the Button element
2. Go to the Position Tab
3. Set Justify Content to **Center**

### Right-Aligning an Element

To align an element to the right side (useful for action buttons or totals):
1. Select the element
2. Go to the Position Tab
3. Set Justify Content to **End**

### Creating Aligned Groups

When elements are in a Row Container, position settings help create visual groupings:
- Left-align labels and inputs for form layouts
- Center-align titles and headers
- Right-align action buttons and totals

---

## Tips for Position Settings

1. **Combine with width:** Position settings work best when the element width is less than 100%. A 100% width element will fill its container regardless of justify setting.

2. **Consider reading direction:** "Start" means left in left-to-right languages. For right-to-left layouts, "Start" would be on the right.

3. **Use Row Containers:** For complex layouts with multiple elements side-by-side, use Row Containers and adjust individual element positions within them.

4. **Test responsiveness:** Position settings affect how elements appear at different screen sizes. Test your layout on various devices.

5. **Consistency matters:** Use consistent positioning for similar elements (e.g., all action buttons right-aligned).

---

## Missing Position Tab?

If you don't see the Position Tab for an element, it means that element type doesn't support custom positioning. Elements like Email, Filter Grid, and Drill Down Grid have fixed positioning behavior.

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Color Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/color-tab/index
<span class="triangle"></span> Dimensions Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/dimensions-tab/index
<span class="triangle"></span> General Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/general-tab/index

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
