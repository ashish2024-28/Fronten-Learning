// const arr = [3,5,7,9,2];
// a =arr[3];
// b= arr[2];
// let [a,b,c,...rest]=arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);

// let [d,e,f=45,...rest]=arr;
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(rest);

// let l = document.getElementById("list");
// let p = document.getElementById("para");
// let h =document.getElementById("head");
// // console.log(l.lastChild);
// // console.log(document.body.childNodes[1]);
// p.innerHTML = h.firstChild.nodeValue;


// let d = document.getElementById("outer");
// let a = document.createElement("h1");
// let f = document.getElementById("para");
// a.innerHTML = "Web Designing";
// // d.appendChild(a);

// let fc = d.firstChild;
// d.insertBefore(a,fc);


// d.removeChild(d.firstElementChild);

// var a = 13;
// function abc()
// {
//     var a =10;
//     if(true)
//     {
//         var a = 3;
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);
// abc();

// callback and closures
function hello()
{
    console.log("Hello");
}

function add(a,b,s)
{
    console.log(a+b);
}

add(10,20,hello);
add(20,30,h);