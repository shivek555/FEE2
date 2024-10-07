document.writeln("gfhgctf")
let msg  = "    meet me at...   "
document.writeln(msg+"<br>");
msg[2]= 'x';
document.writeln(msg);

newMsg = msg.trim();
document.writeln(newMsg+"<br>");
document.writeln(msg+"<br>");

uppercase = msg.toUpperCase()
document.writeln(uppercase+"<br>");

let name = "HARRY"
lowercase = name.toLowerCase()
document.writeln(lowercase+"<br>")


let textMsg = "sonam_bewafa_hai";
document.writeln(textMsg.indexOf("bewafa")+"<br>")
document.writeln(textMsg.indexOf("_")+"<br>")


let fruit = "   bananas";
let fruit1 = fruit.trim()
document.writeln(fruit1+"<br>")
let fruitUpper =fruit1.toUpperCase()
document.writeln(fruitUpper+"<br>")
let fruitAfterChaining = fruit.trim().toUpperCase();
document.writeln(fruitAfterChaining+"<br>")


let mrngMsg = "kaalu kaliya";

document.writeln(mrngMsg.slice(3)+"<br>");
document.writeln(mrngMsg.slice(-3)+"<br>");

document.writeln(mrngMsg.slice(3,7)+"<br>")

let txt = "i love moon";
document.writeln(txt+"<br>");
let newtxt = txt.replace("moon","Yue")
document.writeln(newtxt+"<br>")

let message = "An idiot in the class always do ruckus. ";
document.writeln(message.repeat(3)+"<br>");

// object can be declared in 2 ways
/* a constructor 
a direct method*/ 

//constructor
var obj=new Object();
obj.name="sonam";
obj.age=20;
document.writeln(obj.name+"<br>");
document.writeln(obj.age+"<br>");
console.log(obj);
console.log(typeof(obj));
//object inside a object
var obj1={
    user1:{
        name:"shivek",
        age:20
    },
    user2:{

        name:{
            name1:"shareen",
            age:19
        },
        age:{
            name1:"krish",
            age:18
        }
    },
    user3:{
      name:"krishan",
      age:19  
    }
}
console.log(obj1.user2.name);
console.log(obj1.user2.age);
console.log(obj1);

let dataArray = [
    {
      outerObject1: {
        key1:"value1",
        middleObject1: {
            key1: 'value1',
            innerObject1: {
            key1: 'value1',
            key2: 123
          }
        }
      }
    },
  ];
  
  console.log(dataArray);
  console.log(dataArray[0].outerObject1.middleObject1.innerObject1.key2);
  let q={name11:"shivek",age:23}
  let q1={name111:"ssm",age1:20}
  let q21={...q,...q1}
  console.log(q21)
  console.log(1=="1")
  console.log(1+"2");
  console.log(10-"A");

  /*Scope in Js
  1) global{var}
  2) function
  3) block{let,const}
  4) lexical scope
  */
 //global
 let G1=5;
 var G2=10;
 const G3=15;
 //function
 function f1(G1,G2,G3){
  let sum=G1+G2+G3;
  console.log(G1);
  console.log(G2);
  console.log(G3);
  console.log(sum);
 }
 f1(G1,G2,G3)
 //console.log(sum);
