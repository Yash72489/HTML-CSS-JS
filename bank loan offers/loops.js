//  let a = +prompt();
//  j=0
//     while (j < a) {
//         let b = 1;
//         while (a >= b) {
//             document.write("*");
//             b++;
//         }
//         document.write('<br>')
//         j++;
//     }
// -------------------///--------------//
//   2)

//  let a = +prompt()
//  j=0
// while (j<a) {

//   let b = 1;
//   while (a >= b) {
//     document.write('*');
//     b++;
//   }
//   document.write('<br>')
//   j++

// }
// -----------------//--------------------//
// 3)
// let a = +prompt()
// while (a<5) {

//     document.write('<br>')
//     a++
//     let b = 5;
//        while (a <= b) {
//            document.write('*');
//            b--;
//        }

// }
// -----------------//--------//

// let a = +prompt();
// j=0

//     while (j < a) {
//         let b = 1;
//         while (a >= b) {
//             document.write(b);
//             b++;
//         }
//         document.write('<br>')
//         j++;
//     }

// -----------------//--------//
//  5) 

// let a = +prompt()


// while (a<5) {

//     document.write('<br>')
//     a++
//     let b = 1;
//        while (a >= b) {
//            document.write(b);
//            b++;
//        }

// -----------------//--------//
//  6) 
// let a = +prompt()


// while (a<5) {

//     document.write('<br>')
//     a++
//     let b = 5;
//        while (a <= b) {
//            document.write(b);
//            b--;
//        }

// }

// ------------------------------------------------------//
// table //
// let c = +prompt('enter the value')
// a = 1;
// while (a<=10) {
//     b = c*a;
//     document.write(c+"*"+a+"="+b);
//     document.write('<br>');
//     a++

// }
// -------------------//--------------//






// let user = +prompt();
// let a = 1;
// document.write('<table border="1">');
// document.write('<tbody>');
// while (a <= 10) {

// let b=1
//   while (b <= user) {
   

//     document.write('<td>'+b+'</td>');
//     b++
   
//   }
 
//   document.write("<tr>")
//   document.write('<td>'+a+'</td>');
//   document.write("</tr>")
//   a++;
// }
// document.write('</tbody>');
// document.write('</table>');




// let num = +prompt();
// let a = 1;
// document.write('<table border="1">'); 

// document.write('<tbody>');
// while (a <= num) {
//   document.write('<tr>');  
//   let j = 0;

//   while (j < num) {
//     document.write('<td>' + (j + a) + '</td>'); 
//     j++;
//   }

//   document.write('</tr>');  
//   a++;
// }

// document.write('</tbody>');
// document.write('</table>');



// let num = +prompt(); 
// let a = 1;
// document.write('<table border="1">');
// document.write('<tbody>');

// while (a <= num) {
//   document.write("<tr>");  
// let j = 1
//   while (j <= num) {
//     let value = (a - 1) * num + j ;  
//     document.write('<td>' + value + '</td>');
//     j++;
//   }

//   document.write("</tr>");  
//   a++;
// }

// document.write('</tbody>');
// document.write('</table>');



// --------------------------------------------------------//-------------------------------------------------------------------------------------------//----------------------------------------------------//

// 1) *****
//    *****
//    *****
//    *****
//    *****
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         document.write('*')
//     }
//     document.write('<br>');
// }






// 2) *
//    **
//    ***
//    ****
//    *****

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//         document.write("*")
//     }
//     document.write('<br>');
// }




// ================================//======================================//



//     *
//    **
//   ***
//  ****
// *****

// let n =+prompt()
// for (let i = 1; i <= n;i++) {


// for (let k = 0; k < n-i; k++) {
  

//   document.write('&nbsp;&nbsp;')}
      
//       for (let j = 1; j <= i; j++) {
//            document.write('*')
        
//       }






//   document.write('<br>')

  
// }
// -----------------------//---------------//
//     1
//    12
//   123
//  1234
// 12345

// let n =+prompt()
// for (let i = 1; i <= n;i++) {


// for (let k = 0; k < n-i; k++) {
  

//   document.write('&nbsp;&nbsp;')}
      
//       for (let j = 1; j <= i; j++) {
//            document.write(j)
        
//       }






//   document.write('<br>')

  
// }


// ===============================//=================================//
// *****
//  ****
//   ***
//    **
//     *



// let n =+prompt()
// for (let i = 0; i <= n;i++) {


// for (let k = 0; k < i; k++) {
  

//   document.write('&nbsp;&nbsp;')}
      
//       for (let j = 1; j <= n-i; j++) {
//            document.write("*")
        
//       }






//   document.write('<br>')

  
// }
// =========================//=======================================//
// 12345
//  1234
//   123
//    12
//     1


// let n =+prompt()
// for (let i = 0; i <= n;i++) {


// for (let k = 0; k <= i; k++) {
  

//   document.write('&nbsp;&nbsp;')}
      
//       for (let j = 1; j <= n-i; j++) {
//            document.write(j)
        
//       }






//   document.write('<br>')

  
// }


// ====================================//=========================================///


// 123456789
// 1234567
// 12345
// 123
// 1


// let n = +prompt()

// for (let a = 0; a <= n; a++) {
//       let c = n-a
//      for (let j = 1; j <= c; j++) {
       
//         document.write(j)
//      }







//    document.write('<br>')
    
// }
// -----------------------//--------------------------//

//     1
//    1221
//   123321
//  12344321
// 1234554321
//  12344321
//   123321
//    1221
//      1

// ============================//======================//

// 1) *****
//    *****
//    *****
//    *****/*****










