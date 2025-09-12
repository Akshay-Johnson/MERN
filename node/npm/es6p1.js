// function sum(a1=100,a2) {
//     let add=a1+a2;
//     return add;
// }
// console.log(sum(undefined, 20));


// const arr=["mi","oppo"]

// arr.push(1)
// arr.push('apple')
// console.log(arr)

// arr1=["sam","sung"]
// console.log(arr1)

// class sample{
//     constructor(num1,num2){
//         this.num1=num1
//         this.num2 = num2 
//     }
//     display(){
//         console.log("hai"+(this.num1 + this.num2))
//     }
// }


// var obj= new sample(20,30)

// console.log(obj.num1);
// obj.display()


// class sample{
//     samplehello(){
//         console.log("hello")
//     }
// }

// class hello extends sample{
//         constructor(num1,num2){
//         super()
//         this.num1=num1
//         this.num2=num2

//     }
//     hai(){
//         console.log("hai "+(this.num1+this.num2))
//     }

// }

// let obj=new hello(20,30)
// obj.hai()
// obj.samplehello()

// let add1=(a,b) => console.log(a+b)
// add1(10,3)

// let display=() => console.log("hello world")
// display()

////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function student(name,id,address){
//     this.name=name
//     this.id=id
//     this.address=address
//     this.display=function(){
//         console.log(this.name+" "+this.id+" "+this.address)
//     }
// }

// var std1=new student("sam",101,"chennai")
// var std2=new student("sachin",102,"banglore")
// console.log(std1.name)
// console.log(std1)
// std2.display()


//exception error handling

// try{
//     if(a===0){
//         throw "go to catch block"
//     }
// }
// catch(err){
//     console.log(err)
// }finally{
    
// } 

//exception error handling with division method example

// function divide(a,b){
//     try{
//         if(b===0){
//             throw "Division by zero error"
//         }
//         return a/b
//     }
//     catch(err){
//         console.log(err)
//     }
//     finally{
//         console.log("Execution completed")
//     }
// }

// divide(10,0)

//callback
//synchronous

// function task(milisecondtime){
//     dt=new Date()
//     while((new Date-dt)<= milisecondtime){}

// }

// console.log("task1 started")
// task(5000)
// console.log("task1 completed")

// console.log("task2 started")
// task(3000)
// console.log("task2 completed")  

// console.log("task3 started")
// task(4000)
// console.log("task3 completed")


//asynchronous

// function task(milisecondtime,callback){
//     setTimeout(callback,milisecondtime)
// }

// console.log("task1 started")
// task(5000, () => {
//     console.log("task1 completed")
// })

// console.log("task2 started")
// task(3000, () => {
//     console.log("task2 completed")
// })

// console.log("task3 started")
// task(4000, () => {
//     console.log("task3 completed")
// })  

//example

// var getData=function(data){
//     console.log("data: " + data)
// }

// var callData=function(callback){
//     callback("sample data")
// }

// callData(getData)


//callback example

// let sum=0;

// function add(num1,num2,callback){
//     let err = false
//     if(num1=0){
//         err=true
//     }else{
//         sum=num1+num2
//     }
   
// }

//callback example

// function add(num1, num2, callback) {
//     let err= false
//     if(num1===0){
//         err=true
//         console.log("Error: num1 is zero");
//     }else{
//     let sum = num1 + num2;
//     console.log("Addition:", sum);
//     callback(sum, num2);}
// }

// function multiply(num1, num2, callback) {
//     let product = num1 * num2;
//     console.log("Multiplication:", product);
//     callback(product, num2); 
// }

// function divide(num1, num2) {
//     let result = num1 / num2;
//     console.log("Division:", result);
// }

// add(2, 5, function(sum, num2) {
//     multiply(sum, 10, function(product, num2) {
//         divide(product, 10);
//     });
// });

//promise example 

function addition(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 === 0) {
            reject("Error: num1 is zero");
        } else {
            let sum = num1 + num2;
            resolve(sum);
        }
    });
}

function multiplication(num1, num2) {
    return new Promise((resolve, reject) => {
        let product = num1 * num2;
        resolve(product);
    });
}

function division(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 === 0) {
            reject("Error: Division by zero");
        } else {
            let result = num1 / num2;
            resolve(result);
        }
    });
}


addition(1, 5)
    .then(sum => {
        console.log("Addition:", sum);
        return multiplication(sum, 10);
    })
    .then(product => {
        console.log("Multiplication:", product);
        return division(product, 10);
    })
    .then(result => {
        console.log("Division:", result);
    })
    .catch(error => {
        console.error(error);
    });

// example

function getName(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("John Doe");
        }, 5000);
    });
}

function getAddress(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("123 Main St, Anytown, USA");
        }, 3000);
    });
}


async function getUser(){
    let name= await getName()
    console.log(name)
    let address= await getAddress()
    console.log(address)
}

getUser()