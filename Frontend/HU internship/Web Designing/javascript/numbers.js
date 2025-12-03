let x = 3;
console.log(x);
console.log(typeof(x));

let y = 4.56;
console.log(y);
console.log(typeof(y));

console.log(typeof(10/'john'));
console.log(-10/0);
console.log(0xff);


//Methods:->
let z = 10;
console.log(typeof(z));
a=z.toString();
console.log(typeof(a));

let b = 9.656;
console.log(b.toExponential(2));
console.log(b.toPrecision(3));
console.log(b.toFixed(3));
console.log(b.valueOf());
 
//Converting variables to numbers
console.log(Number('john'));
console.log(parseInt('10 john'));
console.log(parseFloat('10 john'));

console.log(Number.isInteger(10.768));
console.log(Number.parseInt('10.67'));
console.log(Number.parseFloat('10.78'));

// Number Properties:->
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

console.log(isNaN(6/'3'));

// BigInt:->
console.log("_________________________");
let v = 5n;
console.log(v);
console.log(typeof(v));

let d = BigInt(6);
console.log(d);
console.log(typeof(d));

// Null and Undefined:->
console.log("-------------------------");
let e = null;
console.log(e);
console.log(typeof(e));

let f;
console.log(f);
console.log(typeof(f));

console.log(e==f);
console.log(e===f);

//Boolean:-->
console.log("----------------------");
console.log(Boolean(Infinity));
 


