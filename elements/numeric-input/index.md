# Numeric Input Element

A numeric input element is used to accept numerical input from the user. Numeric Input elements can be used for both **Forms** and **Cards**. Users are already familiar with so-called "text boxes" and how data is entered. The big difference here is that they can enter only numbers with different formats. It's important to make sure that the input field is clearly labeled. You can also add options to customize the appearance of the element, such as setting a default value or specifying the number of decimal places allowed.
<p style="margin-top:50px;"></p>

![image1](../../../../images/cards/elements/numeric-input/numeric-input1.png)
<p style="margin-top:50px;"></p>

## This element comes with the following attributes:

- **Question Text:** Freestyle, multiline text. The text field is read-only. The text indicates to the end-user what information they need to add as input.

- **Default Value:** By default, this element is optional. Information can be placed here at design time or at run time via the calculated field function (see below).   
A value of 0 (zero) is assigned if no value is provided.

- **Optional:** Indicates if this element is mandatory to be filled in at run time. By default, this option is not selected, making the element mandatory.

- **Placeholder:** This is used as a hint to specify an expected value in the input box. If left blank, nothing will be displayed. By default, a value of 0 (zero) is assigned.

- **Max Digits after Dot:** The user can restrict the number of digits allowed after the decimal point.

- **Allow Decimal:** If selected, this option, in combination with **Max Digits after Dot**, allows decimal numbers to be entered.

- **Element Size:** This field is empty by default. Users can add a numerical value here to indicate, in pixels, the size of the info message. The lower the value, the more lines are allocated to the text in order to define the size of the box on the canvas.

- **Inline:** This is a handy feature. If selected, the element will be glued to the previous element on the canvas. If there is no space to be added to the previous element, it will position itself with its own dimensions at the beginning of the canvas on the same row where it is located, and the next element can be glued to it.

- **Calculated Field:** By default, this option is not selected.   
If the user selects this option, the following image will appear:
<p style="margin-top:50px;"></p>

![image1](../../../../images/cards/elements/numeric-input/numeric-input2.png)
<p style="margin-top:50px;"></p>

**The calculated field for the Numeric element works in the same way as it does for the [Info Element](../../tutorials/cards/elements/info/index.md).**
<p style="margin-top:50px;"></p>

## When using Numeric Input elements in Acenji, keep these tips in mind:  
  
1. When using the Numeric Input Field Element in Acenji, it's important to use clear labels and explain what type of numerical data should be entered. For example, if you're asking for a person's age, the label should clearly state that the user should enter their age in years.  
  
2. If there are any restrictions on the numerical data that can be entered, such as a minimum or maximum value, make sure to clearly communicate this to the user. For instance, if you're asking for a user's weight, you might specify that the number entered must be between 50 and 200 kilograms.  
  
3. To prevent errors and ensure accuracy, Acenji offers input validation for the Numeric Input Field Element. This means that the user will be prompted to enter a valid number before submitting the form or survey.  
  

## Questions? 

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>   
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>


<p style="margin-top:70px;"></p>

# Useful Links:

<span class="triangle"></span> Avada Theme Documentation - https://theme-fusion.com/documentation/avada/     
<span class="triangle"></span> Avada Video Tutorials - https://theme-fusion.com/documentation/avada/video-tutorials/    
<span class="triangle"></span> Avada Demos - https://theme-fusion.com/avada-demos/  


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


## Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfBy1t4U_tFag0_2AYKoUQ9gkkBkKji5jiwFlGdV9wF7KgaAg/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Wird geladen…</iframe>











