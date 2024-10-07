/*
// // 2. default parameter:

// function multiply(a, b = 5) {
//   let ans = a * b;
//   console.log(ans);
// }
// multiply(5);  //25
// multiply(5, 3);  //15
// multiply(5); // NaN
// multiply(5, 3); //15

// // 1. function declaration
// function sum(a, b) {
//   // a,b are argument of function sum
//   let ans = a + b;
//   console.log(ans);
// }
// // function call
// sum(5, 3); // 5, 3 is working as a parameters for function sum

// var a = 7;
// var b = 9;

// console.log(a + b);

// // .....
// // ......
// // ......1000

// var a = 7;
// var b = 9;

// console.log(a + b);

// //  ......200

// var a = 7;
// var b = 9;

// console.log(a + b);
// scope: 1:golbal, 2:function; 3:block scope; 4: lexical scope:

// 4. lexical scope: varibale decalared in outerfunction can be accessible by inner function but value assigned to inner function cannot be accessible by outer function:

function outerFunc() {
    let x = 5;
    let y = 6;
    // console.log(a);
  
    function innerFunc() {
      // let a = 10;   //This is not possible
      console.log(x);
    }
    // console.log(a); //This is not possible
    innerFunc();
  }
  outerFunc();
  
  // 3.block scope:
  // {
  //   let a = 50;
  //   const b = 30;
  //   var c = 20;
  //   //   console.log(a);
  // }
  
  // 2. functional scope:
  let c = 25; //global scope
  function myfun(a, b) {
    let c = a + b; //functional scope
    console.log(c);
  }
  myfun(5, 3);
  console.log(c);
  
  // // 1.global scope: by default all values are globally accessible throught the code base.
  // let a = 5;
  // var b = 10;
  // const c = 15;
  
  // function myfunc() {
  //   console.log(a);
  //   console.log(b);
  //   console.log(c);
  // }
  // myfunc();
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // function termination: 1. function defination 2.return keyword

function multiply(a, b) {
    let c = a * b;
    console.log(c);
    return c;
    console.log(c);
  }
  multiply(2, 5);
  
  // function info(name, age) {
  //     let c = 25;
  // //   console.log(`My name is  ${name}. I am ${age} Years old `);
  // }
  // info("yash", "25");
*/
  // inhertience 
  var person1={
    name:"yash",
    age:23,
    Subject:javascript
  }
  const person2=Object.create(person1)
  console.log(person1);
  console.log(person2);
  console.log(person2.name)