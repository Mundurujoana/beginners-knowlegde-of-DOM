//DOM METHODS

const p = document.getElementById("p-1");
p.innerHTML = "Hello, world!";
p.style.fontStyle = "italic";

const p2 = document.getElementById("p-2");
p2.innerText = '<em>Hello, joana!</em>'

//DOM ELEMENT
// document.querySelector

// document.getElementById
const p1 = document.getElementById("p-1");
p1.innerHTML = "Hello, my first p!";
p1.style.fontStyle = "italic";

// document.getElementByClassName
const myClass = document.getElementsByClassName("div-1");
console.log(myClass);
// html collection
myClass[0].style.color = 'black';
myClass[1].innerHTML = "this is my first div child element!";

// document.getElementByTagName
const myTag = document.getElementsByTagName("div");
myTag[0].style.backgroundColor = 'green';

