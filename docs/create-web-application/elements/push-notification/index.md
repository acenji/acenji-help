# Push Notification

The **Push Notification** element provides a visual push notification composer with a realistic device preview (iOS, Android, or desktop), audience targeting, and a notification inbox view. Unlike most no-code platforms that bury push notifications in backend-only workflows, this element gives users a full visual compose-and-preview experience.

## Modes

### Compose Mode
The default mode shows a full notification compose panel alongside a live device preview:
- **Title** with character counter (65 chars recommended for mobile)
- **Body** with variable merge pills (`{{name}}`, `{{order_id}}`, etc.)
- **Image** upload zone for rich push notifications (optional)
- **Action URL** for deep linking when the notification is tapped (optional)
- **Audience selector** — tabs for All Users, Segment, Topic, or Specific users
- **Badge count** number input (optional)
- **Sound** selector dropdown (optional)
- **Priority** toggle for normal vs. high priority (optional)
- **Schedule send** for timed delivery (optional)
- **Device preview** — realistic phone/desktop mockup showing how the notification will appear on the selected platform (iOS, Android, or desktop)

### Quick Send Mode
A minimal interface for simple notification use cases:
- Title input
- Body text area
- Send button

### Inbox Mode
A notification feed view showing received notifications:
- Notification list with read/unread indicators (colored dots)
- Category icons per notification
- Relative timestamps (e.g., "2m ago", "1h ago")
- "Mark all read" action
- Click to expand notification details

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for buttons, highlights, and unread indicators |
| Mode | Select | `compose` | `compose`, `quick`, or `inbox` |
| Button Text | Text | `Send` | Label on the send button |
| Preview Platform | Select | `ios` | Device preview: `ios`, `android`, or `desktop` |
| Success Message | Text | `Push notification sent!` | Shown after successful send |
| Show Image | Toggle | On | Enable image upload for rich notifications |
| Show Action URL | Toggle | On | Show deep link URL field |
| Show Audience | Toggle | On | Show audience targeting tabs |
| Show Badge Count | Toggle | Off | Enable badge count input |
| Show Sound | Toggle | Off | Show sound selector |
| Show Priority | Toggle | Off | Show priority toggle |
| Show Schedule Send | Toggle | Off | Enable scheduled delivery |

## Device Preview

The compose mode includes a realistic device preview that updates in real time as you type:

- **iOS** — iPhone frame with notch, status bar, and iOS-style notification banner
- **Android** — Android frame with camera cutout and Material-style notification
- **Desktop** — Browser-style notification toast

The preview shows your title, body, and image exactly as they would appear on the target platform, helping you optimize content length and layout before sending.

## Push Provider

Configure your push notification provider in **Project Settings > Providers > Push**:

- **Firebase Cloud Messaging (FCM)** — Server key + project credentials
- **Apple Push Notification Service (APNs)** — Certificate or key-based auth
- **ACENji Managed** — Use ACENji's built-in push service

## Use Cases

- **Order updates** — Quick mode with `{{order_status}}` variable
- **Marketing campaigns** — Compose mode with image and deep link to promo page
- **Re-engagement** — Scheduled send to inactive users via segment targeting
- **System alerts** — High priority notifications for critical events
- **In-app inbox** — Inbox mode as a persistent notification center within your app
