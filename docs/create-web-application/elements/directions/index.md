# Directions

The **Directions** element displays route navigation between two addresses. It geocodes origin and destination, calculates a route via OSRM, and shows turn-by-turn steps with distance and duration.

---

## Features

- **Route calculation** via OSRM (Open Source Routing Machine)
- **Geocoding** via Nominatim (free) or Google/HERE/Mapbox
- **Travel modes** — driving, walking, cycling, transit
- **Turn-by-turn steps** with scrollable instruction list
- **Editable origin/destination** or preset addresses
- **Use current location** as starting point via browser geolocation
- **Map preview** centered on route midpoint

---

## Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Map Provider** | Geocoding and map tile provider (OSM, Google, HERE, Mapbox) | `OSM (Free)` |
| **Origin** | Starting address | — |
| **Destination** | Ending address | — |
| **Travel Mode** | driving, walking, cycling, or transit | `driving` |
| **Route Color** | Color of route indicators | `#4285F4` |
| **Map Height** | Height of the map area in pixels | `350` |
| **Show Steps** | Display turn-by-turn directions | `true` |
| **Editable Origin** | Allow users to type a starting address | `false` |
| **Editable Destination** | Allow users to type a destination | `false` |
| **Show Alternatives** | Show alternate routes (when available) | `false` |
| **Use Current Location** | Auto-detect user's location as origin | `false` |

---

## How It Works

1. If both origin and destination are preset, the route is calculated automatically on load
2. If editable, users type addresses and click **Go** to calculate
3. The element geocodes both addresses using Nominatim
4. OSRM calculates the optimal route and returns steps
5. The map iframe shows the route area; duration and distance are displayed below
6. Turn-by-turn steps appear in a scrollable list

---

## Use Cases

- Delivery tracking with route preview
- Store directions from user's current location
- Event venue navigation
- Service area route planning

---

## Styling

The Directions element supports standard **Container** color and dimension settings:
- Background color, border, padding, margin
- Border radius and width

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczNju0lskuQsjUjVs5YTRWKVczJlFIEVyjhgxDkvrN655N6w/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
