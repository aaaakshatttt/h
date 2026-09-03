//asyns await
// let getStrawberries = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("strawberries nto found");
//         }, 1000);
//     });
// };

// async function makesmoothie() {
//     try {
//         console.log("open the blender");
//         let strawberries = await getStrawberries();
//         console.log("blend the" + strawberries);
//     } catch (error) {
//         console.error("Error making smoothie:", error);
//     }
// }

// makesmoothie();
// console.log("tv plays song");


// async function harry() {
// let delhiweather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("27 degree celsius");    
//     }, 1000);
// });
// let bangaloreweather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("21 degree celsius");
//     }, 7000);
// });


// delhiweather.then(alert);
// bangaloreweather.then(alert);
// }
// harry();

//Fetch API
// async function getData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users/4");
//     let data = await response.json();
//     console.log("name is" + data.name);
//     console.log("email is" + data.email);
//     console.log(data);
    
    
    
    
// }
// getData();

//Fetch + DOM manipulation  isse kya hoga like jo bhi database mai student ki info aayego we will fetch it and display it on the webpage woahhhhh
// async function getDTA() {
//     let heading = document.querySelector("#title");
// let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
// let data = await response.json();
// heading.innerText = data.name;
// }
// getDTA();

// //practice 
// async function us() {
//     let heat = document.querySelector("#box-heading");
//     let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
//     let data = await response.json();
//     heat.innerText = data.name;
// }

// us();

// async function sub() {
//     let insde = document.querySelector(".inside");
//     let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
//     let data = await response.json();
//     insde.innerText = "email: " + data.email + ", phone: " + data.phone;
// }
// sub();

// //post method
// async function smth() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             name: "John",
//             email: "john@gmail.com",
//             phone: "1234567890"
//         })
//     });
//     let data = await response.json();
//     console.log(data.name);
//     console.log(data.email);
//     console.log(data.phone);
    
    
// }
// smth();

//local storage
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");
// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("age"));

// let user = {
//     name: "Akshat",
//     age: 20,
//     email: "akshat@gmail.com"
// }
// let nigga = localStorage.setItem("user", JSON.stringify(user)); 
// console.log(localStorage.getItem("user"))

// let data = JSON.parse(localStorage.getItem("user"));
// console.log(data.name);
// console.log(data.age);
// console.log(data.email);

//destructuring
// let student = {
//     name: "Rahul",
//     age: 21,
//     course: "BTech"
// };
// let {name,age,course} = student;
// console.log(name + " " + age + " " + course);

let arr = [10,20,30,40];
let [a,b,c,d] = arr;
console.log(a + " " + b + " " + c + " " + d);