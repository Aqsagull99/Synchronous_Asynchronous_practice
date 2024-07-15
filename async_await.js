// Concurrency allows multiple tasks to run simultaneously, improving efficiency. Using async/await with try/catch enhances this by simplifying asynchronous code and handling errors gracefully.
// Concurrency: Executes tasks in parallel, not one after another.
// async/await: Makes asynchronous code look synchronous, improving readability.
// try/catch: Catches errors that occur during asynchronous operations, ensuring robust error handling.
/////////////////////////////////////////////////////////
function washing() {
    console.log("washing started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("washing done");
        }, 5000);
    });
}
function soaking() {
    console.log("soaking started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("soaking not done");
        }, 3000);
    });
}
function drying() {
    console.log("drying started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("drying done");
        }, 2000);
    });
}
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
//    console.log(error); // There will be only one catch for everything because it's smart.
// })
//////////////////////////////////////////////////////////////
// async/await is a better process than .then/.catch.
// async function runWashingMachine() {
//     await washing()
//     await soaking()
//     await drying()
// }
// runWashingMachine();
// Washing started
// Soaking started
// Drying started
// Output because neither resolved nor rejected was activated.
/////////////////////////////////////////////////////////////////////
//  async function runWashingMachine() {
//     const result1 = await washing()
//    console.log(result1);
//     const result2 =await soaking()
//     console.log(result2);
//     const result3 =await drying()
//     console.log(result3);
// }
// runWashingMachine();
// Washing started
// Washing done
// Soaking started
// Soaking done
// Drying started
// Drying done
// Output because resolved was activated.
////////////////////////////////////////////////////////  
// Here, try-catch will work instead of then and catch.
async function runWashingMachine() {
    try {
        const result1 = await washing();
        console.log(result1);
        const result2 = await soaking();
        console.log(result2);
        const result3 = await drying();
        console.log(result3);
    }
    catch (error) {
        console.log(error); // If there is a rejection at any point, the execution of the try block will stop, and the catch block will handle it. JavaScript will continue.
    }
    finally {
        console.log(" i will run anyway "); // This has to be executed in any case.
    }
}
console.log("folding laundry");
runWashingMachine();
console.log("i am maiking biryani");
export {};
//  folding laundry
// washing started
// i am maiking biryani
// washing done
// soaking started
// soaking not done
//  i will run anyway  // Output: Now we have achieved concurrency, which means multiple tasks can be performed at the same time.
