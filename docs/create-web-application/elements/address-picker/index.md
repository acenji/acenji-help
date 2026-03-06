# Address Picker

The **Address Picker** element provides a structured address form with autocomplete search. Users can type an address to get suggestions, and selected addresses auto-fill the individual fields (street, city, state, ZIP, country).

---

## Features

- **Address autocomplete** via Nominatim (free) or Google/HERE/Mapbox
- **Auto-fill fields** from geocoding results
- **Configurable fields** — choose which address components to show
- **Stacked or inline layout** for field arrangement
- **Map preview** after address selection
- **Debounced search** (400ms) to avoid excessive API calls

---

## Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Geocoding Provider** | Autocomplete provider (Nominatim, Google, HERE, Mapbox) | `Nominatim (Free)` |
| **Layout** | Field arrangement: stacked (vertical) or inline (side-by-side) | `stacked` |
| **Show Autocomplete** | Display the search bar for address lookup | `true` |
| **Show Map** | Show a map preview after address selection | `true` |
| **Map Height** | Height of the map preview in pixels | `150` |
| **Required** | Mark the address as a required field | `false` |
| **Save as Single** | Store all fields as one combined string | `false` |

---

## Fields

Toggle which address fields to display:

| Field | Label | Default |
|-------|-------|---------|
| **street** | Street Address | Shown |
| **street2** | Apt / Suite / Unit | Hidden |
| **city** | City | Shown |
| **state** | State / Province | Shown |
| **zip** | ZIP / Postal Code | Shown |
| **country** | Country | Shown |

---

## How It Works

1. User types in the autocomplete search bar
2. After 3+ characters, suggestions appear from the geocoding provider
3. Selecting a suggestion auto-fills street, city, state, ZIP, and country
4. A map preview appears showing the selected location
5. Users can manually edit any individual field after auto-fill

---

## Use Cases

- Shipping address forms
- Event registration with location
- Contact information collection
- Delivery address entry

---

## Styling

The Address Picker supports standard **Container** color and dimension settings:
- Background color, border, padding, margin
- Border radius and width

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczNju0lskuQsjUjVs5YTRWKVczJlFIEVyjhgxDkvrN655N6w/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
