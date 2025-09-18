// //Q1. Write a function fetchData(callback) that simulates fetching data with setTimeout. After 2 seconds, it should return "Data fetched!" using the callback.

// function fetchData(callback) {

//     setTimeout(() => {
//         const data ="Data fetched";
//         callback(data);
//     }, 2000);
// }

// fetchData((result) => {
//     console.log(result);
// });

// //Q2.

// function addition(a, b, callback) {
//     const sum = a + b;
//     callback(sum);
// }

// addition(5, 10, (result) => {
//     console.log("Sum:", result);
// });

// //Q3.

// function isEven(num){
//     return new Promise((resolve, reject) => {
//         if(num % 2 === 0){
//             resolve("Even number");
//         } else {
//             reject("Odd number");
//         }
//     });
// }

// isEven(3)
// .then((message) => {
//     console.log("Even number");
// })
// .catch((error) => {
//     console.log("Odd number");
// });

// //Q4.

// function fetchUser() {
//     return new Promise ((resolve) => {
//         console.log("Fetching user...");
//         setTimeout(() => resolve("User fetched"), 2000);
//     });
// }

// function fetchPosts() {
//     return new Promise ((resolve) => {
//         console.log("Fetching posts...");
//         setTimeout(() => resolve("Posts fetched"), 3000);
//     });
// }

// fetchUser()
// .then((message1) => {
//     console.log(message1);
//     return fetchPosts();
// })
// .then((message2) => {
//     console.log(message2);
//     console.log("All data fetched");
// })

// .catch((error) => {
//     console.log("Error:", error);
// }); 

// //Q5.
//  function fetchUserr() {
//     return new Promise ((resolve) => {
//         console.log("Fetching user...");
//         setTimeout(() => resolve("User fetched"), 2000);
//     });
// }

// function fetchPostss() {
//     return new Promise ((resolve) => {
//         console.log("Fetching posts...");
//         setTimeout(() => resolve("Posts fetched"), 3000);
//     }); 
// }

// async function fetchDataAll() {
//     try {
//         const user= await fetchUserr();
//         console.log(user);

//         const posts= await fetchPostss();
//         console.log(posts);

//         console.log("All data fetched");

//     } 

//     catch (error) {
//         console.log("Error:", error);
//     }
// }

//  fetchDataAll();

//Q6.

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("done"), ms);
    });
}

async function runDelay() {
    console.log("Waiting...");
    const result = await delay(3000);
    console.log(result);
}

runDelay();