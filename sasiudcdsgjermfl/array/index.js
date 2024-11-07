// functions
// paremeters
// let i = +prompt();



// function add(a, b, c, yash) {
//     let ans = a + b + c;
//     console.log(ans + yash);
// }

// add(100, 10, 0, 78);


// function patternPrinting(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             document.write('*');
//         }
//         document.write('<br>');
//     }
// }

// let userValue = +prompt();
// patternPrinting(userValue);


// function voting(userage) {
//     if (userage >= 18) {
//         document.write(`<p>eligible for voting because voter age is: ${userage}</p>`, "hello");
//     } else (
//         document.write(`<p>not eligible for voting because voter age is: ${userage}</p>`)
//     )
// }


// let userage = +prompt();
// voting(userage);
// ----------------------------------------------------------------------------------//
// 1]
// Create a function that takes two numbers as arguments and returns their sum.

// Examples
// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10
// ================================================================================//
// 1)
// // function addition(a,b){
// //  console.log(a+b)

// // }
// // addition(3,2)
// 2)

// // function addition(a,b){
// //     console.log(a+b)

// //    }
// //    addition(-3,-6)

// 3)
// function addition(a,b){
//     console.log(a+b)

//    }
//    addition(7,3)
// ==============================================================================//
// 2]

// Create a function that takes the age in years and returns the age in days.

// Examples
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300
// =============================================================================//

// function  age (userage) {
//     document.write(`A person need that ages in a day is: ${userage*365} day`)
// }

// let userage = +prompt()
// age(userage)


// ==================================14============================================//

// Graded System 

// function grade (mark){
//     if ( mark >= 90 && mark <= 100) {
//         document.write("A grade");

//     }else if (mark >= 80 && mark <= 89) {
//         document.write("B grade");

//     }else if (mark >= 70 && mark <= 79) {
//         document.write("C  grade");

//     }else if (mark >= 60 && mark <= 69) {
//         document.write("D grade");

//     }else if (mark < 60 && mark > 35) {
//         document.write("F grade");10

//     }else if (mark < 35 && mark >= 0) {
//         document.write("Failed");

//     }
//     else if (mark <= -1 ) {
//         document.write("Wrong input");

//     }
//     else {
//         document.write("wrong input");   
//     }
// }
// let mark =+prompt('Enter your mark');

// grade(mark)


// Print the math table of prompt Number in table formate


// function table(userInput){


//     let a = 1;
//     document.write('<table border=1>')
//     document.write('<tbody>')
//     while (10 >= a) {
//         let b = 1;      
//         while (b <= userInput) {
//             document.write('<td>'+ b * a + '</td>')
//             b++;             
//         }
//         document.write('<tr>')
//         a++;
//     }

// }
// let userInput = +prompt("Enter your number")
// table(userInput) 


// function table(userInput){


//     let a = 1;
//     document.write('<table border=1>')
//     document.write('<tbody>')
//     while (10 >= a) {
//         let b = 1;      
//         while (b <= userInput) {
//             document.write('<td>'+ b * a + '</td>')
//             b++;             
//         }
//         document.write('<tr>')
//         a++;
//     }

// }
// let userInput = +prompt("Enter your number")
// table(userInput) 



// const nameofPerson ={
//     firstname:'john',
//     lastname:'parker',
//     address:{
//         state:'Maharashtra',
//         city:'Nashik',
//     }
// }
// const {firstname,lastname,address:{city,state}}=nameofPerson
// console.log(nameofPerson.address)



// const todo =[
//     {
//     id:1,
//     text:'how to do work?',
//     isCompleted:true
//     },
//     {
//     id:2,
//     text:'boss is overthinked about a Project',
//     isCompleted:true
//     },
//     {
//     id:3,
//     text:'but people want to handle a project of Industry',
//     isCompleted:false
//     }

// ];
// // console.log(todo[1].isCompleted)



// for(let todos of todo){
//     console.log(todos.id);

// }
// ------------------------------///---------------------------------------------------//
// scope
// Global scope
// let a = 18;
// console.log(a)


// block scope
// {
//     let a = 18;
// console.log(a)
// }


// functional scope
// console.log(ab())
// function ab() {
//     let a =18
//     return a 
// }


// --------------------------//-----------------------------//
// 1]
// function hello() {
//     // let hello = 'edabit.com';
//         let hello = "https://edabit.com/";
//     return hello
// }
// console.log(hello())

// 1]
// Create a function that takes two numbers as arguments and returns their sum.

// Examples
// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10
// ================================================================================//

// Create a function that takes two numbers as arguments and returns their sum.

// Examples
// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10

// 1]
// function addition(){
//    let a = 3
//    let b = 2
//    return a+b

//    }
//    console.log(addition());

// 2]
// function addition(){
//    let a = -3
//    let b = -6 
//    return a+b

//    }
//    console.log(addition());

// 3]

// function addition(){
//    let a = 7
//    let b = 3 
//    return a+b

//    }
//    console.log(addition());


// --------------------------.//-------------------------//

// Create a function that takes the age in years and returns the age in days.

// Examples
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300
// =============================================================================//

// function  age () {
//     let userage = +prompt()
//     let days = 365;
//     return userage*days

// }

// console.log(age())

// ================================//========================================//


// function table(){


//     let a = 1;
//     document.write('<table border=1>')
//     document.write('<tbody>')
//     while (10 >= a) {
//         let b = 1;      
//         while (b <= userInput) {
//             document.write('<td>'+ b * a + '</td>')
//             b++;             
//         }
//         document.write('<tr>')
//         a++;
//     }
//     let userInput = +prompt("Enter your number")
//     return 
// }

// document.write(table())


// =====================------------======================//
// const patient = [
//     {
//       Name : 'Arvind',
//       age  : 18,
//       id : 256,
//       address:{
//          city: 'Nashik',
//          State : 'Maharashtra',
//          Pincode : 422106,

//         }
//     },
//     {
//         Name : 'Keshav',
//         age  : 38,
//         id : 285,
//         address:{
//            city: 'pune',
//            State : 'Maharashtra',
//            Pincode : 422106,

//           }
//     },
//     {
//         Name : 'Rahul',
//         age  : 48,
//         id : 295,
//         address:{
//            city: 'aurangabad',
//            State : 'Maharashtra',
//            Pincode : 422106,

//           }
//     }
// ]

// For Each
// patient.forEach(function (patient) {
//  document.write(patient.Name +'&nbsp;'+patient.age +'&nbsp;'+'<br><br>');


// })
// ||
// MAP

// const patientdetail= patient.map(function (patient) {
//     return patient.address.Pincode

// })
// console.log( patientdetail)
// ||
// const patientdetail= patient.filter(function (patient) {
//     return patient.age===48

// })
// console.log(patientdetail)

//   then mark ?
// const x = +prompt()

// const color = x>10?'red':'blue';
// document.write(color);

// -------------------===============//

// nested

// const x = 1

// const color = x > 10 ? 'red' : 'blue';
// switch (color) {
//     case "red":
//         console.log("color is red");
//         break;
//         case "blue":

//                 console.log("color is blue");

//             break;

//     default:
//         console.log("color is not a red or blue");
//         break;
// }

// ---------------------------//-----------------------------------//

// function Person (firstname,lastname,age, dob) {
//     this.firstname=  firstname;
//     this.lastname=  lastname;
//     this.age=  age;
//     this.dob=  new Date(dob);

// }
// Person.prototype.dob=function(){
//     return this.dob.getFullYear();
// }





// const person1 = new Client('rahul','sharma','22','4-7-2002');
// const person2 = new Client('arun','rathod','24','4-3-2000');

// console.log(person1());


// nested function

// function person() {

//     function id(user) {
//        let userID = 115448;
//        return userID


//     }
//     console.log(id());

//     let name = 'rahul'
//     return name
// }

// console.log(person());

// function ab() {
//     let num = 30
//     function cd() {
//        let a = 10
//        let total = num+a
//        return total
//     }
//     console.log(cd()
//     );

//     return num


// }
// console.log(ab());


// const person = [
//     {
//         name: 'ashok',
//         id: '12',
//         location: 'nashik'
//     },
//     {
//         name: 'arun',
//         id: '42',
//         location: 'nashik'
//     },
//     {
//         name: 'alok',
//         id: '84',
//         location: 'nashik'
//     }

// ]


// const admin = person.map (function cd(params) {
    
//     return person
    
// })
// console.log(admin);

// const patient = [
//         {
//           Name : 'Arvind',
//           age  : 18,
//           id : 256,
//           address:{
//              city: 'Nashik',
//              State : 'Maharashtra',
//              Pincode : 422106,
    
//             }
//         },
//         {
//             Name : 'Keshav',
//             age  : 38,
//             id : 285,
//             address:{
//                city: 'pune',
//                State : 'Maharashtra',
//                Pincode : 422106,
    
//               }
//         },
//         {
//             Name : 'Rahul',
//             age  : 48,
//             id : 295,
//             address:{
//                city: 'aurangabad',
//                State : 'Maharashtra',
//                Pincode : 422106,
    
//               }
//         }
//     ]
    

//     patient.forEach(function (patient) {
//      document.write(patient.Name +'&nbsp;'+patient.age +'&nbsp;'+'<br><br>');
    
    
//     })

    
//     // const patientdetail= patient.map(function (patient) {
//     //     return patient.address.Pincode
    
//     // })
//     // console.log( patientdetail)

//     // const patientdetail= patient.filter(function (patient) {
//     //     return patient.age===48
    
//     // })
//     // console.log(patientdetail)

// const verification = [
//     {
//         name:'kunal',
//         address : 'NAshik'
//     },
//     {
//         name:'karan',
//         address : 'NAshik'
//     },
//     {
//         name:'raghav',
//         address : 'NAshik'
//     }
// ]


// const name = verification.map (function (verification) {
//     return verification.name
    
// })
// console.log(name);

// const name = verification.filter (function (verification) {
//     return verification
    
// })
// console.log(name);




// const boys = ['arvind', 'sumit', 'ashwin','rahul']
// // const girls= ['jyoti','ragini','shruti','preeti']
// // let sum = boys.concat(girls)

// boys.slice(2)

// console.log(boys.slice(1));


// const months= ['jan','feb','mar','apr']
// months.splice(4,0,'may','june','july')
// months.splice(7,0,'aug','sep','oct')
// months.splice(10,0,'nov','dec')
// months.splice(3,1,'yash')

// console.log(months);
// const months= ['jan','feb','mar','apr']
// function getMonth(monthly) {
//     return monthly[1]
   
// }
// console.log(getMonth(months));

let fruit = +prompt('enter a fruit do u like or not')
switch (fruit) {
    case Apple:
        document.write('i like for a while time ')
        break;
    case Banana:
        document.write('yes like for fun ')
        break;
    case Orange:
        document.write('i want from nagpur ')
        break;
  

    default:
        document.write('u should write otherwise go to hell')
        break;
}




