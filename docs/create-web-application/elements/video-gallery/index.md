# Video Gallery

The **Video Gallery** element displays a grid of video thumbnails. Clicking a thumbnail plays the video inline. Supports optional voting buttons on each video.

---

## Adding a Video Gallery

1. Open the **Website Builder** and select a page
2. Find **Video Gallery** in the **Media** category of the Elements Panel
3. Drag it onto your page
4. Add videos in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Data Source** | `Static` (manual items) or `From Element` (data binding) |
| **Videos** | List of videos with URL, title, and thumbnail URL |
| **Columns** | Number of grid columns (1-4) |
| **Gap** | Spacing between video cards in pixels |
| **Show Title** | Display title below each video |
| **Auto Play** | Automatically play video when expanded |
| **Show Voting** | Display thumbs up/down buttons on each video |

### Data Source (From Element)

When using data binding, map fields from a connected element:

| Field | Description |
|-------|-------------|
| **URL Field** | Field containing the video URL |
| **Title Field** | Field containing the video title |
| **Thumbnail Field** | Field containing the thumbnail image URL |

### Color Tab

Customize the container background and border colors.

### Dimensions Tab

Adjust padding, margin, border radius, and size.

---

## Voting

When **Show Voting** is enabled, each video displays thumbs-up and thumbs-down buttons. Votes are stored in the element's answer data and can be used in conditions or exported.

---

## Supported Video Sources

The Video Gallery uses ReactPlayer and supports:
- YouTube
- Vimeo
- Dailymotion
- Direct video file URLs (MP4, WebM, etc.)

---

## Use Cases

- **Video Library**: Curated collection of tutorial or training videos
- **Media Gallery**: Display user-submitted content with community voting
- **Portfolio**: Showcase video work in a clean grid layout

---

<div style="display: flex; justify-content: space-between; margin-top: 40px;">
  <a href="../tab-bar/index">Previous: Tab Bar</a>
  <a href="../stat-card/index">Next: Stat Card</a>
</div>
