# Image Element

The **Image** element displays images from a URL source on your page.

---

## Overview

Image elements are used for:
- Product photos
- Logos and branding
- Illustrations
- Icons and graphics
- Visual content

---

## Adding an Image

1. Open the **Website Builder**
2. Find **Image** in the Elements panel
3. Drag it onto your page
4. Configure the image URL in the **General Tab**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Image URL** | Web address of the image to display |
| **Height** | Image height |
| **Width** | Image width |

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Background Color** | Fallback background | Transparent |

### Dimensions Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Width** | Element width | 100% |
| **Height** | Element height | auto |
| **Border Radius** | Corner rounding | 5px |
| **Padding** | Space around image | 0 |
| **Margin** | Outer spacing | 0 |

---

## Image Sources

Images can be loaded from:
- **Direct URLs** - `https://example.com/image.jpg`
- **CDN links** - Images hosted on content delivery networks
- **Uploaded files** - Images uploaded to your ACENji account

### Supported Formats
- JPEG / JPG
- PNG
- GIF
- WebP
- SVG

---

## Sizing

Control image dimensions:

| Setting | Behavior |
|---------|----------|
| **Width: 100%, Height: auto** | Responsive, maintains aspect ratio |
| **Fixed width and height** | Exact dimensions, may crop |
| **Max-width with auto height** | Responsive up to maximum |

---

## Use Cases

### Product Image
```
URL: https://yourcdn.com/products/item-123.jpg
Width: 100%
Height: auto
Border Radius: 8px
```

### Logo
```
URL: https://yoursite.com/logo.png
Width: 200px
Height: auto
```

### Hero Banner
```
URL: https://yourcdn.com/banner.jpg
Width: 100%
Height: 300px
```

### Thumbnail
```
URL: https://yourcdn.com/thumb.jpg
Width: 80px
Height: 80px
Border Radius: 50% (circular)
```

---

## Responsive Images

For best results on all devices:
1. Use percentage widths (100%)
2. Let height adjust automatically
3. Provide appropriately sized source images
4. Consider mobile screen sizes

---

## Best Practices

1. **Optimize images** - Compress files for faster loading

2. **Use appropriate sizes** - Don't load huge images for small displays

3. **Provide alt text** - Describe images for accessibility

4. **Consider loading** - Large images may slow page load

5. **Use consistent styling** - Match border radius across images

6. **Test on mobile** - Ensure images display well on small screens

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Video - https://help.acenji.com/#/./create-web-application/elements/video/index

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
