1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

getElementById selects only one element using its id.

getElementsByClassName selects multiple elements using class name.

querySelector selects the first matching element.

querySelectorAll selects all matching elements.




2. How do you create and insert a new element into the DOM?

Answer:
We use createElement() to create a new element.
Then we use appendChild() to insert it into the DOM.




3. What is Event Bubbling? And how does it work?

Answer:
Event bubbling means the event goes from child element to parent element.




4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event delegation means adding event listener to parent instead of child.
It is useful because it works for many elements and saves memory.



5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:
preventDefault() stops the default behavior.

stopPropagation() stops the event from moving to parent.