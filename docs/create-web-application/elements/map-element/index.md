# Map Element

The **Map Element** displays an interactive map with support for multiple providers: OpenStreetMap, Google Maps, HERE Maps, and CSV2GEO.

---

## Overview

Embed maps into your pages with markers, search, zoom controls, and user location tracking. Choose from four map providers depending on your needs.

---

## Adding a Map Element

1. Open the **Website Builder**
2. Find **Map Element** in the Elements panel (under Display)
3. Drag it onto your page
4. Select a provider and configure settings in the **General Tab**

---

## Properties

### General Tab

#### Provider Settings

| Property | Description | Default |
|----------|-------------|---------|
| **Provider** | Map provider: OSM, Google, HERE, or CSV2GEO | `osm` |
| **API Key** | API key (required for Google and HERE) | Empty |
| **Map Style** | Visual style (options vary by provider) | `standard` |

#### Map Configuration

| Property | Description | Default |
|----------|-------------|---------|
| **Latitude** | Initial center latitude | `42.6977` |
| **Longitude** | Initial center longitude | `23.3219` |
| **Zoom Level** | Initial zoom (1-20 slider) | `13` |
| **Height** | Map height in pixels | `400` |

#### Marker Settings

| Property | Description | Default |
|----------|-------------|---------|
| **Show Marker** | Display a pin at the center coordinates | `true` |
| **Marker Label** | Text label for the marker | Empty |
| **Marker Color** | Marker pin color | `#E74C3C` |

#### Interaction Settings

| Property | Description | Default |
|----------|-------------|---------|
| **User Location** | Show the user's current GPS position | `false` |
| **Click to Pin** | Allow users to place a marker by clicking the map | `false` |
| **Search Box** | Display a location search bar | `true` |
| **Scroll Zoom** | Enable zoom via mouse scroll | `true` |
| **Draggable** | Allow panning the map | `true` |
| **Zoom Controls** | Show +/- zoom buttons | `true` |

### Map Providers

| Provider | API Key Required | Features |
|----------|-----------------|----------|
| **OSM** (OpenStreetMap) | No | Free, community-maintained tiles |
| **Google** | Yes | Satellite/terrain/hybrid views, Street View |
| **HERE** | Yes | High-quality tiles, traffic data |
| **CSV2GEO** | No | Geocoding-optimized tiles |

---

## Use Cases

- **Location display** -- show a business address or event venue
- **GPS data capture** -- let users pin a location on the map
- **Store locators** -- display multiple locations with markers
- **Delivery tracking** -- show real-time positions on a map

---

## Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
