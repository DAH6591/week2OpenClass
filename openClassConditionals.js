
// Write an if statement that compares num1 to num2 and prints the larger of the two.
//  If they are equal, print "Num1 is equal to Num2".

var num1 = 3;
var num2 = 3;

if(num1 == num2){
    console.log("Num1 is equal to Num2");
   }
   else if(num1 < num2){
    console.log(num2)
   } else {
    console.log(num1)
   }
   // logs out either the higher number or the num1 is equal to num2 string

// Create a nested if statement (the second if statement will only run if the first one evaluates to true)
// that checks to see if num1 is greater than or equal to num2.
// If true then check to see if num3 is greater than or equal to num4.
//  If both conditions are true print "Both statements are true." If the first condition is true but the second isn't,
//  print "The first statement is true, but the second is not."
// After the outer if statement, print "Program ended."

var  num1 = 5;
var  num2 = 4;
var  num3 = 6;
var  num4 = 4;

if ( num1 >= num2 ) {
    if ( num3 >= num4 ) {
        console.log("Both statements are true.");
    } else {
        console.log("The first statement is true, but the second is not.");
    }
}
console.log("Program ended.");

//if (c == 7) {
    //if (c == 8) {
        //console.log('c is 7 and d is 8.');
      //} else {
         //console.log('c is 7 but d is not 8.');
      //}   
  //}
  