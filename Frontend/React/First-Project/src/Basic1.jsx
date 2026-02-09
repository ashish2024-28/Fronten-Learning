
function Basic1 (){
  const name = {
    name:"Ashis "
  };
  const a = 10;
  const b = 20;
  return <>
  <h1>I am <b>{name? name.name : " i will die "} and this is react journy</b></h1>
  <h2>sum of 10 + 20 = {sum(a,b)}</h2>
  </>
}

function sum(a,b){return a+b;}
export default Basic1;