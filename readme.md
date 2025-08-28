
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**getElementById:
1.It has an ID for returning one element.

**getElementsByClassName:
1.It has a classname for returning multiple elements.

**querySelector:
1.It has a classname, it works like a CSS selector for returning one element.it select first classname only.

**querySelectorAll:
1.It has a classname, it works like a CSS selector for returning multiple elements.it select all classname and apply function.


2. How do you **create and insert a new element into the DOM**?

1.Create element.
2.Inner text or inner html set.
3.Append child that created element.

3. What is **Event Bubbling** and how does it work?

Event Bubbling work like when click event start than it work upward like button->div->body->document.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Event delegation works like this: if a parent has many similar children and we have to add an event listener to all children, then we add that event listener to the parent.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

**preventDefault():
1.When we click the button, the page will reload.

**stopPropagation():
1.Stop the event there don't go to the parent node.
