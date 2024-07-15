// Synchronous Programming
// Definition: In synchronous programming, tasks are performed one after the other. Each task waits for the previous one to complete before it starts.
// Example:
// function firstTask() {
//     console.log('First task completed');
// }

// function secondTask() {
//     console.log('Second task completed');
// }

// firstTask();  //First task completed
// secondTask();  //Second task completed


// secondTask(); //Second task completed
// firstTask();  //First task completed



///////////////////////////////////////////////////////////////////////////



// Asynchronous Programming
// Definition: In asynchronous programming, tasks can be initiated and may run concurrently without waiting for other tasks to complete. This allows for more efficient use of resources, especially in operations that involve waiting, such as I/O operations or network requests.
// Example:

// function firstTask() {
//     setTimeout(() => {
//         console.log('First task completed');
//     }, 1000);
// }

// function secondTask() {
//     console.log('Second task completed');
// }

// // firstTask();    //Second task completed
// //                 //First task completed
// // secondTask();

// secondTask();  //Second task completed
//                 //First task completed
// firstTask()

// When we don't add millisecond timing, the operation might execute immediately or with default timing.

// function firstTask() {
//         setTimeout(() => {
//             console.log('First task completed');
//         });     
//     }
    
//     function secondTask() {
//         console.log('Second task completed');
//     }
    
//     firstTask();    //Second task completed
//                     //First task completed
//     secondTask();
    
//     secondTask();  //Second task completed
//                     //First task completed
//     firstTask()
    
//"Output is displayed, but the timing is not being handled properly."
    //////////////////////////////////////////////////////////////


    //// When we use a timeout with 0 milliseconds


    // function firstTask() {
    //     setTimeout(() => {
    //         console.log('First task completed');
    //     },0);     
    // }
    
    // function secondTask() {
    //     console.log('Second task completed');
    // }
    
    // firstTask();    //Second task completed
    //                 //First task completed
    // secondTask();
    
    // secondTask();  //Second task completed
    //                 //First task completed
    // firstTask()
    

// The output is shown, but the timing is not affected by the 0 milliseconds

    
////////////////////////////////////////////////////////


//Asynchronous with Callback:

// function fetchData(callback: (data: string) => void) {
//     setTimeout(() => {
//         callback('Data fetched');
//     }, 2000);
// }

// function processData(data: string) {
//     console.log(data);
// }

// fetchData(processData);   //Data fetched after 2000 miliseconds


////////////////////////////////////////////////////////


//cuncurrency.... (allows us to manage multiple at once)

//promisses
//callback function
//async /await 

// It is used to speed up performance and achieve multiple types of behavior.

////////////////////////////////////////////////////////////////

// What are Promises?
// Promises are a way to handle asynchronous operations. They indicate whether an operation will complete or not, and if it does, when and with what result.

// Basic Structure of a Promise
// A promise exists in three states (stages):

// Pending: The promise is not yet complete.
// Fulfilled: The promise has been successfully completed.
// Rejected: The promise has failed and an error occurred.

// How to Use Promises
// Creating a Promise

// You create a new promise using `new Promise`.
// A promise takes two arguments: resolve (for success) and reject (for failure).



// function fetchData1(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true; // Simulate a successful fetch
//             if (success) {
//                 resolve('Data fetched successfully');
//             } else {
//                 reject('Failed to fetch data');
//             }
//         }, 2000); // Simulate a 2-second delay
//     });
// }

// fetchData1()
//     .then((data) => {
    //     console.log(data); // Output: Data fetched successfully
    // })
    // .catch((error) => {
    //     console.error(error); // Output: Failed to fetch data (if error occurs)
    // });

////////////////////////////////////////////////////////

// its providing from javascript means settimeout function
//setTimeout //no error
//setTimeout() // Error occurs because it expects a callback. In simple terms, it is a function that expects a callback, which means it expects two things: a time interval and a callback function.


// setTimeout(function () { //callback function
//     console.log("hello , world!");
// },1000) // Time interval of 1000 milliseconds is the timeout delay.



// console.log("one");
// setTimeout(function () {
//        console.log("hello , world!");
//      },1000)
      
// console.log("two");

// console.log("one");

// function greet(){
//     console.log("hello , world!");
// }
// setTimeout(greet,2000)
      
// console.log("two");

// function washing(callback1:any){ //error when we are not use type error solve using any

// console.log("washing started");
// setTimeout(()=>{
// console.log("washing done");
// callback1();
// },5000)
// }
// function soaking(callback2:any){
// console.log("Soaking started");
// setTimeout(() => {
//     console.log("Soaking done");
//     callback2() 
// }, 3000);
// }

// function drying(callback3:any){
//     console.log("drying started");
//     setTimeout(() => {
//         console.log("drying done");
//     callback3();
//     }, 2000);
//     }

//     function foldingCloth(){
//         console.log("folding started");
//         setTimeout(() => {
//             console.log("folding done");
        
//         }, 1000);
//         }
// console.log("folding laundry");

// washing(()=>{
// soaking(()=>{   // It's not a good practice because it's callback hell; it's nested.
// drying(()=>{
// foldingCloth();
// })
// });
// });

// console.log("i am making biryani");

// Use promises because they provide a better alternative to callbacks.


// function washing(){
//     console.log("washing started");
//     return new Promise((resolve, reject)=>{
//  setTimeout(() => {
//     resolve("washing done")
//  },5000 );
//    })
     
//  }

//  function soaking(){
//     console.log("soaking started");
//     return new Promise((resolve, reject)=>{
//  setTimeout(() => {
//     resolve("soaking done")
//  },3000 );
//    })
     
//  }

//  function drying(){
//     console.log("drying started");
//     return new Promise((resolve, reject)=>{
//  setTimeout(() => {  
//     resolve("drying done")
//  },2000 );
//    })   
//  }

//  washing().then((value)=>{ //using for washing
// console.log(value);
// //soaking() not return 
// return soaking();
// }).then((value)=>{
// console.log(value); //using for soacking
// return drying();
// }).then((value)=>{
//     console.log(value); //using for drying
// }).catch((error)=>{

//    console.log(error); // A single `catch` block will handle all errors because it is more efficient.

   
// })









    



