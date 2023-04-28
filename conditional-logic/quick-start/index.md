# Quick Start Conditional Logic

Let's create a small example. First, create a new form called Compliance. We will use this form to demonstrate basic conditional logic by building it step by step.

To start, we will add three elements to the form app called **Conditional Logics**.   

The elements from top to bottom are:
- **An info element with the text:** "Welcome to the Conditional Logic Gateway. Please answer the questions below."  

- **A numeric input element** with a default value of 18.  

- **An info text element** with the text: "Sorry, only people older than 17 are allowed to enter." 
<p style="margin-top:30px;"></p>

![image1](../../../../images/tutorials/conditions/conditions-1.png)
<p style="margin-top:70px;"></p>

Conditional logics have their own designated tab inside the Admin Builder. Click on the Conditions tab to access it.
<p style="margin-top:30px;"></p>

![image2](../../../../images/tutorials/conditions/conditions-2.png)
<p style="margin-top:70px;"></p>

The Conditions tab screen displays a phone screen emulator on the left as the default screen, and an empty Conditions form template on the right.
<p style="margin-top:30px;"></p>

![image3](../../../../images/tutorials/conditions/conditions-3.png)
<p style="margin-top:70px;"></p>

There is an additional button next to the **Save** and **Cancel** buttons called **Disable simulation**. This button can be used if the user does not want to see the conditions in action, as the build process may be too complicated to follow at run time. 

By default, no conditions are applied to the app.   

## Let's add our first conditional logic.

**Step 1** - On the Conditional template, click on the "Please select a field" field and select "How old are you?" from the dropdown...
<p style="margin-top:50px;"></p>

![image4](../../../../images/tutorials/conditions/conditions-4.png)
<p style="margin-top:70px;"></p>

ACENji marks the field with a unique suffix, so the actual field will differ from the selection based on the suffix. The user should ignore the presence of the suffix.

**Step 2** - Under the 'State' section, the following criteria are currently available for selection:  

- = (Equal Strict)
 - <> (Not Equal)
 - < (Less Than)
 - \> (Greater Than)
 - <= (Less Or Equal)
 - \>= (Greater or Equal)
 - Exists
 - Not Exists

For now, just select **< (Less Than)**. 

**Step 3** - Then, in the field below called **'Value'**, add the number **18**.
<p style="margin-top:30px;"></p>

![image5](../../../../images/tutorials/conditions/conditions-5.png)
<p style="margin-top:70px;"></p>

At this point, our conditional logic is like this: if the entry value of the field text box 'How old are you' is less than 17, then do the following:

## Let's go ahead and finish the 'Do' part now.

**Step 4:** Select from the drop-down menu for *'Do'*, the value *'Show'*. This is probably the most important part of the conditional logic, as we are telling the app to show the following field when selected in *Step 5*.

**Step 5:** Select from the *Field* dropdown *'Sorry, only people older than...'*
<p style="margin-top:30px;"></p>


![image6](../../../../images/tutorials/conditions/conditions-8.png)
<p style="margin-top:70px;"></p>

Steps 4 and 5 accomplish two things: they define that when a user adds a value bigger than 18, the user should not see the info element with the label *"Sorry, only people older than 17..."*. The second, more interesting part is that by default, the system automatically hides that element. This is a little contrary to human logic, but basically the ACENji language is telling the user that when you use *"Show"* for a text, that text automatically becomes hidden in general. This saves a ton of nested conditions in the future.

**Step 6:** Add a condition by clicking on the *"Add Condition"* button.
<p style="margin-top:30px;"></p>


![image7](../../../../images/tutorials/conditions/conditions-9.png)
<p style="margin-top:70px;"></p>


That immediately adds the first condition block on the screen. The block has a title that is usually made up of the element value that is the basis of the condition, an action, and the target element. The block also has four build buttons that are only visible when you hover over it to keep the view of the block clear.  
The buttons are: Delete, Edit, Clone, and Disable. See the video below to learn how the buttons interact with the user.
<p style="margin-top:30px;"></p>

<video src="./conditional-logic/quick-start/conditions-video-2.mp4" type="video/mp4" controls width="860" style="max-width:100%;">
</video>
<p style="margin-top:30px;"></p>
<p style="margin-top:70px;"></p>

**Step 7:** Save.

Now that our app has conditional logic embedded, let's go ahead and test it in the app store.
<p style="margin-top:30px;"></p>

<video src="./conditional-logic/quick-start/conditions-video-3.mp4" type="video/mp4" controls width="860" style="max-width:100%;">
</video>
<p style="margin-top:30px;"></p>
<p style="margin-top:70px;"></p>

As we can see from the video above, when the user enters 5 for age, the system displays the sorry message, but when the user enters 59, the message disappears.
<p style="margin-top:30px;"></p>

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

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScMb0ZQLIep3NFhaoS2NkBcOJjPL8Q8BLjVUxQumLwjLGeJ1g/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Wird geladen…</iframe>


