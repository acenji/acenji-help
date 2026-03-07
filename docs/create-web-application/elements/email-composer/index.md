# Email Composer

The **Email Composer** element provides a full email composition interface with recipient management, rich text body, file attachments, template support, and scheduled sending. It goes far beyond a simple mailto link — it is designed to integrate with your project's email provider (SendGrid, Mailgun, SMTP) for actual email delivery.

## Modes

The Email Composer supports three modes, each suited for different use cases:

### Full Compose Mode
The default mode shows a complete email interface similar to Gmail or Outlook:
- **From** field (auto-filled with current user or configured sender)
- **To** field with chip/tag input for multiple recipients
- **CC / BCC** fields (optional, expandable)
- **Subject** line with variable merge support
- **Rich text body** with formatting toolbar (bold, italic, lists, links, images)
- **Variable merge pills** — insert `{{name}}`, `{{order.id}}`, etc. to dynamically populate content
- **Attachment zone** — drag & drop files or click to attach
- **Save Draft** and **Send** buttons
- **Schedule Send** option (optional)

### Quick Send Mode
A minimal interface for simple "send a message" use cases like contact forms:
- **To** field
- **Message body** (plain text)
- **Send** button

### Template Only Mode
For workflows where the email body is pre-designed and the user only fills in variables:
- **Template selector** dropdown
- **Variable fields** to fill in dynamic values
- **To** field
- **Send** button

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| Accent Color | Color | `#4285F4` | Color for buttons and highlights |
| Mode | Select | `compose` | `compose`, `quick`, or `template-only` |
| Default From | Text | *(empty)* | Sender address. Use `{{currentUser.email}}` for dynamic |
| Button Text | Text | `Send` | Label on the send button |
| Success Message | Text | `Email sent successfully!` | Message shown after successful send |
| Show CC/BCC | Toggle | On | Show CC and BCC fields |
| Show Subject | Toggle | On | Show subject line |
| Show Attachments | Toggle | On | Enable file attachment zone |
| Show Template Picker | Toggle | Off | Show template dropdown in compose mode |
| Show Schedule Send | Toggle | Off | Enable "send later" option |
| Max Attachments | Number | `5` | Maximum number of files |
| Max Attachment Size (MB) | Number | `10` | Per-file size limit |

## Variable Merge

One of the most powerful features of the Email Composer is **variable merge**. You can insert dynamic placeholders in the subject and body that get replaced with real data at send time:

- `{{currentUser.name}}` — the logged-in user's name
- `{{currentUser.email}}` — the logged-in user's email
- `{{order.id}}` — data from other elements or data sources
- Any custom variable defined in your project

Variables appear as highlighted pills in the editor, making them easy to identify and manage.

## Email Provider

The Email Composer uses your project's configured email provider to send emails. Configure your provider in **Project Settings > Providers > Email**:

- **SendGrid** — API key integration
- **Mailgun** — API key integration
- **SMTP** — Custom SMTP server settings
- **ACENji Managed** — Use ACENji's built-in email service (no configuration needed)

## Use Cases

- **Contact forms** — Quick mode with To pre-filled to support email
- **Order confirmations** — Template mode with order variables
- **Internal notifications** — Compose mode for team communication
- **Customer outreach** — Template mode with customer data merge
- **Support tickets** — Quick mode embedded in help pages
