/* Enter the code to remove the main node element under this comment */

<<<<<<< HEAD
var main = document.getElementById('main')
main.remove();
=======

>>>>>>> a11fbc62d02d92b105b12fe0be2eabc7ac8c8a9d

/* Create your new element here and assign it to newHeader */

const newHeader = document.createElement('h1');
<<<<<<< HEAD
newHeader.innerText = "Fiola is the champion!";
=======
// next: set some text on newHeader
 newHeader.innerHTML = "Fiola is the champion!"
>>>>>>> a11fbc62d02d92b105b12fe0be2eabc7ac8c8a9d
newHeader.setAttribute("id", "victory")
// next: find the body element
var body = document.querySelector('body')
// next: append the newHeader to the body
body.appendChild(newHeader)