# JSON Data Source Element

The **JSON Data Source** element is an invisible element that fetches data from an external API and makes it available to other elements on the page. It acts as a centralized data provider — you configure the API once, and any number of consumer elements can read from it.

<p style="margin-top:50px;"></p>

## Overview

JSON Data Source is ideal for:
- Loading data once and sharing it with multiple elements on the same page
- Keeping API configuration in a single, central place
- Providing data to Tree Navigation, and future consumer elements like CardGrid
- Auto-refreshing data at configurable intervals

<p style="margin-top:50px;"></p>

## Adding a JSON Data Source Element

1. Open the **Website Builder**
2. Find **JSON Data Source** in the Elements panel under **Data & Tables**
3. Drag it onto your page
4. Configure the API settings in the **General Tab**

> **Note:** The element appears as a small indicator bar in the builder showing the configured URL, but is **invisible** at runtime. It only fetches and stores data — it does not render any UI to end users.

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **URL** | The full API endpoint to fetch data from (e.g., `https://api.example.com/data`) |
| **Method** | HTTP method: `GET` or `POST` |
| **Headers (JSON)** | Optional HTTP headers as a JSON object — typically used for authentication |
| **Response Path** | Dot-separated path to the array in the JSON response (e.g., `data.items`) |
| **Auto-Refresh** | When enabled, re-fetches data on a timer |
| **Refresh Interval** | How often to re-fetch in seconds (minimum 5 seconds, default 60) |

### Color Tab

| Property | Description |
|----------|-------------|
| **Panel Background** | Background of the builder indicator bar (builder only, not visible at runtime) |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Padding** | Inner spacing of the builder indicator bar |
| **Border Radius** | Corner rounding of the builder indicator bar |

---

## Configuration Fields Explained

### URL

The full URL of the API endpoint. This is the only required field — without it, no fetch will occur.

```
https://api.example.com/v1/categories
```

### Method

- **GET** — Standard read request. Use this for most APIs.
- **POST** — Use when the API requires a POST to return data (less common).

### Headers (JSON)

Extra HTTP headers as a JSON object. Leave as `{}` if no special headers are needed.

Common use cases:

```json
{"Authorization": "Bearer eyJhbGciOi..."}
```

```json
{"X-API-Key": "your-api-key", "Accept": "application/json"}
```

### Response Path

A dot-separated path that tells the element where to find the data array in the JSON response.

| JSON Response Structure | Response Path |
|-------------------------|---------------|
| `[...]` (array at root) | *(leave empty)* |
| `{ "data": [...] }` | `data` |
| `{ "data": { "items": [...] } }` | `data.items` |
| `{ "results": { "records": [...] } }` | `results.records` |

For example, if the API returns:

```json
{
  "status": "ok",
  "data": {
    "items": [
      { "id": 1, "name": "Category A" },
      { "id": 2, "name": "Category B" }
    ]
  }
}
```

Set the response path to `data.items`.

### Auto-Refresh

When enabled, the element will periodically re-fetch data from the API. Configure the interval in seconds. This is useful for dashboards or live data that changes frequently.

---

## Connecting to Consumer Elements

Once a JSON Data Source is on the page, other elements can consume its data:

1. Add a consumer element (e.g., **Tree Navigation**)
2. In the consumer's General Tab, set **Data Source** to **Element**
3. Select the **JSON Data Source** element from the dropdown
4. Configure the **Field Mapping** to match your API's data structure (ID field, Label field, etc.)

The consumer element will automatically read the fetched data from the JSON Data Source's stored value.

### How It Works

```
JSON Data Source
  → fetches API on page load
  → stores fetched array in its "value" field (Redux state)

Consumer element (e.g., Tree Navigation)
  → dataSource.type = "element"
  → elementId = JSON Data Source's ID
  → reads value from Redux state
  → transforms data via field mapping
  → renders the result
```

---

## Test Fetch

Use the **Test Fetch** button in the builder settings to verify your API configuration before publishing. It will show:
- The number of records returned on success (e.g., "42 records fetched")
- An error message if the request fails (e.g., "HTTP 401" or "Response path did not resolve to an array")

---

## Use Cases

### Shared API for Multiple Elements

```
JSON Data Source:
  URL: https://api.example.com/categories
  Response Path: data
  Auto-Refresh: Off

Tree Navigation:
  Data Source: Element → JSON Data Source
  Format: Flat
  ID Field: id, Label Field: name, Parent ID Field: parent_id
```

### Live Dashboard Data

```
JSON Data Source:
  URL: https://api.example.com/stats
  Response Path: metrics
  Auto-Refresh: On (every 30 seconds)

Future consumer elements read the auto-refreshed data.
```

### Authenticated API

```
JSON Data Source:
  URL: https://api.internal.com/employees
  Method: GET
  Headers: {"Authorization": "Bearer eyJhbGci..."}
  Response Path: data.employees
```

---

## Best Practices

1. **Use Response Path carefully** — Make sure it points to an array, not an object. The Test Fetch button will tell you if it fails.

2. **Set reasonable refresh intervals** — Don't set auto-refresh below 30 seconds unless you truly need real-time data. Frequent requests can slow down the page and overload the API.

3. **One data source per API** — Rather than having multiple elements each call the same API, use a single JSON Data Source and point all consumers to it.

4. **Test before publishing** — Always use the Test Fetch button to verify the URL, headers, and response path are correct.

5. **Keep headers secure** — API keys and tokens in the Headers field are stored in the project configuration. Be mindful of who has access to the builder.

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Tree Navigation Element - https://help.acenji.com/#/./create-web-application/elements/tree-navigation/index
<span class="triangle"></span> CRUD Grid Element - https://help.acenji.com/#/./create-web-application/elements/crud-grid/index

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
