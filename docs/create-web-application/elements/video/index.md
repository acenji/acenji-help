# Video Element

The **Video** element embeds a video player on your page, supporting various video sources including YouTube.

---

## Overview

Video is ideal for:
- Product demonstrations
- Tutorial content
- Promotional videos
- Educational materials
- Any video content

---

## Adding a Video Element

1. Open the **Website Builder**
2. Find **Video** in the Elements panel
3. Drag it onto your page
4. Configure the video URL in the **General Tab**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Video URL** | URL of the video to play |
| **Auto Play** | Start playing automatically |
| **Loop** | Repeat video when finished |
| **Muted** | Start with audio muted |
| **Controls** | Show player controls |
| **Ratio** | Video aspect ratio |

### Playback Options

| Option | Description |
|--------|-------------|
| **Auto Play** | Video starts when page loads |
| **Loop** | Video repeats continuously |
| **Muted** | Audio is off by default |
| **Controls** | Play/pause, volume, fullscreen |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Width** | Player width |
| **Height** | Player height |
| **Border Radius** | Corner rounding |

---

## Supported Sources

The video element uses ReactPlayer and supports:

| Source | Example |
|--------|---------|
| **YouTube** | `https://www.youtube.com/watch?v=...` |
| **MP4** | `https://example.com/video.mp4` |
| **WebM** | `https://example.com/video.webm` |
| **Vimeo** | `https://vimeo.com/...` |
| **Other** | Most common video formats |

---

## Use Cases

### Product Demo
```
URL: https://youtube.com/watch?v=demo123
Auto Play: false
Controls: true
```

### Background Video
```
URL: https://yoursite.com/bg-video.mp4
Auto Play: true
Loop: true
Muted: true
Controls: false
```

### Tutorial
```
URL: https://youtube.com/watch?v=tutorial
Auto Play: false
Controls: true
```

### Promotional
```
URL: https://youtube.com/watch?v=promo
Auto Play: false
Controls: true
```

---

## Aspect Ratios

Common video aspect ratios:

| Ratio | Use Case |
|-------|----------|
| **16:9** | Standard widescreen |
| **4:3** | Older standard format |
| **1:1** | Square videos |
| **9:16** | Vertical/mobile videos |

---

## Empty State

When no URL is provided, the element displays a video icon placeholder.

---

## Best Practices

1. **Use appropriate dimensions** - Match video aspect ratio

2. **Consider autoplay carefully** - Can annoy users, mute if autoplaying

3. **Show controls** - Let users pause/adjust

4. **Optimize for mobile** - Test on smaller screens

5. **Host efficiently** - Use YouTube/Vimeo for better streaming

6. **Provide context** - Add text explaining the video content

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Image - https://help.acenji.com/#/./create-web-application/elements/image/index

<style>
.triangle {
display: inline-block;
width: 0;
height: 0;
border-style: solid;
border-width: 5px 0 5px 5px;
border-color: transparent transparent transparent #595959;
margin-left: 10px;
}
</style>
<p style="margin-top:30px;"></p>


# Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczNju0lskuQsjUjVs5YTRWKVczJlFIEVyjhgxDkvrN655N6w/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
