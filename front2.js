let array = [12,434,44,22,33];
console.log(array.length);
console.log("______---___")
// console.log(array.atIndex[1])
console.log("--____---___")
console.log(array[7]);
array[2] = 23; //assign new value 
console.log(array.length);
console.log(array[0]);/// access through index or access to value
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
let num  = array.join("_"); //join or connect with _ or and or any things. 
console.log(num);
let r = array.push(67);
let y = array.pop();
let x = array.shift();
let z = array.unshift(12);

console.log(r);
console.log(array);
let compare = (a,b) =>{
  return b - a;
}
let array2 = [12,334,44,234,22,55,567];
console.log(array.concat(array2));
console.log(array.sort(compare));
console.log("they are end");
console.log(array.splice(0,1,44,22,40));

let number =prompt("enter your choice number to print its factorial:");
let fact = 1;
  while(number>0){
    fact*=number;
    number--;
    console.log(number);
  }
  console.log(fact);
console.log("this is your choice factorial:",fact);

//prime number print

for(let num=2; num<=50; num++){
let isPrime = true;

for(let i=2; i<=num-1; i++){
  if(num%i ==0){
    isPrime =false;
     break;   
  }

}
if(isPrime){
  console.log(num);
}
}
//character how many time occur
let string = "javascript";

let char = {};

for(let ch of string){
 if(char[ch]){
  char[ch]++;
 }
 else{    char[ch] = 1

 }

}
for(let ch in char){
  console.log(ch, "appear", char[ch], "time");

}
// today task
// Store your age in a variable. How do you check if you are a child, teenager, or adult?

let age  = prompt("enter your age:");
let age2 = parseInt(age);
if(age<18){
  console.log("you are child");
}
else if(age==18){
  console.log("you are teenager");
}
else if(age>18){
  console.log("you are adult");
}
//for each loop
let arr = [12,34,23,45,66,45];
arr.forEach((value)=> {
  console.log(value);
})
///for of loop on array
let nom_array = [12, 56,388,44,3399];
for(let i of nom_array){
  console.log(i);
}
console.log(nom_array);

//for in loop
let nam_array = [56,90,67,877,55,543];
for(let num in nam_array){
  console.log(num,":",nam_array);
}
console.log("----===___===----");
console.log(nam_array);
//map function

let w_array = [45,76,55,35,97,45];
w_array.map((value,index)=>{
  console.log(value, index);
})
//filter function
let arr23 = [12,76,454,34,5433,685];

let a2 =arr23.filter((a)=>{
  return a<10;
  
})
console.log(a2);

// alert and prompt and confirm

let dog  = prompt("enter the dog name:");
let cat = prompt("big_cat");

console.log(alert(cat,dog));
if(cat&&dog!==true){
  console.log(confirm("you give the correct:"));
}
console.log(document.body.firstChild);
// A number is given: n = 121. How do you check if it is a palindrome (same forward and backward)?
let numbar = prompt("enter your choice palindrome:");

let original = parseInt(numbar);
let reverse = 0;

while(numbar>0){
  let digit = numbar%10;
  reverse = reverse*10+digit;
  numbar= Math.floor(numbar/10);
}
if(reverse===original){
  console.log("this is palidrome");
}
else{
  console.log("this is not palindrome");
}
//parent, sibling, child, element
console.log(document.body.parentNode);
console.log(document.body.style.backgroundColor);
console.log(document.body.lastChild);
console.log(document.body.firstChild);// we done today the dom like how to access to child , parent, sibling
console.log(document.body.childNodes);
console.log(document.body.firstElementChild);
let id = document.getElementById("id");
console.log(id.setAttribute("class", "true sachin"));
let span =document.getElementById("span1"); 
console.log(span.getAttribute("class"));
console.log(span.hasAttribute("class"));
console.log(span.setAttribute("class", "true sachin"));

console.log(span.removeAttribute("class"));
let p1 =  document.getElementsByClassName("class")[0];
console.log(p1.innerHTML);
console.log(p1.outerHTML);
console.log(span.closest("#span1"));
console.log(document.body.firstElementChild.nodeName);
console.log(id.dataset);

console.log(id.matches(".box"));
console.log(span.contains(id));
console.log(id.attributes);
console.log(id.dataset);