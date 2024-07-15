// We use promises because they are better than callbacks. Promises provide a more structured and manageable way to handle asynchronous operations and errors. They avoid callback hell and make the code cleaner and easier to understand.
//////////////////////////////////////


//const promises = new Promise() // Error because it expects a callback.


//const promises = new Promise(function(){}) //()=>{} // This is a callback in the name function.


// const promises = new Promise(()=>{})//()=>{}  This is a callback in the arrow function.

// console.log(promises); //output Promise { <pending> }


// const promises = new Promise((resolve, reject)=>{ //expected two perameters
    
//     reject("error");

// }) 

// console.log(promises); //output error in terminal

// const promises = new Promise((resolve, reject)=>{ //expected two perameters
    
//     resolve("success");

// }) 

// console.log(promises); //output Promise { 'success' }


// const promises = new Promise((resolve, reject)=>{ //expected two perameters
    
//     resolve("success");
    

// }) 
// promises.then((res)=>{
// console.log(res); //output success
// })

// const promises = new Promise((resolve, reject)=>{ //expected two perameters
    
//     reject("failure!!!");
//         }) 
//      promises.then((res)=>{
//      console.log(res); //output error in terminal
//      })

// const promises = new Promise((resolve, reject)=>{ //expected two perameters
    
//         reject("failure");
        
//     }) 
    
// promises.catch((error)=>{

// console.log(error); //output failure..

// }
// )
//////////////////////////////////////////////////////
// Method chaining allows you to call multiple methods on the same object sequentially, by having each method return the object itself. Here's how you can implement and use method chaining in both successful and error scenarios:

// const returnMOney = new Promise((resolve, reject)=>{ //expected two perameters
    
//     setTimeout(() => {
//         //resolve("money returned");
//         reject("not  returned");
//     }, 5000);
    
// }) 

// returnMOney
// .then((value)=>{
// console.log(value); //output success
//  console.log("thank you for returning money");// money returned
// // thank you for returning money


// }).catch((error)=>{

//     console.log(error); //output not returen);
//      console.log("sorry  i can't returning money");// Not returned. Sorry for the inconvenience; I can't return the money.

      
// }).finally(()=>{

//     console.log("// I will not be giving money next time.");
    
// })



// Promises aur Method Chaining:
// Asynchronous Operations: Promises asyncronous operations ko handle karte hain, jo ke if-else statements se possible nahi. Asyncronous operations ka matlab yeh hota hai ke kuch kaam foran nahi hota, balkay kuch waqt baad hota hai (jaise ke server se data lena).
// Error Handling: Promises ka .catch() method specifically errors ko handle karta hai, jo if-else statements se zyada effective hai.
// Readability aur Maintainability: Promises aur method chaining ka code zyada readable aur maintainable hota hai, yani samajhna aur manage karna asaan hota hai. If-else statements se code complex aur mushkil ho jata hai.
// Summary:
// Promises aur method chaining asyncronous kaam ko handle karna asaan banate hain, errors ko better tarike se manage karte hain, aur code ko zyada samajhne layak aur manage karne layak banate hain.













