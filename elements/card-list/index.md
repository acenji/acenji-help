# Card List Element

A Card List element allows you to present a list of items or content in a visually appealing way that makes it easy for users to scan and select the items that interest them. Card List elements can **only** be used within **Cards**. They are perhaps the most fundamental elements for cards and focus on providing various functionalities that can help users navigate between apps or within the same app. It is particularly useful for presenting a collection of items that have a similar structure, such as products or articles.
 We will demonstrate some use cases where card lists consolidate and display information from other apps, trigger events, or pass information to other elements. They can be edited, cloned, or deleted at runtime and are 100% dynamic. Their functionality is usually divided between events and functions.  
<p style="margin-top:50px;"></p>

![image1](../../../../images/cards/elements/card-list/card-list1.png)
<p style="margin-top:90px;"></p>

## Card List comes with the following attributes:

- **Question Text:** Freestyle, multiline text. The text field is read-only and indicates to the end-user what action will follow if they press the button.  

- **Optional:** Indicates if this element is mandatory to be filled in at runtime. By default, this is not selected, and therefore the element is mandatory.  

- **Events:** Provides the ability to connect to the same card or a different card and define what action to expect from it. Ideally, this works as a bridge between cards. By default, the following events are built internally: Edit, Clone. The delete event needs to be defined in advance here.   

When the card list is presented on mobile, to access the events, swipe to the left.
<p style="margin-top:50px;"></p>


<img src="./images/cards/elements/card-list/card-list2.jpg" alt="" width="320" style="padding-right: 45px;">

<img src="./images/cards/elements/card-list/card-list3.jpg" alt="" width="320" style="padding-right: 45px;">
<p style="margin-top:70px;"></p>

- **Functions:** An endless number of functions can be added via selection here. For a start, the user needs to add related cards in the card relationship box.
<p style="margin-top:50px;"></p>

<img src="./images/cards/elements/card-list/card-list4.png" alt="" width="520">
<p style="margin-top:70px;"></p>

Then, under **Actions**, add the card that will have a relationship via the card list. In our example, we will use a previously defined small card called **Egg**. Since the idea is to bring information from the other card (in the example **Egg**), we can specify what elements to use and use the calculation fields mechanism to define a very complex workflow if needed.
<p style="margin-top:50px;"></p>

<img src="./images/cards/elements/card-list/card-list6.png" alt="" width="520">
<p style="margin-top:50px;"></p>  



## When using card list elements in Acenji, keep these tips in mind:

1. The card list element is a way to display a list of items in a visually appealing and organized manner. To make it easy for you to find what you're looking for, each card should have a clear and consistent layout, font, and color scheme. Each card should also contain enough information about the item, such as a title, description, price, or other relevant details, to help you decide if you want to click through to learn more.  
  
2. To make the list more interactive, the cards can include buttons or links that allow you to take action on the item directly from the list. For example, you might be able to purchase a product or read an article by clicking a button or link on the card.  
  
3. To make it easier to navigate long lists of items, the card list can use pagination or infinite scrolling. This can help to improve performance and make it easier for you to find what you're looking for.  
  
4. To make the list more useful and relevant to your needs or interests, the card list can be integrated with other elements such as search or filtering. This will allow you to narrow down the list based on specific criteria, making it more personalized and helpful for you.  


<p style="margin-top:50px;"></p>

# Questions? 

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>   
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>  
<p style="margin-top:30px;"></p>


# Useful Links:

<span class="triangle"></span> Using the Slider Element - https://help.acenji.com/#/./elements/slider/index     
<span class="triangle"></span> Using the Signature Element - https://help.acenji.com/#/./elements/signature/index  
<span class="triangle"></span> Learn about the Rich Editor Element - https://help.acenji.com/#/./elements/rich-editor/index
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


<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfGtqbaV6SltaMp82S7gor1gpOvbDkxNKd4p-j03guflxS5jQ/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Wird geladen…</iframe>






