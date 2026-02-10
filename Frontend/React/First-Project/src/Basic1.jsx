
function Basic1 (){
  const name = {
    name:"Ashish "
  };
  const a = 10;
  const b = 20;
  return <>
  <h1>I am <b>{name? name.name : " i will die "} and i started react journy</b></h1>
  <h2>sum of 10 + 20 = {sum(a,b)}</h2>
  </>
}

function sum(a,b){return a+b;}
export default Basic1;