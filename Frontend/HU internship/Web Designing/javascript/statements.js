// let age = 19 ,voterId = "False"
// age = prompt("Enter your age:");
// voterId = confirm("Do you have voter id card?");

// //  console.log(age);
// //  console.log(voterId);
// if(age>=18 && voterId == true)
// {
//     alert("Person is eligibile to vote");
// }
// else if(age>=18 && voterId == false)
// {
//    alert("Go get your voter id card");
// }
// else{
//     alert("not eligible");
// }

// Take three nos as input from the user and 
// find out the greatest of three nos.

// Program to check whether the no is even or odd.
// let num1 = Number(prompt("Enter the num:"));
// let num2 = Number(prompt("Enter the num:"));
// let num3 = Number(prompt("Enter the num:"));
// if(num1>num2  && num1>num3) 
// {
//     alert("num1 is greater:"+num1);
// }
// else if(num2>num3)
// {
//     alert("num2 is greater:"+num2);
// }
// else if(num1 == num2 && num1 == num3)
// {
//     alert("All are equal");
// }
// else{
//     alert("num3 is greater");
// }


//Switch
let marks=Number(prompt("Enter the marks:")); 

switch(true)
{
    case(marks>=90):
    alert("Grade: A");
    break;

    case(marks>=80 && marks<90):
    alert("Grade: B1");
    break;
    
    case(marks>=70 && marks<80):
    alert("Grade: B2");
    break;

    case(marks>=60 && marks<70):
    alert("Grade: C");
    break;

    case(marks>=50 && marks<60):
    alert("Grade: D");
    break;

    case(marks<50):
    alert("Grade: fail");
    break;

    default:
    alert("Invalid input");
}