# Tutorial: Adding Workflows

This tutorial teaches you how to add interactivity to your web application through events, actions, and workflow logic. You'll learn to make your application respond to user actions.

---

## What You'll Build

By the end of this tutorial, you'll have:
- A form that validates user input
- Buttons that trigger actions
- Dynamic content that responds to user choices
- Navigation based on conditions

---

## Prerequisites

Before starting:
- Complete the "Setting Up Pages" tutorial
- Have pages with tiles and elements
- Be familiar with the Floating Design Panel

---

## Step 1: Understanding Events and Actions

### What is an Event?

An **event** is something that happens, like:
- User clicks a button
- Form is submitted
- Page loads
- Input value changes

### What is an Action?

An **action** is what happens in response:
- Navigate to another page
- Show/hide an element
- Save data
- Calculate a value

---

## Step 2: Configure a Button Click

Let's make a button navigate to another page.

### 2.1 Select the Button

1. Open your Home page
2. Click on the "Get Started" button
3. The Floating Design Panel opens

### 2.2 Open Events Tab

1. Click the **Events** tab in the panel
2. You'll see event configuration options

### 2.3 Add Click Action

1. Find the **On Click** event
2. Click **"+ Add Action"**
3. Select **Card Link** (navigation)
4. Choose the destination page

### 2.4 Test It

1. Click **Preview**
2. Click the button
3. You should navigate to the target page

---

## Step 3: Create a Form Submission Workflow

Let's set up a contact form that processes submissions.

### 3.1 Navigate to Contact Page

1. Open your Contact page
2. You should have a form tile with:
   - Name input
   - Email input
   - Message text area
   - Submit button

### 3.2 Configure the Submit Button

1. Select the Submit button
2. Open the **Events** tab
3. Add a Click action

### 3.3 Add Validation Logic

Before saving, we want to validate the form:

**Action 1: Check Required Fields**
```
Type: Condition
IF: Name input is empty OR Email input is empty
THEN: Show error message
ELSE: Continue to next action
```

### 3.4 Add Save Action

**Action 2: Save Data**
```
Type: Save to Database
Target: Contact Submissions
Fields:
  - name: [Name Input Value]
  - email: [Email Input Value]
  - message: [Message Input Value]
```

### 3.5 Add Success Feedback

**Action 3: Show Confirmation**
```
Type: Navigate
Target: Thank You page
```

---

## Step 4: Add Dynamic Visibility

Let's show/hide content based on user choices.

### 4.1 Create a Dropdown Selection

1. Add a **Dropdown** element to a page
2. Configure options:
   - "Personal Account"
   - "Business Account"
   - "Enterprise Account"

### 4.2 Add Conditional Tiles

1. Add three different tiles below the dropdown
2. Each tile has content specific to that account type

### 4.3 Set Visibility Conditions

For the Personal Account tile:
1. Select the tile
2. Open **Conditions** section
3. Add condition:
   ```
   IF [Account Type Dropdown] equals "Personal Account"
   THEN Show this tile
   ```

Repeat for Business and Enterprise tiles with their respective conditions.

### 4.4 Test Dynamic Content

1. Click **Preview**
2. Change the dropdown selection
3. Watch the tiles show/hide dynamically

---

## Step 5: Using Variables

Variables store data that can be used across your application.

### 5.1 Create a Variable

1. Open **Workflows and Variables** section
2. Click **"Add Variable"**
3. Configure:
   - Name: `selectedPlan`
   - Type: Text
   - Default: "free"

### 5.2 Set Variable on Action

When user selects a plan:
1. Select the plan button
2. Add Click action:
   ```
   Type: Set Variable
   Variable: selectedPlan
   Value: "premium"
   ```

### 5.3 Use Variable in Conditions

Display premium content:
1. Select the premium content tile
2. Add condition:
   ```
   IF {selectedPlan} equals "premium"
   THEN Show
   ```

---

## Step 6: Calculate Values

Let's create a simple calculator.

### 6.1 Add Input Elements

1. Add two **Numeric Input** elements
2. Label them "Price" and "Quantity"
3. Add a **Text Label** for the result

### 6.2 Configure Calculate Action

1. Select the Price or Quantity input
2. Open **Events** tab
3. Add **On Change** event
4. Add action:
   ```
   Type: Calculate
   Formula: [Price] * [Quantity]
   Store in: [Result Label]
   ```

### 6.3 Test the Calculation

1. Click **Preview**
2. Enter values in both inputs
3. Watch the result update automatically

---

## Step 7: Chain Multiple Actions

Actions can run in sequence.

### 7.1 Create an Action Sequence

On form submit:
1. **Action 1**: Validate inputs
2. **Action 2**: Save to database
3. **Action 3**: Clear form fields
4. **Action 4**: Show success message
5. **Action 5**: Navigate to confirmation page

### 7.2 Configure the Sequence

1. Select the submit button
2. Add each action in order
3. They will execute sequentially

---

## Step 8: Add Error Handling

Handle cases when things go wrong.

### 8.1 Add Error Condition

In your workflow:
```
IF save action fails
THEN show error message
ELSE continue to success
```

### 8.2 Display User-Friendly Errors

1. Add an error message element (hidden by default)
2. On error, show this element
3. Include helpful information for the user

---

## Step 9: Test Your Workflows

### 9.1 Preview and Test

1. Click **Preview**
2. Test each workflow:
   - Try valid form submission
   - Try invalid submission
   - Test all button actions
   - Verify conditions work

### 9.2 Check All Scenarios

- What happens with empty fields?
- What happens with invalid data?
- Do all navigation paths work?
- Are success/error messages showing correctly?

---

## What You've Learned

In this tutorial, you learned how to:

- Configure button click events
- Create form submission workflows
- Add dynamic visibility conditions
- Use variables to store data
- Calculate values from inputs
- Chain multiple actions together
- Handle errors gracefully

---

## Next Steps

Continue to learn about access control:

[Roles and Permissions Tutorial](../roles-and-permissions/index)

---

## Troubleshooting

### Action Not Executing

- Verify the event is configured correctly
- Check if conditions are blocking execution
- Test in preview mode

### Variable Not Updating

- Confirm the Set Variable action runs
- Check variable scope
- Verify variable name matches

### Calculation Wrong

- Check formula syntax
- Verify input elements are correct
- Test with known values

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Events Tab - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/element-section/events-tab/index
<span class="triangle"></span> Workflows and Variables - https://help.acenji.com/#/./create-web-application/website-builder/workflows-and-variables/index
<span class="triangle"></span> Conditions Section - https://help.acenji.com/#/./create-web-application/website-builder/floating-design-panel/conditions-section/index

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
