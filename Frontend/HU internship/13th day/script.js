let x = 3;
console.log(x);
console.log(typeof(x));

let y = 3.5;
console.log(y);
console.log(typeof(y));



// confision create
console.log('---- confision create----');
console.log(10+'ash');
console.log(10+'2');
console.log(typeof(10+'ash'));
console.log(typeof(10+'2'));
console.log(10/'ash');
console.log(10/'2');
console.log(typeof(10/'ash'));
console.log(typeof(10/'2'));
console.log(10/0);
console.log(-10/0);

console.log(0xff);



// methods to change number to string data type
console.log('----methods to change number to string data type ----');

let z=10;
console.log(typeof(z));
 var a = z.toString(); 
console.log(typeof(a));

let b = 9.56869;
console.log(b.valueOf());
console.log(b.toExponential(3));
console.log(b.toPrecision(3));
console.log(b.toFixed(3));


// Converting variables to Number
console.log('----Converting variables to Number----');

console.log(Number(true));
console.log(Number(false));
console.log(Number('true'));
console.log(Number('false'));
console.log(Number('10'));
console.log(Number('10.33'));
console.log(Number('10,33'));
console.log(Number('1033'));
console.log(Number('ash'));

// Converting variables to Whole Number
console.log('----Converting variables to Whole Number----');

console.log(parseInt('10'));
console.log(parseInt('10.34'));
// first Number incounter means first wala considser ho ga
console.log(parseInt('10 34'));
console.log(parseInt('10 asg'));
console.log(parseInt('asg 10'));

// Converting variables to float Number
console.log('----Converting variables to Float Number----');

console.log(parseFloat('10'));
console.log(parseFloat('10.34'));
// first Number incounter means first wala considser ho ga
console.log(parseFloat('10 34'));
console.log(parseFloat('10 asg'));
console.log(parseFloat('asg 10'));

console.log('----Check isInteger()----');

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.55));
// convert to number
console.log('----convert to number----');
console.log(Number.parseInt('10'));



// Number Properties
console.log('--------Number Properties------------------------');

console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);


console.log('-----isNaN---------------------------');
console.log(isNaN(6/'ash'));
console.log(isNaN(6/'3'));


// /BigInt
console.log('-----BigInt---------------------------');
let v= 5n;
console.log(v)
console.log(typeof(v));


let d = BigInt(6);
console.log(d);
console.log(typeof(d));



// Null and Undefine :-
// null ka data type object
console.log('------ Null and Undefine :- \nnull ka data type object--------------------------');
let e = null;
console.log(e);
console.log(typeof(e));


let f ;
console.log(f);
console.log(typeof(f));

console.log(e==f);
console.log((e===f));


// boolean
console.log('-------boolean-------------------------');
console.log(Boolean('true'));
console.log(Boolean('false'));
console.log(Boolean('ash'));
console.log(Boolean(''));
console.log(Boolean(false));
console.log(Boolean(true));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(NaN));
console.log(Boolean(Infinity));

console.log('--------------------------------');


