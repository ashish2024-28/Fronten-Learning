const fruits = ['Apple','Banana','Grapes','Litchi'];
console.log(fruits);
console.log(fruits.length);
// Methods;-->
console.log(fruits[2]);
console.log(fruits.at(3));
fruits[1] = 'Watermelon';
console.log(fruits);

console.log(fruits.toString());
console.log(fruits.join('*'));

console.log(fruits.push('Orange'));

console.log(fruits.pop());
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift('kiwi'));
console.log(fruits);

const colors=['red','blue','green','yellow'];
console.log(colors);
console.log(fruits.concat(colors));

console.log(colors.copyWithin(2,0));
console.log(colors.splice(2,1,'green','brown'));
console.log(colors);
z=colors.toSpliced(2,1,'white','black');
console.log(z);
console.log(colors);

y=colors.slice(1,3);
console.log(y);

z = ['true',10,5.98,'john',5n,false];
console.log(z);

y = ['true',[10,5.98],'john',[5n,false,'hello']];
console.log(y);
console.log(y.flat());

// map,reduce,filter:-->

//Map--> used to create a new array.
// ForEach--> used to perform the same 
// operation each element of array in a loop.

const num2 = [23,45,12,3,6,4];
const num1 = num2.map((value)=>{
    // console.log(value,index,array);
    return value+1;
});
console.log(num1);
console.log(num2);

// Filter --->filters out the elements of
//  an array that passes the test.

const num3 = num2.filter((value)=>{return value%2 == 0});
console.log(num3);

// Reduce --> reduces the array to a single value.
const num4 = num2.reduce((h1,h2)=>{return h1+h2});
console.log(num4);