# Meta Tags

The **Meta Tags** element provides a visual SEO meta tag editor with Google search result preview. Configure page titles, descriptions, and robots directives with live character counting.

## Modes

### Preview Mode
The default Google SERP simulation:
- Realistic Google search result card with favicon, domain, and URL breadcrumb
- Blue title link matching actual Google styling
- Gray description text with proper line height
- Character count indicators for title (x/60) and description (x/160)
- Green/amber color coding based on optimal length ranges

### Editor Mode
A form-based meta tag editor:
- SEO score circle (0-100) with green/amber/red color coding
- Title input field with live character counter
- Description textarea with live character counter
- Robot directive tags (index, follow) as accent-colored badges
- Score updates based on title and description length compliance

### Minimal Mode
A compact summary card:
- "M" badge icon with element label
- Title displayed with text truncation (single line)
- Description with 2-line clamp overflow
- Suitable for dashboards or sidebar panels

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for badges and highlights |
| Mode | Select | `preview` | `preview`, `editor`, or `minimal` |
| Title | Text | Sample title | Page title for preview |
| Description | Text | Sample description | Meta description for preview |
| URL | Text | `https://www.example.com/my-page` | URL shown in preview |

## Use Cases

- **SEO optimization** -- Preview how pages appear in Google search
- **Content management** -- Edit meta tags with live validation
- **Marketing pages** -- Optimize title and description for click-through
- **Site audits** -- Review SEO compliance across pages
