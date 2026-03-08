# Timeline List

The **Timeline List** element displays a sequence of milestones or events with visual connectors. It supports vertical, horizontal, and compact layouts.

## Modes

### Vertical Mode
The default timeline with vertical flow:
- Circular icons or numbered dots connected by vertical lines
- Each item shows title, description, and date
- Active item highlighted with filled accent-color circle
- Connector lines between items with subtle gray color

### Horizontal Mode
A left-to-right progress timeline:
- Dots connected by horizontal lines across the width
- Icons or numbers inside each dot
- Title and optional date below each milestone
- Active milestone filled with accent color, others outlined

### Compact Mode
A minimal list-style timeline:
- Small colored dots (8px) as status indicators
- Single-line titles with dates on the right
- Active items use accent color, inactive use gray
- Separated by subtle bottom borders

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for active milestone |
| Mode | Select | `vertical` | `vertical`, `horizontal`, or `compact` |
| Show Icons | Toggle | On | Display emoji icons (off shows numbers) |
| Show Dates | Toggle | On | Display date labels |

## Use Cases

- **Project milestones** -- Track progress through phases
- **Order tracking** -- Show shipment status steps
- **Onboarding flows** -- Display setup completion steps
- **Release roadmaps** -- Visualize upcoming features
