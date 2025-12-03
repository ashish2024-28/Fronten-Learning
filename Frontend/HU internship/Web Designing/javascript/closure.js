
// function outer()
// {
//     const name = "Anubha";
//      function inner()
//     {
    
//     console.log(name);
//      }
//     return inner();
// }
// outer()

function init(pi)
{
    return function areaCircle(r)
     {
        console.log(pi*r*r);
    }
}
let result = init(3.1416);
result(2);

function setCounter()
{
    let count = 1;
    return function()
    {
        console.log(++count);
    }
}

// setCounter()();
let counter = setCounter();
counter();
counter();
counter();
counter();
