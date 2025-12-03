// // part 3

// Conditional Statement (if , if-else , if-elseif, switchCase)

// wap to check is eligible 

// var a = 18;
// var VoterID = true;
// var VoterID = false;

// -----------------method 1--------------------------------

age = prompt("Enter Your Age");
VoterID = confirm('Your Have VoterId Card !..');

if (age >= 18 && VoterID == true) {
    alert("yes, you are eligible")
    console.log("yes. you are eligible");
}
else if (age >= 18 && VoterID == false) {
    console.log("yor are not eligible because of you have not VoteId card ");
    alert("yor are not eligible because of you have not VoteId card ")

}
else {
    alert(" Not eligible")
    console.log(" Not eligible");
}

// -----------method 2--------------
age = prompt("Enter Your Age For Vote");

if(age>120){
    alert("May be You enter Rong age");
}
else if (age >= 18) {
    VoterID = confirm('Your Have VoterId Card !..');
    if (VoterID == true){
        alert("yes, you are eligible")
    console.log("yes. you are eligible");
    }
    else {
        console.log("yor are not eligible because of you have not VoteId card ");
        alert("yor are not eligible because of you have not VoteId card ");
    }
}
else {
    alert(" Not eligible")
    console.log(" Not eligible");
}




// Q2 wap to check grater number

// by default user input is string

a = Number(prompt("Enter first number , To check Grater Number"));
b = Number(prompt("Enter second number , To check Grater Number"));
c = Number(prompt("Enter third number , To check Grater Number"));

// let a,b,c = Number.prompt("Enter third number");

if (a == b && b== c) {
    alert(a + " All are Equal");
}
else if (a == b) {
    if (b > c) {
        alert(a + " First and Second Number is Grater");
    }
    else {
        alert(c + " Third Number is Grater");
    }
}
else if (a == c) {
    if (b < c) {
        alert(c + " First and Third Number is Grater");
    }
    else {
        alert(b + " Second Number is Grater");
    }
}
else if (a > b) {
    if (a > c) {
        alert(a + " First Number is Grater");
    }
    else {
        alert(c + " Third Number is Grater");

    }
}
else {
    if (b > c) {
        alert(b + " Second Number is Grater");
    }
    else {
        alert(c + " Third Number is Grater");

    }

}


// Q3 wap to check even or oddd

// d = prompt("Enter any number");

// if(d == 0 ){
//         alert("Enter Number is "+d);
//     console.log(" Enter Number is 0 ");
// }
// else if(d % 2 == 0){
//     alert("Enter Number is Even");
//     console.log(" Enter Number is Even ");
// }
// else{
//     alert("Enter Number is Odd");
//     console.log(" Enter Number is  odd");

// }



a = prompt("Enter any number To check Even and Odd.")
if (a == 0) {
    alert("Enter Number is 0");
}
else if (a % 2 == 0) {
    alert(a + " is Even Number ");
}
else if (a % 2) {
    alert(a + "  is Odd Number");
}
else {
    alert(a + " is invalid  Entered ");
}
