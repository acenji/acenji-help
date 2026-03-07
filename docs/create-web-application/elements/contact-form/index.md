# Contact Form

The **Contact Form** element provides a complete contact/inquiry form with department routing, file attachments, spam protection, and a dedicated support ticket mode with urgency levels and tracking IDs. Unlike most no-code platforms that only offer a basic name/email/message form, this element includes department selection, priority levels, and a full ticketing workflow.

## Modes

### Standard Mode
The default mode provides a full-featured contact form:
- **Name** and **Email** fields (two-column layout)
- **Phone number** with country code (optional)
- **Department** selector — pill buttons for General, Sales, Support, Billing
- **Subject** line (optional)
- **Priority** selector — Normal or High (optional)
- **Message** text area
- **File attachments** — drag-and-drop zone (optional)
- **Send copy to self** checkbox (optional)
- **reCAPTCHA** spam protection indicator
- **Send** button

### Minimal Mode
A compact form for sidebars, footers, or landing pages:
- Name input
- Email input
- Message text area
- Send button

### Support Ticket Mode
A structured support request form with tracking:
- Name and Email (two-column)
- **Order / Reference number** field (optional)
- **Issue category** dropdown with sub-categories
- **Urgency level** — color-coded buttons: Low (green), Medium (yellow), High (orange), Critical (red)
- Subject and description fields
- **Screenshot upload** zone (optional)
- Submit button
- **Ticket confirmation** — green banner showing tracking ID (e.g., TKT-00482) and estimated response time

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for buttons and highlights |
| Mode | Select | `standard` | `standard`, `minimal`, or `ticket` |
| Button Text | Text | `Send Message` | Label on the submit button |
| Success Message | Text | `Your message has been sent!` | Shown after successful submission |
| Show Phone | Toggle | On | Display phone number field |
| Show Subject | Toggle | On | Display subject line |
| Show Department | Toggle | On | Display department selector |
| Show Attachments | Toggle | Off | Enable file upload zone |
| Show Priority | Toggle | Off | Display priority selector |
| Send Copy to Self | Toggle | Off | Show "send copy to my email" checkbox |
| Reference Number | Toggle | Off | Show order/reference field (ticket mode) |
| Urgency Level | Toggle | Off | Show urgency buttons (ticket mode) |

## Use Cases

- **General inquiries** — Standard mode on a "Contact Us" page
- **Footer contact** — Minimal mode embedded in page footer
- **Customer support** — Ticket mode with urgency and reference number
- **Sales leads** — Standard mode with department pre-set to "Sales"
- **Bug reports** — Ticket mode with screenshot uploads and issue categories
