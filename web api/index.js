// let p = document.getElementsByTagName("p");





// function forward() {
//     window.location.assign("https://www.youtube.com/")
// }
// function backword() {
//     window.location.assign("https://youtu.be/c0b5GNSjZpM?si=GyX1EB9TRFBvvDwQ")
// }

// let store = document.getElementById("btn")
// store.addEventListener("click",function alert(){
//     if (navigator.onLine) {
//         console.log("online");
//       } else {
//         console.log("offline");
//       }
   
// })
function network() {
    let net = navigator.onLine
    if (net) {
       document.write("true")
    }else{
        document.write("false")
    }
}


// function request() {
//     var request;
//     if (confirm("our request please confirm")) {
//         request= "accepted"
//     }else{
//          request= "denied"
//     }
//     document.write(request)
// }
// request()