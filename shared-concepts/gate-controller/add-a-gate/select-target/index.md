# Select Target

The **Target** configuration determines what content your gate controls. You can gate an entire page, a specific tile, or even a single element within a tile.

---

## Overview

Target selection uses a hierarchical approach:

```
Page (required)
├─ Tile Instance (optional)
│   └─ Single Element (optional)
└─ Overlay Element (where status displays)
```

The more specific your target, the more granular your access control.

---

## Target Options

| Field | Required | Description |
|-------|----------|-------------|
| **Page** | Yes | The page containing the gated content |
| **Tile Instance** | No | A specific card/form on the page |
| **Single Element** | No | A specific field within the tile |
| **Overlay Element** | No | Where gate status messages appear |

---

## Configuring Targets

### Selecting a Page

1. In the gate editor, find the **Target** section
2. Click the **Page** dropdown
3. Select the page you want to gate
4. The preview updates to show the selected page

> **Note:** Page selection is required. You must select a page before configuring other target options.

### Selecting a Tile Instance (Optional)

If you want to gate only a specific tile on the page:

1. After selecting a page, the **Tile Instance** dropdown becomes available
2. Select the tile you want to gate
3. Only this tile will be affected by the gate conditions

If left empty, the entire page is gated.

### Selecting a Single Element (Optional)

If you want to gate only a specific field:

1. After selecting a tile instance, the **Single Element** dropdown becomes available
2. Select the specific field or widget to gate
3. Only this element will be affected

If left empty, the entire tile (or page) is gated.

### Selecting an Overlay Element

The overlay element is where status messages display:

1. Select an **Info** type element from the dropdown
2. This element will show countdown timers, status messages, etc.
3. Only Info-type elements are available for selection

---

## Target Hierarchy Examples

### Gate Entire Page

```
Target Configuration:
├─ Page: "Cycle 1 - Reflection"
├─ Tile Instance: (none)
└─ Single Element: (none)

Result: Entire page is gated
```

### Gate Specific Tile

```
Target Configuration:
├─ Page: "Feedback Page"
├─ Tile Instance: "Submit Review Form"
└─ Single Element: (none)

Result: Only the "Submit Review Form" tile is gated
        Other tiles on the page remain accessible
```

### Gate Single Element

```
Target Configuration:
├─ Page: "Scoring Page"
├─ Tile Instance: "Final Scores"
└─ Single Element: "Final Score Input"

Result: Only the "Final Score Input" field is gated
        Other elements in the tile remain accessible
```

---

## Visual Preview

As you select targets, the gate editor shows a **real-time preview** of the selected content:

- Page preview updates when you select a page
- Tile highlights when you select a tile instance
- Element highlights when you select a single element

This helps you verify you've selected the correct target.

---

## Use Cases

### Sequential Page Access

Gate entire pages for step-by-step workflows:

```
Gate 1: "Introduction Page" - Opens immediately
Gate 2: "Content Page" - Opens after Day 1
Gate 3: "Quiz Page" - Opens after Day 2
```

### Partial Form Access

Gate specific tiles while keeping others accessible:

```
Page: "Multi-Section Form"
├─ Section 1: Demographics (always visible)
├─ Section 2: Detailed Info (gated - opens Day 2)
└─ Section 3: Final Review (gated - opens Day 3)
```

### Progressive Disclosure

Gate individual elements for gradual reveal:

```
Page: "Results Dashboard"
Tile: "Scores Panel"
├─ Your Score: (always visible)
├─ Team Average: (gated until all submit)
└─ Detailed Breakdown: (gated until review period)
```

---

## Best Practices

1. **Start broad, refine later** - Gate the page first, then narrow down if needed

2. **Use meaningful page names** - Makes selection easier

3. **Verify with preview** - Always check the preview shows correct content

4. **Consider user experience** - Gating too granularly can be confusing

5. **Document your targets** - Keep notes on what each gate controls

---

## Troubleshooting

### Page Not Appearing in Dropdown

- Verify the page exists in your application
- Refresh the Gate Controller page
- Check that the page is published/saved

### Tile Not Appearing After Page Selection

- Ensure the page has tile instances
- Verify tiles are saved in the builder
- Try reselecting the page

### Element Not Appearing After Tile Selection

- Confirm the tile contains elements
- Ensure elements are saved in the builder
- Try reselecting the tile

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Add a Gate - https://help.acenji.com/#/./shared-concepts/gate-controller/add-a-gate/index
<span class="triangle"></span> Set Display Element - https://help.acenji.com/#/./shared-concepts/gate-controller/add-a-gate/set-display-element/index
<span class="triangle"></span> Gate Controller - https://help.acenji.com/#/./shared-concepts/gate-controller/index

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
