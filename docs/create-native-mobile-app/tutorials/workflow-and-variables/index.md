# Tutorial: Workflow and Variables

This tutorial teaches you how to add dynamic behavior to your mobile application using workflows, events, and variables. You'll learn to create interactive experiences that respond to user actions.

---

## What You'll Learn

By the end of this tutorial, you'll know how to:
- Create and use variables to store data
- Set up event-driven workflows
- Build interactive forms with validation
- Create dynamic, responsive interfaces

---

## Prerequisites

Before starting:
- Complete the "Pages and Navigation" tutorial
- Have a multi-page mobile app
- Understand basic elements and cards

---

## Step 1: Understanding Workflows

### 1.1 What is a Workflow?

A **workflow** is a sequence of actions triggered by an event:

```
┌─────────────────────────────────────────────────────────────┐
│                      WORKFLOW                                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────────┐                                          │
│   │    EVENT     │  ← User taps button                      │
│   │  (Trigger)   │                                          │
│   └──────┬───────┘                                          │
│          │                                                   │
│          ▼                                                   │
│   ┌──────────────┐                                          │
│   │   ACTION 1   │  ← Validate form                         │
│   └──────┬───────┘                                          │
│          │                                                   │
│          ▼                                                   │
│   ┌──────────────┐                                          │
│   │   ACTION 2   │  ← Save data                             │
│   └──────┬───────┘                                          │
│          │                                                   │
│          ▼                                                   │
│   ┌──────────────┐                                          │
│   │   ACTION 3   │  ← Show success message                  │
│   └──────────────┘                                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Event Types

| Event | When It Fires |
|-------|---------------|
| **On Tap** | User taps an element |
| **On Load** | Page or element loads |
| **On Change** | Input value changes |
| **On Submit** | Form is submitted |
| **On Focus** | Element gains focus |
| **On Blur** | Element loses focus |

---

## Step 2: Understanding Variables

### 2.1 What is a Variable?

A **variable** stores data that can be used throughout your app:

```
Variable: userName
Value: "John Smith"

Usage: "Welcome, {userName}!"
Display: "Welcome, John Smith!"
```

### 2.2 Variable Types

| Type | Example | Use Case |
|------|---------|----------|
| **Text** | "Hello World" | Names, messages |
| **Number** | 42, 3.14 | Counts, prices |
| **Boolean** | true/false | Toggles, flags |
| **Date** | 2024-01-15 | Dates, timestamps |
| **Object** | {name: "John"} | Complex data |
| **Array** | [1, 2, 3] | Lists of items |

### 2.3 Variable Scope

| Scope | Availability | Lifetime |
|-------|--------------|----------|
| **Page** | Current page only | While on page |
| **App** | Entire application | App session |
| **User** | Tied to user | Persistent |

---

## Step 3: Creating Variables

### 3.1 Create a Variable

1. Open your project settings or Variables section
2. Click **"+ Add Variable"**
3. Configure:
   - Name: `userScore`
   - Type: Number
   - Default Value: 0
4. Save

### 3.2 Variable Naming

Use clear, descriptive names:

| Good | Avoid |
|------|-------|
| `userName` | `x` |
| `totalPrice` | `var1` |
| `isLoggedIn` | `flag` |
| `selectedItemId` | `temp` |

---

## Step 4: Using Variables in Elements

### 4.1 Display Variables

Show a variable value in a text element:

1. Add an **Info** or **Text** element
2. Set the content to: `Welcome, {userName}!`
3. The variable value displays at runtime

### 4.2 Bind Variables to Inputs

Connect form inputs to variables:

1. Select a **Text Input** element
2. Find the **Bind to Variable** option
3. Select your variable
4. Input value syncs with variable

---

## Step 5: Setting Variables with Actions

### 5.1 Set Variable Action

When a button is tapped:

1. Select the button
2. Open Events/Actions
3. Add action: **Set Variable**
4. Configure:
   ```
   Variable: userScore
   Value: 100
   ```

### 5.2 Calculate and Set

Perform calculations:

```
Action: Set Variable
Variable: totalPrice
Value: {quantity} * {unitPrice}
```

### 5.3 Set from Input

Save input value to variable:

```
Action: Set Variable
Variable: userName
Value: {nameInput.value}
```

---

## Step 6: Building a Form Workflow

### 6.1 Create the Form

1. Add a form card to your page
2. Add elements:
   - Name Input (text)
   - Email Input (email)
   - Age Input (number)
   - Submit Button

### 6.2 Create Variables

Create variables to store form data:
- `formName` (text)
- `formEmail` (text)
- `formAge` (number)
- `formSubmitted` (boolean)

### 6.3 Configure Submit Workflow

On Submit button tap:

**Action 1: Validate**
```
IF {nameInput} is empty OR {emailInput} is empty
  THEN Show error message
  ELSE Continue
```

**Action 2: Save to Variables**
```
Set formName = {nameInput.value}
Set formEmail = {emailInput.value}
Set formAge = {ageInput.value}
```

**Action 3: Mark Complete**
```
Set formSubmitted = true
```

**Action 4: Navigate**
```
Navigate to Confirmation Page
```

---

## Step 7: Conditional Logic

### 7.1 Show/Hide Based on Variable

Control element visibility:

```
Element: Premium Features Card
Condition: Show IF {isPremiumUser} == true
```

### 7.2 Enable/Disable Based on Variable

Control interactivity:

```
Element: Submit Button
Condition: Enable IF {formValid} == true
```

### 7.3 Conditional Navigation

Navigate based on conditions:

```
IF {userAge} >= 18
  THEN Navigate to Adult Content
  ELSE Navigate to Age Restricted Message
```

---

## Step 8: Working with Lists

### 8.1 Array Variables

Store lists of items:

```
Variable: shoppingCart
Type: Array
Value: []
```

### 8.2 Add to List

Add items to an array:

```
Action: Add to Array
Array: shoppingCart
Item: {selectedProduct}
```

### 8.3 Display Lists

Use a Card List to show array items:

1. Add a **Card List** element
2. Bind to your array variable
3. Design the card template
4. Each array item creates a card

---

## Step 9: Calculations

### 9.1 Basic Math

Perform calculations in actions:

```
Action: Set Variable
Variable: total
Value: {price} + {tax}
```

### 9.2 Common Operations

| Operation | Syntax |
|-----------|--------|
| Add | `{a} + {b}` |
| Subtract | `{a} - {b}` |
| Multiply | `{a} * {b}` |
| Divide | `{a} / {b}` |
| Percentage | `{a} * 0.10` |

### 9.3 Example: Shopping Cart Total

```
On cart change:
  Set subtotal = sum of {cart.items.price}
  Set tax = {subtotal} * 0.08
  Set total = {subtotal} + {tax}
```

---

## Step 10: Example: Counter App

Let's build a simple counter.

### 10.1 Setup

1. Create variable: `count` (number, default: 0)
2. Add elements:
   - Text to display count
   - "+" button
   - "-" button
   - "Reset" button

### 10.2 Display Count

Text element content: `Count: {count}`

### 10.3 Increment Action

On "+" button tap:
```
Set count = {count} + 1
```

### 10.4 Decrement Action

On "-" button tap:
```
Set count = {count} - 1
```

### 10.5 Reset Action

On "Reset" button tap:
```
Set count = 0
```

---

## Best Practices

1. **Name variables clearly** - Self-documenting names

2. **Initialize defaults** - Always set default values

3. **Keep scope minimal** - Use page variables when possible

4. **Validate inputs** - Check data before saving

5. **Handle edge cases** - What if the value is empty?

6. **Test thoroughly** - Verify all workflow paths

---

## Troubleshooting

### Variable Not Updating

- Verify the Set Variable action runs
- Check variable name is correct
- Ensure the action completes

### Calculation Wrong

- Check operator precedence
- Verify variable values
- Test with known values

### Condition Not Working

- Check comparison operators
- Verify variable has expected value
- Test each condition separately

### Display Not Refreshing

- Confirm variable binding
- Check for typos in variable name
- Try refreshing the preview

---

# Questions?

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Conditional Logic - https://help.acenji.com/#/./create-native-mobile-app/tutorials/conditional-logic/index
<span class="triangle"></span> Forms - https://help.acenji.com/#/./create-native-mobile-app/tutorials/forms/index
<span class="triangle"></span> Variable Center - https://help.acenji.com/#/./shared-concepts/variable-center/index

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
