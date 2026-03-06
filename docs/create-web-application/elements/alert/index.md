# Alert

The **Alert** element displays a temporary notification banner that can auto-dismiss after a set duration. Use it for success messages, warnings, errors, or informational notices.

---

## Overview

Alerts appear as colored banners with an optional icon, message text, and close button. They support multiple visual types and entrance/exit animations.

---

## Adding an Alert

1. Open the **Website Builder**
2. Find **Alert** in the Elements panel (under Display)
3. Drag it onto your page
4. Configure the alert in the **General Tab**

---

## Properties

### General Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Message** | The alert text content | `This is an alert` |
| **Alert Type** | Visual style: success, warning, error, info | `info` |
| **Show Icon** | Display a type-appropriate icon | `true` |
| **Dismissible** | Show a close (X) button | `true` |
| **Auto Dismiss** | Automatically hide after a duration | `false` |
| **Dismiss After (s)** | Seconds before auto-dismiss | `5` |
| **Animation** | Entrance/exit animation: fade, slide-down, slide-up, slide-left, slide-right | `fade` |
| **Position** | Where the alert appears: inline, top-fixed, bottom-fixed | `inline` |
| **Show on Load** | Display immediately when the page loads | `true` |

### Alert Types

| Type | Color | Icon |
|------|-------|------|
| **Success** | Green | Checkmark circle |
| **Warning** | Yellow/Orange | Exclamation triangle |
| **Error** | Red | Alert circle |
| **Info** | Blue | Information circle |

---

## Use Cases

- **Form submission feedback** -- show success/error after submitting data
- **System notifications** -- warn about maintenance or updates
- **Validation messages** -- highlight missing or invalid fields
- **Onboarding hints** -- provide tips that dismiss after reading

---

## Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
