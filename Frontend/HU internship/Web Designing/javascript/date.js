const d = new Date();
console.log(d);
console.log(typeof(d));

const d1 = new Date(2022,2);
console.log(d1);

console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log(d.toLocaleString());
console.log(d.toDateString());
console.log(d.toTimeString());

//get Methods:->
// console.log(d.getTime());

// ms = d.getTime()
// console.log(new Date(ms).toLocaleTimeString());


//Set Methods:->
console.log(d.setFullYear(2023));
console.log(d);

console.log(d.setDate(d.getDate()+15));
console.log(d);
