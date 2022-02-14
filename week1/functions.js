/**
 * by @xennia316
 */
// A function must be predefined before use
// There must be a relationship between input and output

// function keyword

function greet(){
    console.log("Hello There!");
}
greet();

//no input
function square(){
  return  4 * 4;
}

console.log(square());

//with input
function square(a){
    return  a * 4;
  }
  
  console.log(square(3));

  //To declare a variable globally just put it outside the function
  var num = 2;
  function square(num){
    return  num * 4;
  }
  
  console.log(square());

  function multiply(a, b){
       return a * b;
  }
  console.log(multiply(2,1));
  //Rest parameters
  function Multiply(...Args){
      console.log(Args);
  }

  //Closures
  function car(name){
      console.log(name);
      return function getModel(model){
          console.log(model);
      }
  }
  let myCar = car("Toyota");
  myCar = "Rice";

  myCar.getModel("Rice");

  //Arrow functions
  let func = () => {
      console.log("Valid function");
  }

  func();
  