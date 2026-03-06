# Offline Cache

The **Offline Cache** element is an invisible element that enables offline data caching using localStorage. It allows your web application to store and retrieve data locally so users can continue working without a network connection.

---

## Overview

Offline Cache runs in the background with no visible UI. It intercepts data from target elements and caches it in the browser's localStorage. When the network is unavailable, cached data is served automatically.

Common uses:
- Offline-capable forms and surveys
- Caching API responses for faster load times
- Ensuring data availability in low-connectivity environments

---

## Adding an Offline Cache

1. Open the **Website Builder**
2. Find **Offline Cache** in the Elements panel (under Tools)
3. Drag it onto your page (it will not be visible at runtime)
4. Configure caching rules in the **General Tab**

> **Note:** This element is available for **web applications only**.

---

## Properties

### General Tab

#### Caching Strategy

| Strategy | Description |
|----------|-------------|
| **Cache First** | Serve from cache if available; fetch from network only on cache miss |
| **Network First** | Fetch from network first; fall back to cache if offline |
| **Stale While Revalidate** | Serve from cache immediately, then update cache from network in the background |

#### Target Elements

| Property | Description |
|----------|-------------|
| **Target Element IDs** | Comma-separated list of element IDs whose data should be cached |

#### Cache Limits

| Property | Description | Default |
|----------|-------------|---------|
| **Max Age (seconds)** | How long cached data remains valid | 3600 |
| **Max Items** | Maximum number of cached entries before oldest are evicted | 100 |

#### Online / Offline Indicator

| Property | Description | Default |
|----------|-------------|---------|
| **Show Indicator** | Display a small badge showing online/offline status | Off |
| **Indicator Position** | Where the status badge appears (top-left, top-right, bottom-left, bottom-right) | top-right |

---

## Best Practices

1. **Choose the right strategy** - Use Cache First for mostly-static data; Network First for frequently updated data

2. **Set reasonable max age** - Avoid serving very stale data by tuning the expiration

3. **Limit cached items** - Keep Max Items low to avoid excessive localStorage usage

4. **Combine with JSON Data Source** - Cache API responses from a JSON Data Source element for offline access

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
