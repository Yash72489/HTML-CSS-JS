/*
Write a function 'returnDay' that takes one parameter(number from 1 to 7) and returns the day of the week.
(where 1 is Monday, 2 is Tuesday, 3 is Wednesday, etc).

If the number is less than 1 or greater than 7, the function should return null.
Note: Store the days of the week in the array.
*/


// function returnDay(number) {
//     const day = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
//     if (number >= 1 && number <= 7) {
//         return day[number - 1]
//     }else{
//         return null;
//     }
// }
// let number = +prompt();
// let result = returnDay(number);
// document.write(result);


/*
Implement a function “duplicate” to duplicate an array, as shown below:
For input arr=[1,2] duplicate(arr) should return [1,2,1,2]

*/

// function duplicate(arr) {
//     let duplicatedArray = [];  
//     for (let i = 0; i < arr.length; i++) {
//       duplicatedArray.push(arr[i]);
//     }
  
//     return duplicatedArray;
//   }
//   let array = [1,2]
//   let concat= +prompt()
//   let result = duplicate(array);
//   console.log(result);


// function getNames() {
//   let names = [];
  
//   // Loop to collect 10 names
//   for (let i = 0; i < 10; i++) {
//       let name = prompt(`Enter name ${i + 1}:`);
//       names.push(name);
//   }
  
//   return names;
// }

// // Function to sort names alphabetically
// function sortNames(names) {
//   return names.sort();
// }

// // Main execution
// let names = getNames(); // Get the names from the user
// let sortedNames = sortNames(names); // Sort the names

// console.log("Sorted Names:");
// console.log(sortedNames);

// function duplicate(arr) {
//   let duplicatedArray =[1,2];
//   for (let i = 0; i < arr.length; i++) {
//              duplicatedArray.push(arr[i]);
   
//   }
//   return duplicatedArray
  
// }
// let input=[1,2];
// let result=duplicate(input)
// console.log(result)

// Shuffle Deck of Cards :
//  Program for Array Get 10 name values from user and store in array and sort alphabetically

// function getNames() {
//   let names = [];
//   for (let i = 0; i < 10; i++) {
//       let name = prompt(`Enter name ${i + 1}:`);
//       names.push(name);
//   } 
//   return names;
// }

// let names = getNames();
// console.log("sorted Names:");
// console.log(names);

// Write a function that takes an array of numbers and returns the sum of 10 elements.

// function sumofElement() {
//    let num = [];
//   for (let i = 0; i < 10; i++) {
//     let  nums = +prompt(`Enter a number ${i+1}`)
//     num.push(nums)
    
//   }
//   return num
// }
// let sum = sumofElement()

// function sumOfElements(numbers) {
//   let sum = 0;  // Start with sum as 0
//   for (let i = 0; i < numbers.length; i++) 
//       sum += numbers[i]; 
//   }
//   return sum;  // Return the total sum
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(sumOfElements(arr));  
// function non-primitive
// function abc(arr2) {
//     arr2[3]=60
//     console.log(arr2);
    
// }
// var arr1 =[10,20,30,40]
// abc(arr1)
// console.log(arr1);
// const battleGround1 = ['alok','aman','raja']
// const battleGround2 = ['shlok','ambani','rajesh']
// const battleGround = [...battleGround1,...battleGround2]  
// console.log(battleGround);




    
    








