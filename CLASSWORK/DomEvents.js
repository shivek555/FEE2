var btn;
var btns = document.querySelectorAll("button");
for (btn of buttons){
    btn.onmouseenter=function cursor(){alert("welcome the terror")}
    btn.onclick=myfunc;
}
function myfunc(){
    console.log("button was pressed")
}
console.dir(btn);
// var btn = document;
// QuerySelector("button");
// console.dir(btn)
/* improved verson
const buttons = document.querySelectorAll("button");

function handleClick() {
  console.log("Button was pressed");
}
function handleMouseEnter() {
  alert("Welcome to the terror");
}

buttons.forEach((button) => {
  button.addEventListener("mouseenter", handleMouseEnter);
  button.addEventListener("click", handleClick);
});
*/
var para = document.querySelector("p");
para.mouseenter=function cursor(){console.log("this is just a para")}

