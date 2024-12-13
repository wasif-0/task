// ====================  Task 01  ====================

// var globalVar = "I am var";
// let globalLet = "I am let";
// const globalConst = "I am const";

// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

// Yes, all are accessible globally in the code.

// ====================  Task 02  ====================

// function testScope() {
//   var funcVar = "I am var inside function";
//   let funcLet = "I am let inside function";
//   const funcConst = "I am const inside function";
// }

// console.log(funcVar);
// console.log(funcLet);
// console.log(funcConst);

// testScope();

// Variables declared with var, let, and const inside a function
// are not accessible outside the function due to function scope.

// ====================  Task 03  ====================

// if (true) {
//     var blockVar = "I am var inside block";
//     let blockLet = "I am let inside block";
//     const blockConst = "I am const inside block";
//   }

//   console.log(blockVar);
//   console.log(blockLet);
//   console.log(blockConst);

//   var is accessible outside the block, while let and
// const are confined to the block due to block scope.

// ====================  Task 04  ====================

// console.log(myVar);
// var myVar = "I am a variable";
// console.log(myVar);

// You get undefined due to hoisting.

// ====================  Task 05  ====================

// console.log(myLet);
// let myLet = "I am a let variable";

// console.log(myConst);
// const myConst = "I am a const variable";

// You get a ReferenceError for both let and const
// variables when logged before initialization.

// ====================  Task 06  ====================

// var myVar = "First declaration";
// var myVar = "Second declaration";
// console.log(myVar);

// let myLet = "First declaration";
// let myLet = "Second declaration";

// const myConst = "First declaration";
// const myConst = "Second declaration";

// var allows re-declaration, while let and const
// throw a SyntaxError if re-declared in the same scope.

// ====================  Task 07  ====================

// var myVar = "Initial value";
// myVar = "Reassigned value";
// console.log(myVar);

// let myLet = "Initial value";
// myLet = "Reassigned value";
// console.log(myLet);

// const myConst = "Initial value";
// myConst = "Reassigned value";

// var and let allow re-assignment,
// while const throws a TypeError when reassigned.

// ====================  Task 08  ====================

// {
//     console.log(myLet);
//     let myLet = "I am a let variable";

//     console.log(myConst);
//     const myConst = "I am a const variable";
//   }

//   You get a ReferenceError because let and const variables
// are in the temporal dead zone (TDZ) before their initialization.

// ====================  Task 09  ====================

// function exampleVar() {
//     if (true) {
//       var myVar = "I am a var variable inside a function";
//     }
//     console.log(myVar);
//   }
//   exampleVar();

// for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }

//   const MAX_USERS = 100;
// if (MAX_USERS > 50) {
//   console.log("We can allow more users!");
// }

// ====================  Task 10  ====================

// const firstName = "Muhammad";
// const lastName = "Wasif";

// const fullName = `${firstName} ${lastName}`;

// console.log(fullName);

// ====================  Task 11  ====================

// const address = `
// 123 Main Street
// Cityville, State 12345
// Country Name
// `;

// console.log(address);

// ====================  Task 12  ====================

// const num1 = 5;
// const num2 = 7;

// const result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;

// console.log(result);

// ====================  Task 13  ====================

// function multiply(num1, num2) {
//     return num1 * num2;
//   }

//   const result = `The product of 4 and 5 is ${multiply(4, 5)}.`;

//   console.log(result);

// ====================  Task 14  ====================

// function tagFunction(strings, ...values) {
//     console.log(strings);
//     console.log(values);
//   }

//   const name = "Wasif";
//   const age = 25;
//   tagFunction`Hello, my name is ${name} and I am ${age} years old.`;

// ====================  Task 15  ====================

// function uppercaseTag(strings, ...values) {
//     let result = strings[0];
//     values.forEach((value, index) => {
//       result += value.toUpperCase() + strings[index + 1];
//     });
//     return result.toUpperCase();
//   }

//   const name = "Wasif";
//   const greeting = "hello";
//   const formattedString = uppercaseTag`${greeting}, ${name}!`;

//   console.log(formattedString);

// ====================  Task 16  ====================

// const currentHour = 9;

// const timeOfDayMessage = `${
//   currentHour < 12 ? "Good morning!" : "Good afternoon!"
// }`;

// console.log(timeOfDayMessage);

// ====================  Task 18  ====================

// const shoppingList = ["Apples", "Bananas", "Carrots", "Dairy", "Eggs"];

// const htmlList = `
//   <ul>
//     ${shoppingList.map(item => `<li>${item}</li>`).join('')}
//   </ul>
// `;

// console.log(htmlList);

// ====================  Task 19  ====================

// const stringWithBacktick = `This is a string with a backtick: \` inside it.`;

// console.log(stringWithBacktick);

// ====================  Task 20  ====================

// const tableData = [
//     ["Name", "Age", "City"],
//     ["Wasif", 25, "Karachi"],
//     ["Hamza", 30, "Lahore"],
//     ["Ali", 35, "Islamabad"]
//   ];

//   const tableHTML = `
//     <table border="1">
//       <thead>
//         <tr>
//           ${tableData[0].map(header => `<th>${header}</th>`).join('')}
//         </tr>
//       </thead>
//       <tbody>
//         ${tableData.slice(1).map(row => `
//           <tr>
//             ${row.map(cell => `<td>${cell}</td>`).join('')}
//           </tr>
//         `).join('')}
//       </tbody>
//     </table>
//   `;

//   console.log(tableHTML);

// ====================  Task 21  ====================

// const age = 20;

// const canVote = age >= 18 ? "Yes" : "No";

// console.log(canVote);

// ====================  Task 22  ====================

// const number = 7;
// const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
// console.log(evenOrOdd);

// ====================  Task 23  ====================

// const score = 85;

// const grade = score >= 90 ? "A" :
//               score >= 80 ? "B" :
//               score >= 70 ? "C" :
//               score >= 60 ? "D" : "F";

// console.log(grade);

// ====================  Task 24  ====================

// const isLoggedIn = true;
// const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
// console.log(statusMessage);

// ====================  Task 25  ====================

// const isMember = true;
// const purchaseAmount = 150;

// const discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.1 : 0;

// console.log(discount);

// ====================  Task 26  ====================

// function maxValue(a, b) {
//   return a > b ? a : b;
// }
// const result = maxValue(8, 12);
// console.log(result);

// ====================  Task 27  ====================

// function greet(name) {
//   return name ? `Hello, ${name}!` : "Hello, guest!";
// }

// console.log(greet("John")); // Outputs: Hello, John!

// console.log(greet("")); // Outputs: Hello, guest!

// ====================  Task 28  ====================

const numbers = [1, 2, 3, 4, 5];

// const mappedValues = numbers.map((num) => (num % 2 === 0 ? num * 2 : num * 3));

// console.log(mappedValues); // Outputs: [3, 4, 9, 8, 15]

// ====================  Task 29  ====================

// const strings = ["apple", "kiwi", "pear", "grape", "fig"];

// const filteredStrings = strings.filter((str) => str.length > 3);

// console.log(filteredStrings);

// ====================  Task 30  ====================

// const originalArray = [1, 2, 3, 4, 5];

// const copiedArray = [...originalArray];

// console.log(originalArray);
// console.log(copiedArray);
// console.log(originalArray === copiedArray);

// ====================  Task 31  ====================

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const mergedArray = [...array1, ...array2];

// console.log(mergedArray);

// ====================  Task 32  ====================

// const numbers = [2, 3, 4];

// const updatedNumbers = [1, ...numbers, 5];

// console.log(updatedNumbers);

// ====================  Task 33  ====================

// const originalObject = { name: "John", age: 30 };

// const copiedObject = { ...originalObject };

// console.log(originalObject);
// console.log(copiedObject);
// console.log(originalObject === copiedObject);

// ====================  Task 34  ====================

// const object1 = { name: "John", age: 30 };
// const object2 = { age: 35, email: "john@example.com" };

// const mergedObject = { ...object1, ...object2 };

// console.log(mergedObject);

// ====================  Task 35  ====================

// const user = { name: "John", age: 30, email: "john@example.com" };

// const updatedUser = {
//   ...user,
//   email: "john.new@example.com",
//   address: "123 Street",
// };

// console.log(updatedUser);

// ====================  Task 36  ====================

// function sum(a, b, c) {
//   return a + b + c;
// }

// const numbers = [5, 10, 15];

// const result = sum(...numbers);

// console.log(result);

// ====================  Task 37  ====================

// function combineArrays(...arrays) {
//   return [].concat(...arrays);
// }

// const combinedArray = combineArrays([1, 2], [3, 4], [5, 6]);
// console.log(combinedArray);

// ====================  Task 38  ====================

// function multiply(factor, ...numbers) {
//     return numbers.map(num => num * factor);
//   }

//   const result = multiply(2, 3, 4, 5);
//   console.log(result);

// ====================  Task 38: Simple Callback  ====================

// function greet(name, callback) {
//     callback(`Hello, ${name}!`);
//   }
  
//   function printGreeting(message) {
//     console.log(message);
//   }
  
//   greet('Alice', printGreeting); 
  