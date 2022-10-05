# Quick Start

Let's create a small example. Go ahead and create a new form called Compliance. We are going to use that form to demonstrate basic conditional logic by building it step by step. 

For a start, we will build three elements Form app called Conditional Logics. The elements from top to bottom are:
- Info element with text: "Wellcome to Conditional Logic gateway. Please answer the questions below."
- Numeric Input element with default value of 18.
- Info text element with text: "Sorry, only people older than 17 are allowed to enter."

![image1](../../../../images/tutorials/conditions/conditions-1.png)

Conditional Logics are designated as a separate tab inside the admin Builder. Click on tab Conditions to go there. 

![image2](../../../../images/tutorials/conditions/conditions-2.png)

The conditions tab screen offers on the left a phone screen emulator as default screen with conditions form template on the right that is by default empty. 

![image3](../../../../images/tutorials/conditions/conditions-3.png)

An additional button next to save and cancel button is provided called **Disable simulation**. The purpose of it is if for some reason the user may not want to see the conditions in action as it is too complicated to follow the build process at run time. 

Also, by default no conditions are applied to the app. 

Let's add our first conditional logic.

**Step 1** -  On the conditional template click on the field Please select a field and select from the dropdown *How old are you?...*

![image4](../../../../images/tutorials/conditions/conditions-4.png)

ACENji marks the filed with unique suffix so the actual field will differ from the selection based on the suffix. The user should ignore the presents of the suffix. 

**Step 2** - Under state  the following criteria are currently available for selection:
 - = (Equal Strict)
 - <> (Not Equal)
 - < (Less Than)
 - \> (Greater Than)
 - <= (Less Or Equal)
 - \>= (Greater or Equal)
 - Exists
 - Not Exists

 For now just select **< (Less Than)** 

**Step 3** - Then in the field below called *Value* add number *18*. 

![image5](../../../../images/tutorials/conditions/conditions-5.png)

At this point our conditional logic is like this:
if the entry value of the field text box How old are you is less than 17, Do...

Lets go ahead and finish the Do part now.

**Step 4** Select from the drop down *Do* the value *Show*. 
This is probably the most important part of the conditional logics, as we are telling the app to show the following field when selected in *Step 5*

**Step 5** Select from the *Field* dropdown *Sorry, only people older than...*

![image6](../../../../images/tutorials/conditions/conditions-8.png)

Steps 4 and 5 do two things: they define that when user adds value bigger than 18, the user should not see the text info element with label *Sorry, only people older than 17..*. The second, more interesting part is that by default, the system automatically hides that element. This is little contrary that human logic, but basically the ACENji language is telling the user that when you use *Show* a text, that text automatically becomes hidden in general. This saves ton of nested conditions in future. 

*Step 6* Add condition by clicking on the *Add Condition* button.

![image7](../../../../images/tutorials/conditions/conditions-9.png)


That immediately adds the first condition block on the screen. The block has a title that is usually made of the element value that is the base of the condition, an action and the target element.
The block also has four build buttons that are only visible when you position your mouse over to keep the view of the block clear. 
The buttons are: Delete, Edit, Clone, Disable. See the video below how the buttons are interacting with the user.

[filename](conditions-video-2.mp4 ':include :type=video')

**Step 7** Save.

Now that our app has a conditional logic embedded, lets go ahead and tested in the app store.

[filename](conditions-video-3.mp4 ':include :type=video')

As we can see from the video above, when user enters 5 for age, the system display the sorry message, but when the user enters 59, the message is gone. 

