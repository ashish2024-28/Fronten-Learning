const car ={
    brand:'Audi',
    model:'2020',
    color:'white'
}

console.log(car);
console.log(car["color"]);
console.log(car.model);

car['speed']=80
console.log(car);
console.log(typeof(car));

const student ={
    firstName:'Ram',
    lastName :'Sharma',
    class:'BBA'
}

// const student1 ={
//     firstName:'Shyam',
//     lastName :'Verma',
//     class:'BCA'
// }

// const student2 ={
//     firstName:'Rahul',
//     lastName :'Sharma',
//     class:'MBA'
// }

console.log(student);
console.log(student['class']);

student['city'] = 'Pune'
console.log(student);

function details()
{
    console.log(`Hello ${this.firstName} ${this.lastName}`);
}

student['greet'] = details;
console.log(student);
console.log(student.greet());

//object constructor function
function Person(first,last,age,city)
{
    this.FirstName = first;
    this.lastName =last;
    this.age = age;
    this.city = city;
    // this.nationality = 'Indian';
}

const stu1 = new Person('Ram','Sharma',23,'Pune');
const stu2 = new Person('Rahul','Verma',22,'Delhi');
const stu3 = new Person('Aman','Verma',22,'Dehradun');

console.log(stu1);
console.log(stu2);
console.log(stu3);




