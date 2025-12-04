// function myfunc() {
//     // alert("Button Clicked");
//     let name = document.getElementById("name").value;
//     let n1 = parseInt(document.getElementById("n1").value);
//     let n2 = parseInt(document.getElementById("n2").value);
//     let sum = n1 + n2;
//     console.log("Hello " + name + ", the sum of " + n1 + " and " + n2 + " is: " + sum);
//     let x=13;
//     if(x>10 && x<20){
//         console.log("x is zero");
//     }
//     else{
//         console.log("x is not zero");
//     }
// }
// function checkResult() {
//     let mark = parseInt(document.getElementById("mark").value); 
//     if(mark >= 90){ 
//         console.log("You have passed the exam with A+ grade");
//     }
//     else if(mark >= 80){
//         console.log("You have passed the exam with A grade");
//     }   
//     else if(mark >= 70){    
//         console.log("You have passed the exam with B+ grade");
        
//     }
//     else if(mark >= 60){
//         console.log("You have passed the exam with B grade");
//     }
//     else if(mark >= 50){
//         console.log("You have passed the exam with C grade");
//     }
//     else{
//         console.log("You have failed the exam");
//     }
// }
// function myfunc() {
//     for(let i=1; i<=100; i++){
//         if(i % 2 === 0){
//         console.log("Iteration number: " + i);
//     }   
                                                     
// }
// }

// JSON data: list of allowed users
const users = [
  { username: "sujan",  password: "12345" },
  { username: "guest",  password: "guest123" }  // extra example user
];

function validateLogin() {
  const userInput = document.getElementById("username").value.trim();
  const passInput = document.getElementById("password").value.trim();

  // Basic validation
  if (userInput === "" || passInput === "") {
    alert("Please enter both username and password.");
    return;
  }

  // Check JSON data for a matching user
  const matchedUser = users.find(
    (u) => u.username === userInput && u.password === passInput
  );

  // Conditional statements
  if (matchedUser) {
    alert(`Login successful! Welcome, ${matchedUser.username}.`);
    // Redirect to your exercise page (relative path from index.html)
    window.location.href = "./tsk/exercise3.html";
  } else {
    alert("Invalid username or password!");
  }
}
function calculate() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let op = document.getElementById("operation").value;
  let result;

  if (isNaN(a) || isNaN(b)) {
    result = "Please enter valid numbers!";
  } 
  else if (op === "add") {
    result = "Result: " + (a + b);
  } 
  else if (op === "sub") {
    result = "Result: " + (a - b);
  } 
  else if (op === "mul") {
    result = "Result: " + (a * b);
  } 
  else if (op === "div") {
    if (b === 0) {
      result = "Division by zero not allowed!";
    } else {
      result = "Result: " + (a / b);
    }
  } 
  else {
    result = "Invalid operation!";
  }

  document.getElementById("result").innerText = result;
}


