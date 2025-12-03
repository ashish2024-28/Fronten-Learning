// data type ( N N B B S S U )
// 1. string
var s = "Jay Sri Ram";
console.log(s);
// print data type
console.log("string property")
console.log(typeof(s));
// print string's length
console.log(s.length);
console.log(s.toUpperCase);
console.log(s.toLowerCase);

console.log("string methods")
console.log(s.charAt(1));
console.log(s.charCodeAt(1));
console.log(s.at(8));
console.log(s[9]);
console.log(s.toUpperCase(s));
console.log(s.toLowerCase(s));

// slice and substring are similar
// but slice work on both (-ve or +ve)

console.log("slice and substring are similar")
console.log(s.slice(3,11))
console.log(s.slice(-9,-1))
console.log(s.substring(3,11))

console.log(s.substr(3,11));

var n1 = 10;
var n2 = '10';
// only for addition string concatination
// because number change to sting
// and another operator then string change to number
console.log(n1+n2);
console.log(n1-n2);

var name='Ram'
var deg='B.tech'
var branch='Cse'

console.log(name.concat(deg,branch));

// trim for Removes the trailing white space
// and line terminator characters from a string.
console.log(s.trim())
console.log(s.trimStart())
console.log(s.trimEnd())

// 
var e ='5'
console.log(e.padStart(4,0))
console.log(e.padEnd(5,0))
console.log(e.repeat(4))

//
var n = 'Please visit microsoft and microsoft'
console.log(n.indexOf('microsoft'));
console.log(n.lastIndexOf("microsoft"));

// include means hai ya nahi true and false
console.log(n.includes("visit"));
// ssearcha and return index of first wala
console.log(n.search('visit'));
console.log(n.startsWith("Please"));
console.log(n.endsWith("microsoft"));

// replace and repalce all
console.log(n.replace('microsoft','google'))
// for casesensitive
console.log(n.replace(/Microsoft/i,'google'))
// global means all replace
console.log(n.replace(/Microsoft/ig,'google'))
console.log(n.replaceAll('microsoft','google'))

// match and match all
var h = "The rain is SPAIN mostly occures in the plain";
console.log(h.match('ain'));
console.log(h.match('ain').length);

console.log(h.match(/ain/i));
console.log(h.match(/ain/ig));
console.log(h.match(/ain/i).length);
console.log(h.match(/ain/ig).length);

i=h.matchAll(/ain/gi).length
// console.log(Array.from(i));

// fro string note :- use start and end same (' ') or (" ")
// and not use b/t the line  use ( " /") 

var str = 'he\'s my friend'
console.log(str)

str = "\"he\'s my friend\""
console.log(str)

var firstName = "Modi"
var lastName="ji"
// string interpolation
console.log(`Jai ho ${firstName} ${lastName}`);
console.log("Jai ho "+ firstName.concat(lastName) );



