# Activity Feed

The **Activity Feed** element displays a chronological timeline of activities and events. It shows user actions, system events, and other activities grouped by date with colored type indicators.

---

## Adding an Activity Feed

1. Open the **Website Builder** and select a page
2. Find **Activity Feed** in the **Display** category of the Elements Panel
3. Drag it onto your page
4. Configure settings in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Title** | Heading displayed above the activity feed |
| **Data Source** | `Static` (from Redux answers) or `From Element` (pre-loaded activities) |
| **Max Items** | Maximum number of activities to display (default: 50) |
| **Sort Order** | `Newest First` or `Oldest First` |
| **Date Format** | `Relative` (e.g. 2h ago) or `Absolute` (e.g. Mar 5, 2026) |
| **Group by Date** | Group activities under date headers (Today, Yesterday, etc.) |
| **Show Avatars** | Display actor initial avatars next to activities |
| **Show Timestamps** | Display timestamp under each activity |

### Activity Types

Configure the types of activities with custom labels, icons, and colors:

| Field | Description |
|-------|-------------|
| **Key** | Unique identifier for the activity type (e.g. `create`, `update`) |
| **Label** | Display name for the type |
| **Color** | Color for the timeline dot and icon |

Default types: Created (green), Updated (blue), Deleted (red), Commented (orange), System (gray).

### Data Source (From Element)

When using data binding, map fields from a connected element:

| Field | Description |
|-------|-------------|
| **Source Element ID** | ID of the element providing activities |
| **Activities Field** | Field name containing the activities array |

### Color Tab

Customize the container background and border colors.

### Dimensions Tab

Adjust padding, margin, border radius, and size.

---

## Activity Features

- **Timeline UI**: Vertical line with colored dots for each activity type
- **Avatars**: Colored circles showing actor initials
- **Date Grouping**: Activities grouped under Today, Yesterday, or full date headers
- **Type Indicators**: Each activity type has its own icon and color
- **Targets**: Optional target text (e.g. "Form A") shown in blue

---

## Data Storage

Activities are stored in the element's answer data as an array of objects. Each activity includes an ID, actor name, action text, optional target, type key, timestamp, and optional detail text.

---

## Use Cases

- **Audit Trail**: Track changes to records or forms
- **Activity Log**: Display user actions in a project
- **Event History**: Show chronological system events
- **Change Log**: Document updates and modifications

---

<div style="display: flex; justify-content: space-between; margin-top: 40px;">
  <a href="../comment-thread/index">Previous: Comment Thread</a>
  <a href="../../elements/index">Back to Elements</a>
</div>
