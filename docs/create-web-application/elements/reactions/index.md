# Reactions

The **Reactions** element displays an emoji reaction bar similar to Facebook or Slack reactions. Users can react with like, love, haha, wow, sad, or angry, with optional reaction counts and an add-reaction button.

## Modes

### Bar Mode
The default mode shows emoji pills in a horizontal row:
- Each reaction as a pill with emoji and count
- Active reaction highlighted with accent color border and background tint
- Optional "+" button to add a new reaction
- Compact horizontal layout that wraps on small screens

### Compact Mode
A summary view showing top reactions:
- Overlapping emoji circles (top 3 reactions)
- Total reaction count as text (e.g., "71 reactions")
- Minimal space -- fits in a single line

### Detailed Mode
A breakdown view with progress bars:
- Each reaction shown with emoji, label, and proportional bar chart
- Counts displayed to the right of each bar
- Total reaction count at the bottom
- Active reaction bar uses accent color

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Highlight color for active reactions |
| Mode | Select | `bar` | `bar`, `compact`, or `detailed` |
| Show Counts | Toggle | On | Display reaction counts |
| Add Reaction Button | Toggle | Off | Show "+" button to add reactions |

## Use Cases

- **Social posts** -- Bar mode below content for user engagement
- **Comments** -- Bar mode for reacting to individual comments
- **Content summary** -- Compact mode in card headers
- **Analytics** -- Detailed mode to show reaction breakdown
