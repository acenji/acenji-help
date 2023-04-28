# Price Table - What it is and how to use it?


<p>How the Price table works? Before we answer that question, let's first examine what pain the price table element solves.
Imagine you have an inventory of basic food ingredients and they have prices based on volume brackets.

![image0](../../../../images/cards/elements/price-table/price-table-example.png)

Would it be nice to have a calculator that behind the scene reads the actual prices and calculates on the fly the exact amount? Imagine this being done on a cellphone and send as a quote or even a money order. Even the most complicated prices can be accommodated within the price table no-code element by acenji. Then, in addition, you can combine it with other no-code elements and apply discounts, additional charges, and so on. The following is an example of such a price table element and how to use it.

The example is for the price range(the more complicated example), so the simplifying version will be a single price - just remove the price range. Forma start we will use several dropdowns, a quantity field, and a display price field. The final configurations look like this:</p>


![image1](../../../../images/cards/elements/price-table/final.jpg)

<p>The above card example project demonstrates how the Price table works with a range of volumes</p>
<ol>
<li>For a start, we added label info on top that is just the title</li>
<li>Then added a drop-down called Select food category</li>

<!--around the images need to have an empty line, otherwise for some reason do not display them-->

![image2](../../../../images/cards/elements/price-table/food.jpg)

<p>Added three categories: Vegetables, Fruits, and Meat.Here is an example :</p>

![image3](../../../../images/cards/elements/price-table/three-categories.jpg)


<li>Next, we added another drop-down for selecting the food ingredients</li>

<p>There, select the Cascade Child checkbox and select &ldquo;Select food category&rdquo;</p>

![image4](../../../../images/cards/elements/price-table/cascade-child.jpg)

<p>Added a few veggies. Ex.</p>


![image5](../../../../images/cards/elements/price-table/quanity.jpg)


<li>Added numeric field we called the quantity&nbsp;</li>

<p>We will use that field to tell how many items we are buying.&nbsp;</p>


![image6](../../../../images/cards/elements/price-table/display-price1.jpg)


<li>Added text field called display price</li>

<p>This field is auto-populated, no need to do anything&nbsp;</p>


![image7](../../../../images/cards/elements/price-table/display-price.jpg)


<li>Added finally price element&nbsp;</li>

<p>The way you currently add price element is to drag it so it comes from the bottom of the cell phone a, without touching other elements</p>

![image8](../../../../images/cards/elements/price-table/card-selection.jpg)

<p>When you add that element it comes with few settings.</p>
<p>First, select the card and the card field you want the price to be against&nbsp;</p>
<p>Then select which card and field to display the price&nbsp;</p>

![image9](../../../../images/cards/elements/price-table/finally.jpg)

<p>Then select a single quantity or quantity range for the price:</p>
<p>Quantity range means that one item can have multiple prices based on volume.For example, range 1-10 price1, 11-20-price2, etc&hellip;</p>
<p>Finally, select the quantity field</p>

![image10](../../../../images/cards/elements/price-table/quantity-card.jpg)


<p>That field is could be from another card and usually is input by users at run time&nbsp;</p>
<p>Then you add the prices for each item. An example is eggplant prices below&nbsp;</p>

![image11](../../../../images/cards/elements/price-table/price-min-max.jpg)

![image14](../../../../images/cards/elements/price-table/max.png)


<li>Actual image from a cellphone app</li>


![image13](../../../../images/cards/elements/price-table/cell.jpg)


<li>Questions? <br>  <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">Reach us for questions</a>   Or   
<a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">post an issue here</a></li>
</ol>


