# Info Element

Info elements can be used for both Forms and Cards. It is probably one of the simpliest element ACENji offers as a building block.

![image0](../../../images/cards/info-element/info-element.png)

It comes with the following attributes


- **Information Text** - Free style, multiline text. The text field is read only. Information can be placed here at design time or at run time via calculated field function (see below).
- **Optional** - By default this element comes as an optional.  
- **Element Size** - This field is empty by default. User can add a numerical number here to indicate in pixels the size of the info message. The lower the size, the more lines are allocated to the text in order to define that size as a box on the canvas.

![image1](../../../images/cards/info-element/element-size.png)

- **Inline** - Handy feature, where if selected the elemnent gets glued to the previous element on the canvas. If there is no space to be added to the previous element, it position itself with its own dimentions at the begining of the canvas on the row where is located and the next elemnt can be glued to it.

![image2](../../../images/cards/info-element/info-inline.png)

- **Calculated Field** - By default this is not selected. If user selects that option, the following image will open:

![image3](../../../images/cards/info-element/info-calculated-empty.png)

The idea here is to concatinate complex calculations using either input information from same or other cards. Example, Add two text fields on the same card for simplisity: First Name and Last Name. End result will be to display both names together inside the info element using the calculation field set up.
Select the card element First name and click the green + button

![image4](../../../images/cards/info-element/first-name.png)

![image5](../../../images/cards/info-element/first-name2.png)

Next, we will select the select element we want to participate in the calculation: Last Name. Using the same drop down where currently is selected First Name,change it to last Name and this time select Operation. The following operations are present:
-- Plus
-- Minus
-- Multiply
-- Divide
-- Concat

For our example, select "concat". That will concatinate the value from the First name and the value from the last name together as result. A new field will show up called "Delimiter". Becasue we indicated we will do concatination on two values as string tokens, we need to also tell the platfrom how these two tokens will be glued together. For our example, let add empty space two times , so the result will be "First  Last".

![image6](../../../images/cards/info-element/delimiter.png)

Click the green "+" button again. That will create our first result. The idea is to have as many results here we want, all connected via some type of operations. Becasue different cards and different fields can participate in the calculation efforts, the final result could be very complex calculation sets.
In addition, the calculation field is actually populated immediatelly as the data comes in. So, for example, as long the user adds the first name as input, the info field will display it. Then when user adds the second part of th econcatinated calculation (last name) that will be added. 

![image7](../../../images/cards/info-element/mobile-result1.jpg)

The resulted format section has to do with then we display numbers. For example, lets calculate two numbers as addition and assign them with currency format.
We will reuse the last card and add three additional elements: two input numberic number elements and one info element to show the result. 

![image8](../../../images/cards/info-element/numbers-adds.png)

This time select "plus" from the operation and add the second nunmber.

![image9](../../../images/cards/info-element/info-adds2.png)

Lets add formating. We will choose "Currency symbol". 

We also can take advantage of "Use Grouping" option and select "Locale" to indicate the supported language region. By default we support US English.

Questions? <br>  <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">Reach us for questions</a>   or <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">post an issue here</a> 







 


 

