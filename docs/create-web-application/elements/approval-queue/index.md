# Approval Queue

The **Approval Queue** element displays a list of items that can be individually approved or rejected. It is ideal for review workflows where submitted content must pass through a moderation step.

---

## Overview

Approval Queue renders a list of pending items, each with Approve and Reject action buttons. Items can be filtered by status and display colored badges indicating their current state.

Common uses:
- Content moderation queues
- Proposal or submission reviews
- User registration approvals
- Request management dashboards

---

## Adding an Approval Queue

1. Open the **Website Builder**
2. Find **Approval Queue** in the Elements panel (under Interactive)
3. Drag it onto your page
4. Configure data and appearance in the **General Tab**

> **Note:** This element works on both **web and mobile** applications.

---

## Properties

### General Tab

#### Data Source

| Option | Description |
|--------|-------------|
| **Static** | Define items manually in the builder |
| **From Element** | Pull data from another element (e.g., JSON Data Source, Card List) |

#### Static Items

Add items directly:
- Click **Add Item** to create a new entry
- Enter a **Title** and optional **Description**
- Set the initial **Status** (Pending, Approved, Rejected)

#### Element Data Source

| Property | Description |
|----------|-------------|
| **Source Element ID** | The ID of the element providing data |
| **Title Field** | Field name for the item title |
| **Description Field** | Field name for the item description |
| **Status Field** | Field name for the item status |

#### Filters and Display

| Property | Description | Default |
|----------|-------------|---------|
| **Show Status Filter** | Display filter buttons (All, Pending, Approved, Rejected) | On |
| **Pending Badge Color** | Badge color for pending items | #ffc107 |
| **Approved Badge Color** | Badge color for approved items | #28a745 |
| **Rejected Badge Color** | Badge color for rejected items | #dc3545 |

### Color Tab

| Property | Description | Default |
|----------|-------------|---------|
| **Background Color** | Container background | Transparent |
| **Approve Button Color** | Approve button color | #28a745 |
| **Reject Button Color** | Reject button color | #dc3545 |

### Dimensions Tab

| Property | Description |
|----------|-------------|
| **Width** | Element width |
| **Height** | Element height (auto by default) |
| **Padding** | Inner spacing |
| **Margin** | Outer spacing |
| **Border Radius** | Corner rounding |

---

## Best Practices

1. **Enable status filters** - Let reviewers focus on pending items without visual clutter

2. **Use distinct badge colors** - The default green/yellow/red scheme is universally understood

3. **Combine with Proposal Form** - Let users submit proposals and route them into an Approval Queue

4. **Connect to a data source** - For dynamic workflows, bind to a JSON Data Source or Card List element

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index

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
