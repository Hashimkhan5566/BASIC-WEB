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

// let x = function(e){
//   console.log(e);
//   console.log(e.type, e.clientX, e.clientY);
//   console.log(e.target)
//   alert("this is event1");
  
// }
// let y = function(e){
//   alert("event2");
// }

// btn.addEventListener('click',x);

// btn.addEventListener('click', y);

// let a = prompt("enter the event:");
// if(a=='2'){
//   btn.removeEventListener('click', y);
// };

// function greet(name, callback){
//   console.log("hello" + name);
//   callback();
// }

// function saybye(){
//   console.log("goodmoring!");
// }
// greet("hashim", saybye);
// //

// let p = new Promise((resolve, reject)=>{
//   console.log("the promise is pending");

// setTimeout(()=>{
//   console.log("the settimeout is over");
//   resolve(true);
// }, 5000);
// })
// let pe = new Promise((resolve, reject)=>{

// setTimeout(()=>{
//   console.log("the promise is rejected");
//   reject(false);

// },5000);

// })

// p.then((value) => {
//   console.log("the resolve.");
// })
// pe.catch((err) => {
//   console.log("the error occur due to the some reason");
  
// });


// // let p3 = new Promise((resolve, reject)=>{
// //   console.log("the promise is pending.....");

// //   setTimeout(()=>{
// //     console.log("the promise is resolve.");
// //     resolve(true);
// //   },3000)
// // })

// // let p4 = new Promise((resolve, reject)=>{
// //   console.log("the rejected error occur.");

// //   setTimeout(()=>{
// //     console.log("the settimeout is occur and out upto 3000");
// //     reject(false);
// //   },3000);
// // })
// // p3.then((value)=>{
// //    console.log("the then is over");
// // })
// // p4.catch((error)=>{
// //    console.log("the error occur due to the some mistake!!!");
// // })

// //we used the loadscript.

// const loadScript = (src)=>{
//   return new Promise ((resolve, reject) =>{
//   let script = document.createElement("script");
//   script.type = "text/javascript";
//   script.src = src;
//   documnet.body.appendChild(script);
//   script.onload = ()=>{
//     resolve("script is loaded is sir...");
//   }
//   script.onerror = ()=>{
//     reject(0);
//   }
// })

  
// }
// let pl = loadScript("	https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js");
// pl.then((value)=>{
//   console.log(value);
// }).then((value)=>{
//  console.log("the value is this  print.");
// }).catch((error)=>{
//   console.log("some error occur because the error is not correct");
// })

// //we used the multiple handlers .
// let P = new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//        console.log("the settimeout is over under the 4000");
//         resolve(4)
//      },4000);

    
// })

// P.then((value)=>{
//   console.log(value);
// })

// P.then((value)=>{
//   console.log("congradulation the resolve value is solved.");
// }).then((value)=>{
//   console.log("the harrry.");
// })

// let p1 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("value 1 done");
//   },1000);
// });

// let p2 = new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//     resolve("value 2 done");
//    },2000);
// });

// let p3 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("value 2 done");
//   },2000);
// });

// let p4 = Promise.all([p1,p2,p3]);

// p4.then((value)=>{
//   console.log(value);
// });
// let p5 = Promise.race([p1,p2,p3]);

// p5.then((value)=>{
//   console.log(value);
// });
// let p6 = Promise.any([p1,p2,p3]);

// p6.then((value)=>{
//   console.log(value);
// });
// let p7 = Promise.resolve([p1,p2,p3]);

// p7.then((value)=>{
//   console.log(value);
// });
// let p8 = Promise.reject([p1,p2,p3]);

// p8.then((value)=>{
//   console.log(value);
// }); 
// let p9 = Promise.allSettled([p1,p2,p3]);

// p9.then((value)=>{
//   console.log(value);
// });


//async and await

// async function harry() {
  
//   let lahorweather =  new Promise((resolve, reject)=>{
//     setTimeout(()=>{
       
//       resolve("27 deg");
//     },2000);
//   })
//   let islamabadweather = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("21deg");
//     }, 3000);
//   })

//   let lahoreW = await lahorweather;
//   let islamabadW = await islamabadweather;

//   return[lahoreW, islamabadW];
// }
// console.log("welcome to he control room");
// let a = harry();
// console.log(a);


// //try and catch

// setTimeout(()=>{
//   console.log("hackinng the file.........");
// },1000);
// setTimeout(()=>{
//   console.log("then username cracked.....");
// },2000);
// try{
// console.log(rahul);
// }
// catch(err){
//   console.log("bubble bubbble", err);
// }

// setTimeout(()=>{
//   console.log("the file name scratch......");
// },3000);

// setTimeout(()=>{
//   console.log("the passward is hacked.....");
// },4000);

// setTimeout(()=>{
//   console.log("then all file is kacked and email must cracked....... ");
// },5000);

// //try and catch with message and name of error.

// try{
//   let age = prompt("your age is:..");
//   let age1 = parseInt(age);
//   if(age1>102){
//   throw new ReferenceError("this is probably error and invalid age.");
// }
// }
// catch(err){
//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack);


// Question 1 — Weather Control Room

// Write an async function named getWeather() that:

// Creates two promises lahoreWeather (resolve after 2 sec: "30°C") and karachiWeather (resolve after 4 sec: "35°C").

// Use await to get both results and print them together in console.

// Use a try...catch block to handle any error.

// Add a finally block that prints "Weather data fetched successfully!".

// async function getWeather() {
//   let lahoreWeather = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("32C");
//     },1000);
//   });

//   try{
//     console.log("to handle the error.");

//   }
//   catch(err){
//     console.log("the lahoreWeather is 32C.")
//   }

//   let karachiWeather = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("35C");
//     },4000);
//   });
//   try{
//     console.log("to handle the error.");

//   }
//   catch(err){
//     console.log("the lahoreWeather is 32C.")
//   }
//   finally{
//     console.log("the are good weather in karachi and lahore.");
//   }

//   let lahoreW = await lahoreWeather;
//   let karachiW = await karachiWeather;
//   return[lahoreW, karachiW];

// }

// let fun = getWeather();
// console.log(fun);

// Question 2 — Promise Race

// Create three promises:
// 1️⃣ resolves after 1s → "First done"
// 2️⃣ resolves after 3s → "Second done"
// 3️⃣ rejects after 2s → "Error occurred!"
// Use Promise.race() and log whichever promise resolves/rejects first.
// Handle error with .catch().

// let p1 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("first done.");
//   }, 1000);
// });

// let p2 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("second done.");
//   },3000);
// });

// let p3 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("error occurred");

//   },2000);
// });

// let p4 = Promise.race([p1,p2,p3]);
// p4.then((value)=>{
//   console.log(value);
// p4.catch((err)=>{             //first done. this is output.
//   console.log("to handle the error...");
// });
// });
// // Question 3 — Promise.allSettled

// // Make an array of three promises:

// // Two that resolve

// // One that rejects
// // Use Promise.allSettled() to print the status and value of all promises.

// let p6 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("the p6 is resolve");
//   },1000);

// })
// let p7 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("the p7 is resolve.");
//   },2000);
// });

// let p8 = new Promise((resolve,  reject)=>{
//   setTimeout(()=>{
//     reject("the last one is reject.");
//   },3000);
// });

// let p9 = Promise.allSettled([p6,p7,p8]);
// p9.then((value)=>{
//   console.log(value);
// });

// Question 4 — Custom Error

// Inside a function validateUser(name),

// If name is empty string "", throw a new Error "Username cannot be empty!".

// If name length < 3, throw a new Error "Username too short!".

// Else print "Welcome, name!".
// Wrap the function call in try...catch and handle both errors.
// Always print "Validation complete" in finally.
//   function validateUser(){
//     let name = prompt("enter your age:");
//    if(name==""){
//       try{
//         console.log("the name is full...");
//          throw new Error ("the username is empty... try again...");
//       }
//       catch(err){
//          console.log("your length of name is too short! becausethis this reason error...");
//          console.log(err.message);
//       }
//     }
//     else if(name.length<=4){
//       throw new Error ("the username is too short!...");
//     }
//     else{
//       console.log("the age is less than of 200.");
//     }
// }

// let a = validateUser();
// console.log(a);

// // Question 5 — Simulate Hacking Progress (Async Challenge)

// // Create an async function that shows fake hacking steps one after another using await and setTimeout inside a Promise:

// // "Initializing hack..." (1 sec)

// // "Connecting to server..." (2 sec)

// // "Fetching data..." (2 sec)

// // "Hack complete!" (1 sec)
// // Handle any error using try...catch.

// async function hacking(){
//   let first = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("initializing hack....");
//       resolve("initializing hack....");
//     },1000);

//   });

//   let second  = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("connecting to the server....");
//       resolve("connecting to the server....");
//     },2000);
   
//   });

//   let third = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("Fetching data.....");
//       resolve("Fetching data.....");
//     },3000);
   

//   });

//   let fourth = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("Hack complete!");
//       resolve("Hack complete!");
//     }, 1000);
   
//   });

//   let a = await first;
//   let b = await second;
//   let c = await third;
//   let d = await fourth;

//   return([a,b,c,d]);


// }
// hacking();

// // Question 6 — Error in Async Function

// // Make an async function that fetches data from an invalid URL using fetch().
// // Use try...catch to handle the error and print a custom message like "Cannot fetch data, please check the URL.".
// // Create three async functions:

// // getUser() → returns "User Data" after 2 sec

// // getPosts() → returns "User Posts" after 3 sec

// // getComments() → returns "User Comments" after 1 sec
// // Use Promise.all() to wait for all of them and print results together.

// async function getUser(){
//   let po1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("user Data.")
//     }, 2000);
//   });

//   return await po1;

// }
// getUser();

// async function getPosts(){
//   let po2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("user Post");
//     }, 3000);
//   });

//   return await po2;
// }
// getPosts();

// async function getComments(){
//   let po3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("get comments--");
//     },1000);
//   });

//   return await po3
// }
// getComments();

// let po5 = Promise.all([getUser(), getComments(),getPosts()]);

// po5.then((value)=>{
//   console.log(value);
// });

// // Question 8 — Custom Reference Error

// // Inside a try block, use throw new ReferenceError("Variable not found!").
// // Catch and print both err.name and err.message.
// // Add a finally that prints "Execution Finished!".
// function trycatch(){
// try{
//   a =10;
//   console.log("this is a try block");
//   throw new ReferenceError("variable not found!");
// }
// catch(err){
//   console.log(err.message);
//   console.log(err.name);
// }

// finally{
//   console.log("Execution is finished!");
// }
// }
// trycatch();


// // Question 9 — Async with Rejected Promise

// // Create a promise that rejects after 2 sec with message "Server down!".
// // Handle it inside an async function using try...catch.

// async function reject(){
//   let re =  new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//      reject("server down!");
//     },2000);
//   });
//   try{
  
//   return await re; 
//   }
//   catch(err){
//     console.log("the server is down.");
//     console.log(err.message);
//   }
// }
// reject();

//fetch 

// let p = fetch("https://api.thecatapi.com/v1/images/search");
// p.then((value)=>{
//   return value.json();
// }).then((data)=>{
//    let img = document.createElement("img");
//    img.src = data[0].url;
//    document.body.appendChild(img);
// });

// let pro = fetch("https:/api/cats?tags=tag1,tag2&skip=0&limit=10",{
//   method: "POST",
//   Headers:{
//     "Content-Type" : "application/json"
// },

//   body: JSON.stringify({
//     title: "hashim",
//     age: "43",
//     userid: 1
//   })
// })

// pro.then((response)=>{
//   return response.json();
// }).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//     console.log("error", err);
// })

// document.cookie="harry123";
// console.log(document.cookie);
// document.cookie = "harry3455";
// console.log(document.cookie);
// let key = prompt("enter yor key");
// let value = prompt("enter your value");
// document.cookie = (`${encodeURIComponent(key)}= ${encodeURIComponent(value)}`);
// console.log(document.cookie);

// let key1 = prompt("enter your key");
// let value1 = prompt("enter your value");

// localStorage.setItem(key1,value1);

// console.log(`the value of${key1} and the value${localStorage.getItem(key1)}`);

// if(key1=="red" || key1=="blue"){
//   localStorage.removeItem(key1);
//   console.log(`${key1} to remove the key. `);
// }

// if(key1 === "0"){
//   localStorage.clear();
// }
//  console.log("he localstorage is clear.");



//  window.onstorage = (e)=>{
//   alert("change");
//    console.log(e);
//  }

//practice Question.
// 🟢 1. Fetch API

// Easy: Getting a random joke from a public joke API and showing it on your webpage.
// Complex: Building a live weather dashboard that calls multiple APIs (weather, location, time) together and updates automatically every few seconds.
// let p0 = fetch("https://official-joke-api.appspot.com/random_joke");
// p0.then((value)=>{
//   return value.json();
// }).then((data)=>{
//    console.log(data);
// })

// // Intermediate: Sending user form data (like name and email) to your server and displaying a success message after the server responds.

// let a = fetch("https://jsonplaceholder.typicode.com/posts",{

//   method: "POST",

//   headers:{
//     "content.Type" :"application.json"
// },
//   body: JSON.stringify({
//       title: "hashim",
//       age: 32,
//       id: 1
//   })

// })
// a.then((response)=>{
//    response.json();
// }).then((data)=>{
//   console.log(data);

// });

let p0 = fetch("http://goweather.xyz/weather/swabi");
p0.then((value1)=>{
    console.log(value1.status);
    console.log(value1.ok);
    return value1.json();
    
    
}).then((value2)=>{
    console.log(value2);
}) 

// Fetching a random joke from a public API and showing it on your webpage.

// 👉 “Get data from a public jokes API and display the joke text on the screen.”

// let p1 = fetch("https://api.chucknorris.io/jokes/random");
// p1.then((value3)=>{
//     console.log(value3.status);
//     console.log(value3)
//     return value3.text();
// }).then((value4)=>{
//     console.log(value4);
// })
// //🟡 Intermediate Example:

// // Sending user form data (like name and email) to your server, then showing a success message after the server confirms it was received.

// // 👉 “Send form details to a backend API and display ‘Form submitted successfully!’ after the response.”

// let p8 = fetch("https://jsonplaceholder.typicode.com/posts",{
//     method: "POST",
//     headers:{
//         "content-Type" : "application.json"
//     },

//     body: JSON.stringify({
//         title: "hahsim",
//         email: "abc39@gmail.com",
//         id: 1
//     })

// });
// p8.then((value5)=>{
//     console.log(value5.status);
//     console.log(value5.ok);
//     return value5.json();

// }).then((value6)=>{
//     console.log("successfully right ad post the msg",value6);
// }).catch((error)=>{
//     console.log(error, "something went wrong!");
// })


// let p9 = fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/");
// p9.then((value9)=>{
//     console.log(p9.status);
//     console.log(p9.ok);

//     return value9.json()

// }).then((value7)=>{
//     console.log(value7);
// }).catch((err)=>{
//     console.log(err.message);
//     console.log(err.refernce);
// });

// document.cookie = "name=hashim khan";
// document.cookie = "age=23";
// document.cookie = "address=wert ";

// console.log(document.cookie);


// let key = prompt("enter your key");
// let value = prompt("enter your value");

// document.cookie = (`${encodeURIComponent(key)}= ${encodeURIComponent(value)}`);
// console.log(document.cookie);

// let p12 = fetch("https://jsonplaceholder.typicode.com/users",{

//     method: "POST",
//     headers:{
//        "content.Type": "application/json"
//     },

//     body: JSON.stringify({
//         title: "hashim",
//         age: 23,
//         email:"we23@gmail.com"
//     })

// })
// p12.then((value12)=>{
//     return value12.json();
// }).then((data)=>{
//     console.log(data);
//     console.log("this value is successfully get");
// }).catch((err)=>{
//     console.log(err, "this error is wrong because we try to fix it...")
// })
// console.log(p12);

let sum = ()=>{
    console.log("hey i good");

}

sum();

function avgrule(x,y){
   return (1+(x+y/10));
}

let a =156;
let b =56;
let c = 543;

console.log("the a and b average is", avgrule(a,b));


let array = [12,33,54,65,88,332];
let array_c = array.join("and");
console.log(array_c, "they join the array");
console.log(array);
let array_2 = [21,5.6456,565,32,11];
let array_3 = [123,4235,22,4];
let d = array.concat(array_2,array_3, "they concat the value")
console.log(d);

console.log(array_2.push(0.00), array_2, "they pushh value");
console.log(array_3.pop(),array_3, "they pop value");
console.log(array.shift(), "they shift the value");
console.log(array.unshift(100.00), "they  unshipt value", array);
console.log(array.length);
let a1 = delete array[0];
console.log(a1,array.length);

//ascending order

let compare = (a, b)=>{
    return b - a;
}

let array_sort = [12,43,0.9,1,2,3,4, -90, 70];
array_sort.sort(compare);
console.log(array_sort);
array_sort.splice(1, 4);
let deletedValues = array_sort.splice(1, 4);
console.log(array_sort);
console.log("deletedValues", deletedValues);

//slice and reverse

let sli = [1,32,54,67,,44,54];
sli.slice(1,3);
console.log(sli);
sli.reverse()

console.log(sli);

// push()

// Add a new value to the end of an array.

// Example: Add a new score to a scores array.

// Prompt: “I have [10, 20, 30]. Use push() to add 40 at the end. What does the array look like now?”

//map
let short_array = [12,32,54,65];

let array_short = short_array.map((value, index, array)=>{
    console.log(value, index, array);
    return value+1;
})
console.log(short_array, array_short);

let good_array = [12,33,433,45];

let bad_array = good_array.map((value)=>{
    console.log(value);
    return value;

})
console.log(bad_array, good_array);


//filter

let fil = [12,21,452,431,86];

let fill = fil.filter((a)=>{
   return a>10;
})

console.log(fill, fil);

//reduce

let red = [1,2,3,4,5];

let uce = red.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(uce);