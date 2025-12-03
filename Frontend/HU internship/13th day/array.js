// 2nd part
// Non Primitive data type
// Array
console.log('------Array--------------------------');

const fruits = ['Apple','Banana','Litchi','Mango'];
console.log(fruits);
console.log(fruits[2]);
console.log(fruits.at(3));
console.log(fruits.length);
fruits[5] = 'Watermelon';
console.log(fruits);
fruits[4] = '.......';
console.log(fruits);
fruits[4] = 'Null';
console.log(fruits);

console.log('-----conver to String---------------------------');

console.log(fruits.toString());
console.log(fruits.join("-->"));

// array operation
console.log("........array operation.........")

console.log(fruits);
// work on start shift(add) & unshift(delete)
console.log(fruits.shift());
console.log(fruits);

console.log(fruits.unshift('kiwi','ummm'));
console.log(fruits);

// work on end push(add) & pop(delete)
console.log(fruits.push('hmmm','orange'));
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

// concat two array ( add two array )
console.log("........concat two array ( add two array ).........")

const color = ['red' , 'yellow' , 'Green' , 'Blue' ] ;
console.log(color);
console.log(color.concat(fruits));
console.log(fruits.concat(color));

// .copyWithin(taraget possition,starting,end-1) 
// note:- length not increase
console.log(color.copyWithin(2,0));
console.log(color.copyWithin(2,0,2));

console.log("--------splice---------");
var colors = ['red' , 'yellow' , 'Green' , 'Blue' ] ;

// splice(target , no.of element remove , element add name);
// tosplice creat new array
// tosplice(target , no.of element remove , element add name);
console.log(colors)
console.log(colors.splice(0,1,'black' , 'browm'));
console.log(colors)
console.log(colors.splice(2,2,'voilate' , 'pink'));
console.log(colors)

console.log("--------toSpliced---------");
var colors = ['red' , 'yellow' , 'Green' , 'Blue' ] ;
console.log(colors)
z=colors.toSpliced(1,2,'black' , 'browm');
console.log("toSpliced \n " + z);
console.log(colors);

var colors = ['red' , 'yellow' , 'Green' , 'Blue' ] ;
y = colors.splice(1,2,'pink');
console.log("splice \n" + y );
console.log(colors);
console.log(colors.splice(2,2,'voilate' , 'pink'));
console.log(colors);

// multiple data type in array
console.log("multiple data type in array");
z = ['true',10, 5.9, 'ash' ,5n ,false];
console.log(z);
console.log(typeof(z));


const arr =['true',[10,5.9],'ash',[5n,false,"hello"]];
console.log(arr);
console.log('\n');
console.log(arr.flat());