var s = 'Ramesh'
console.log(s);
console.log(typeof(s));
console.log(s.length);

// Methods
console.log(s.charAt(2));
console.log(s.charCodeAt(3));
console.log(s.at(4));
console.log(s[2]);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
var b = "     hello world     "
console.log(b.slice(3,9));
console.log(b.substring(4,8));
console.log(b.substr(4,6)); 

var c = 10;
var d = '10';
console.log(c+d); // string concatenation.
var firstName = 'Ram'
var lastName = 'Sharma'
var degree = 'Btech'
var a =""
console.log(a.length);
console.log(firstName.concat(lastName,' ',degree));

console.log(b.trim());
console.log(b.trimStart());
console.log(b.trimEnd());
console.log()

var e = '5';
console.log(e.padStart(4,'0'));
console.log(e.padEnd(5,'0'));

console.log(e.repeat(4));

var n = "Please visit microsoft and microsoft";
console.log(n.indexOf('microsoft'));
console.log(n.lastIndexOf("microsoft"));

console.log(n.includes("visit"));
console.log(n.search('visit'));
console.log(n.startsWith('Please'));
console.log(n.endsWith('visit'));

// replace and replace all
console.log(n.replace(/Microsoft/ig,'w3schools'));
console.log(n.replaceAll(/Microsoft/ig,"w3schools"));

// Match and match all
var h = "The rain in SPAIN mostly occurs in the plain";
console.log(h.match(/ain/gi).length);
i = h.matchAll(/ain/gi);
console.log(Array.from(i));

// Escape Sequence
var str = `he\"s  my friend.`;  
console.log(str);

// String interpolation
console.log(`Hello ${firstName} ${lastName}`);