# Kanban Board

The **Kanban Board** element displays a task management board with draggable cards organized into columns. It supports board, compact list, and swimlane views.

## Modes

### Board Mode
The default multi-column layout:
- Three columns: To Do, In Progress, Done with color-coded headers
- Cards with title, category tag, and assignee avatar
- Card count badges per column
- "Add card" button with dashed border at the bottom of each column
- Cards styled with shadow and grab cursor for drag indication

### Compact Mode
A vertical stacked list view:
- Columns shown as labeled sections with colored dot indicators
- Cards displayed as bordered rows with left color stripe
- Assignee avatars on the right side
- Card count badges next to section headers

### Swimlane Mode
A grid layout with horizontal swim lanes:
- Column headers across the top with color-coded borders
- Row labels on the left (e.g., Design, Engineering)
- Cards placed in grid cells at intersections
- Suitable for cross-team or cross-category task views

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Primary color for highlights |
| Mode | Select | `board` | `board`, `compact`, or `swimlane` |
| Show Card Count | Toggle | On | Display card count per column |
| Show Add Card | Toggle | On | Show "Add card" button in columns |

## Use Cases

- **Project management** -- Track tasks across workflow stages
- **Sprint planning** -- Organize work items by status
- **Team dashboards** -- Visualize workload distribution
- **Content pipelines** -- Manage content through review stages
