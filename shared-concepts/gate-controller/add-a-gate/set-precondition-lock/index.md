# Set Precondition Lock

The **Precondition Lock** condition controls gate access based on completion of required inputs. The gate opens only after the user has filled in all required fields in the specified dependency source.

---

## Overview

Precondition Lock enables you to:

- Require completion of prerequisite content
- Create progressive workflows
- Ensure users complete steps in order
- Gate content behind form submissions

---

## Enabling Precondition Lock

1. In the gate editor, find the **Precondition Lock** section
2. Toggle the **"Use Precondition Lock"** switch to enable
3. Configure the dependency source settings

---

## Configuration Options

| Field | Required | Description |
|-------|----------|-------------|
| **Page** | Yes | The page containing required inputs |
| **Tile Instance** | No | Specific tile with required inputs |
| **Single Element** | No | Specific element that must be filled |

---

## How It Works

The gate checks if all **required fields** within the selected scope have user input:

1. **Page only** → All required fields on the entire page must be filled
2. **Page + Tile** → All required fields in that specific tile must be filled
3. **Page + Tile + Element** → That specific element must have a value

```
Dependency Source: Reflection Page
├─ Required Field 1: ✓ Filled
├─ Required Field 2: ✓ Filled
├─ Required Field 3: ✗ Empty
└─ Gate Status: BLOCKED (not all required fields filled)
```

---

## Configuring Dependency Source

### Step 1: Select Page

1. Click the **Page** dropdown
2. Select the page containing prerequisite content
3. This page's required inputs become the dependency

### Step 2: Select Tile Instance (Optional)

If you only want to check a specific tile:

1. After selecting a page, click the **Tile Instance** dropdown
2. Select the specific tile
3. Only this tile's required inputs are checked

### Step 3: Select Single Element (Optional)

If you only want to check a specific field:

1. After selecting a tile, click the **Single Element** dropdown
2. Select the specific element
3. Only this element must have a value

---

## Scope Examples

### Entire Page Completion

```
Dependency Source:
├─ Page: "Self Reflection Form"
├─ Tile Instance: (none)
└─ Single Element: (none)

Gate opens when: ALL required fields on the entire page are filled
```

### Specific Tile Completion

```
Dependency Source:
├─ Page: "Feedback Form"
├─ Tile Instance: "Initial Questions"
└─ Single Element: (none)

Gate opens when: All required fields in "Initial Questions" tile are filled
              Other tiles on the page are ignored
```

### Single Field Completion

```
Dependency Source:
├─ Page: "Quiz Page"
├─ Tile Instance: "Quiz Form"
└─ Single Element: "Final Answer"

Gate opens when: The "Final Answer" field has a value
              Other fields are ignored
```

---

## Status Display

When Precondition Lock blocks access, users see:

```
"Blocked – condition is not met"
```

Once the dependency is satisfied:

```
"Open for editing"
```

---

## Common Use Cases

### Sequential Learning

Require completion of Module 1 before accessing Module 2:

```
Gate: "Module 2 - Advanced Topics"
Precondition Lock:
└─ Page: "Module 1 - Fundamentals"

Result: Module 2 unlocks after completing Module 1's required inputs
```

### Review After Submission

Gate the review page behind form submission:

```
Gate: "View Results"
Precondition Lock:
├─ Page: "Assessment Form"
└─ Tile: "Submit Assessment"

Result: Results page opens after assessment is submitted
```

### Certificate Generation

Require all modules to be completed:

```
Gate: "Download Certificate"
Precondition Lock:
└─ Page: "Final Exam"

Result: Certificate available only after completing the final exam
```

### Peer Review Workflow

Require self-reflection before viewing peer feedback:

```
Gate: "Peer Feedback"
Precondition Lock:
├─ Page: "Self Reflection"
└─ Tile: "Reflection Questions"

Result: Peer feedback accessible after self-reflection is complete
```

---

## Combining with Other Locks

Precondition Lock works alongside other conditions:

```
Gate: "Day 3 Advanced Content"

Time Lock: Opens +48h after start
Precondition Lock: Requires "Quiz 1" completion

Result: Content opens 48 hours after start,
        but ONLY if the user has completed Quiz 1
```

All enabled conditions must be met.

---

## What Counts as "Required"

Fields checked for completion are those marked as **required/mandatory** in the builder:

- Text inputs with required validation
- Selections that must be made
- Checkboxes that must be checked
- Any field with mandatory validation

Optional fields are **not** checked for precondition locks.

---

## Best Practices

1. **Keep dependencies clear** - Users should understand what they need to complete

2. **Show progress indicators** - Help users know what's remaining

3. **Test thoroughly** - Verify the gate opens when dependencies are met

4. **Consider partial saves** - Users may not complete forms in one session

5. **Document your workflow** - Map out the dependency chain

---

## Troubleshooting

### Gate Not Opening After Completion

- Verify all required fields have values
- Check that you're checking the correct page/tile
- Ensure the user's data was saved successfully

### Gate Opening Too Early

- Verify the correct scope is selected
- Check if required fields are properly marked in the builder
- Review which elements are actually required

### Wrong Page/Tile in Dropdown

- Ensure the pages/tiles exist in your application
- Refresh the Gate Controller page
- Verify the builder has the correct structure

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Add a Gate - https://help.acenji.com/#/./shared-concepts/gate-controller/add-a-gate/index
<span class="triangle"></span> Set Variable Lock - https://help.acenji.com/#/./shared-concepts/gate-controller/add-a-gate/set-variable-lock/index
<span class="triangle"></span> Set Display Element - https://help.acenji.com/#/./shared-concepts/gate-controller/add-a-gate/set-display-element/index

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
