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

async function harry() {
  
  let lahorweather =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
       
      resolve("27 deg");
    },2000);
  })
  let islamabadweather = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("21deg");
    }, 3000);
  })

  let lahoreW = await lahorweather;
  let islamabadW = await islamabadweather;

  return[lahoreW, islamabadW];
}
console.log("welcome to he control room");
let a = harry();
console.log(a);


//try and catch

setTimeout(()=>{
  console.log("hackinng the file.........");
},1000);
setTimeout(()=>{
  console.log("then username cracked.....");
},2000);
try{
console.log(rahul);
}
catch(err){
  console.log("bubble bubbble", err);
}

setTimeout(()=>{
  console.log("the file name scratch......");
},3000);

setTimeout(()=>{
  console.log("the passward is hacked.....");
},4000);

setTimeout(()=>{
  console.log("then all file is kacked and email must cracked....... ");
},5000);

//try and catch with message and name of error.

try{
  let age = prompt("your age is:..");
  let age1 = parseInt(age);
  if(age1>102){
  throw new ReferenceError("this is probably error and invalid age.");
}
}
catch(err){
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}
