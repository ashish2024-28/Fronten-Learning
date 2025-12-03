// part 2

// current time
const d = new Date();
console.log(d);
console.log(typeof(d));
// year date month time hr min sec minisec
const d1 = new Date(2022,2,3,4,15,55,6)
console.log(d1);
// incase remove or not enter time so by default 0
// and year not enter by default 1jan 1967

console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log(d.toLocaleString());
console.log(d.toDateString());

// get methods
console.log("-----get method------")
console.log(d.getDate());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getTime());
console.log(d.getTimezoneOffset());
console.log(d.getUTCDate());
console.log(d.getUTCDay());
console.log(d.getUTCFullYear());

// set
console.log("-------set date-------");

console.log(d.setFullYear(2023));
console.log(d);
// feature date
console.log(d.setDate(d.getDate()+5));
console.log(d);
console.log(d.setDate(d.getDate()+35));
console.log(d);

// Properties
console.log("-------Propeerties-------");

console.log(Math.E); //Enter's no
console.log(Math.LN10); //natural log base 10
console.log(Math.LN2);  //natural log base 2
console.log(Math.LOG10E ); //natural loge base 10
console.log(Math.LOG2E); //natural loge base 10
console.log(Math.PI);  //value of pi
console.log(Math.SQRT1_2); //sq root 1/2
console.log(Math.SQRT2); //sq root 2
// console.log(Math.);

// methods
console.log("-------methods-------");
console.log(Math.round(4.56))
console.log(Math.ceil(4.56))
console.log(Math.floor(4.56))
console.log(Math.trunc(4.56))

console.log(Math.pow(2,3))
console.log(Math.abs(-2.6)) // +ve value return

console.log(Math.sign(2.6)) // +ve (1) -ve (-1) 0(0)
console.log(Math.sign(-2.6)) // +ve (1) -ve (-1) 0(0)   
console.log(Math.sign(0)) // +ve (1) -ve (-1) 0(0)

console.log(Math.sqrt(64))

console.log(Math.sin(0))
console.log(Math.cos(0))

console.log(Math.max(2,3,4,11)) // find max
console.log(Math.min(2,3,4,11)) //find min

console.log(Math.log(1))
console.log(Math.log2(8))
console.log(Math.log10(10))

//random generate value [0 to 1) but 1 not 
console.log("-------random value print [0 1) for OTP using array-------");
console.log(Math.random())

// symbol
console.log("-------symbol-------");
let sym = Symbol();
let sym1 = Symbol();
console.log(typeof(sym))
console.log(sym)
console.log(sym1)
// false because unique symbol
console.log(sym == sym1)
console.log(sym === sym1)



