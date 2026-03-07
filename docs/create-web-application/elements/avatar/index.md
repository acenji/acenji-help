# Avatar

The **Avatar** element displays a user avatar with initials, status indicators, notification badges, group stacking, and an editable upload mode. It supports four sizes, two shapes, and three display modes.

## Modes

### Single Mode
A single avatar with optional status dot and badge:
- Circular or rounded-square shape
- Auto-generated initials from user name
- Online/offline/away/busy status dot (color-coded)
- Notification badge (top-right corner with count)
- Fallback chain: image, initials, default icon

### Group Mode
Overlapping avatar stack (like GitHub collaborators):
- Multiple avatars with slight overlap
- Each avatar has distinct initials and color
- Configurable max visible count
- "+N more" pill for overflow
- No individual status dots (clean look)

### Editable Mode
Avatar with upload overlay for profile editing:
- Camera icon overlay (bottom-right)
- Dashed crop indicator ring
- "Click to change photo" label
- Used on profile settings pages

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Base color for initials and background |
| Mode | Select | `single` | `single`, `group`, or `editable` |
| Size | Select | `md` | `sm` (32px), `md` (48px), `lg` (64px), `xl` (96px) |
| Shape | Select | `circle` | `circle` or `rounded` square |
| Status | Select | `online` | `online` (green), `offline` (gray), `away` (yellow), `busy` (red) |
| Show Status Dot | Toggle | On | Display status indicator |
| Show Badge | Toggle | Off | Display notification badge |
| Badge Text | Text | `3` | Text inside the badge |
| Max Visible | Number | `4` | Max avatars shown in group mode |

## Use Cases

- **User profiles** — Single mode with status dot
- **Comment authors** — Single small mode inline with text
- **Team lists** — Group mode showing collaborators
- **Chat headers** — Single mode with online/offline status
- **Settings pages** — Editable mode for profile photo upload
- **Notification badges** — Single mode with unread count badge
