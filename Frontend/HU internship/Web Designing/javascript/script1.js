// Methods of accessing an element:-
// let a = document.getElementById("head");
// console.log(a);

// let b = document.getElementsByClassName("para");
// console.log(b);

// let c = document.getElementsByTagName("p");
// console.log(c);

// let d = document.querySelector(".para");
// console.log(d);

// let e = document.querySelectorAll(".para");
// console.log(e);

// Changing the text of an element.
document.getElementById("head").innerText = 
"<p>Hello World!</p>";
document.getElementById("para1").textContent = 
"<p>CSS</p>";

document.getElementById("para2").innerHTML = 
"<h1>Web Designing</h1>";

document.getElementById("img").src = "../images/tiger.png";