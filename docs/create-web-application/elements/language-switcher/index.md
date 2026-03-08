# Language Switcher

The **Language Switcher** element provides a locale selector for multilingual applications. It supports dropdown, flags, and full list layouts.

## Modes

### Dropdown Mode
The default select-style picker:
- Selected language shown with flag and name in a bordered input
- Dropdown menu below with flag icons and language names
- Active language highlighted with accent color and checkmark
- Clean card-style dropdown with subtle shadow

### Flags Mode
A horizontal row of clickable flag icons:
- Country flag emojis displayed in a centered row
- Active language highlighted with accent color border and tinted background
- Compact layout suitable for headers and navigation bars
- No text labels, flags only

### List Mode
A full detailed language list:
- "Select Language" header at the top
- Each language shows flag, native name, and English name
- Translation completion progress bar with percentage
- Active language highlighted with tinted background and accent border

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for active selection |
| Mode | Select | `dropdown` | `dropdown`, `flags`, or `list` |

## Use Cases

- **Multilingual apps** -- Let users switch between languages
- **International sites** -- Provide locale selection
- **Content platforms** -- Offer translated content options
- **SaaS dashboards** -- Support global user bases
