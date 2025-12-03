// map , filters , reduce to creat and store in a new arary
// for each loop use to perform the same operation in each element of array in loop 


const num2 =[1,3,5,6,7,8,9,10];
// num2.map((value,index) => 
//     (console.log(value,index))

// (return value+index)
// )


// const num3= num2.map((value,index,num2) => 
//     // (console.log(value,index))
// (console.log(value,index,num2)
//     // (return value%2==0)


// )



// // filter => filter out the array that passes the test

const num4 = num2.filter((value) => 
    console.log(num2)
    // (return value%2==0)
)

// reduce => reduce the array in a single value 

// const num5 = num2.reduce((x1,x2) => 
    // (return x1+x2));
// console.log(num5)

// )



// Method to Accessing on elements 1.ById 2.clssName 3.ByTagsName 
// 4.quarySelector =>  any selector ( id class ....) access only first 
// htmldocument getElementId("");
// 5.querySelectorAll => 
// 

let a = document.getElementById("head");
console.log(a);

let b = document.getElementById("para1");
console.log(b);

let c = document.getElementsByClassName("para");
console.log(c);

// let d = document.getElementsByTagName("h1,p,h3");
let d = document.getElementsByTagName("h1");
console.log(d);

let e = document.querySelector(".para");
console.log(e);

let f = document.querySelectorAll(".para");
console.log(f);


// change the content ya text of html
// 1. innerText 2.textContent 3.
// only id 
// innerHtml me tag consider ho ga but not in both (innerText ya innerContent similar hai but not all time)
document.getElementById("head").innerHTML = "<h1> Hello world chage From js </h1>"
document.getElementById("para").innerText = "<h1> Hello world chage From js </h1>"
document.getElementById("para1").textContent = "<h1> CSS ( chage From js ) </h1>"
document.getElementById("para2").innerHTML = "<H1> HTML ( chage From js )</H1>"

document.getElementById("img").src = "81k974mPmwL.jpg",width = "400px"

b ={
a:10,b:20
}
a = 'ashishv radha radha'
// document.getElementById("head").innerHTML = `${a}`
document.getElementById("head").innerHTML = a
document.getElementById("tt").innerHTML = b.a

