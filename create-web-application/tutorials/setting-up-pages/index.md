# Tutorial: Setting Up Pages

This tutorial walks you through creating and organizing pages for your web application. You'll learn how to create pages, add tiles, and design effective layouts.

---

## What You'll Build

By the end of this tutorial, you'll have:
- A home page with a welcome message
- An about page with information
- A contact page with a form
- Navigation between pages

---

## Prerequisites

Before starting:
- You have an ACENji account
- You've created a new web application project
- You're familiar with the Dashboard

---

## Step 1: Open the Website Builder

1. Log in to your ACENji account
2. Go to the **Dashboard**
3. Click on your project (or create a new one)
4. Click **Website Builder** to open the builder

You should see the builder interface with:
- Left panel: Pages and Tiles sections
- Center: Canvas area
- Right panel: Floating Design Panel

---

## Step 2: Create Your First Page

Every project starts with a home page. Let's customize it.

### 2.1 Select the Home Page

1. In the left panel, find the **Pages** section
2. Click on **"Home"** (or the default page)
3. The page loads in the canvas

### 2.2 Rename the Page

1. Right-click on the page name
2. Select **"Rename"**
3. Type **"Home"** and press Enter

---

## Step 3: Add a Tile to the Home Page

Tiles are containers that hold your content.

### 3.1 Find a Tile Template

1. In the left panel, look for the **Tiles** section
2. Browse available tile templates
3. Find a "Welcome" or "Hero" style tile

### 3.2 Add the Tile

1. **Drag** the tile template onto the canvas
2. **Drop** it where you want it positioned
3. The tile instance appears on your page

### 3.3 Customize the Tile Content

1. Click on the tile to select it
2. The Floating Design Panel opens
3. Click on text elements to edit them:
   - Change the title to "Welcome to My App"
   - Update the subtitle as desired

---

## Step 4: Add Elements to Your Tile

Let's add some content to your welcome tile.

### 4.1 Add a Text Element

1. With the tile selected, find the **Elements** section
2. Drag a **Text Label** onto the tile
3. Click the text to edit it
4. Type your welcome message

### 4.2 Add a Button

1. Drag a **Button** element onto the tile
2. Click to select it
3. In the Floating Design Panel:
   - Change the button text to "Get Started"
   - We'll configure the action later

---

## Step 5: Create Additional Pages

### 5.1 Create an About Page

1. In the Pages section, click **"+ Add Page"**
2. Name it **"About"**
3. Click **Create**

### 5.2 Add Content to About Page

1. Click on the About page to select it
2. Drag a text tile onto the canvas
3. Add information about your application:
   - Company description
   - Mission statement
   - Team information

### 5.3 Create a Contact Page

1. Click **"+ Add Page"**
2. Name it **"Contact"**
3. Click **Create**
4. Add a form tile with:
   - Name input
   - Email input
   - Message text area
   - Submit button

---

## Step 6: Set Up Navigation

Now let's connect your pages with navigation.

### 6.1 Add Navigation Links

On each page, add links to other pages:

1. Select your header tile (or create one)
2. Add **Card Link** elements for each page:
   - "Home" → links to Home page
   - "About" → links to About page
   - "Contact" → links to Contact page

### 6.2 Configure Link Actions

For each link:

1. Select the Card Link element
2. Open the **Events** tab
3. Configure the **Click** action:
   - Action: **Card Link**
   - Target: Select the destination page

---

## Step 7: Style Your Pages

### 7.1 Apply Consistent Styling

1. Select elements you want to style
2. Open the **Color** tab to set colors
3. Open the **Dimensions** tab for sizing
4. Open the **Text** tab for typography

### 7.2 Use Saved Styles

1. Style one button the way you want
2. Open the **Styles** section
3. Click **"Save as Style"**
4. Name it "Primary Button"
5. Apply this style to other buttons

---

## Step 8: Preview Your Application

### 8.1 Preview Mode

1. Click the **Preview** button in the toolbar
2. Your application opens in preview mode
3. Test the navigation between pages
4. Verify all content displays correctly

### 8.2 Check Responsiveness

1. In preview, resize the browser window
2. Verify pages look good at different sizes
3. Test on mobile view if available

---

## Step 9: Save Your Work

1. Click **Save** in the toolbar
2. Or use **Ctrl/Cmd + S**
3. Your pages are saved

---

## What You've Learned

In this tutorial, you learned how to:

- Create and rename pages
- Add tile templates to pages
- Customize tile content
- Add and configure elements
- Set up navigation between pages
- Apply consistent styling
- Preview your application

---

## Next Steps

Continue to the next tutorial to learn about adding interactive workflows:

[Adding Workflows Tutorial](../adding-workflows/index)

---

## Troubleshooting

### Page Not Saving

- Check your internet connection
- Look for validation errors
- Try saving again

### Tile Not Appearing

- Ensure you dragged it onto the canvas
- Check if the tile is selected
- Verify it's not hidden by conditions

### Navigation Not Working

- Verify the Card Link action is configured
- Check the target page is correct
- Test in preview mode

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Page Section - https://help.acenji.com/#/./create-web-application/website-builder/page-section/index
<span class="triangle"></span> Tile Section - https://help.acenji.com/#/./create-web-application/website-builder/tile-section/index
<span class="triangle"></span> Elements - https://help.acenji.com/#/./create-web-application/elements/index

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
