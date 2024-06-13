// Assignment no 9-11 JS
// Question no 1

//  var city = prompt("Enter your city name.")
// if (city ==="karachi") {
//     console.log("Welcome to city of lights.")
// }


// Question no 2

//  var gender = prompt ( "Enter your gender.")

// if (gender === "male"){
//     console.log("Good Morning Sir")
// } else if (gender === "female"){
//     console.log("Good Morning Ma'am");
// } else { 
//     console.log("wrong gender");
// }



// // Question no 3
//  var color = prompt ( "Enter traffic lights colors") 
// if (color === "red") {
//     console.log( "Must Stop");

// } else if (color === "yellow") {
//     console.log( "Ready to move")

// } else if ( color === "green"){
//  console.log( "Move now");
// } else {
//     console.log( "wrong color");
// }

// // Question no 4

// var remainingFuel = prompt ( "How much fuel is remaining in your car?")
// if ( remainingFuel < "0.25 liters" ){
//     console.log("Please refil the fuel in your car");
// }

    

// Question no 5  

// a. the massage is displayed
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// // b. 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c.condition 2 is true
//     // condition 4 is true
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// e.true
//  if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
//  f.car is smaller than cat
//   if("car" < "cat"){
//     alert("car is smaller than cat");
//      }

// Question no 6
// var marksOfMath = +prompt ("Enter your marks out of 100")
// var marksOfScience = +prompt ("Enter your marks out of 100")
// var marksOfEnglish = +prompt ("Enter your marks out of 100")
// var totalMarks = +  prompt ("Enter total marks")
// var TotalmarksObtained = marksOfMath + marksOfScience  + marksOfEnglish;
// var percentage = (TotalmarksObtained * 100) /totalMarks;
// if (percentage >= 80 && percentage<=100){
//     document.write("<h1>"+ "Marks Sheet" + "</h1>" + "<h4>" + "Total Marks: " + totalMarks  + "</h4>" + "<h4>" + " Marks Obtained : " + TotalmarksObtained  + "</h4>" + "<h4>" + "Percentage : " + percentage  + "</h4>" + "<h4>" + "Grade: A-One" + "</h4>" + "<h4>" + "Remarks : Excellent" + "</h4>")
// }
// else if (percentage >= 70 && percentage<=79){
//     document.write("<h1>"+ "Marks Sheet" + "</h1>" + "<h4>" + "Total Marks: " + totalMarks  + "</h4>" + "<h4>" + " Marks Obtained : " + TotalmarksObtained  + "</h4>" + "<h4>" + "Percentage : " + percentage  + "</h4>" + "<h4>" + "Grade: A" + "</h4>" + "<h4>" + "Remarks : Good" + "</h4>")
// }
// else if (percentage >= 60 && percentage<=69){
//     document.write("<h1>"+ "Marks Sheet" + "</h1>" + "<h4>" + "Total Marks: " + totalMarks  + "</h4>" + "<h4>" + " Marks Obtained : " + TotalmarksObtained  + "</h4>" + "<h4>" + "Percentage : " + percentage  + "</h4>" + "<h4>" + "Grade: B" + "</h4>" + "<h4>" + "Remarks : You need to improve" + "</h4>")
// }
// else if (percentage < 60 ){
//     document.write("<h1>"+ "Marks Sheet" + "</h1>" + "<h4>" + "Total Marks: " + totalMarks  + "</h4>" + "<h4>" + " Marks Obtained : " + TotalmarksObtained  + "</h4>" + "<h4>" + "Percentage : " + percentage  + "</h4>" + "<h4>" + "Grade: Fail" + "</h4>" + "<h4>" + "Remarks : Sorry" + "</h4>")
// }

// Question no 7
// var secretNumber = 9;
// var userInput = +prompt ("Guess the secret number")
// if (userInput === secretNumber){
// console.log("Bingo!correct Answer");
// } else if (userInput === (secretNumber-1)){
//     console.log("close enough to the correct answer");
// }

// Question no 8
// var num = +prompt ( "Enter a number")
// var modulus = num % 3

//  if (modulus === 0){
//     console.log(num + "is divisible by 3") 
// }else{
//     console.log ( "it is not divisible by 3")
// }

// Question no 9
// var number = prompt ( "enter a number")
// var modulus = number % 2
// if (modulus == 0){
//     console.log( "number is even");
// }else {
//     console.log("number is odd");
// }

// Question no 10
// var temprature = prompt ("Enter your area temperature")

// if (temprature > 40){
//     console.log("Its too hot outside");

// } else if (temprature > 30){
//     console.log("The weaher today is Normal");
// }
// else if (temprature > 20){
//     console.log("Today's weather is cool");
// }
//  else if (temprature > 10){
//      console.log("OMG! Today's weather is so cool");
//  }

// // Question no 11

// var newNum1 = +prompt ( "Enter first number")
// var newNum2 = +prompt ("Enter second number")
// var operator = prompt ("Enter anyone of the following +,-,*,%")
// var operation;
// if (operator == "+" ){
//     operation = newNum1 + newNum2
// console.log(operation )
// }
// if (operator == "- "){
//     operation = newNum1 - newNum2
//     console.log(operation);
// }
// if (operator == "*"){
//     operation =newNum1 * newNum2
//     console.log(operation);
// }

// if (operator == "%"){
//     operation = newNum1 % newNum2
//     console.log(operation);
// }



// Assignment no 12 - 13 JS


// Question no 1

// var userInput = prompt ( "Enter a number or a letter")



// Question no 2
// var userInput1 = prompt ( "enter the first number")
// var userInput2 = prompt ("enter the second number")
// var greaterNum = userInput1 > userInput2;
// var smallerNum = userInput1 < userInput2;

// if (greaterNum == true ) {
//     console.log( userInput1  +  "is greater than " + userInput2)
// } else if (smallerNum == true){
//     console.log(userInput1  +  "is smaller than " + userInput2 )
// }else if (userInput1 == userInput2){
//     console.log("both are equal")
// }

// Question no 3

// var userInputNew = prompt ( "Enter a number")
// var aNumber = 1
// var aNumber1 = -1
// var aNumber2 = 0
// if (userInputNew === aNumber){
//     console.log("number is positive");
// }
// if (userInputNew === aNumber1){
//     console.log("number is negative");
// }
// if (userInputNew === aNumber2){
//     console.log("number is zero");
// }
// // Question no 4
// var input = prompt ("Enter any alphabet")
// var alphabet1 = "a"
// var alphabet2 = "e"
// var alphabet3 = "i"
// var alphabet4 = "o"
// var alphabet5 = "u"
// var alphabet6 = "A"
// var alphabet7 = "E"
// var alphabet8 = "I"
// var alphabet9 = "O"
// var alphabet10 = "U"

// if (alphabet1 === input) {
//     console.log("true");
// } 
//  if (alphabet2 === input) {
//     console.log("true");
// } 

// if (alphabet3 === input) {
//     console.log("true");
// } 

// if (alphabet4 === input) {
//     console.log("true");
// } 

// if (alphabet5 === input) {
//     console.log("true");
// } 
// if (alphabet6 === input) {
//     console.log("true");
// } 

// if (alphabet7 === input) {
//     console.log("true");
// } 

// if (alphabet8 === input) {
//     console.log("true");
// } 

// if (alphabet9 === input) {
//     console.log("true");
// } 

// if (alphabet10 === input) {
//     console.log("true");
// } else {
//     console.log(" false");
// }

// // Question no 5

// var correctPassword = "abida457"
// var userpassword = prompt( "Please enter your password")
// if (correctPassword === userpassword){
//     console.log("correct");
// }
// if (correctPassword !== userpassword){
//     console.log("Incorrect Password");
// }

// // Question 6
// var greeting;
// var hour = 13;
// if (hour > 18) {
//     console.log ( "Good day");
// } else{
//     console.log ( "Good evening")
// } 
// Question no 7
var timeInput = prompt ("Enter time in 24 hour clock format")
var time = 1900
if (timeInput == time){
    console.log("7:00 PM");  
}
else if ( timeInput !== time ){
    console.log("othertime")
}else {
    console.log("wrong entry")
}
  
