# SMS Composer

The **SMS Composer** element provides a visual SMS composition interface with a realistic phone preview, character and segment counters, variable merge, MMS support, and a threaded conversation view. Unlike most no-code platforms that hide SMS behind invisible backend actions, this element gives users a full visual compose experience.

## Modes

### Full Compose Mode
The default mode shows a complete SMS compose panel alongside a live phone preview:
- **To** field with country code selector and phone chip input
- **Message body** with variable merge pills (`{{name}}`, `{{code}}`, etc.)
- **Character counter** — shows current count vs. 160-char GSM-7 limit
- **Segment counter** — color-coded badge showing how many SMS segments the message will use (green = 1 segment, orange = multiple)
- **Encoding indicator** — shows GSM-7 or Unicode based on content
- **Insert Variable** button for dynamic data
- **MMS toggle** — attach an image to convert to MMS (optional)
- **Template picker** (optional)
- **Schedule send** (optional)
- **Phone preview** — realistic device mockup showing the message as it would appear on the recipient's phone

### Quick Send Mode
A minimal interface for simple SMS use cases:
- Phone number input with country code
- Message text area
- Character/segment counter
- Send button

### Conversation Mode
A threaded chat-bubble view for two-way SMS:
- Contact header with avatar, name, and phone number
- Chat bubbles — outgoing (right, accent color) and incoming (left, white)
- Delivery status indicators (sent, delivered)
- Timestamps on each message
- Reply input at bottom

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for buttons, bubbles, and highlights |
| Mode | Select | `compose` | `compose`, `quick`, or `conversation` |
| Default Country Code | Text | `+1` | Pre-selected country code |
| Button Text | Text | `Send` | Label on the send button |
| Success Message | Text | `SMS sent successfully!` | Shown after successful send |
| Show Character Counter | Toggle | On | Display character count |
| Show Segment Counter | Toggle | On | Display SMS segment count |
| Show MMS | Toggle | Off | Enable image attachment for MMS |
| Show Template Picker | Toggle | Off | Show template dropdown |
| Show Schedule Send | Toggle | Off | Enable send-later option |
| Max Message Length | Number | `1600` | Maximum characters (10 segments) |

## SMS Segments Explained

SMS messages are split into **segments** for delivery:
- **GSM-7 encoding** (standard Latin characters): 160 chars per segment
- **Unicode encoding** (emojis, non-Latin scripts): 70 chars per segment
- Multi-segment messages use 153 chars (GSM-7) or 67 chars (Unicode) per segment due to concatenation headers

The segment counter helps users understand the cost impact of their message — each segment is billed separately by SMS providers.

## SMS Provider

Configure your SMS provider in **Project Settings > Providers > SMS**:

- **Twilio** — Account SID + Auth Token
- **ACENji Managed** — Use ACENji's built-in SMS service

## Use Cases

- **Verification codes** — Quick mode with `{{code}}` variable
- **Appointment reminders** — Template mode with date/time variables
- **Order updates** — Compose mode with order data merge
- **Two-way support** — Conversation mode for customer interactions
- **Marketing campaigns** — Compose mode with bulk recipient list
