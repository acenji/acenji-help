# Selection Statements

What are selection statements? 
Selection statements are simply one or more possible statements that will execute based on the value of an expression. Still sounds confusing. Lets try with a real example:

If the sky is blue then we can fly today.

In the above statement, the selection statement is :
"if the sky is blue".

"the sky is blue" can be either true or false but in between. This is known as boolean expression.

the execution part is "fly today" 

The selection statements in ACEnji always start with which element is part of the "IF". We have tried to give users best available option for a boolean expression by comuflaging the logic and make it as simple as possible. That is why the second selection a user has to do as part of the selection statement is to select a state.

The state represent that Boolean expression. In the blue sky example that would be the verb "is". 
The following are state booeal expressions supported by ACENji:

- = (Equal Strict) - This is simple comparason expression where two 
    items are compared if they are equal of value. The items do not have to be numbers. They could be two words for example, or two drop down selections. Example: if user check if the value of a text box 18 is equal to 18.
 - <> (Not Equal) - This will be an opposite to the above comparison,
      and it is checking if two items are not equal to each other. For example the two words "Computer" and "computer" ar enot equal. Example: if user check if the value of a text box 19 is not 18.
 - < (Less Than) - This will be comparing when two sides are not just
     not equal  as the abive statement points, but shows which side is smaller. Example: if user check if the value of a text box is smaller than 18.
 - \> (Greater Than) - This will be comparing which side of the
      statement is bigger than the other. Example: if user check if the value of a text box is greater than 18.
 - <= (Less Or Equal) - This is a variation of less than comparison,
      but this time will include a clause if both sides are equal. Example: if user check if the value of a text box is lesser or equal to 18.
 - \>= (Greater or Equal) - This is a variation of greater than       comparison, but this time will include a clause if both sides are equal. Example: if user check if the value of a text box is greater than or equal to 18. 
 - Exists - This checks if an expression simply exist. Example will be  if user had populated a value in a text box
 - Not Exists - This is opposite to the above statement, where a check  is perform if selection dooes not exists. Example: if user had not populated a value in a text box. 

 In ACENji every conditional statement belongs to a block. A block is basically a logical group where one or more statements are group together as they are related to one particular field.
 Examples are showing below, where a single statement is forming one block, and four statements are forming another block.

The execution of the statements inside the block is top to botom, and the execution of blocks is also top to botttom. 

Users can design very comlex workflows using the above strategies. We advise if nested logic is involved, no more than 9 levels if nested conditions to be used against single field to prevent human error. 



![image1](../../../../images/tutorials/conditions/conditions-10.png)

