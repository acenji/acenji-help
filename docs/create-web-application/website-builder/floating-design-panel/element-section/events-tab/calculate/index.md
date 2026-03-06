# Calculate Event

The **Calculate Event** allows you to perform mathematical operations and data transformations when a user interacts with an element. This enables dynamic computations without writing code.

---

## Concept

Think of **Calculate** as a way to process data in real-time.
For example:

> A user enters a quantity and unit price, then clicks a **"Calculate Total"** button. The Calculate event multiplies the values and displays the result.

---

## Adding a Calculate Event

1. **Select the element** (typically a button) on your page.
2. Open the **Floating Design Panel** and go to the **Events Tab**.
3. From the **Available Events**, **drag the _Calculate_ event** into the **Perform an Action** section on the left.
4. A **properties window** will open, where you can configure:
   - **Title** — internal name to help you identify the event
   - **Description** — internal notes to explain the purpose
   - **Calculation settings** — define the formula and target

> The Title and Description are only visible to creators inside the design panel — they are not shown to end users.

5. Click **Save**.
   The event will now appear in the **Perform an Action** list.

---

## Configuration Options

| Field | Required | Description |
|-------|----------|-------------|
| **Title** | Yes | Internal name for the event |
| **Description** | Yes | Internal notes about the event |
| **Formula** | Varies | The calculation to perform |
| **Source Fields** | Varies | Input values for the calculation |
| **Target Field** | Varies | Where to display the result |

---

## Calculation Types

Calculate events can perform various operations:

| Operation | Description | Example |
|-----------|-------------|---------|
| **Addition** | Sum values | `Price + Tax` |
| **Subtraction** | Difference | `Total - Discount` |
| **Multiplication** | Product | `Quantity × Price` |
| **Division** | Quotient | `Total ÷ Count` |
| **Percentage** | Calculate percentage | `Amount × 0.15` |

---

## Editing or Deleting

Once the Calculate event has been created, you can manage it from the **Perform an Action** section:

- Click the **three dots (⋯)** next to the event to:
  - **Edit** — reopen the properties window and modify the calculation
  - **Delete** — remove the event entirely

---

## Common Use Cases

### Order Totals
Calculate line item totals:
```
Formula: Quantity × Unit Price
Result: Line Total
```

### Tax Calculations
Add tax to subtotal:
```
Formula: Subtotal × Tax Rate
Result: Tax Amount
```

### Score Calculations
Compute quiz scores:
```
Formula: Correct Answers ÷ Total Questions × 100
Result: Percentage Score
```

### Pricing Calculators
Apply discounts:
```
Formula: Original Price × (1 - Discount Rate)
Result: Final Price
```

### Unit Conversions
Convert between units:
```
Formula: Miles × 1.60934
Result: Kilometers
```

---

## Pro Tip

Calculate events can be chained with other events.
For example, calculate a total, **change the style** to highlight the result, then **navigate to checkout**.

---

## Best Practices

1. **Validate inputs** — Ensure source fields have valid numbers

2. **Handle edge cases** — Consider zero values and empty fields

3. **Format results** — Display numbers in user-friendly formats

4. **Test thoroughly** — Verify calculations with various inputs

5. **Show feedback** — Indicate when calculation completes

---

## Example: Simple Calculator

```
Elements:
- Input A: First number
- Input B: Second number
- Button: Calculate
- Result: Display field

Calculate Event on Button:
- Formula: Input A + Input B
- Target: Result field
```

When the user clicks **Calculate**, the sum appears in the Result field.

---

## Need Help?

- Open a support ticket from your ACENji admin panel
- Or reach us via [ACENji.com](https://www.acenji.com/contact)

---

That's it!
You've learned about the **Calculate Event** — enabling dynamic computations in your ACENji app.
