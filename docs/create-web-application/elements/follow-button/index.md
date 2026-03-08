# Follow Button

The **Follow Button** element provides a follow/subscribe action with follower counts, avatar display, and profile card layout. It supports standalone buttons, inline profile rows, and full profile cards with stats.

## Modes

### Button Mode
The default mode shows follow and following buttons side by side:
- Primary "Follow" button with accent color and shadow
- Secondary "Following" button with checkmark (neutral style)
- Optional follower count text
- Horizontal layout

### Inline Mode
A compact profile row with follow action:
- User avatar (circular, accent-tinted)
- Username and follower count
- Follow button aligned to the right
- Single-row layout for lists and sidebars

### Card Mode
A centered profile card with follow action:
- Large circular avatar
- Username and handle
- Bio text
- Stats row: Followers, Following, Posts
- Prominent follow button
- Bordered card layout

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Button and avatar highlight color |
| Mode | Select | `button` | `button`, `inline`, or `card` |
| Button Text | Text | `Follow` | Label for the follow button |
| Following Text | Text | `Following` | Label for the following state |
| Follower Count | Text | `12.4K` | Displayed follower count |
| Show Count | Toggle | On | Display follower count |
| Show Avatar | Toggle | On | Display user avatar |

## Use Cases

- **Author profiles** -- Inline mode below blog posts
- **Social profiles** -- Card mode for user profile pages
- **Suggestion lists** -- Inline mode in "Who to follow" sections
- **Newsletter signup** -- Button mode styled as subscribe
