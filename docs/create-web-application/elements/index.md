# Web Elements

**Web Elements** are the building blocks of your ACENji web applications. Drag and drop these elements onto your pages to create interactive forms, displays, and user interfaces.

---

## Overview

ACENji provides a comprehensive library of elements organized into three categories:

| Category | Description |
|----------|-------------|
| **Containers** | Layout elements that organize other elements |
| **Elements** | Input fields, displays, and interactive components |
| **Tools** | Advanced components like modals and card lists |

---

## Adding Elements

1. Open the **Website Builder**
2. Select a page in your application
3. Find the **Elements Panel** on the left
4. **Drag and drop** an element onto your page
5. Configure properties in the **Floating Design Panel**

---

## Element Categories

### Layout Elements

| Element | Description |
|---------|-------------|
| [Row Container](./row-container/) | Multi-column layout container |

### Input Elements

| Element | Description |
|---------|-------------|
| [Text Input](./text-input/) | Single-line text field |
| [Text Area](./text-area/) | Multi-line text field |
| [Numeric Input](./numeric-input/) | Number-only input |
| [Phone Number](./phone-number/) | Phone number input |
| [Email](./email/) | Email input/display |
| [Date](./date/) | Date picker |
| [Checkbox](./checkbox/) | Toggle checkbox |
| [Dropdown](./dropdown/) | Select dropdown |
| [Single Selection Group](./single-selection-group/) | Radio-style selection |
| [Multiple Selection Group](./multiple-selection-group/) | Multi-select buttons |
| [Yes / No / Unknown](./yes-no-unknown/) | Three-option selector |
| [Slider](./slider/) | Range slider |
| [Rating](./rating/) | Star rating |
| [Increment / Decrement](./increment-decrement/) | Counter control |
| [Rich Editor](./rich-editor/) | Formatted text editor |
| [Toggle Switch](./toggle-switch/) | iOS-style on/off switch with custom colors and sizes |
| [Multiselect Dropdown](./multiselect-dropdown/) | Searchable multi-select with chips and max selections |
| [Color Picker](./color-picker/) | Visual color picker with presets, eye dropper, and format toggle |
| [File Uploader](./file-uploader/) | Drag and drop file upload with previews and validation |

### Display Elements

| Element | Description |
|---------|-------------|
| [Info](./info/) | Static text/HTML display |
| [Image](./image/) | Image display |
| [Video](./video/) | Video player |
| [Link](./link/) | Clickable hyperlink |
| [User Info](./user-info/) | User profile display |
| [Key-Value Table](./key-value-table/) | Structured label-value pair display |
| [Badge](./badge/) | Colored inline tags and pills |
| [Card Grid](./card-grid/) | Responsive grid of visual content cards with images and navigation |
| [Stat Card](./stat-card/) | Dashboard metric card with value and label |
| [Icon](./icon/) | Standalone icon with configurable size, color, and alignment |
| [Shape](./shape/) | Decorative shape: line/divider, rectangle, circle, or triangle |
| [Progress Bar](./progress-bar/) | Horizontal bar or circular ring progress indicator |
| [Alert](./alert/) | Temporary notification banner with auto-dismiss and animations |
| [Pipe Content Renderer](./pipe-content-renderer/) | Parses delimiter-separated text into tags, lists, tables, or inline display |
| [Reference List](./reference-list/) | Formatted citation/bibliography list with author, title, year, and links |

### Media Elements

| Element | Description |
|---------|-------------|
| [Video Gallery](./video-gallery/) | Grid of videos with optional voting |
| [Audio Player](./audio-player/) | Full audio player with playlist, streaming, speed control, and 4 styles |
| [Image Gallery](./image-gallery/) | Image carousel with arrows, dots, thumbnails, captions, and aspect ratios |

### Navigation Elements

| Element | Description |
|---------|-------------|
| [Breadcrumb](./breadcrumb/) | Navigation trail with clickable page links |
| [Search Modal](./search-modal/) | Search bar that filters content or navigates to pages |
| [Tab Bar](./tab-bar/) | Tabbed navigation that switches between pages |
| [Sticky Header](./sticky-header/) | Fixed header with title and back navigation |

### Calendar & Scheduling Elements

| Element | Description |
|---------|-------------|
| [Calendar View](./calendar-view/) | Monthly calendar with events, navigation, and week numbers |
| [Event Card](./event-card/) | Styled event card with date badge, time, location, and RSVP |
| [Booking](./booking/) | Appointment scheduler with date picker and time slot selection |
| [Timeline](./timeline/) | Vertical timeline with dated entries, icons, and descriptions |

### Data & Navigation Elements

| Element | Description |
|---------|-------------|
| [CRUD Grid](./crud-grid/) | Data table with inline editing, sorting, filtering, and CSV import/export |
| [Tree Navigation](./tree-navigation/) | Hierarchical tree with expand/collapse, search, and dynamic data binding |
| [JSON Data Source](./json-data-source/) | Invisible element that fetches JSON from an API and provides data to other elements |

### Interactive Elements

| Element | Description |
|---------|-------------|
| [Button](./button/) | Clickable button |
| [Card Link](./card-link/) | Navigation card |
| [Card List](./card-list/) | Dynamic card container |
| [Modal Form](./modal-form/) | Popup form |
| [Report Download](./report-download/) | PDF report generator |
| [Proposal Form](./proposal-form/) | Configurable submission form with dynamic fields |
| [Approval Queue](./approval-queue/) | Review list with approve/reject actions and status filters |
| [Bottom Sheet](./bottom-sheet/) | Slide-up panel triggered by button click |
| [Bookmark List](./bookmark-list/) | Displays bookmarked items from localStorage |

### Chart Elements

| Element | Description |
|---------|-------------|
| [Bar Chart](./bar-chart/) | Vertical or horizontal bar chart with custom colors and value labels |
| [Line Chart](./line-chart/) | Line chart with area fill, smooth curves, and data points |
| [Pie Chart](./pie-chart/) | Pie or donut chart with legend and percentage labels |
| [Gauge Chart](./gauge-chart/) | Semicircular gauge with colored segments and needle |
| [Sparkline](./sparkline-chart/) | Compact inline sparkline for trends and KPIs |
| [Heatmap](./heatmap-chart/) | Color-interpolated grid heatmap with row and column labels |
| [Funnel Chart](./funnel-chart/) | Funnel chart with trapezoid stages and conversion percentages |

### Maps & Location Elements

| Element | Description |
|---------|-------------|
| [Map Element](./map-element/) | Interactive map with OSM, Google, HERE, and CSV2GEO providers |
| [Directions](./directions/) | Route navigation with geocoding, turn-by-turn steps, and travel modes |
| [Store Locator](./store-locator/) | Multi-location map with searchable list panel and distance calculation |
| [Geofencing](./geofencing/) | Geographic zone tracking with enter/exit triggers |
| [Address Picker](./address-picker/) | Structured address form with autocomplete and map preview |

### Layout Elements (Advanced)

| Element | Description |
|---------|-------------|
| [Sidebar Layout](./sidebar-layout/) | Two-column layout with collapsible sidebar (web only) |

### Tools (Advanced)

| Element | Description |
|---------|-------------|
| [Offline Cache](./offline-cache/) | Invisible element enabling offline data caching via localStorage (web only) |
| [Deep Link](./deep-link/) | Invisible element that reads URL query params for navigation and data binding (web only) |
| [3D Viewer](./three-d-viewer/) | Interactive 3D model viewer with orbit controls, auto-rotate, and optional AR |
| [Comment Thread](./comment-thread/) | Threaded comments with replies, editing, deletion, and optional likes |
| [Activity Feed](./activity-feed/) | Chronological activity/event timeline with colored type indicators |
| [Markdown Renderer](./markdown-renderer/) | Renders raw Markdown as formatted HTML content |
| [HTML Element](./html-element/) | Raw HTML/CSS/JS with code editor, live preview, and templates |

---

## Element Properties

All elements share common configuration options:

### General Tab
- **Question Text / Label** - Display text for the element
- **Placeholder** - Hint text for input fields
- **Default Value** - Initial value

### Color Tab
- Background, border, and text colors
- Separate colors for active/selected states

### Dimensions Tab
- Width, height, padding, margins
- Border radius and style
- Typography settings

### Position Tab
- Alignment and justification

### Events Tab
- Configure actions triggered by user interaction

### Connect Tab
- Link to Variable Center or databases

---

## Database Integration

Many elements can save data to the card database:
- Text Input
- Text Area
- Numeric Input
- Checkbox
- Dropdown
- User Info
- CRUD Grid

Enable database saving in the element's **Connect Tab**.

---

## Best Practices

1. **Use consistent styling** - Apply similar colors and dimensions across elements

2. **Group related fields** - Use Row Container to organize related inputs

3. **Provide clear labels** - Make it obvious what each field expects

4. **Set appropriate defaults** - Pre-fill values when helpful

5. **Consider mobile** - Test elements on different screen sizes

6. **Use validation** - Mark required fields and validate input types

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczNju0lskuQsjUjVs5YTRWKVczJlFIEVyjhgxDkvrN655N6w/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
