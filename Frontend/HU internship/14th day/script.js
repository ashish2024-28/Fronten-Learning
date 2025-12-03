// // Object

const car = {
    // key : value;
    brand : "Audi",
    model : "2020",
    color : "red"
}
console.log(car);
console.log(car.brand);
console.log(car['brand']);

car.color = 'black';
car['speed'] = 80;
// car.speed = 80;
console.log(car);
console.log(typeof(car));

const studentInfo = {
    studentName : "Ashish Kumar",
    Branch : "B.tech",
    Course : "Cse"

}
studentInfo.RollNo = 45;
console.log(studentInfo);
studentInfo.From = "Bihar";
console.log(studentInfo);

// Function
console.log("-------function----");

function Print(){
    // string tamplet
    console.log(`${this.studentName}`)
}
// studentInfo['great'] = Print;
studentInfo.great = Print;
// console.log(studentInfo['great']);
console.log(studentInfo.great());
console.log(Print);

console.log(studentInfo);



// object constructure function
console.log("-------object constructure function-------");

function Person ( name,age,city){
    this.Name =  name,
    this.age  = age,
    this.city =  city,
    // console.log("-------Add New value in Function For Any or all -------");
    this.state = "Bihar";

}

const P1 = new Person('Ram',18,'patna');
const P2 = new Person('shyam',45,'patna');
const P3 = new Person('mohan',55,'patna');

console.log(P1);
console.log(P2);
console.log(P3);

// Add New value for single variable (person)
P1.NewAdd = "Bihar";
console.log(P1);
// P2.NewAdd = "Bihar";
// P3.NewAdd = "Bihar";
// 

