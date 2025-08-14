# Card List Element

Card List elements **can** be used only in **Cards**. They are probably the most fundamental elements for cards and focus on carrying different functionalities that can help users navigate between apps and within the same app. We will demonstrate some use cases, where card lists consolidate and project information from other apps, or they trigger events or pass information to other elements. They can be edited, cloned, or deleted at run time and are 100% dynamic. Their functionality is usually divided between events and functions.  

![image1](../../../../images/cards/elements/card-list/card-list1.png)

It comes with the following attributes


- **Question Text** - Freestyle, multiline text. The text field is read-only. The text indicates to the end-user what action will follow if they press the button.
- **Optional** - Indicate if this element is mandatory to be filled in at run time. By default, this is not selected and therefore the element is mandatory.
- **Events** - Provides the ability to connect to the same card or a different card and define what action to expect from it. Ideally, this works as a bridge between cards. By default, the following events are built internally: Edit, Clone. The delete event needs to be defined here in advance.
When the card list is presented in mobile, to get to the events, swipe to the left


<img src="./images/cards/elements/card-list/card-list2.jpg" alt="" width="220">

<img src="./images/cards/elements/card-list/card-list3.jpg" alt="" width="220">
 
- **Functions** - They could endless functions added via selection here. For a start, the user needs to add related cards in the card relationship box

<img src="./images/cards/elements/card-list/card-list4.png" alt="" width="320">

Then under **Actions** add the card that will have some relationship via the card list. In our example, we will use a previously defined small card called **Egg**.
Since the idea is to bring information from the other card(in the example **Egg**) we can specify what elements and use the calculation fields mechanism to define a very complex workflow here if we have to.


<img src="./images/cards/elements/card-list/card-list6.png" alt="" width="320">


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


<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfGtqbaV6SltaMp82S7gor1gpOvbDkxNKd4p-j03guflxS5jQ/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Wird geladen…</iframe>






