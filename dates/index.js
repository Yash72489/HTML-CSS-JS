// let month = +prompt("enter month")

// let monthseason = new Date ("2024",month)

// if (1 === month || 2 === month || 3 === month || 4 === month) {
//     console.log("Summer")
// }else if ( 5 === month || 6 === month || 7 === month || 8 === month) {
//     console.log("Monsoon")
// }else if ( 9 === month || 10 === month || 11 === month || 12 === month) {
//     console.log("Winter")
// }else if (month<1 || month>12) {
//     console.log("wrong input");
    
// }
// function getSeason(month) {

//     if (month < 0 || month > 11) {
//         return 'Invalid month. Please enter a month between 0 (January) and 11 (December).';
//     }

//     let season;
//     switch (month) {
//         case 11: // Dec
//         case 0:  // Jan
//         case 1:  // Feb
//             season = 'Winter';
//             break;
//         case 2:  // Mar
//         case 3:  // Apr
//         case 4:  // May
//             season = 'Spring';
//             break;
//         case 5:  // Jun
//         case 6:  // Jul
//         case 7:  // Aug
//             season = 'Summer';
//             break;
//         case 8:  // Sept
//         case 9:  // Oct
//         case 10: // Nov
//             season = 'Autumn';
//             break;
//     }
//     return season;
// }

// const currentMonth = new Date().getMonth(); 
// console.log(`The current season is: ${getSeason(currentMonth)}`);

// Write a JavaScript function to get the number of days in a month.

// Test Data :
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));
// Output :
// 31
// 29
// 30
// 31
// function getDaysInMonth(month, year) {
 
//     return new Date(year, month, 0).getDate();
// }

// console.log(getDaysInMonth(1, 2024));  
// console.log(getDaysInMonth(2, 2024));  
// console.log(getDaysInMonth(2, 2023));  
// console.log(getDaysInMonth(12, 2012)); 

// Write a JavaScript function to test whether a date is a weekend.

// Note : Use standard Saturday/Sunday definition of a weekend.
// Test Data :
// console.log(is_weekend('Nov 15, 2014'));
// console.log(is_weekend('Nov 16, 2014'));
// console.log(is_weekend('Nov 17, 2014'));
// Output :
// "weekend"
// "weekend"
// undefined


// function weekend(datestr) {
//     let dates = new Date (datestr)
//     let days = dates.getDay();
//     if (days === 0 || days === 6) {
//         return "weekend"
//     }else{
//         return undefined
//     }
// }
// console.log(weekend("Nov 10, 2024"));


