# Deep Link

The **Deep Link** element is an invisible element that reads URL query parameters and uses configurable rules to navigate to specific pages or set element answers. It enables shareable URLs that open your application in a specific state.

---

## Overview

Deep Link runs in the background with no visible UI. When the page loads, it inspects the current URL's query parameters and executes matching rules. This allows external links to drive navigation or pre-fill data inside your application.

Common uses:
- Shareable URLs that open a specific page or item
- Pre-filling form fields from URL parameters
- Marketing campaign links with tracked parameters
- Email links that navigate directly to relevant content

---

## Adding a Deep Link

1. Open the **Website Builder**
2. Find **Deep Link** in the Elements panel (under Tools)
3. Drag it onto your page (it will not be visible at runtime)
4. Configure rules in the **General Tab**

> **Note:** This element is available for **web applications only**.

---

## Properties

### General Tab

#### Rules

Add rules that map URL query parameters to actions. Each rule has:

| Property | Description |
|----------|-------------|
| **Parameter Name** | The URL query parameter to read (e.g., `id`, `category`) |
| **Action** | What to do: **Navigate to Page** or **Set Element Answer** |
| **Target Page** | For Navigate action: the page to go to |
| **Target Element ID** | For Set Answer action: the element whose answer is set |
| **Value Mapping** | Optional: map specific param values to different targets |

Click **Add Rule** to create additional rules. Rules are evaluated in order.

#### Fallback

| Property | Description | Default |
|----------|-------------|---------|
| **Fallback Page** | Page to navigate to if no rules match | -- (stay on current page) |
| **Preserve Params** | Keep query parameters in the URL after processing | Off |

---

## Example

Given the URL:
```
https://yourapp.com/?category=news&item=42
```

With rules:
1. `category` -> Navigate to the page matching the value
2. `item` -> Set the answer of a JSON Data Source element to `42`

The app would navigate to the "news" page and load item 42 automatically.

---

## Best Practices

1. **Use descriptive parameter names** - `?page=settings` is clearer than `?p=s`

2. **Always set a fallback page** - Ensure users land somewhere meaningful if the URL has unexpected parameters

3. **Validate parameter values** - Use value mapping to handle only known values safely

4. **Combine with JSON Data Source** - Set a data source filter from a URL parameter to load specific content

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index

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
