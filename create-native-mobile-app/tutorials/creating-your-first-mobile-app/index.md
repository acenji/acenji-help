# Tutorial: Creating Your First Mobile App

This tutorial walks you through creating your first native mobile application with ACENji. You'll learn the fundamentals of mobile app development using the no-code platform.

---

## What You'll Build

By the end of this tutorial, you'll have:
- A working mobile application
- Multiple screens with navigation
- Interactive elements (forms, buttons)
- A basic understanding of the mobile builder

---

## Prerequisites

Before starting:
- You have an ACENji account
- You've downloaded the ACENji mobile preview app
- You're familiar with the Dashboard

---

## Step 1: Create a New Mobile Project

### 1.1 Access the Dashboard

1. Log in to your ACENji account
2. Go to the **Dashboard**
3. Click **"+ New Project"**

### 1.2 Select Mobile App

1. Choose **"Native Mobile App"** as the project type
2. Enter a project name (e.g., "My First App")
3. Click **Create**

### 1.3 Open the Mobile Builder

1. Click on your new project
2. The Mobile Builder interface opens
3. You'll see the canvas and tool panels

---

## Step 2: Understand the Interface

### 2.1 Mobile Builder Layout

```
┌─────────────────────────────────────────────────────────────┐
│                     MOBILE BUILDER                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐  ┌────────────────────┐  ┌──────────────────┐│
│  │          │  │                    │  │                  ││
│  │  Pages   │  │    Mobile Canvas   │  │   Properties     ││
│  │  & Cards │  │                    │  │   Panel          ││
│  │          │  │   ┌──────────┐    │  │                  ││
│  │          │  │   │ Phone    │    │  │                  ││
│  │          │  │   │ Preview  │    │  │                  ││
│  │          │  │   │          │    │  │                  ││
│  │          │  │   └──────────┘    │  │                  ││
│  │          │  │                    │  │                  ││
│  └──────────┘  └────────────────────┘  └──────────────────┘│
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Key Areas

| Area | Purpose |
|------|---------|
| **Left Panel** | Pages and Cards navigation |
| **Canvas** | Visual design area with phone preview |
| **Right Panel** | Properties and settings |
| **Toolbar** | Save, preview, and publish options |

---

## Step 3: Create Your First Page

### 3.1 Default Page

Your project starts with a default page. Let's customize it:

1. Click on the page in the left panel
2. Rename it to **"Home"**

### 3.2 Add a Welcome Card

1. In the left panel, find the **Cards** section
2. Click **"+ Add Card"**
3. Choose a basic card template
4. The card appears on your page

### 3.3 Customize the Card

1. Click on the card to select it
2. In the properties panel:
   - Change the title to "Welcome!"
   - Add a subtitle: "My First Mobile App"

---

## Step 4: Add Elements

### 4.1 Add a Text Element

1. With the card selected, find the **Elements** palette
2. Drag an **Info** element onto the card
3. Click to edit the text:
   - "Welcome to my first mobile app built with ACENji!"

### 4.2 Add a Button

1. Drag a **Button** element below the text
2. Change the button label to "Get Started"
3. We'll configure the action later

### 4.3 Add an Image

1. Drag an **Image** element above the text
2. Upload an image or use a placeholder
3. Adjust the size as needed

---

## Step 5: Create a Second Page

### 5.1 Add New Page

1. In the Pages section, click **"+ Add Page"**
2. Name it **"About"**
3. Click **Create**

### 5.2 Add Content to About Page

1. Select the About page
2. Add a new card
3. Add elements:
   - Title: "About This App"
   - Text with information about your app
   - A button to go back

---

## Step 6: Set Up Navigation

### 6.1 Configure Home → About Navigation

1. Go back to the Home page
2. Select the "Get Started" button
3. Open the **Events** or **Actions** settings
4. Configure:
   - Event: On Tap/Click
   - Action: Navigate to Page
   - Target: About page

### 6.2 Configure About → Home Navigation

1. On the About page, select the back button
2. Configure:
   - Event: On Tap/Click
   - Action: Navigate to Page
   - Target: Home page

---

## Step 7: Add a Form

Let's add interactivity with a simple form.

### 7.1 Create a Contact Page

1. Add a new page called **"Contact"**
2. Add a form card

### 7.2 Add Form Elements

1. Add a **Text Input** for Name
   - Label: "Your Name"
   - Placeholder: "Enter your name"

2. Add a **Text Input** for Email
   - Label: "Email Address"
   - Placeholder: "Enter your email"

3. Add a **Text Area** for Message
   - Label: "Message"
   - Placeholder: "How can we help?"

4. Add a **Button**
   - Label: "Send Message"

---

## Step 8: Preview Your App

### 8.1 In-Browser Preview

1. Click the **Preview** button in the toolbar
2. Your app opens in a simulated phone view
3. Test:
   - Navigation between pages
   - Form interactions
   - Button taps

### 8.2 On-Device Preview

1. Open the ACENji preview app on your phone
2. Scan the QR code from the builder
3. Your app loads on the actual device
4. Test with real touch interactions

---

## Step 9: Style Your App

### 9.1 Apply Colors

1. Select elements
2. Open the Color properties
3. Set:
   - Background colors
   - Text colors
   - Button colors

### 9.2 Adjust Typography

1. Select text elements
2. Open Text properties
3. Configure:
   - Font size
   - Font weight
   - Text alignment

### 9.3 Set Spacing

1. Select elements
2. Open Dimension properties
3. Adjust:
   - Padding
   - Margins
   - Element sizes

---

## Step 10: Save Your Work

1. Click **Save** in the toolbar
2. Or use **Ctrl/Cmd + S**
3. Your app is saved

---

## What You've Learned

In this tutorial, you learned how to:

- Create a new mobile app project
- Navigate the Mobile Builder interface
- Create pages and add cards
- Add and configure elements
- Set up navigation between pages
- Create a simple form
- Preview your app on browser and device
- Apply basic styling
- Save your work

---

## Next Steps

Continue learning with these tutorials:

- [Pages and Navigation](../pages-and-navigation/index) - Deep dive into page management
- [Workflow and Variables](../workflow-and-variables/index) - Add dynamic functionality
- [Cards](../cards/index) - Master card design

---

## Troubleshooting

### Preview Not Loading

- Verify you saved your changes
- Check your internet connection
- Try refreshing the builder

### Elements Not Appearing

- Ensure elements are inside a card
- Check element visibility settings
- Verify the element isn't hidden by conditions

### Navigation Not Working

- Confirm the action is configured correctly
- Check the target page exists
- Test in preview mode

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Mobile Tutorials - https://help.acenji.com/#/./create-native-mobile-app/tutorials/index
<span class="triangle"></span> Cards - https://help.acenji.com/#/./create-native-mobile-app/tutorials/cards/index
<span class="triangle"></span> Forms - https://help.acenji.com/#/./create-native-mobile-app/tutorials/forms/index

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
