# File Uploader

The **File Uploader** element provides drag-and-drop file uploading with file type filtering, size limits, image previews, and progress indication.

---

## Overview

Users can upload files by dragging them onto the drop zone or clicking to browse. The element validates file types and sizes, shows thumbnails for images, and displays upload progress.

---

## Adding a File Uploader

1. Open the **Website Builder**
2. Find **File Uploader** in the Elements panel (under Input)
3. Drag it onto your page
4. Configure upload settings in the **General Tab**

---

## Properties

### General Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Placeholder** | Text shown in the drop zone | `Drag files here or click to browse` |
| **Accept Types** | Allowed file categories: All, Images, Documents, Video, Audio, Custom | `all` |
| **Custom Extensions** | Comma-separated extensions when Accept is "Custom" (e.g., `.csv,.json`) | Empty |
| **Max Size (MB)** | Maximum file size per file in megabytes | `10` |
| **Multiple** | Allow selecting multiple files at once | `true` |
| **Max Files** | Maximum number of files when multiple is enabled | `5` |
| **Show Preview** | Display image thumbnails for uploaded images | `true` |
| **Show Progress** | Display upload progress bar | `true` |
| **Drop Zone Style** | Visual style: dashed, solid, filled, minimal | `dashed` |
| **Upload Icon** | MDI icon shown in the drop zone | `mdi-cloud-upload` |

### File Type Categories

| Category | Accepted Types |
|----------|---------------|
| **All** | Any file type |
| **Images** | `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg` |
| **Documents** | `.pdf`, `.doc`, `.docx`, `.xls`, `.xlsx`, `.txt`, `.csv` |
| **Video** | `.mp4`, `.webm`, `.avi`, `.mov` |
| **Audio** | `.mp3`, `.wav`, `.ogg`, `.m4a` |
| **Custom** | User-defined extensions |

---

## Runtime Behavior

- Files that exceed the size limit show an error message
- Files with disallowed types are rejected with a notification
- Image files display a thumbnail preview
- Each file shows a remove button to delete it from the list

---

## Use Cases

- **Form attachments** -- let users upload documents with form submissions
- **Image galleries** -- collect photos from users
- **Document management** -- upload spreadsheets, PDFs, or reports
- **Media uploads** -- collect audio or video files

---

## Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
