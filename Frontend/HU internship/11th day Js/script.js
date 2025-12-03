console.log("javaScript");
// alert("alert from JavaScript");
    //  Variabeles => var , let , const  

    // Operators 
    // 1.Arithematic 
    console.log("Arithematic Operators\n")
    console.log(5+8);
    console.log(5-8);
    console.log(5*8);
    console.log(5/8);
    console.log(5%8);
    console.log(5**2);
    // 2.Assignment 
    console.log("Assignment Operators\n")
    var num1 =10; var num2 =2;
    console.log(num1 = num2);
    console.log(num1 += num2);
    console.log(num1 -= num2);
    console.log(num1 *= num2);
    console.log(num1 /= num2);
    
    // 3.Logical 
    var num1 =10; var num2 =5;
    console.log("Logical Operators\n");
    console.log(num1 == 10 && num2 != 5);
    console.log(num1 == 10 || num2 != 5);
    console.log(!(num1==num2));

    // 4.Relational 
    console.log("Relational Operators\n")
    var num1 =10; var num2 =10;
    console.log(num1 > num2);
    console.log(num1 < num2);
    console.log(num1 >= num2);
    console.log(num1 <= num2);
    var num1 =10; var num2 ='10';
    // compare only value
    console.log(num1 == num2);
    // === for strick compare (vale and data type)
    // int === string
    console.log(num1 === num2);

    // 5.Boolean 

    // 6.Bitwise
    console.log("Bitwise Operators\n");
    var num1 =10; var num2 =10;
    console.log(num1 & num2);
    console.log(num1 | num2);
    // ^ XOR (0,1 = 1) (1,1 0r 0,0 = 0)
    console.log(num1 ^ num2);
    // NOR => ~(5) = -(5 +1)
    console.log(~(num1+num2));
    console.log(5 << 3);
    console.log(5 >> 3);
    
    // let a;
    // a=10;
    // console.log(a)
    // a=5;
    // console.log(a)
    // // let a=10 error

const a =10
let b=11
{   let b=1
    const a=5
    console.log("a ="+a +" \t b ="+b)
}
    console.log("a ="+a +"\tb ="+b)





