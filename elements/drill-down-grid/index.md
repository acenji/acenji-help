# Drill Down Grid Element

The Drill Down Grid element allows you to present hierarchical data in a structured way that allows users to drill down to more detailed information by clicking on different levels. Drill Down Grid elements can **only** be used in **Cards**. They are rich, multicolumn, row-based grid systems that allow multiple grid systems to be linked together based on child-parent relationships. All basic functionality from the [Filter Grid](../../tutorials/cards/elements/filter-grid/index.md) applies here, as well as additional attributes. It is particularly useful for presenting complex data sets and allowing users to explore the data in a structured way.     
For example, let's construct a use case for the Drill Down Grid to show some of its capabilities. We will show world countries with their annual budgets and some other statistical data. Then, if the user clicks on a country, we can break down and show the regions/states of that country with their budgets and statistics.   
Finally, we will have a third grid that will have a rich text editor page with some bullet points, and the ability to send that information as a flat via email on the spot.
<p style="margin-top:50px;"></p>

![image1](../../../../images/cards/elements/drill-down-grid/drill-down-grid1.png)
<p style="margin-top:50px;"></p>


## A Drill Down Grid Element comes with the following attributes:

- **Question Text:** Freestyle, multiline text. The text field is read-only. The text indicates to the end-user what action will follow if they press the button.  

- **Optional:** Indicates if this element is mandatory to be filled in at run time. By default, this is not selected and therefore the element is mandatory.  

- **Configure columns:** Provides the ability to preload the columns and supply the row cells. In our example, the first top grid will look like this: 
<p style="margin-top:70px;"></p>


![image2](../../../../images/cards/elements/drill-down-grid/drill-down-grid2.png)
<p style="margin-top:50px;"></p>

What is important here is to designate one of the columns to be a link to the next grid. In our case, that is the Country column.
<p style="margin-top:50px;"></p>


![image3](../../../../images/cards/elements/drill-down-grid/drill-down-grid3.png)
<p style="margin-top:70px;"></p>

Our second grid structure will be:
<p style="margin-top:50px;"></p>

![image4](../../../../images/cards/elements/drill-down-grid/drill-down-grid4.png)
<p style="margin-top:70px;"></p>

Here, we designate the **State** column to be the link between this grid and the next.

And our last grid system will be:
<p style="margin-top:50px;"></p>

![image5](../../../../images/cards/elements/drill-down-grid/drill-down-grid5.png)
<p style="margin-top:50px;"></p>

- **Table Data:** This is where cells are populated with data. In our example, we populate the table with actual data. In our example, we have three grids connected together in a chain, therefore we have to populate all three with data. For simplicity, we will only populate a few rows to demonstrate the capabilities of the system.
<p style="margin-top:50px;"></p>

For **Grid 1** - World Countries, we will add the following data:
<p style="margin-top:50px;"></p>

<img src="./images/cards/elements/drill-down-grid/drill-down-grid6.png" alt="" width="620" style="padding-right: 15px;">
<p style="margin-top:50px;"></p>

<img src="./images/cards/elements/drill-down-grid/drill-down-grid7.png" alt="" width="620" style="padding-right: 15px;">
<p style="margin-top:50px;"></p>

<img src="./images/cards/elements/drill-down-grid/drill-down-grid8.png" alt="" width="620" style="padding-right: 15px;">
<p style="margin-top:50px;"></p>

<img src="./images/cards/elements/drill-down-grid/drill-down-grid9.png" alt="" width="620" style="padding-right: 15px;">
<p style="margin-top:50px;"></p>

<img src="./images/cards/elements/drill-down-grid/drill-down-grid10.png" alt="" width="620" style="padding-right: 15px;">
<p style="margin-top:70px;"></p>

For **Grid 2** - we will add one state for each US and Canada:

<img src="./images/cards/elements/drill-down-grid/drill-down-grid11.png" alt="" width="420" style="padding-right: 45px;">
<p style="margin-top:50px;"></p>

<img src="./images/cards/elements/drill-down-grid/drill-down-grid12.png" alt="" width="420" style="padding-right: 45px;">
<p style="margin-top:50px;"></p>

<img src="./images/cards/elements/drill-down-grid/drill-down-grid13.png" alt="" width="420" style="padding-right: 45px;">
<p style="margin-top:50px;"></p>


<img src="./images/cards/elements/drill-down-grid/drill-down-grid14.png" alt="" width="520" style="padding-right: 15px;">
<p style="margin-top:50px;"></p>

<img src="./images/cards/elements/drill-down-grid/drill-down-grid15.png" alt="" width="520" style="padding-right: 15px;">
<p style="margin-top:50px;"></p>

<img src="./images/cards/elements/drill-down-grid/drill-down-grid16.png" alt="" width="420" style="padding-right: 15px;">
<p style="margin-top:50px;"></p>

And for **Grid 3** - we will add the following data:
<p style="margin-top:50px;"></p>


<img src="./images/cards/elements/drill-down-grid/drill-down-grid17.png" alt="" width="520" style="padding-right: 15px;">
<p style="margin-top:50px;"></p>

<img src="./images/cards/elements/drill-down-grid/drill-down-grid19.png" alt="" width="520" style="padding-right: 15px;">
<p style="margin-top:70px;"></p>

It is important to notice that when the email is used, files can be specified to be attached to that email.

- **Configure Filters:** Set which columns can be filtered on what data.


When loaded, the grid seems naturally presented in the mobile canvas.
<p style="margin-top:50px;"></p>


<img src="./images/cards/elements/drill-down-grid/drill-down-grid20.jpg" alt="" width="320" style="padding-right: 45px;">

<img src="./images/cards/elements/drill-down-grid/drill-down-grid21.jpg" alt="" width="320" style="padding-right: 45px;">

<img src="./images/cards/elements/drill-down-grid/drill-down-grid22.jpg" alt="" width="320" style="padding-right: 45px;">
<p style="margin-top:50px;"></p>  
  
  

## When using drill down grid elements in Acenji, keep these tips in mind:

1. A drill down grid is a type of interface that displays hierarchical data, meaning data that is organized into different levels or categories. To use a drill down grid, make sure that the data is well-organized and easy to understand. You can do this by using clear labels and column headers that help users navigate and interpret the data.  
  
2. To navigate through the different levels of the hierarchy, you can use expand/collapse buttons that allow users to drill down into more detailed information.   
  
3. You can also consider integrating your drill down grid with other elements, such as a rich text box, URL, or text, to create more complex forms and interfaces.  
  



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

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf2PF-pmHgWFi_LZL646d69egmO6GwTQQL-l9ucyiZkTPxcPw/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Wird geladen…</iframe>













