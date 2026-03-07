# Booking

The **Booking** element provides an interactive appointment scheduling interface. Users select a date, choose a time slot, and optionally pick a service.

---

## Features

- **Week date bar** — 7-day selector starting from today
- **Time slot grid** — generated from configurable hours and duration
- **Service selector** — optional dropdown with name, duration, and price
- **Booking summary** — shows selected date, time, and service
- **Accent color** highlighting for selected items

---

## Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Accent Color** | Highlight color for selections | `#4285F4` |
| **Slot Duration** | Time slot interval in minutes | `30` |
| **Start Hour** | First available hour (24h format) | `9` |
| **End Hour** | Last available hour (24h format) | `17` |
| **Height** | Component height in pixels | `400` |
| **Show Service Selector** | Display service/provider dropdown | `true` |

---

## Services

Each service entry has:
- **Name** — service name (e.g., "Consultation")
- **Duration** — length in minutes
- **Price** — display price (e.g., "$50")

Click **+ Add Service** to add entries. Click **x** to remove.

---

## How It Works

1. User sees a row of date buttons for the current week
2. Tapping a date shows the available time slots for that day
3. Time slots are generated from Start Hour to End Hour at the configured interval
4. User taps a slot to select it (highlighted with accent color)
5. If services are enabled, user picks a service from the dropdown
6. Summary bar at the bottom shows the full selection

---

## Use Cases

- Appointment scheduling (medical, legal, consulting)
- Service booking (salons, spas, repairs)
- Meeting room reservation
- Class or session registration

---

## Styling

The Booking element supports standard **Container** color and dimension settings:
- Background color, border, padding, margin
- Border radius and width

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczNju0lskuQsjUjVs5YTRWKVczJlFIEVyjhgxDkvrN655N6w/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
