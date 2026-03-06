# Comment Thread

The **Comment Thread** element provides a threaded comments/discussion area. Users can post comments, reply to existing comments (up to configurable depth), edit or delete their own comments, and optionally like comments.

---

## Adding a Comment Thread

1. Open the **Website Builder** and select a page
2. Find **Comment Thread** in the **Input** category of the Elements Panel
3. Drag it onto your page
4. Configure settings in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Title** | Heading displayed above the comment thread |
| **Placeholder** | Placeholder text for the comment input |
| **Data Source** | `Static` (user-posted only) or `From Element` (pre-loaded comments) |
| **Sort Order** | `Newest First` or `Oldest First` |
| **Author Source** | `Logged-in User` (auto-fill from session) or `Anonymous` |
| **Date Format** | `Relative` (e.g. 2h ago) or `Absolute` (e.g. Mar 5, 2026) |
| **Max Reply Depth** | `No Replies` (0), `1 Level`, or `2 Levels` |
| **Allow Replies** | Toggle nested reply functionality |
| **Allow Editing** | Allow users to edit their own comments |
| **Allow Deleting** | Allow users to delete their own comments |
| **Show Likes** | Display a like button with count on each comment |

### Data Source (From Element)

When using data binding, map fields from a connected element:

| Field | Description |
|-------|-------------|
| **Source Element ID** | ID of the element providing initial comments |
| **Comments Field** | Field name containing the comments array |

### Color Tab

Customize the container background and border colors.

### Dimensions Tab

Adjust padding, margin, border radius, and size.

---

## Comment Features

- **Avatar**: Each comment shows a colored circle with the author's initial
- **Timestamps**: Displayed in relative or absolute format
- **Threading**: Replies are indented with a left border
- **Edit/Delete**: Only visible on the current user's own comments
- **Likes**: Optional like counter on each comment

---

## Data Storage

Comments are stored in the element's answer data as an array of objects. Each comment includes an ID, author name, text, timestamp, parent ID (for replies), edited flag, and like count.

---

## Use Cases

- **Discussion Forum**: Enable conversations on any page
- **Feedback Collection**: Gather threaded user feedback
- **Q&A Section**: Allow questions and nested answers
- **Review Comments**: Collaborative review with nested replies

---

<div style="display: flex; justify-content: space-between; margin-top: 40px;">
  <a href="../three-d-viewer/index">Previous: 3D Viewer</a>
  <a href="../activity-feed/index">Next: Activity Feed</a>
</div>
