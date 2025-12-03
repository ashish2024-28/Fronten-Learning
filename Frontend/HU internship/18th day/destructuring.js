const arr = [2,5,9,11,12];
// const arr = [2,5,];
// Destructuring
// a = arr[1]
// b = arr[2]

// let [a,b,c] = arr;

// let [a,b,c,...rest] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);

let [d,e,f=45,...rest] =arr;
console.log(d);
console.log(e);
console.log(f);
console.log(rest);


// 
let i = document.getElementById("ul");
// note :- not space between them other wise text count(space)
console.log(i.firstChild);
// console.log(i.firstChild.nodeValue);

console.log(i.nextSibling);
console.log(i.lastChild);

console.log(i.childNodes);
console.log(i.childNodes[0]);


let p = document.getElementById("para");
let h = document.getElementById("header");
// p.innerHTML= h.childNodes[0].nodeValue;
p.innerHTML= h.firstChild.nodeValue;

// creat new element from js and insert in div(outer ka child)
 // create a new h1 element

const h1 = document.createElement("h2");

// and give it some content

const newContent = document.createTextNode("hi i am creat from js ")

// add the text node to the newly created div

h1.appendChild(newContent);

// add the newly created element and its content into the DOM

// let div = document.getElementById("outer");
let div = document.getElementById("outer");
// let dFC = document.getElementById("dFC");
// let dFC = div.firstChild;

// document.body.append(h1);
document.body.insertBefore(h1,div);
// document.body.insertBefore(h1,dFC);

// remove
let p1 = document.getElementById("p1");
// p1.remove();

let df= document.querySelector("h2") ;
console.log(df)
// df.remove();


