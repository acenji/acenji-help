# Card List Element

The **Card List** element provides a container for displaying dynamic lists of cards from data sources.

---

## Overview

Card List is ideal for:
- Product listings
- Content grids
- Dynamic data displays
- Repeating card layouts
- Data-driven interfaces

---

## Adding a Card List Element

1. Open the **Website Builder**
2. Find **Card List** in the Elements panel
3. Drag it onto your page
4. Configure data binding in the **Connect Tab**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Question Text** | Label or title for the list |

### Connect Tab

| Property | Description |
|----------|-------------|
| **Data Source** | Where list data comes from |
| **Card Template** | How each item is displayed |

---

## Visual Display

In the builder, Card List shows as a placeholder:

```
┌─────────────────────────┐
│  📋+ Card List         │
│                         │
│  (Data-driven content) │
│                         │
└─────────────────────────┘
```

At runtime, it populates with actual data items.

---

## Availability

> **Note:** Card List is available in **Mobile Card** and **Web Card** applications. It's not available in the Form builder.

---

## Use Cases

### Product Catalog
```
Data Source: Products database
Display: Product cards with image, name, price
```

### User Directory
```
Data Source: Users list
Display: User cards with photo, name, role
```

### Article Feed
```
Data Source: Articles/posts
Display: Article cards with title, excerpt, date
```

### Order History
```
Data Source: Orders database
Display: Order cards with ID, date, status
```

---

## Data Binding

Card List connects to data sources to dynamically generate content:
1. Select a data source
2. Map fields to card template
3. Cards are created for each data item

---

## Best Practices

1. **Design the card template** - Create a well-structured card layout

2. **Consider empty states** - Handle cases with no data

3. **Optimize for performance** - Large lists may need pagination

4. **Test with real data** - Verify display with actual content

5. **Handle varying content** - Cards should look good with different data lengths

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Web Elements - https://help.acenji.com/#/./create-web-application/elements/index
<span class="triangle"></span> Card Link - https://help.acenji.com/#/./create-web-application/elements/card-link/index
<span class="triangle"></span> Modal Form - https://help.acenji.com/#/./create-web-application/elements/modal-form/index

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
