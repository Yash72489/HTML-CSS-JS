let mark =+prompt('Enter your mark');

if ( mark >= 90 && mark <= 100) {
    console.log("A grade");
    
}else if (mark >= 80 && mark <= 89) {
    console.log("B grade");
    
}else if (mark >= 70 && mark <= 79) {
    console.log("C  grade");
    
}else if (mark >= 60 && mark <= 69) {
    console.log("D grade");
    
}else if (mark < 60 && mark > 35) {
    console.log("F grade");
    
}else if (mark < 35 && mark >= 0) {
    console.log("Failed");
    
}
else if (mark <= -1 ) {
    console.log("Wrong input");
    
}
else {
    console.log("wrong input");   
}