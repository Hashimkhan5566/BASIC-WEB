let array = [12,434,44,22,33];
console.log(array.length);
console.log("______---___")
console.log(array.atindex[1])
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