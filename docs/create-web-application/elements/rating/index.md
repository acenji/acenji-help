# Rating Element

The **Rating** element provides a star-based rating input for collecting numeric ratings.

---

## Overview

Rating is ideal for:
- Product reviews
- Service ratings
- Satisfaction scores
- Quality assessments
- Any star-based feedback

---

## Adding a Rating Element

1. Open the **Website Builder**
2. Find **Rating** in the Elements panel
3. Drag it onto your page
4. Configure properties in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | Label displayed above the stars |
| **Default Value** | Initial star selection (integer) |

### Color Tab

| Property | Description |
|----------|-------------|
| **Panel Background** | Container background |

### Visual Design

| State | Appearance |
|-------|------------|
| **Empty Stars** | Gray outline |
| **Filled Stars** | Yellow/gold filled |

---

## Star Scale

The rating element typically uses a 5-star scale:

```
☆ ☆ ☆ ☆ ☆  (0 - unrated)
★ ☆ ☆ ☆ ☆  (1 - Poor)
★ ★ ☆ ☆ ☆  (2 - Fair)
★ ★ ★ ☆ ☆  (3 - Good)
★ ★ ★ ★ ☆  (4 - Very Good)
★ ★ ★ ★ ★  (5 - Excellent)
```

---

## Use Cases

### Product Review
```
Label: "Rate this product"
Default: 0 (no selection)
```

### Service Rating
```
Label: "How was your experience?"
Default: 0
```

### Course Feedback
```
Label: "Rate this course"
Default: 0
```

### Support Satisfaction
```
Label: "Was this helpful?"
Default: 0
```

---

## Rating vs Other Elements

| Element | Best For |
|---------|----------|
| **Rating** | Visual star-based scores |
| **Slider** | Precise numeric ranges |
| **Single Selection** | Labeled options |
| **Numeric Input** | Exact numbers |

---

## Best Practices

1. **Keep questions simple** - "Rate this product" works better than complex questions

2. **Don't pre-select** - Let users make their own choice

3. **Provide context** - Show what each star level means if needed

4. **Make it prominent** - Ratings should be easy to interact with

5. **Consider mobile** - Ensure stars are tappable on touch devices

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Slider - https://help.acenji.com/#/./create-web-application/elements/slider/index
<span class="triangle"></span> Single Selection Group - https://help.acenji.com/#/./create-web-application/elements/single-selection-group/index

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
