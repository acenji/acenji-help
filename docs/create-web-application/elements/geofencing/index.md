# Geofencing

The **Geofencing** element defines circular geographic zones on a map and detects when a user enters or exits those zones. It uses the browser's Geolocation API for real-time position tracking.

---

## Features

- **Circular geofence zones** with configurable radius
- **Real-time tracking** via `navigator.geolocation.watchPosition`
- **Enter/exit triggers** — fire actions when user crosses zone boundaries
- **Zone list** with status indicators (INSIDE / outside)
- **Custom zone colors** and action labels
- **Haversine distance** calculation for accurate zone detection

---

## Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Map Height** | Height of the map area in pixels | `300` |
| **Track User** | Enable real-time position tracking | `false` |
| **Show Zone List** | Display zone list below the map | `true` |
| **Trigger on Enter** | Fire action when user enters a zone | `true` |
| **Trigger on Exit** | Fire action when user leaves a zone | `false` |

---

## Zones

Each zone entry has:
- **Name** — zone label (e.g., "Office", "Warehouse")
- **Latitude / Longitude** — center coordinates
- **Radius** — zone radius in meters
- **Action** — action to trigger (e.g., "notify", "log", "alert")
- **Color** — zone indicator color

Click **+ Add Zone** to add entries. Click **x** to remove.

---

## How It Works

1. When **Track User** is enabled, the browser requests location permission
2. The element continuously monitors the user's GPS coordinates
3. For each zone, haversine distance is calculated from user to zone center
4. If the distance is less than the zone radius, the user is "inside"
5. Enter/exit transitions trigger the configured action
6. The zone list shows real-time INSIDE/outside status

---

## Use Cases

- Attendance tracking at job sites
- Location-based check-ins
- Delivery zone verification
- Safety perimeter monitoring

---

## Styling

The Geofencing element supports standard **Container** color and dimension settings:
- Background color, border, padding, margin
- Border radius and width

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczNju0lskuQsjUjVs5YTRWKVczJlFIEVyjhgxDkvrN655N6w/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
