# Drill Down Grid Element

Drill Down Grid elements can be used only in **Cards**. They are rich multicolumn row-based grid systems that allow multiple grid systems to be hooked together based on the child-parent relationships. All basic functionality from the [Filter Grid](../../tutorials/cards/elements/filter-grid/index.md) applies here as well plus additional attributes. For example, Let's construct a use case for Drill Down Grid to show some of its capabilities. Let's show World countries with their annual budgets and some other statistical data. Then if the user clicks on one country, we can break down and show the regions/states of that country with their budgets and their statistics. And finally, let third grid-down that will have a rich text editor page with some bullet points, and the ability to send that information as a flat via email on the spot.

![image1](../../../../images/cards/elements/drill-down-grid/drill-down-grid1.png)

It comes with the following attributes


- **Question Text** - Freestyle, multiline text. The text field is read-only. The text indicates to the end-user what action will follow if they press the button.
- **Optional** - Indicate if this element is mandatory to be filled in at run time. By default, this is not selected and therefore the element is mandatory.
- **Configure columns** - Provides the ability to preload the columns and supply the row cells. In our example the first top grid will look like that:

![image2](../../../../images/cards/elements/drill-down-grid/drill-down-grid2.png)

What is important here is to designate one of the columns to be a link to the next grid. In our case that is Country.

![image3](../../../../images/cards/elements/drill-down-grid/drill-down-grid3.png)

Our second grid structure will be

![image4](../../../../images/cards/elements/drill-down-grid/drill-down-grid4.png)

Here we designate column **State** to be the link between this grid and next

And our last Grid system will be

![image5](../../../../images/cards/elements/drill-down-grid/drill-down-grid5.png)

- **Table Data** - This is where cells are populated with data. In the example, we populate the table with actual data.
in our example we have three grids connected together in a chain, therefore we have to populate all three with data. For simplicity, we will only populate a few rows to demonstrate the capabilities of the system.

For **Grid 1** - for the world countries we will add the following data:

![image6](../../../../images/cards/elements/drill-down-grid/drill-down-grid6.png)

![image7](../../../../images/cards/elements/drill-down-grid/drill-down-grid7.png)

![image8](../../../../images/cards/elements/drill-down-grid/drill-down-grid8.png)

![image9](../../../../images/cards/elements/drill-down-grid/drill-down-grid9.png)

![image10](../../../../images/cards/elements/drill-down-grid/drill-down-grid10.png)

For **Grid 2** -  we will add the following one state for each US and Canada:

![image11](../../../../images/cards/elements/drill-down-grid/drill-down-grid11.png)

![image12](../../../../images/cards/elements/drill-down-grid/drill-down-grid12.png)

![image13](../../../../images/cards/elements/drill-down-grid/drill-down-grid13.png)

![image14](../../../../images/cards/elements/drill-down-grid/drill-down-grid14.png)

![image15](../../../../images/cards/elements/drill-down-grid/drill-down-grid15.png)

![image16](../../../../images/cards/elements/drill-down-grid/drill-down-grid16.png)

and for **Grid 3** -  we will add the following data:

![image17](../../../../images/cards/elements/drill-down-grid/drill-down-grid17.png)

![image18](../../../../images/cards/elements/drill-down-grid/drill-down-grid18.png)

![image19](../../../../images/cards/elements/drill-down-grid/drill-down-grid19.png)

It is important to notice that when the email is used, files can be specified to be attached to that email.

- **Configure filters** - set which columns can be filtered on what data.


When loaded the grid seems naturally presented in the mobile canvas

![image20](../../../../images/cards/elements/drill-down-grid/drill-down-grid20.jpg)

![image21](../../../../images/cards/elements/drill-down-grid/drill-down-grid21.jpg)

![image22](../../../../images/cards/elements/drill-down-grid/drill-down-grid22.jpg)

Questions? <br>  <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">Reach us for questions</a>   or <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">post an issue here</a>












