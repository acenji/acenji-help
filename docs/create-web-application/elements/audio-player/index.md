# Audio Player

The **Audio Player** element provides a full-featured audio playback experience with playlist support, live streaming, playback speed control, and four visual styles.

---

## Overview

The Audio Player supports three source types:

- **File** -- standard audio file playback (MP3, WAV, OGG, etc.)
- **Stream** -- live audio streaming (radio, live events) with a LIVE badge
- **Podcast** -- podcast-style playback with skip forward/back controls

Four visual styles are available: Standard, Card, Minimal, and Mini.

---

## Adding an Audio Player

1. Open the **Website Builder**
2. Find **Audio Player** in the Elements panel (under Media)
3. Drag it onto your page
4. Configure the audio source and style in the **General Tab**

---

## Properties

### General Tab

#### Source Settings

| Property | Description | Default |
|----------|-------------|---------|
| **Source Type** | Audio source: file, stream, or podcast | `file` |
| **URL** | Audio file URL or stream endpoint | Empty |
| **Title** | Track title displayed in the player | `Audio Track` |
| **Artist** | Artist or channel name | Empty |
| **Cover Art** | URL to album/cover image | Empty |

#### Player Appearance

| Property | Description | Default |
|----------|-------------|---------|
| **Player Style** | Visual layout: standard, card, minimal, mini | `standard` |
| **Accent Color** | Primary color for controls and progress bar | `#2B98E0` |
| **Dark Mode** | Use dark background theme | `false` |

#### Playback Controls

| Property | Description | Default |
|----------|-------------|---------|
| **Show Volume** | Display volume slider with mute toggle | `true` |
| **Show Speed** | Display playback speed control (0.5x - 2x) | `true` |
| **Show Skip** | Display skip forward/back buttons | `false` |
| **Skip Duration** | Skip interval in seconds | `15` |
| **Loop** | Repeat the current track | `false` |
| **Auto Play** | Start playing automatically on page load | `false` |
| **Preload** | Audio preload strategy: none, metadata, auto | `metadata` |

#### Playlist Settings

| Property | Description | Default |
|----------|-------------|---------|
| **Show Track List** | Display the playlist below the player | `false` |
| **Shuffle** | Enable shuffle mode | `false` |
| **Tracks** | List of additional tracks (title, artist, URL per track) | Empty |

### Player Styles

| Style | Description |
|-------|-------------|
| **Standard** | Full-width player with all controls in a row |
| **Card** | Album art card layout with controls below |
| **Minimal** | Compact single-line player |
| **Mini** | Smallest layout -- play button with title only |

### Managing Playlists

- Click **Add Track** to add a new track to the playlist
- Enter the track title, artist, and audio URL
- Use drag handles to reorder tracks
- Click the X button to remove a track
- Next/Previous buttons navigate between tracks during playback

---

## Use Cases

- **Podcasts** -- embed podcast episodes with skip controls
- **Music players** -- album or playlist playback with cover art
- **Live radio** -- stream live audio with LIVE indicator
- **Audio guides** -- narrated instructions or tours
- **Voice notes** -- play back recorded audio

---

## Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
