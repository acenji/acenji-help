# Managing Pages

This guide covers all aspects of managing pages in your web application, including creating, editing, organizing, and deleting pages.

---

## Overview

Page management involves:

- **Creating** new pages for your application
- **Editing** page properties and settings
- **Organizing** pages for better workflow
- **Duplicating** pages to save time
- **Deleting** pages you no longer need

---

## Creating Pages

### Method 1: Add Page Button

1. Click the **"+ Add Page"** button in the Page Section
2. Enter a page name in the dialog
3. Click **Create**

### Method 2: Duplicate Existing Page

1. Right-click on an existing page
2. Select **Duplicate**
3. Rename the copied page
4. Modify as needed

### Method 3: From Template

1. Access page templates (if available)
2. Select a pre-designed template
3. Page is created with template content

---

## Page Creation Options

When creating a new page, configure:

| Option | Description | Example |
|--------|-------------|---------|
| **Page Name** | Internal name for the page | "User Dashboard" |
| **URL Slug** | URL path segment | "dashboard" |
| **Page Title** | Browser tab title | "My App - Dashboard" |
| **Start Blank** | Empty page with no content | - |
| **Copy From** | Duplicate another page's content | - |

---

## Editing Page Properties

### Accessing Page Settings

1. Select the page in the Page Section
2. Open the **Floating Design Panel**
3. Navigate to page-level settings

### Editable Properties

| Property | Description |
|----------|-------------|
| **Name** | Change the page display name |
| **URL Slug** | Modify the URL path |
| **Title** | Update browser tab title |
| **Description** | Edit SEO meta description |
| **Keywords** | Add SEO keywords |
| **Access Settings** | Configure who can view |

---

## Setting Up Page URLs

Page URLs allow users to navigate directly to a specific page using a friendly URL instead of the system-generated page ID.

### Why Use Page URLs?

| Benefit | Description |
|---------|-------------|
| **Shareable Links** | Share direct links to specific pages |
| **Bookmarkable** | Users can bookmark specific pages |
| **Clean URLs** | Use friendly names like `welcome` instead of `Page_abc123` |
| **Deep Linking** | Link directly to any page in your app |

### Setting a Page URL

1. Hover over the page card in the Page Section
2. Click the **Edit** button
3. In the "Edit Page" modal, you'll see two fields:
   - **Name**: The display name of the page
   - **Page URL (optional)**: The URL-friendly slug

4. Enter a URL slug (e.g., `welcome`, `step-1`, `contact-us`)
5. The preview shows how the URL will look: `/app?page=welcome`
6. Click **Save**

### URL Format Rules

When typing a Page URL, it automatically formats to be URL-friendly:

- Converts to lowercase
- Replaces spaces with hyphens
- Removes special characters
- Example: "Contact Us!" becomes `contact-us`

### Using Page URLs

Once set, users can access the page directly:

```
https://yourapp.com/web-app/PROJECT_ID?page=welcome
```

| URL Parameter | Result |
|---------------|--------|
| `?page=welcome` | Opens page with slug "welcome" |
| `?page=step-1` | Opens page with slug "step-1" |
| `?page=Page_abc123` | Opens page by ID (fallback) |
| No parameter | Opens the first page (default) |

### Example Use Cases

**Multi-Step Forms:**
- `?page=intro` - Introduction page
- `?page=step-1` - First step
- `?page=step-2` - Second step
- `?page=confirmation` - Thank you page

**Dashboard Sections:**
- `?page=overview` - Main dashboard
- `?page=reports` - Reports section
- `?page=settings` - User settings

### Best Practices for Page URLs

| Do | Don't |
|----|-------|
| Use lowercase | Use UPPERCASE |
| Use hyphens for spaces | Use underscores or spaces |
| Keep it short and descriptive | Use long complex slugs |
| Use meaningful names | Use generic names like "page1" |

**Good examples:** `welcome`, `user-profile`, `step-2-contact`, `thank-you`

**Avoid:** `Page1`, `new_page`, `user profile`, `DASHBOARD`

---

## Renaming Pages

### Quick Rename

1. Double-click the page name in the list
2. Type the new name
3. Press **Enter** to save

### Rename via Context Menu

1. Right-click the page
2. Select **Rename**
3. Enter new name
4. Click **Save**

### Naming Best Practices

| Good Names | Avoid |
|------------|-------|
| "User Profile" | "Page1" |
| "Contact Form" | "New Page" |
| "Product Catalog" | "Untitled" |
| "Checkout - Step 2" | "Page Copy" |

---

## Duplicating Pages

Duplicating creates an exact copy of a page:

### What Gets Copied

- All tiles on the page
- Element configurations
- Styles applied
- Conditions set
- Database bindings

### What Doesn't Get Copied

- Unique page URL (new slug generated)
- Collected user data
- Page-specific analytics

### Duplicate Process

1. Right-click the source page
2. Select **Duplicate**
3. New page appears with "(Copy)" suffix
4. Rename to something meaningful
5. Modify as needed

---

## Organizing Pages

### Page Order

Change the order of pages in the list:

1. Click and drag a page
2. Drop in the desired position
3. Order is saved automatically

### Setting the Home Page

Designate which page loads by default:

1. Right-click the desired page
2. Select **Set as Home**
3. Home icon appears next to page name

### Page Visibility

Control whether pages appear in navigation:

| Setting | Description |
|---------|-------------|
| **Visible** | Page appears in navigation |
| **Hidden** | Page accessible by URL only |
| **Protected** | Page requires authentication |

---

## Deleting Pages

### Delete a Single Page

1. Right-click the page
2. Select **Delete**
3. Confirm the deletion
4. Page is removed

### Deletion Warnings

You'll be warned if:

- Page is set as home page
- Other pages link to this page
- Page has active data bindings

### Recovering Deleted Pages

Deleted pages may be recoverable:

- Check project history/versions
- Use undo if available immediately
- Contact support for recent deletions

> **Note:** Deletion is typically permanent. Always verify before confirming.

---

## Page Search

For projects with many pages:

### Quick Search

1. Click the search icon in Page Section
2. Type page name
3. Matching pages are filtered
4. Click to select

### Search Tips

- Search by partial name
- Search is case-insensitive
- Clear search to show all pages

---

## Bulk Operations

### Select Multiple Pages

If supported:

1. Hold **Ctrl/Cmd** while clicking pages
2. Multiple pages are selected
3. Apply actions to all selected

### Bulk Delete

1. Select multiple pages
2. Right-click on selection
3. Choose **Delete Selected**
4. Confirm the operation

---

## Page History

Track changes to pages:

### Version History

- View previous versions of a page
- See what changed and when
- Restore to earlier version if needed

### Activity Log

- See who modified the page
- Track when changes were made
- Review what was changed

---

## Common Workflows

### Creating a Multi-Step Form

1. Create first page: "Step 1 - Personal Info"
2. Duplicate: "Step 2 - Contact Details"
3. Duplicate: "Step 3 - Review"
4. Create final: "Confirmation"
5. Clear duplicated content, add step-specific fields
6. Configure navigation between steps

### Building a Section of Related Pages

1. Create main section page: "Products"
2. Create sub-pages: "Electronics", "Clothing", "Home"
3. Use consistent naming: "Products - Electronics"
4. Organize in logical order

---

## Best Practices

1. **Name pages consistently** - Use a naming convention

2. **Keep URL slugs clean** - Use lowercase, hyphens

3. **Document your pages** - Maintain a page inventory

4. **Test all pages** - Verify functionality after changes

5. **Clean up unused pages** - Delete pages you don't need

6. **Back up before bulk changes** - Protect against mistakes

---

## Troubleshooting

### Cannot Create New Page

- Check if you've reached a page limit
- Verify you have edit permissions
- Try refreshing the builder

### Page Name Already Exists

- Choose a unique name
- Add a suffix to differentiate
- Check for hidden/deleted pages

### Page Not Appearing

- Verify it was saved successfully
- Check page visibility settings
- Refresh the page list

### Changes Not Saving

- Check network connection
- Look for validation errors
- Try saving again

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Page Section - https://help.acenji.com/#/./create-web-application/website-builder/page-section/index
<span class="triangle"></span> Page Layout - https://help.acenji.com/#/./create-web-application/website-builder/page-section/page-layout/index
<span class="triangle"></span> Tile Section - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/index

<style>
.triangle {
display: inline-block;
width: 0;
height: 0;
border-style: solid;
border-width: 5px 0 5px 5px;
border-color: transparent transparent transparent #595959;
margin-left: 10px;
}
</style>
<p style="margin-top:30px;"></p>


# Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczNju0lskuQsjUjVs5YTRWKVczJlFIEVyjhgxDkvrN655N6w/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
