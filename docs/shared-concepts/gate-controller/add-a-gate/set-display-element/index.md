# Set Display Element

The **Display Element** configuration determines where gate status messages appear to users. This is the visual feedback that shows countdowns, access status, and completion information.

---

## Overview

Display Element enables you to:

- Show countdown timers before gates open
- Display current access status
- Show completion timestamps
- Provide visual feedback on gate conditions

---

## Configuring Display Element

### Selecting an Overlay Element

1. In the gate editor, find the **Overlay Element** field in the Target section
2. Click the dropdown to see available elements
3. Select an **Info** type element
4. This element will display gate status messages

> **Note:** Only Info-type elements are available for selection as overlay elements.

---

## Status Messages

The display element shows different messages based on gate state:

| Status | Message | When Shown |
|--------|---------|------------|
| **Opens in...** | "Opens in 2d 5h 30m 15s" | Before gate opens (countdown) |
| **Open for editing** | "Open for editing" | Gate is currently open |
| **Blocked** | "Blocked – condition is not met" | Variable or precondition not met |
| **Closed** | "Closed – missed deadline" | Past end time |
| **Completed** | "Completed on Jan 15, 2024" | User finished interaction |

---

## Countdown Display

When a Time Lock is active and the gate hasn't opened yet:

```
Opens in 2d 5h 30m 15s
```

The countdown updates in real-time, showing:
- **Days** (d)
- **Hours** (h)
- **Minutes** (m)
- **Seconds** (s)

As time passes, larger units drop off:
```
2d 5h 30m → 5h 30m 15s → 30m 15s → 15s → Open for editing
```

---

## Placement Recommendations

### Above Gated Content

Place the Info element at the top of the gated section:

```
┌─────────────────────────┐
│  Opens in 2d 5h 30m     │  ← Info element (overlay)
├─────────────────────────┤
│                         │
│   [Gated Content]       │  ← Hidden/locked
│                         │
└─────────────────────────┘
```

### Within Gated Tile

Place inside the tile that's being gated:

```
┌─────────────────────────┐
│  Form Title             │
├─────────────────────────┤
│  Opens in 2d 5h 30m     │  ← Info element
├─────────────────────────┤
│  Field 1: [locked]      │
│  Field 2: [locked]      │
│  Submit: [locked]       │
└─────────────────────────┘
```

---

## Creating an Info Element for Gates

If you don't have a suitable Info element:

1. Open your application in the **Builder**
2. Add an **Info** element to the page/tile
3. Position it where you want status to display
4. Style it appropriately (color, size, etc.)
5. Save the page
6. Return to Gate Controller and select it

---

## Styling Considerations

The Info element should be styled to stand out:

| Property | Recommendation |
|----------|----------------|
| **Position** | Top of gated section |
| **Background** | Subtle highlight color |
| **Text** | Clear, readable font |
| **Visibility** | Always visible |

The status text is dynamically inserted, so design the element to accommodate various message lengths.

---

## Multiple Gates, Multiple Displays

Each gate can have its own display element:

```
Page with Multiple Gated Sections:

Section 1:
├─ Gate: Day 1 Content
└─ Display: Info Element A → "Open for editing"

Section 2:
├─ Gate: Day 2 Content
└─ Display: Info Element B → "Opens in 1d 3h 20m"

Section 3:
├─ Gate: Day 3 Content
└─ Display: Info Element C → "Opens in 2d 3h 20m"
```

---

## Display Without Overlay Element

If no overlay element is selected:

- Gate still functions normally
- Users don't see status messages
- Content is simply shown/hidden based on conditions

> **Recommendation:** Always configure an overlay element for better user experience.

---

## Best Practices

1. **Always use an overlay** - Users need feedback on why content is locked

2. **Position prominently** - Status should be easy to find

3. **Style appropriately** - Make it visually distinct from other content

4. **Test display states** - Verify all status messages render correctly

5. **Consider mobile** - Ensure status is visible on smaller screens

---

## Troubleshooting

### No Status Showing

- Verify an overlay element is selected
- Check that the Info element exists on the page
- Ensure the element is visible (not hidden by conditions)

### Wrong Status Displaying

- Verify gate conditions are configured correctly
- Check if multiple gates target the same content
- Review the complete gate configuration

### Element Not in Dropdown

- Confirm the element is an Info type
- Verify it's on the correct page
- Save the page in the builder and refresh

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Add a Gate - https://help.acenji.com/#/./shared-concepts/gate-controller/add-a-gate/index
<span class="triangle"></span> Select Target - https://help.acenji.com/#/./shared-concepts/gate-controller/add-a-gate/select-target/index
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
