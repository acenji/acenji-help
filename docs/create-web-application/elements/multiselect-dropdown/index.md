# Multiselect Dropdown

The **Multiselect Dropdown** element provides a searchable dropdown that allows users to select multiple options. Selected items appear as removable chips.

---

## Overview

Unlike the standard Dropdown (single selection), the Multiselect Dropdown supports:

- Multiple selections displayed as chips/tags
- Searchable option filtering
- Select All / Clear All buttons
- Maximum selection limits
- Customizable chip appearance

---

## Adding a Multiselect Dropdown

1. Open the **Website Builder**
2. Find **Multiselect Dropdown** in the Elements panel (under Input)
3. Drag it onto your page
4. Add options in the **General Tab**

---

## Properties

### General Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Placeholder** | Text shown when no items are selected | `Select options...` |
| **Options** | List of selectable items (add, remove, reorder) | Empty list |
| **Max Selections** | Maximum number of items a user can select (0 = unlimited) | `0` |
| **Searchable** | Enable type-to-filter in the dropdown | `true` |
| **Show Select All** | Display a "Select All" button | `true` |
| **Show Clear All** | Display a "Clear All" button | `true` |
| **Chip Style** | Chip appearance: rounded or square | `rounded` |
| **Chip Color** | Background color of selected chips | `#2B98E0` |
| **Close on Select** | Close dropdown after each selection | `false` |

### Managing Options

- Click **Add Option** to add a new choice
- Enter the option label text
- Use drag handles to reorder options
- Click the X button to remove an option

---

## Runtime Behavior

- Clicking the dropdown opens a list of all options
- Typing in the search box filters options in real time
- Selected items appear as chips above/inside the dropdown
- Clicking the X on a chip removes that selection
- When max selections is reached, remaining options are disabled

---

## Use Cases

- **Tag assignment** -- let users assign multiple tags to items
- **Filter controls** -- select multiple filter criteria
- **Skills/categories** -- choose multiple skills or categories for a profile
- **Multi-select forms** -- any field requiring more than one selection

---

## Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
