// Create an array of nos and 
// print its elements using for,while and do -while loop.
console.log("-------------for loop---------");
const num = [2,3,4,5,6,7,8];
let result ="";
for(i=0;i<num.length;i++)
{
    if(i==3)
    {
        continue;
    }
    result+=num[i]+ " ";
}
console.log(result);


console.log("-----------While loop--------");
j=0;
while(j<num.length)
{
    console.log(num[j]);
    j++;
}

console.log("-----------do-while loop-------");
k=0;
do{
    console.log(num[k]);
    k++;
}while(k<num.length);

// for in loop
console.log("---------");
const person =
{
    name:'Rajesh',
    age:25,
    city:'Pune',
};

for(let keys in person)
{
    console.log(person[keys]);
}

//------- for-of ------
console.log("-------------");
const fruits =['Apple','Mango','Grapes','Litchi'];
for(let x of fruits)
{
    console.log(x);
}

let str = 'HelloWorld';
for(let x of str)
{
 console.log(x);
}

// ----forEach loop----

console.log("*******************");
const num1 = [2,3,4,5,6,7];
num1.forEach((numbers)=> console.log(numbers*2));