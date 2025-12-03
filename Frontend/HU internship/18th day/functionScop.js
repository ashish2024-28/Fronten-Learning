
//var follow function scope
//let and const follow box(block) scope

var a=20;
function abc () {
    var a = 10;
    if(true){
        let a =3;
        console.log(a);
    }
        console.log(a);
}

abc();
 console.log(a);

 // call back and closour

 function add(a,b){
    // console.log( "sum of"+a+ "and"+b+" is : "+a+b);
    alert( "sum of "+a+ " and "+b+" is : "+(a+b));
    hello();
 }
add(10,20);


function hello(){
    // console.log("hello")
    alert.log("hello");
}

