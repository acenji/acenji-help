# Store Locator

The **Store Locator** element displays multiple locations on a map with a searchable list panel. Users can browse, search, and select locations to view them on the map.

---

## Features

- **Multi-location map** with selectable markers
- **List panel** with configurable position (left, right, top, bottom)
- **Search** to filter locations by name or address
- **Distance calculation** from user's current position (haversine formula)
- **Location details** — name, address, phone, hours
- **Custom marker color**

---

## Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Map Provider** | Map tile provider (OSM, Google, HERE, Mapbox) | `OSM (Free)` |
| **Map Height** | Height of the component in pixels | `400` |
| **List Position** | Where the location list appears: left, right, top, bottom | `left` |
| **Marker Color** | Color of map markers | `#d63031` |
| **Show Search** | Enable location search bar | `true` |
| **Show Distance** | Show distance from user to each location | `false` |
| **Use Current Location** | Detect user's position for distance calc | `false` |
| **Cluster Markers** | Group nearby markers at low zoom levels | `false` |

---

## Locations

Each location entry has:
- **Name** — location name (e.g., "Downtown Store")
- **Address** — street address
- **Latitude / Longitude** — map coordinates
- **Phone** — contact number (optional)
- **Hours** — business hours (optional)

Click **+ Add Location** to add entries. Click **x** to remove.

---

## Use Cases

- Retail store finder
- Office or branch locator
- Service area coverage display
- Event venue listings

---

## Styling

The Store Locator supports standard **Container** color and dimension settings:
- Background color, border, padding, margin
- Border radius and width

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczNju0lskuQsjUjVs5YTRWKVczJlFIEVyjhgxDkvrN655N6w/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
