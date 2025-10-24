// let first = document.getElementsByClassName("text")[0];
// console.log(first);
// first.insertAdjacentHTML("beforebegin",'<div class="text">beforebegin</div>');
// first.insertAdjacentHTML("afterbegin",'<div class="text">afterbegin</div>');
// first.insertAdjacentHTML("beforeend",'<div class="text">beforeend</div>');
// first.insertAdjacentHTML("afterend",'<div class="text">afterend</div>');

// console.log(first.class = "red");
// console.log(first.classList);
// console.log(first.classList.toggle("red"));
// console.log(first.classList.add("text"));
// console.log(first.classList);
// console.log(first.classList.contains("red","text"));

// const sum = (a, b) =>{
//  console.log("this is sum "  +  (a + b));
//   a + b;
// }
// setTimeout(sum , 10000, 1,2);

// setInterval(() => {
//     alert("this is alerts");
// }, 5000);

let x = function(e){
  console.log(e);
  console.log(e.type, e.clientX, e.clientY);
  console.log(e.target)
  alert("this is event1");
  
}
let y = function(e){
  alert("event2");
}

btn.addEventListener('click',x);

btn.addEventListener('click', y);

let a = prompt("enter the event:");
if(a=='2'){
  btn.removeEventListener('click', y);
};

function greet(name, callback){
  console.log("hello" + name);
  callback();
}

function saybye(){
  console.log("goodmoring!");
}
greet("hashim", saybye);
//
let promise = new Promise(function(resolve, reject){
  console.log("the delay");

  setTimeout(() => {
    console.log("the delay is over.....");
  }, 2000);
});
console.log(promise);