
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**getElementById:
select one Element by id.

**getElementsByClassName:
select multiple elements by classname.

**querySelector:
select only first match by classname.

**querySelectorAll:
select multiple matches by classname.


2. How do you **create and insert a new element into the DOM**?

1.Create element.
2.Set inner text or inner html.
3.Append child that created element.

3. What is **Event Bubbling** and how does it work?

Event Bubbling work like when click event start than it work upward like button->div->body->document.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Event delegation works like this: if a parent has many similar children and we have to add an event listener to all children, then we add that event listener to the parent.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

**preventDefault():
When we click the button, the page will reload.

**stopPropagation():
Stop the event there don't go to the parent node.
