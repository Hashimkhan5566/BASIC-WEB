// // let first = document.getElementsByClassName("text")[0];
// // console.log(first);
// // first.insertAdjacentHTML("beforebegin",'<div class="text">beforebegin</div>');
// // first.insertAdjacentHTML("afterbegin",'<div class="text">afterbegin</div>');
// // first.insertAdjacentHTML("beforeend",'<div class="text">beforeend</div>');
// // first.insertAdjacentHTML("afterend",'<div class="text">afterend</div>');

// // console.log(first.class = "red");
// // console.log(first.classList);
// // console.log(first.classList.toggle("red"));
// // console.log(first.classList.add("text"));
// // console.log(first.classList);
// // console.log(first.classList.contains("red","text"));

// // const sum = (a, b) =>{
// //  console.log("this is sum "  +  (a + b));
// //   a + b;
// // }
// // setTimeout(sum , 10000, 1,2);

// // setInterval(() => {
// //     alert("this is alerts");
// // }, 5000);

// // let x = function(e){
// //   console.log(e);
// //   console.log(e.type, e.clientX, e.clientY);
// //   console.log(e.target)
// //   alert("this is event1");
  
// // }
// // let y = function(e){
// //   alert("event2");
// // }

// // btn.addEventListener('click',x);

// // btn.addEventListener('click', y);

// // let a = prompt("enter the event:");
// // if(a=='2'){
// //   btn.removeEventListener('click', y);
// // };

// // function greet(name, callback){
// //   console.log("hello" + name);
// //   callback();
// // }

// // function saybye(){
// //   console.log("goodmoring!");
// // }
// // greet("hashim", saybye);
// // //

// // let p = new Promise((resolve, reject)=>{
// //   console.log("the promise is pending");

// // setTimeout(()=>{
// //   console.log("the settimeout is over");
// //   resolve(true);
// // }, 5000);
// // })
// // let pe = new Promise((resolve, reject)=>{

// // setTimeout(()=>{
// //   console.log("the promise is rejected");
// //   reject(false);

// // },5000);

// // })

// // p.then((value) => {
// //   console.log("the resolve.");
// // })
// // pe.catch((err) => {
// //   console.log("the error occur due to the some reason");
  
// // });


// // // let p3 = new Promise((resolve, reject)=>{
// // //   console.log("the promise is pending.....");

// // //   setTimeout(()=>{
// // //     console.log("the promise is resolve.");
// // //     resolve(true);
// // //   },3000)
// // // })

// // // let p4 = new Promise((resolve, reject)=>{
// // //   console.log("the rejected error occur.");

// // //   setTimeout(()=>{
// // //     console.log("the settimeout is occur and out upto 3000");
// // //     reject(false);
// // //   },3000);
// // // })
// // // p3.then((value)=>{
// // //    console.log("the then is over");
// // // })
// // // p4.catch((error)=>{
// // //    console.log("the error occur due to the some mistake!!!");
// // // })

// // //we used the loadscript.

// // const loadScript = (src)=>{
// //   return new Promise ((resolve, reject) =>{
// //   let script = document.createElement("script");
// //   script.type = "text/javascript";
// //   script.src = src;
// //   documnet.body.appendChild(script);
// //   script.onload = ()=>{
// //     resolve("script is loaded is sir...");
// //   }
// //   script.onerror = ()=>{
// //     reject(0);
// //   }
// // })

  
// // }
// // let pl = loadScript("	https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js");
// // pl.then((value)=>{
// //   console.log(value);
// // }).then((value)=>{
// //  console.log("the value is this  print.");
// // }).catch((error)=>{
// //   console.log("some error occur because the error is not correct");
// // })

// // //we used the multiple handlers .
// // let P = new Promise((resolve,reject)=>{
// //      setTimeout(()=>{
// //        console.log("the settimeout is over under the 4000");
// //         resolve(4)
// //      },4000);

    
// // })

// // P.then((value)=>{
// //   console.log(value);
// // })

// // P.then((value)=>{
// //   console.log("congradulation the resolve value is solved.");
// // }).then((value)=>{
// //   console.log("the harrry.");
// // })

// // let p1 = new Promise((resolve, reject)=>{
// //   setTimeout(()=>{
// //     resolve("value 1 done");
// //   },1000);
// // });

// // let p2 = new Promise((resolve, reject)=>{
// //    setTimeout(()=>{
// //     resolve("value 2 done");
// //    },2000);
// // });

// // let p3 = new Promise((resolve, reject)=>{
// //   setTimeout(()=>{
// //     resolve("value 2 done");
// //   },2000);
// // });

// // let p4 = Promise.all([p1,p2,p3]);

// // p4.then((value)=>{
// //   console.log(value);
// // });
// // let p5 = Promise.race([p1,p2,p3]);

// // p5.then((value)=>{
// //   console.log(value);
// // });
// // let p6 = Promise.any([p1,p2,p3]);

// // p6.then((value)=>{
// //   console.log(value);
// // });
// // let p7 = Promise.resolve([p1,p2,p3]);

// // p7.then((value)=>{
// //   console.log(value);
// // });
// // let p8 = Promise.reject([p1,p2,p3]);

// // p8.then((value)=>{
// //   console.log(value);
// // }); 
// // let p9 = Promise.allSettled([p1,p2,p3]);

// // p9.then((value)=>{
// //   console.log(value);
// // });


// //async and await

// // async function harry() {
  
// //   let lahorweather =  new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
       
// //       resolve("27 deg");
// //     },2000);
// //   })
// //   let islamabadweather = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //       resolve("21deg");
// //     }, 3000);
// //   })

// //   let lahoreW = await lahorweather;
// //   let islamabadW = await islamabadweather;

// //   return[lahoreW, islamabadW];
// // }
// // console.log("welcome to he control room");
// // let a = harry();
// // console.log(a);


// // //try and catch

// // setTimeout(()=>{
// //   console.log("hackinng the file.........");
// // },1000);
// // setTimeout(()=>{
// //   console.log("then username cracked.....");
// // },2000);
// // try{
// // console.log(rahul);
// // }
// // catch(err){
// //   console.log("bubble bubbble", err);
// // }

// // setTimeout(()=>{
// //   console.log("the file name scratch......");
// // },3000);

// // setTimeout(()=>{
// //   console.log("the passward is hacked.....");
// // },4000);

// // setTimeout(()=>{
// //   console.log("then all file is kacked and email must cracked....... ");
// // },5000);

// // //try and catch with message and name of error.

// // try{
// //   let age = prompt("your age is:..");
// //   let age1 = parseInt(age);
// //   if(age1>102){
// //   throw new ReferenceError("this is probably error and invalid age.");
// // }
// // }
// // catch(err){
// //   console.log(err.name);
// //   console.log(err.message);
// //   console.log(err.stack);


// // Question 1 — Weather Control Room

// // Write an async function named getWeather() that:

// // Creates two promises lahoreWeather (resolve after 2 sec: "30°C") and karachiWeather (resolve after 4 sec: "35°C").

// // Use await to get both results and print them together in console.

// // Use a try...catch block to handle any error.

// // Add a finally block that prints "Weather data fetched successfully!".

// // async function getWeather() {
// //   let lahoreWeather = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //       resolve("32C");
// //     },1000);
// //   });

// //   try{
// //     console.log("to handle the error.");

// //   }
// //   catch(err){
// //     console.log("the lahoreWeather is 32C.")
// //   }

// //   let karachiWeather = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //       resolve("35C");
// //     },4000);
// //   });
// //   try{
// //     console.log("to handle the error.");

// //   }
// //   catch(err){
// //     console.log("the lahoreWeather is 32C.")
// //   }
// //   finally{
// //     console.log("the are good weather in karachi and lahore.");
// //   }

// //   let lahoreW = await lahoreWeather;
// //   let karachiW = await karachiWeather;
// //   return[lahoreW, karachiW];

// // }

// // let fun = getWeather();
// // console.log(fun);

// // Question 2 — Promise Race

// // Create three promises:
// // 1️⃣ resolves after 1s → "First done"
// // 2️⃣ resolves after 3s → "Second done"
// // 3️⃣ rejects after 2s → "Error occurred!"
// // Use Promise.race() and log whichever promise resolves/rejects first.
// // Handle error with .catch().

// // let p1 = new Promise((resolve, reject)=>{
// //   setTimeout(()=>{
// //     resolve("first done.");
// //   }, 1000);
// // });

// // let p2 = new Promise((resolve, reject)=>{
// //   setTimeout(()=>{
// //     resolve("second done.");
// //   },3000);
// // });

// // let p3 = new Promise((resolve, reject)=>{
// //   setTimeout(()=>{
// //     resolve("error occurred");

// //   },2000);
// // });

// // let p4 = Promise.race([p1,p2,p3]);
// // p4.then((value)=>{
// //   console.log(value);
// // p4.catch((err)=>{             //first done. this is output.
// //   console.log("to handle the error...");
// // });
// // });
// // // Question 3 — Promise.allSettled

// // // Make an array of three promises:

// // // Two that resolve

// // // One that rejects
// // // Use Promise.allSettled() to print the status and value of all promises.

// // let p6 = new Promise((resolve, reject)=>{
// //   setTimeout(()=>{
// //     resolve("the p6 is resolve");
// //   },1000);

// // })
// // let p7 = new Promise((resolve, reject)=>{
// //   setTimeout(()=>{
// //     resolve("the p7 is resolve.");
// //   },2000);
// // });

// // let p8 = new Promise((resolve,  reject)=>{
// //   setTimeout(()=>{
// //     reject("the last one is reject.");
// //   },3000);
// // });

// // let p9 = Promise.allSettled([p6,p7,p8]);
// // p9.then((value)=>{
// //   console.log(value);
// // });

// // Question 4 — Custom Error

// // Inside a function validateUser(name),

// // If name is empty string "", throw a new Error "Username cannot be empty!".

// // If name length < 3, throw a new Error "Username too short!".

// // Else print "Welcome, name!".
// // Wrap the function call in try...catch and handle both errors.
// // Always print "Validation complete" in finally.
// //   function validateUser(){
// //     let name = prompt("enter your age:");
// //    if(name==""){
// //       try{
// //         console.log("the name is full...");
// //          throw new Error ("the username is empty... try again...");
// //       }
// //       catch(err){
// //          console.log("your length of name is too short! becausethis this reason error...");
// //          console.log(err.message);
// //       }
// //     }
// //     else if(name.length<=4){
// //       throw new Error ("the username is too short!...");
// //     }
// //     else{
// //       console.log("the age is less than of 200.");
// //     }
// // }

// // let a = validateUser();
// // console.log(a);

// // // Question 5 — Simulate Hacking Progress (Async Challenge)

// // // Create an async function that shows fake hacking steps one after another using await and setTimeout inside a Promise:

// // // "Initializing hack..." (1 sec)

// // // "Connecting to server..." (2 sec)

// // // "Fetching data..." (2 sec)

// // // "Hack complete!" (1 sec)
// // // Handle any error using try...catch.

// // async function hacking(){
// //   let first = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //       console.log("initializing hack....");
// //       resolve("initializing hack....");
// //     },1000);

// //   });

// //   let second  = new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //       console.log("connecting to the server....");
// //       resolve("connecting to the server....");
// //     },2000);
   
// //   });

// //   let third = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //       console.log("Fetching data.....");
// //       resolve("Fetching data.....");
// //     },3000);
   

// //   });

// //   let fourth = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //       console.log("Hack complete!");
// //       resolve("Hack complete!");
// //     }, 1000);
   
// //   });

// //   let a = await first;
// //   let b = await second;
// //   let c = await third;
// //   let d = await fourth;

// //   return([a,b,c,d]);


// // }
// // hacking();

// // // Question 6 — Error in Async Function

// // // Make an async function that fetches data from an invalid URL using fetch().
// // // Use try...catch to handle the error and print a custom message like "Cannot fetch data, please check the URL.".
// // // Create three async functions:

// // // getUser() → returns "User Data" after 2 sec

// // // getPosts() → returns "User Posts" after 3 sec

// // // getComments() → returns "User Comments" after 1 sec
// // // Use Promise.all() to wait for all of them and print results together.

// // async function getUser(){
// //   let po1 = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //       resolve("user Data.")
// //     }, 2000);
// //   });

// //   return await po1;

// // }
// // getUser();

// // async function getPosts(){
// //   let po2 = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //       resolve("user Post");
// //     }, 3000);
// //   });

// //   return await po2;
// // }
// // getPosts();

// // async function getComments(){
// //   let po3 = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //       resolve("get comments--");
// //     },1000);
// //   });

// //   return await po3
// // }
// // getComments();

// // let po5 = Promise.all([getUser(), getComments(),getPosts()]);

// // po5.then((value)=>{
// //   console.log(value);
// // });

// // // Question 8 — Custom Reference Error

// // // Inside a try block, use throw new ReferenceError("Variable not found!").
// // // Catch and print both err.name and err.message.
// // // Add a finally that prints "Execution Finished!".
// // function trycatch(){
// // try{
// //   a =10;
// //   console.log("this is a try block");
// //   throw new ReferenceError("variable not found!");
// // }
// // catch(err){
// //   console.log(err.message);
// //   console.log(err.name);
// // }

// // finally{
// //   console.log("Execution is finished!");
// // }
// // }
// // trycatch();


// // // Question 9 — Async with Rejected Promise

// // // Create a promise that rejects after 2 sec with message "Server down!".
// // // Handle it inside an async function using try...catch.

// // async function reject(){
// //   let re =  new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //      reject("server down!");
// //     },2000);
// //   });
// //   try{
  
// //   return await re; 
// //   }
// //   catch(err){
// //     console.log("the server is down.");
// //     console.log(err.message);
// //   }
// // }
// // reject();

// //fetch 

// // let p = fetch("https://api.thecatapi.com/v1/images/search");
// // p.then((value)=>{
// //   return value.json();
// // }).then((data)=>{
// //    let img = document.createElement("img");
// //    img.src = data[0].url;
// //    document.body.appendChild(img);
// // });

// // let pro = fetch("https:/api/cats?tags=tag1,tag2&skip=0&limit=10",{
// //   method: "POST",
// //   Headers:{
// //     "Content-Type" : "application/json"
// // },

// //   body: JSON.stringify({
// //     title: "hashim",
// //     age: "43",
// //     userid: 1
// //   })
// // })

// // pro.then((response)=>{
// //   return response.json();
// // }).then((data)=>{
// //   console.log(data);
// // }).catch((err)=>{
// //     console.log("error", err);
// // })

// // document.cookie="harry123";
// // console.log(document.cookie);
// // document.cookie = "harry3455";
// // console.log(document.cookie);
// // let key = prompt("enter yor key");
// // let value = prompt("enter your value");
// // document.cookie = (`${encodeURIComponent(key)}= ${encodeURIComponent(value)}`);
// // console.log(document.cookie);

// // let key1 = prompt("enter your key");
// // let value1 = prompt("enter your value");

// // localStorage.setItem(key1,value1);

// // console.log(`the value of${key1} and the value${localStorage.getItem(key1)}`);

// // if(key1=="red" || key1=="blue"){
// //   localStorage.removeItem(key1);
// //   console.log(`${key1} to remove the key. `);
// // }

// // if(key1 === "0"){
// //   localStorage.clear();
// // }
// //  console.log("he localstorage is clear.");



// //  window.onstorage = (e)=>{
// //   alert("change");
// //    console.log(e);
// //  }

// //practice Question.
// // 🟢 1. Fetch API

// // Easy: Getting a random joke from a public joke API and showing it on your webpage.
// // Complex: Building a live weather dashboard that calls multiple APIs (weather, location, time) together and updates automatically every few seconds.
// // let p0 = fetch("https://official-joke-api.appspot.com/random_joke");
// // p0.then((value)=>{
// //   return value.json();
// // }).then((data)=>{
// //    console.log(data);
// // })

// // // Intermediate: Sending user form data (like name and email) to your server and displaying a success message after the server responds.

// // let a = fetch("https://jsonplaceholder.typicode.com/posts",{

// //   method: "POST",

// //   headers:{
// //     "content.Type" :"application.json"
// // },
// //   body: JSON.stringify({
// //       title: "hashim",
// //       age: 32,
// //       id: 1
// //   })

// // })
// // a.then((response)=>{
// //    response.json();
// // }).then((data)=>{
// //   console.log(data);

// // });

// // let p0 = fetch("http://goweather.xyz/weather/swabi");
// // p0.then((value1)=>{
// //     console.log(value1.status);
// //     console.log(value1.ok);
// //     return value1.json();
    
    
// // }).then((value2)=>{
// //     console.log(value2);
// // }) 

// // // Fetching a random joke from a public API and showing it on your webpage.

// // // 👉 “Get data from a public jokes API and display the joke text on the screen.”

// // // let p1 = fetch("https://api.chucknorris.io/jokes/random");
// // // p1.then((value3)=>{
// // //     console.log(value3.status);
// // //     console.log(value3)
// // //     return value3.text();
// // // }).then((value4)=>{
// // //     console.log(value4);
// // // })
// // // //🟡 Intermediate Example:

// // // // Sending user form data (like name and email) to your server, then showing a success message after the server confirms it was received.

// // // // 👉 “Send form details to a backend API and display ‘Form submitted successfully!’ after the response.”

// // // let p8 = fetch("https://jsonplaceholder.typicode.com/posts",{
// // //     method: "POST",
// // //     headers:{
// // //         "content-Type" : "application.json"
// // //     },

// // //     body: JSON.stringify({
// // //         title: "hahsim",
// // //         email: "abc39@gmail.com",
// // //         id: 1
// // //     })

// // // });
// // // p8.then((value5)=>{
// // //     console.log(value5.status);
// // //     console.log(value5.ok);
// // //     return value5.json();

// // // }).then((value6)=>{
// // //     console.log("successfully right ad post the msg",value6);
// // // }).catch((error)=>{
// // //     console.log(error, "something went wrong!");
// // // })


// // // let p9 = fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/");
// // // p9.then((value9)=>{
// // //     console.log(p9.status);
// // //     console.log(p9.ok);

// // //     return value9.json()

// // // }).then((value7)=>{
// // //     console.log(value7);
// // // }).catch((err)=>{
// // //     console.log(err.message);
// // //     console.log(err.refernce);
// // // });

// // // document.cookie = "name=hashim khan";
// // // document.cookie = "age=23";
// // // document.cookie = "address=wert ";

// // // console.log(document.cookie);


// // // let key = prompt("enter your key");
// // // let value = prompt("enter your value");

// // // document.cookie = (`${encodeURIComponent(key)}= ${encodeURIComponent(value)}`);
// // // console.log(document.cookie);

// // // let p12 = fetch("https://jsonplaceholder.typicode.com/users",{

// // //     method: "POST",
// // //     headers:{
// // //        "content.Type": "application/json"
// // //     },

// // //     body: JSON.stringify({
// // //         title: "hashim",
// // //         age: 23,
// // //         email:"we23@gmail.com"
// // //     })

// // // })
// // // p12.then((value12)=>{
// // //     return value12.json();
// // // }).then((data)=>{
// // //     console.log(data);
// // //     console.log("this value is successfully get");
// // // }).catch((err)=>{
// // //     console.log(err, "this error is wrong because we try to fix it...")
// // // })
// // // console.log(p12);

// // let sum = ()=>{
// //     console.log("hey i good");

// // }

// // sum();

// // function avgrule(x,y){
// //    return (1+(x+y/10));
// // }

// // let a =156;
// // let b =56;
// // let c = 543;

// // console.log("the a and b average is", avgrule(a,b));


// // let array = [12,33,54,65,88,332];
// // let array_c = array.join("and");
// // console.log(array_c, "they join the array");
// // console.log(array);
// // let array_2 = [21,5.6456,565,32,11];
// // let array_3 = [123,4235,22,4];
// // let d = array.concat(array_2,array_3, "they concat the value")
// // console.log(d);

// // console.log(array_2.push(0.00), array_2, "they pushh value");
// // console.log(array_3.pop(),array_3, "they pop value");
// // console.log(array.shift(), "they shift the value");
// // console.log(array.unshift(100.00), "they  unshipt value", array);
// // console.log(array.length);
// // let a1 = delete array[0];
// // console.log(a1,array.length);

// // //ascending order

// // let compare = (a, b)=>{
// //     return b - a;
// // }

// // let array_sort = [12,43,0.9,1,2,3,4, -90, 70];
// // array_sort.sort(compare);
// // console.log(array_sort);
// // array_sort.splice(1, 4);
// // let deletedValues = array_sort.splice(1, 4);
// // console.log(array_sort);
// // console.log("deletedValues", deletedValues);

// // //slice and reverse

// // let sli = [1,32,54,67,,44,54];
// // sli.slice(1,3);
// // console.log(sli);
// // sli.reverse()

// // console.log(sli);

// // // push()

// // // Add a new value to the end of an array.

// // // Example: Add a new score to a scores array.

// // // Prompt: “I have [10, 20, 30]. Use push() to add 40 at the end. What does the array look like now?”

// // //map
// // let short_array = [12,32,54,65];

// // let array_short = short_array.map((value, index, array)=>{
// //     console.log(value, index, array);
// //     return value+1;
// // })
// // console.log(short_array, array_short);

// // let good_array = [12,33,433,45];

// // let bad_array = good_array.map((value)=>{
// //     console.log(value);
// //     return value;

// // })
// // console.log(bad_array, good_array);


// // //filter

// // let fil = [12,21,452,431,86];

// // let fill = fil.filter((a)=>{
// //    return a>10;
// // })

// // console.log(fill, fil);

// // //reduce

// // let red = [1,2,3,4,5];

// // let uce = red.reduce((h1,h2)=>{
// //     return h1+h2;
// // })
// // console.log(uce);

// //DOM 
// // console.log(document.body.firstChild);
// // console.log(document.body.lastChild);
// // console.log(document.body.childNodes);

// // console.log(document.documentElement);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.documentElement.parentElement);
// // console.log(document.documentElement.parentNodes);
// // console.log(document.head.previousSibling);
// // console.log(document.body.ChildElementSibling);
// // console.log(document.head.nextElementSibling);
// // console.log(document.body.previousElementSibling);
// // // 🧩 Array Methods — Real-world Prompts

// // // push() → Add a new product to your shopping cart list.
// // // Example: “Add ‘Laptop’ to your shopping cart array.”
// // let  first = ["gasSelender", "bijlibill"] ;
// // let first_posh =  first.push("laptop");
// // console.log(first_posh, first);


// // // pop() → Remove the last watched movie from your watchlist.
// // // Example: “Remove the most recently added movie from the list.”
// // let rm = ["motupatlu", "shiva", "tum se tak", "tu ashiqi hai"];

// // let rm_popp = rm.pop();
// // console.log(rm_popp);
// // // shift() → Remove the first student from the classroom attendance list.
// // // Example: “Remove the first name from the student attendance array.”
// // let shiptt = [12,"rooot", "toor", 432];

// // let sh_shippt = shiptt.shift();
// // console.log(sh_shippt);
// // // unshift() → Add a new student at the start of the class list.
// // // Example: “Add ‘Ali’ at the beginning of the student array.”
// // let student_rolnumber = [12,10,2,3,4,67,90];
// // let add_unshipt = student_rolnumber.unshift(1);
// // console.log(add_unshipt, student_rolnumber);
// // // slice() → Copy the first 3 items of your favorite songs list without changing the original.
// // // Example: “Get only the first 3 songs from the playlist.”

// // let song_list = ["shhoootin", "dewwali", "dewangi", "ashiqi", "mohraa", "dagha","ta ba sa k"];

// // let pick = song_list.slice(0,3);
// // console.log(pick);
// // // splice() → Remove 2 old contacts and add 1 new contact in your phone list.
// // // Example: “Replace 2 friends in the contact array with 1 new name.”
// // let contact = ["03100100", "+919203202", "+320120392", "+11233580823"];

// // let rem = contact.splice(0, 1, "+2211334455");
// // console.log(rem, contact);
// // // sort() → Arrange your exam scores from highest to lowest.
// // // Example: “Sort the numbers in descending order to see who scored the best.”
// // let commpare =(a,b)=>{
// //     return a-b;

// // }
// // let sorrt = [100,50,25,15,5,1.5,-7.5];
// // let srt_array = sorrt.sort(commpare);

// // console.log(srt_array);
 
// // // reverse() → Show the top 5 news headlines in reverse order.
// // // Example: “Reverse the list of headlines to show the latest first.”
// // let rev = ["today news is adyala jail", "today news is amendement of law constitution", "today news is to banned on Pti"];

// // let rmovve = rev.reverse();
// // console.log(rmovve);

// // //⚙️ Functions — Real-world Prompts

// // // Traditional Function
// // // Example: “Create a function called calculateBill that takes item prices and returns the total bill.”
// // function claculate_bill(a,b,c) {
// //     return a+b+c;
// // }

// // let a = 11;
// // let c = 23;
// // let d = 43;

// // console.log("this is total of value",claculate_bill(a,d,c));

// // // Arrow Function
// // // Example: “Use an arrow function to check if a number is even or odd.”

// // let check= (num)=>{
// //     return num%2==0 ? "even": "odd";
// // }
// // let v =prompt("enter your number:");
// // let u  = Number(v);
// // console.log("this is even or odd:", check(u));
// // Function Inside Object
// // Example: “In a user object, create a function getFullName() that returns the user’s full name.”

// // Function Returning Function (Closure)..that return another function.
// // Example: “Write a function that returns another function to calculate discount based on a given percentage.”
// // let table = document.body.firstElementChild;
// // console.log(table.rows);
// // console.log(table.tFoot);
// // console.log(table.tHead);
// // console.log(table);

// // // 🌐 DOM — Real-world Prompts

// // // Access Children:
// // // Example: “Get all the <li> items inside a <ul> list of to-do tasks.”
// // let ul = document.getElementsByClassName("sel")[0];
// // console.log(ul.firstElementChild);



// // // Access Parent:
// // // Example: “Find the parent <div> of a clicked button and change its background color.”
// // let access = document.body.parentNode;
// // access.style.backgroundColor = "red";
// // console.log(access);

// // // Access Siblings:
// // // Example: “After clicking one image, get its next sibling image and apply a border around it.”
// // let siblin = document.head.preiousElementSibling;
// // console.log(siblin);
// // // Change Content:
// // Example: “When a user types in an input box, show the text in a <p> tag below it.”

// // Event Handling:
// // Example: “When the ‘Submit’ button is clicked, run a function that displays a thank-you message.”

// //matches

// // let mat = document.getElementById("text");

// // console.log(mat);
// // console.log(mat.matches("#class"));
// // console.log(mat.matches("#text"));
// // let matt = document.getElementsByClassName("sel")[0];
// // console.log(matt);
// // console.log(matt.closest(".sel"));
// // let mattt =document.getElementById("harry");

// // console.log(mattt.contains(harry));
// //oop
// //protoype.

// // let obj = {
// //     name2: "hashim",
// //     language: "javascript",
// //     run: () =>{
// //         alert("self run")

// //     }
// // }
// // console.log(obj);

// // let p ={
// //     run: ()=>{
// //         alert("run");
// //     }

// // }
// // p.__proto__ ={
// //     name1: "jackie"
// // }
// // obj.__proto__ =p;
// // obj.run();
// // console.log(obj.name1);


// // let obj2 = {
// //     name5: "khani",
// //     language: "javascript",

// // //     run: () =>{
// // //         alert("self run 1")
// // //     }
// // // }
// // // console.log(obj2);
// // // //let obj = {
// // // //     name2: "hashim",
// // // //     language: "javascript",
// // // //     run: () =>{
// // // //         alert("self run")

// // // //     }
// // // // }
// // // // console.log(obj);

// // // let p  = {
// // //     run: ()=>{

// // //     alert("self run");
// // //     }


// // // }
// // //let p ={
// // //     run: ()=>{
// // //         alert("run");
// // //     }

// // // }
// // // p.__proto__ ={
// // //     name1: "jackie"
// // // }
// // // obj.__proto__ =p;
// // // obj.run();
// // // console.log(obj.name1);
// // // p.__proto__ ={
// // //     name3 : "jacobi"
// // // }
// // // obj2.__proto__ = p;
// // // obj2.run();
// // // console.log(obj2.name3);

// // // //
// // // class RailwayForm{
// // //     submit(){
// // //         alert("this is submitted");
// // //     }
// // //     cancel(){
// // //         alert("this is cancel");
// // //     }


// // // }
// // // let harry =new RailwayForm();
// // // let rohan = new RailwayForm();

// // // harry.submit();
// // // rohan.cancel();
// // // // Objects: Honda, Toyota, Tesla
// // // // 👉 The class defines what every car has (engine, color, model) and what every car can do (start, stop).
// // // class car{
// // //     constructor(name){
// // //         this.name = name;
// // //     }
// // //     start(){
// // //         alert(this.name +  "  car is start");
// // //     }
// // //     stop(){

// // //         alert(this.name +  "  car is stopped");
// // //     }
// // // }
// // // let honda = new car("honda");
// // // let tesla = new car("tesla");
// // // let toyota = new car("toyota");

// // // honda.start();
// // // tesla.stop();
// // // toyota.start();


// // // // class 
// // // //lass: Person
// // // // Objects: Ali, Sara, John
// // // // 👉 The class defines that every person has (name, age) and can do (speak, walk).

// // // class person{
// // //     constructor(name, age){
// // //         this.name = name;
// // //         this.age = age;

// // //     }
// // //     speak(){
// // //         alert(this.name +  "is speaking .age:" + this.age);
// // //     }
// // //     walk(){
// // //         alert(this.name + "is walking  .age:" + this.age);
// // //     }

// // // }
// // // let ahmad = new person("ahmad", 20);

// // // let sahal = new person("sahal", 45);

// // // let lala = new person("lala",40);


// // // ahmad.speak();
// // // lala.walk();
// // // sahal.speak();
// // // /////////\\\\\\\\

// // // class colony{
// // //     constructor (name, No, address, RoadNumber){
// // //         this.name = name;
// // //         this.address  = address;
// // //         this.No =  No;
// // //         this.RoadNumber= RoadNumber;


// // //     }
// // //     pick_address(){
// // //          alert(this.name + "to pick address:" + this.address);
// // //     }
// // //     book_plat(){
// // //        alert(this.name + "to book plat on roadnumber" + this.RoadNumber);
// // //     }
// // //     walkon_road(){
// // //         alert(this.No + "this is no palt is full" + this.address);
// // //     }


// // // }

// // // let colony_book  = new colony("haarry","front_in_web",120, 0.91);
// // // colony_book.pick_address();
// // // colony_book.book_plat();
// // // colony_book.walkon_road();


// // // //

// // // class animal {
// // //     constructor(name, sound){
// // //         this.name = name;
// // //         this.sound = sound;
// // //     }

// // //     runing(){
// // //         alert(this.name +"run after eat" );
// // //     }
// // //     eating(){
// // //         alert(this.name +"they eat grass" + this.sound);
// // //     }

// // // }
// // // class Monkey extends animal{
// // //     banana(){
// // //         alert(this.name + "eat bannana");
// // //     }
// // //     hide(){
// // //         alert("this is thorw error");
// // //     }
// // // }

// // // let buffelo = new animal("buffelo", "awaz_zig_zag");
// // // let mon = new Monkey("chimpo" , "banana");
// // // buffelo.runing();
// // // buffelo.eating();
// // // mon.banana();
// // // mon.hide();
// // // //\\
// // // class employee{
// // //     constuctor(name){
// // //         console.log("this is employee name..");
// // //         this.name = name;
// // //     }
// // //     login(){
// // //         console.log("you are login.....");
// // //     }
// // //     logout(){

// // //         console.log("you are logout.....");
// // //     }

// // //     requestLeave(Leave){
// // //        console.log(`you are requested for leave${Leave}.... this is on your end`);
// // //     }

// // // }
// // // class programmer extends employee{
// // //     constuctor(name){
// // //         console.log(`${name}.this is employee name..`);
// // //         this.name = name;
         
// // //     }
// // //     requestcoffee(x){
// // //         console.log(`to request a coffee ${x}.`);
// // //     }
// // //     requestLeave(Leave){
// // //         super.requestLeave(4)
// // //        // console.log(`the employee to request you ${Leave+1}`);
// // //        console.log("one extra is granted");
// // //     }
// // // }
// // // let e = new programmer("harry");
// // // e.login();
// // // e.requestLeave(3);

// // // // async and await
// // // async function greet(){
// // //   let p10  = new Promise((resolve, reject)=>{
// // //     setTimeout(()=>{
// // //         resolve("this is promise");
// // //     },2000);
// // //   })
// // //   let p11 = new Promise((resolve,reject)=>{
// // //     setTimeout(()=>{
// // //          reject("this is error");
// // //     },3000);
// // //   });
// // //   try{
// // //   let value1 =  await p10;
// // //   console.log(value1);

// // //   let value2 = await p11;
// // //   console.log(value2);
// // //   }
// // //   catch(err){
// // //       console.log("this is an 1st error", err);
// // //   }
// // // }
// // // greet();
// // // //promise
// // // let p23 = new Promise((resolve, reject)=>{
// // //    setTimeout(()=>{
// // //     resolve("this is resolve");
// // //    },2000);
// // // })
// // // let p22 = new Promise((resolve, reject)=>{
// // //     setTimeout(()=>{
// // //         reject("this is error throw");
// // //     },3000);
// // // });
// // // p23.then((value)=>{
// // //     console.log(value);
// // // }).catch((err)=>{
// // //     console.log("this is error fix", err);
// // // });

// // // p22.then((value)=>{
// // //     console.log(value);

// // // }).catch((err)=>{
// // //     console.log("this is second catch", err);
// // // });

// // // class person2{
// // //     constructor(name, age){
// // //         this.name = name;
// // //         this.age = age;
// // //     }
// // //    login(){
// // //     alert(this.age +"this is login"+ this.name);
// // //    }   
// // //    sinin(){
// // //     alert(this.name+"this is signin"+this.age);
// // //    }
 
// // // }
// // // let p1 = new person2("hashim", 13);
// // // p1.login();
// // // p1.sinin(); 
// // // //event loop
// // // console.log(13);
// // // setTimeout(()=>{
// // //     console.log(12);
// // // },2000);
// // // console.log(14);
// // // //destructuring
// // // let arr = [12,34,65,65];
// // // let [a,b,c,d] = arr;
// // // console.log(a,b,c,d);

// // // //2nd example
// // // let array1 = [31,43,435,66];
// // // let [a1,b2,c1,d3] = array1;
// // // console.log(a1,b2,c1,d3);
// // // //3rd example
// // // let array3  = [12,342,463,753,897];
// // // let [q,...rest] = array3;
// // // console.log(q,rest); 

// // // //4th example 
// // // //object destructuring 

// // let {t,y} = {t:1, y:23};
// // console.log(t,y);
// // let arry = [12,43,654,321];
// // let obj1 = {...arry};
// // console.log(obj1);

// // // //IIFE
// // // (function (){
// // //     console.log(1200);
// // // })();


// // // //prototype

// // // let q2 ={
// // //     name2: "hahsim",
// // //     age: 12
// // // }


// // // console.log(q2);
// // // let p10 = {
// // //     run:()=>{
// // //         alert("run");
// // //     }

// // // }

// // // p10.__proto__={
// // //     name: "jacy",
// // // }

// // // q2.__proto__= p10;

// // // q2.run();
// // // console.log(q2.name);

// // // // How would you loop through numbers 1–100 and count how many are even?

// // // // How would you loop through an array and find duplicate values?

// // // // How would you stop a loop as soon as you find a specific element?

// // // // What problem requires nested loops to solve?
// // // let count = 0;
// // // for(let i=1; i<=100; i++){
// // //     if(i%2==0){
// // //         console.log("this is even", i);
// // //          count++;
// // //     }
   
// // // }
// // // console.log(`this is even =`, count);
// // // // Print the multiplication table of a number entered by the user.
// // // let number1 = prompt("enter your choice number");
// // // let nomber1 = Number(number1);
// // // for(let i = 1; i<=10; i++){
// // //     console.log(`${nomber1}X${i}= ${nomber1*i}`);
// // // }
// // // // Create a pattern like this using loops:
// // // for(let i=7; i>=1; i--){
// // //     let row = "";
// // //     for (let j=1; j<=i; j++){
// // //         row+="*";
// // //     }
// // //     console.log(row);
// // // }
// // // // Conditions

// // // // Take a number input from user and check if it is positive, negative, or zero.

// // // // Take a grade (A, B, C, D, F) and print the corresponding description.

// // // // Check if a number is divisible by 3 and 5, print different messages accordingly.

// // // let num = prompt("enter a number");
// // // let nom = Number(num);
// // // if(nom>1){
// // //     console.log("this is positive", nom);
// // // }
// // // else if(nom<1){
// // //     console.log("this is negative");
// // // }
// // // else{
// // //     console.log("this is zero");
// // // }

// // // ////....///,,,,,.....
// // // let grade = prompt("enter the grade");
// // // if(grade==="A"){
// // //     console.log("this is grade and pass");
// // // }
// // // else if(grade==="B"){
// // //     console.log("this is grade B and pass between.");
// // // }
// // // else{
// // //     console.log("other grade");
// // // }
// // // //...,,,////,,,...///
// // // let a13 = prompt("enter your number");
// // // if(a13%3==0){
// // //     console.log("this is divisible by 3");
// // // }
// // // else if(a13%5==0){
// // //     console.log("this is divisible by 5");
// // // }
// // // // Async / Await & Promise

// // // // Simulate fetching user data from a server (use setTimeout inside a Promise) and log the data using async/await.


// // // // Create two promises, one resolves in 2 seconds and one rejects in 3 seconds. Handle them properly with .then/.catch.

// // // let p12 = new Promise((resolve, reject)=>{
// // //     setTimeout(()=>{
// // //         resolve(23);

// // //     },2000);

// // // }).then((value)=>{
// // //     console.log(value);

// // // }).catch((err)=>{
// // //     conole.log(err, "this is error");
// // // });
// // // let p2 = new Promise((resolve, reject)=>{
// // //     setTimeout(()=>{
// // //         reject(23);
// // //     },3000);
// // // }).then((value)=>{
// // //     console.log(value);
// // // }).catch((err)=>{
// // //     console.log(err,"this is error");
// // // });

// // // // Write an async function to fetch two different API endpoints sequentially.
// // // // async function greet(){
// // // //     let a fetch("")
// // // // }
// // // // DOM

// // // // Change the background color of a page when a button is clicked.

// // // // Create a simple todo list where you can add and delete items dynamically.

// // // // On mouse hover over an element, change its text.

// // // // let a12  = document.getElementsByTagName("body");
// // // // document.body.style.backgroundColor = "red";

// // // //todo list
// // // let inpt = document.getElementsByClassName(".inpt")[0];
// // // let btn2 = document.getElementsByClassName(".add")[0];
// // // let btn3 = document.getElementsByClassName(".delete")[0];

// // // btn2.addEventListener("click", function(){
// // //     inpt.value += "value";
// // // });
// // // btn3.addEventListener("click",function(){
// // //     inpt.value = "";
// // // });
// // // console.log(btn2);
// // // Destructuring

// // // Destructure values from an array [1,2,3] into variables a,b,c.

// // // Destructure properties name and age from an object {name:"Ali", age:25}.
// // //1st example
// // let array12 = [12,43,13];
// // let [a0,b1,c3,d2] = array12;
// // console.log(a0,b1,c3,d2);

// // //2nd example
// // let {name, age} = {
// //     name:"ali",
// //     age: 25
// // };
// // console.log(name, age);
// // let obj = [...array12]
// // console.log(obj);

// // // IIFE

// // // Create an IIFE that prints “Hello World” immediately.

// // // Create an IIFE that calculates and logs the sum of two numbers given as arguments.
// // (function greet(){
// //     let a = "hello world";
// //     console.log(a);
// // })();


// // (function claculate(a,b){
// //     console.log( a+b);
   
// // })(21,45);

// // // 10. Hoisting
// // var a;
// // console.log(a);
// // a=10;
// // console.log(a);

// // //2nd question
// // console.log(bc);
// // var bc = 12;


// /////////\\\\\\\  closure

// function greet(){
//     let count = 0;

//    function seet(){
//      count++;
//        console.log(count);    
//  }   
//        return seet;
// }
// //hositing

// var  a;
// console.log(a);
// a = 10;
// console.log(a);

// let a12 ={
//     name: "hashim",
//     language: "javascript"

// }
// console.log(a12);

// let p = {
//     run:()=>{
//         alert("run");
//     }
// }
// p.__proto__ = {
//     name2: "jackie"
// }

// a12.__proto__= p;
// a12.run();

// const p89 = fetch("https://dog.ceo/api/breeds/image/random");
// p89.then((value1)=>{
//     return value1.json();
// });
// p89.then((value2)=>{
//     console.log(value2);
// });

// let a21 = ("ok");
// document.cookies = a21;
// console.log(document.cookies);

// let aa43 = prompt("enter your key");
// let b56 =  prompt("enter your value");

// console.log(localStorage.setItem(aa43, b56));

// let key2 = prompt("you write key");

// let value2 =  prompt("you write value");

// console.log(localStorage.setItem(key2, value2));
// console.log(localStorage.getItem(key2, value2));

// function greet(a,b){
//    return a+b;

// }

// console.log(greet(12,34));

// let great=(a,b)=>{
// return a+b;  
// }
// console.log(great(34, 56));

// let reel =(a,b)=> a+b;
// console.log(reel(23,76));
 
// (async()=>{
//    let promise = new Promise((resolve,reject)=>{
//        setTimeout(() => {
//         resolve("this is IIFE");
//        },2000);
//    }).then((value)=>{
//         console.log(value);
//    }).catch((err)=>{
//       console.log(err);
//    })
// })();

// function graet(a,b,callback){
//    callback();
//    console.log(a,b);
// }graet(12,34, function(){
//   console.log("i am callback");
// });
// let array = [12,32,43,64];
// console.log(array);

// let array2 = [12,5345,654,64,6432,6543 ] 
// for(array32 of array2){
//     console.log(array32);
// }

// let array43 =  [12,34324,543,1454,434];
// console.log(array43.push(12));
// console.log(array43.shift(12));
// console.log(array43.unshift(12));
// console.log(array43.pop(12));

// let string = ["this is array to convert from array to string"];
// console.log(string.toString());
// console.log(array43.join("--"));
// console.log(string.concat(array43));
// console.log(array43.reverse());
// console.log(array43.slice(1,5));
// console.log(array43.splice(0,1,23,32));

// let array56 = [10,9,8,7,6,5,4,3,2,1];
// array56.sort((a,b)=>a - b);
// console.log(array56);

// let array76 = [1,2,3,4,5,6,7,8,9,10];
// array76.sort((b, a)=>b-a);
// console.log(array76);                                                                 



// let array12 = [12,56,98,9];
// let array34 = array12.forEach((value)=>{
//     console.log(value);
// });

// let array456 = [67,89,9,45];
// let array67  = array456.map((value)=>{
//     return value*7;
// })
// console.log(array67);

// let array678 = [543,908,786];
// let array5678 = array678.filter((value)=>{
//   return value>990;
// })
// console.log(array5678);

// let array89 = [90,67,453,655];
// let array098 = array89.reduce((value1, value2)=>{
//     return value1+value2;
// })
// console.log(array098);

// let string34 = "they are string";
// console.log(string34.length);

// let str = "this is string";

// console.log(str.slice(0,3));
// console.log(str.replace("this is string","this is replace method"));
// //length – get text length (form validation)

// // slice() – cut part of text (preview/summary)

// // substring() – extract text by index (UI text control)
// let str2 = "this is string";
// console.log(str2.substring(0,1));

// // substr() – extract fixed-length text (legacy support)

// let str5 = "this is string";
// console.log(str5.substr(0,5));

// // replace() – change text (sanitize input)

// // replaceAll() – replace all matches (cleanup content)

// let str4 = "this is string and this is javascript";
// console.log(str4.replaceAll("this", "that"));

// // toUpperCase() – convert to uppercase (UI formatting)

// let str6 = "string";
// console.log(str6.toUpperCase());

// // toLowerCase() – convert to lowercase (case-insensitive compare)
// let str8 = "THIS IS STRING";

// console.log(str8.toLowerCase());

// // trim() – remove extra spaces (form input cleaning)
// let str9 = "   this is string  ";
// console.log(str9.trim);
// // trimStart() – remove leading spaces (user input)
// let str10 = "   hello";
// console.log(str10.trimStart());
// // trimEnd() – remove trailing spaces (user input)
// let str11 = "    this is string   ";
// console.log(str11.trimEnd());
// // includes() – check word existence (search/filter)
// let str12 = "this is string";
// console.log(str12.includes(str));
// // startsWith() – validate prefix (URL/email check)
// let str13 = "this is string 12   ";
// console.log(str13.startsWith("this"));

// // endsWith() – validate suffix (.com, .jpg)
// let str45 ="@this is";
// console.log(str45.endsWith("is"));
// // split() – convert string to array (tags, CSV)
// let str56 = "this is string ";
// console.log(str56.split());
// // charAt() – get character at index (masking)
// let str459 = "that are url";
// console.log(str459.charAt(7));
// // charCodeAt() – get character code (encoding)
// let str457 = "you are string";
// console.log(str457.charCodeAt("y"));


// let number = Math.floor(Math.random()*10)+1;

// let guess ;
// while(guess!==number){
//     guess= Number(prompt("enter you guess number"));
//     if(guess===number){
//         console.log("you guess number correct", number);
//     }
//     else if(guess>number){
//         console.log("you guess number is high",number);
//     }
//     else{
//         console.log("you are guess number is low",number);
//         }
// }

// let array667 = [12,37,12,12,37,37,63,63,90,90,21,21];
// let array67dup = array667.filter((value, index)=>{
//     return array667.indexOf(value)===index;
// });
// console.log(array667, array67dup);
// //Print numbers from 20 to 100

// for(let i=20; i<=100; i++){
//     console.log(i);
// }

// //Print even numbers between 20–100
// for(let i=20; i<=100;i++){
//     if(i%2==0){
//         console.log(i, "even");
//     }
// }


// // Sum of numbers from 20–100
// let sum2 =0;
// for(let i=20; i<=100; i++){
   
//    sum2+=i;
//    console.log(sum2);
// }

// // Count digits of a number
// let num = 3456;
// let count = 0;
// while(num>0){
//     count++;
//     num = Math.floor(num/10);
// }
// console.log(count);

// //basic
// let s12 = 12;
// console.log(s12);

// const r = 12;
// console.log(r);

// const r1 = 23;
// console.log(r1);

// var a = 12;
// console.log(a);

// let a1 = prompt("enter your number");
// let b = parseInt(a1);
// if(b<=12){
//     console.log("this is agree");
// }
// else if(b>12){
//     console.log("this is not agree");
// }
// console.log(b);

// let ab = prompt("enter your number");
// for(ab=0; ab<=12; ab++ ){
//     console.log(ab);
// }
// console.log(ab);

// let bc = prompt("enter your number");
// let bd = parseInt(bc);
// while(bc<10){
//     bc++;
// }
// console.log(bc);
// let qa = 12;
// let qd = 23;  
// function name1(qd, qa){
//   return qd-qa;

// }
// console.log(name1(qa,qd));

// let abc = "this is string";
// console.log(abc);


// let uppercase = "this is string";
// console.log(uppercase.toUpperCase());

// let lowercase = "this is lowercase";
// console.log(lowercase.toLowerCase());


// let abcd = "this is string";
// console.log(abcd.slice(1,2));

// let abcde = "this is string";
// console.log(abcde.length);

// let abcdef = "    this   is    string   ";
// console.log(abcdef.trim());

// let abcdefg = "    this is string";
// console.log(abcdefg.trimStart());
// let abcdefghi = "this is string     ";
// console.log(abcdefghi.trimEnd());

// let abcdefgh = "this is string";
// console.log(abcdefgh.includes("is"));


// //basic practice on question
// //Reverse a number

// let numbert   = 1234;
// let reverse = 0;

// while(numbert>0){
//     let digit = numbert%10;
//     reverse = reverse *10 + digit;
//     numbert = Math.floor(numbert/10);
// }
// console.log(reverse);

// //Sum of digits

// let number45 = 678;
// let sum = 0;
// while(number45>0){
//   let digit = number45%10;
//   sum = sum%10+digit;
//   number45=  Math.floor(number45/10);
// }
// console.log(sum);

// //basic half js array

// let array102 = [12,45,"hasim" , 34, "khan", "i", 12, "am", "13", "number" ];
// console.log(array102.shift());
// console.log(array102.unshift());
// let array23 = [12,43,56,34,99,28,55,1,3];
// console.log(array23.splice(0,1,23,44));


// let array24 = [12,443,544,54,23,67,85,4];
// console.log(array24.push());
// console.log(array23.pop());


// let array45 = [12,43,67,34,94];
// console.log(array45.length);

// let a708 = [1,2,43,44];
// let a102 = a708.map((value)=>{
//     return value+1;
// });
// console.log(a102);


// let arrayt56= [123,453,1254,653];
// arrayt56.forEach((value, index,arr)=>{
//      if(index===1){
//         arr[index]= value+122;
//      }
// });
// console.log(arrayt56);
// // Print numbers from 20 to 100
// for(let i=20; i<=100; i++){
//     console.log(i);
// }

// // Print even numbers between 20–100
// for(let i = 20; i<=100; i++){
//     if(i%2==0){
//         console.log("this is even number");
//     }
//     else{
//         console.log("this is od number");
//     }
// }
// // Print odd numbers between 20–100
// for(let i=20; i<=100; i++){
//     if(i%2==1){
//         console.log("this is odd");

//     }
//     else{
//        console.log("this is even");
//     }
    
// }
// // Sum of numbers from 20–100
// let sum678 = 0;
// for(let i=20; i<=100; i++){
//     sum678+=i;

// }
// console.log(sum678);

// // Count digits of a number
// let numbers = 324509710;
// let counts78 = 0;
// while(numbers>0){
//     counts78++;
//     numbers= Math.floor(numbers/10);
// }
// console.log(numbers, counts78);

// // Reverse a number
// let numberss = 34456;
// let reversed = 0;
// while(numberss>0){
//     let digit = numberss % 10;
//     reversed = reversed * 10 + digit;
//     numberss = Math.floor(numberss/10);


// }
// console.log(reversed);


// // Palindrome number
// let numbersd =  prompt("enter your plaindrome numbers ");
// let numberid = parseInt(numbersd);
// let ioriginal = numberid;
// let reversedd = 0;
// while(numberid>0){
//    let digits = numberid%10;

//    reversedd = reversedd * 10 + digits;
//    numberid = Math.floor(numberid/10);
// }
// if(ioriginal==reversedd){
//     console.log("this is palindrome");
// }
// else{
//     console.log("this is not plaindrome");
// }

// // Prime number check
// let numberprime = 7;
// let isprime = true;
// if(numberprime<=1){
//     isprime= false;

// }
// else{
//     for(let i=2 ; i<numberprime; i++){
//         if(numberprime%i===0){
//             isprime = false;
//             break;
//         }
//     }
// }
// if(isprime){
//     console.log("this is prime", isprime);
// }
// else{
//     console.log("this is not prime");
// }
// // Print all primes between 20–100

// for(let i=1; i<=100; i++){
// let iSprime = true;

// if(i<=1){
//     iSprime = false;
// }
// else{
//     for(let j = 2; j<i; j++){
//         if(i%j===0){
//         iSprime=false;
//         break;
//     }
// }
// }
// if(iSprime){
//     console.log("this is prime",i);
// }
// else{
//     console.log("this is not prime",i);
// }
// }


// // Factorial of a number


// let set = "this is a animal";
// setTimeout(()=>{
//     console.log(set);
// },5000);
// console.log(set);
// setInterval(() => {
//     console.log(set);
// }, 2000);

// function homework(subject, callback){
//     console.log('home work is done',subject);

// callback()
// }
// function finishhomework(){
//     console.log("finised homework");
// }
// homework("javascript",finishhomework);


// //callback
// function firstfunction(subject, callback){
//     console.log("this is function",subject);
//      callback();
// }
// function secondfunction(){
//     console.log("this is second function");
// }
// firstfunction("javascript",secondfunction);

// //hoisting
// let de ;
// console.log(de);
// de = 10;
// console.log(de);


// console.log(sw);
// var sw ;
// console.log(sw);
// sw =10;
// console.log(sw);


// ///closure

// function declare(subject){
//     console.log("this is logg");

// function declaresecond(){
//     console.log("this is second", subject);
//   }
//   declaresecond();
// }
// declare("this is function inner not outer");

// //IIFE
// (function iife(a,b){
//     return a+b;
// })(12,43);

// let wo = {
//     name : "harry",
//     age :23,

// }
// console.log(wo);




// let a25 = {
//     run:()=>{
//         console.log("run");
//     }

    
// }
// wo.__proto__ ={
// name : "jackie",
    
// }
// wo.__proto__ = a25;
// a25.run();

// let erf = 12;
// document.cookie = 'erf=${erf}';
// alert(document.cookie);

let a = 12;
console.log(a);


let b = 12;
let c = "a string";
console.log(b+c);

let d = 23;
let e = "this is string";
console.log(d-e);

let f = 43;
let g = "this is ";
console.log(f*g,f/g);


let i = 33;
let j  = "1";
console.log(i+j);
console.log(i-j);
console.log(i*j);
console.log(i/j);


//swap

let a1 = 13;

let b1 = 12;
//1st method
a1 = a1+b1;  //25
b1 = a1-b1;  //13
a1 = a1-b1;   //12
console.log(a1,b1);
console.log(b1);

//2nd method
let destructoring= [a1,b1] = [b1,a1];
console.log(destructoring);

//3rd method

let a2 = 23;
let b2 = 32;
let c2;

 c2 = a2;
 a2 = b2;
 b2 = c2;
 console.log(a2,b2);

//condition 

let age = Number(prompt("enter your age"));
if(isNaN(age)){
    console.log("this is invalid input");

}
else if(age>=18){
    console.log("this is valid for vote");
}
else {
    console.log("this is not valide for vote");


}


let math1 =  12.09;
console.log(Math.ceil(12.09));

let math2  = 12.009;
console.log(Math.floor(12.009));

let math3 = 12.0098;
console.log(Math.round(12.0098));
console.log(Math.pow(2,2));

console.log(Math.min(2,20,4));
console.log(Math.max(2,540,907));
console.log(Math.trunc(12.091));
console.log(Math.abs(-2));
console.log(Math.sqrt(2));
console.log(Math.cbrt(2,2));
console.log(math1.toFixed(12.09));

//basicvariable example;
//basic condition
//baisc operator

//basic unary operator

let array  = [12,13,15,20,17,19];
console.log(Math.max(...array));
// //2nd method
let max = array[0];
for (let value of array){
  if(value>max){
    max = value;
 }
}
console.log(max);

//🟢 Super Easy

// Print a number
let ab = 12;
console.log(ab);

// Print sum of two numbers
let abc = 43
let cb = 43;
console.log(abc+cb);
// Swap two variables
let bv= 34;
let da = 54;
let ac = bv;
bv = da;
da = ac;
console.log(bv,da);


// Check number is positive
for(let i = -1; i<=10; i++){
  if(i>=0){
    console.log(i,"this is positive");
  }
  else{
    console.log(i,"this is negative");
  }
}

// Check number is negative
for(let i = -10; i<=10; i++){
  if(i<=0){
    console.log(i,"this is ngative");
  }
  else{
    console.log(i,"this is positiv");
  }
}

// Print even numbers till N
for(let i=1; i<=10; i++){
  if(i%2==0){
    console.log("this is even");
  }
  else{
    console.log("this is odd");
    
  }
}
// Print odd numbers till N
for(let i=1; i<=10; i++){
  if(i%2==1){
    console.log("this is odd");
  }
  else{
    console.log("this is even");
    
  }
}


// Convert string to number
let co = prompt("enter the string to convert numeber");
console.log(Number(co));

// Add two user inputs
let first  = Number(prompt("this is first"));
let second = Number(prompt("this is second"));
let third = first+second;
console.log(third);


// Find square of a number
let sq = Number(prompt("this is entry"));
console.log((sq*2));




