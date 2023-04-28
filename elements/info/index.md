# Info Element

Information elements can be used in both Forms and Cards. They are one of the simplest building blocks available in ACENji. This type of element is often used to display informational text or labels on a web page. It's important to make sure that the text is easily readable and not too small or crowded. You may also want to consider using different font sizes, colors, or styles to highlight important information or make it stand out. You can also add options to customize the background color or border of the element to match the design of the page.
   <p style="margin-top:50px;"></p>


![image0](../../../../images/cards/elements/info-element/info-element.png)
<p style="margin-top:50px;"></p>


## The Info element comes with the following attributes:

- **Information Text:** This is a freestyle, multi-line text field. It is read-only, meaning users cannot edit the text.   
Information can be added to this field at design time or at run time using the calculated field function (see below).  
- **Optional:** By default, this element is optional, meaning users can skip it if they choose.  
- **Element Size:** This field is empty by default. Users can add a numerical value (in pixels) to indicate the size of the info message. The smaller the size, the more lines will be allocated to the text in order to fit it into the specified box on the canvas.  
<p style="margin-top:50px;"></p>


![image1](../../../../images/cards/elements/info-element/element-size.png)

- **Inline** - "Inline" is a handy feature where if selected, the element will stick to the previous element on the canvas. If there is no space available to add it to the previous element, it will position itself with its own dimensions at the beginning of the canvas on the same row, and the next element can be glued to it.
<p style="margin-top:50px;"></p>



![image2](../../../../../images/cards/elements/info-element/info-inline.png)
<p style="margin-top:50px;"></p>


- **Calculated Field** - This option is not selected by default. If the user selects it, the following image will appear: <p style="margin-top:50px;"></p>



![image3](../../../../images/cards/elements/info-element/info-calculated-empty.png)
<p style="margin-top:50px;"></p>


Imagine you have a magic tool that can take two things and put them together to make a new thing. For example, if you have a red ball and a blue ball, the magic tool can put them together to make a purple ball. That's kind of what the calculated field does in ACENji.  

The idea here is to combine complex calculations using input information from the same or other cards. For example, let's add two text fields on the same card for simplicity: First Name and Last Name. The end result will be to display both names together inside the info element using the calculated field set up.   
  
## Select the card element 'First Name' and click the green + button.
<p style="margin-top:50px;"></p>



![image5](../../../../images/cards/elements/info-element/first-name2.png)
<p style="margin-top:50px;"></p>



Next, we will select the element we want to use in the calculation: Last Name. Using the same drop-down where 'First Name' is currently selected, change it to 'Last Name' and this time select 'Operation'. The following operations are available: 
- Plus 
- Minus 
- Multiply 
- Divide 
- Concat.

For our example, we will select "Concat". This will combine the value from the First Name and the value from the Last Name together as a result. A new field will show up called "Delimiter". Because we indicated that we will concatenate two string tokens, we need to also tell the platform how these two tokens will be joined together. For our example, let's add two empty spaces, so the result will be "First Last"."

When we're done, the computer will put both names together for us, and we'll have a full name in one box.
<p style="margin-top:50px;"></p>


![image6](../../../../images/cards/elements/info-element/delimiter.png)
<p style="margin-top:50px;"></p>


After selecting the operation and specifying the delimiter, click the green "+" button again. This will create our first result. The idea is to have as many results as we want, all connected via some type of operation. 

Since different cards and fields can participate in the calculation, the final result can be a very complex set of calculations.   

Additionally, the calculation field is updated in real-time as data is inputted. So, for example, if the user adds the first name, the info field will display it.   
Then, when the user adds the second part of the concatenated calculation (last name), it will be added to the calculation field.
<p style="margin-top:50px;"></p>



<img src="./images/cards/elements/info-element/mobile-result1.jpg" alt="" width="360" >
<p style="margin-top:50px;"></p>


Let's say you have a calculator that you use to add up numbers. You can use this calculator to add up different numbers and get the total. But what if you want to show the total in a different way, like with a dollar sign ($) or with two decimal points? That's where the "resulted format section" comes in.  

The resulting format section has to do with how we display numbers. For example, let's calculate two numbers by adding them and assign them in currency format.   

We will reuse the last card and add three additional elements: two input numeric number elements and one info element to show the result.  

<p style="margin-top:50px;"></p>



![image8](../../../../images/cards/elements/info-element/numbers-adds.png)
<p style="margin-top:50px;"></p>


### This time select "plus" from the operation and add the second number.
<p style="margin-top:50px;"></p>


![image9](../../../../images/cards/elements/info-element/info-adds2.png)
<p style="margin-top:50px;"></p>


Let's add formatting. We will choose the "Currency symbol" option.  

We can also use the "Use Grouping" option and select the "Locale" to indicate the supported language region. By default, we support US English.  
  

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

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScNFeg9O6RL_MxiXu8ywllSDkFYeB8vOQkmqoyF1ipdg0o47w/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Wird geladen…</iframe>







 


 

