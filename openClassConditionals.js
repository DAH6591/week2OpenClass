
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

  /* Write a switch statement to check the value of monthNumber and then when the match is made,
     print out that month in a string (i.e. "July").
     For example, if the monthNumber is 5, the console should print out "May".
     If the number is not 1 through 12, print out "Invalid Month".
*/

var monthNumber = 4

switch (monthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
            console.log("April");
            break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;    
    case 9:
            console.log("September");
            break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");
        break;
}

/* Write an IF statement that checks to see if there is enough money to cover the cost of a soda.
   If so, print "I can buy a soda!".
   If not, print "I need to earn some more money!"
*/

var money = 4;
var costOfSoda = 3;

if (money >= costOfSoda){
    console.log("I can buy a soda!");
} else {
    console.log("I need to earn some more money!");
}

/* Write a series of IF/ELSE IF statements that check the numberGrade and assign letterGrade
 to a string of the corresponding letter grade. Print the letter grade to the console.

A: 90+
B: 80-89
C: 70-79
D: 60-69
F: 0-59

Make sure to use a capital letter for the grade. */

var numberGrade = 80;
var letterGrade;

if (numberGrade >= 90){
        letterGrade = "A";
        console.log(letterGrade);
} else if (numberGrade >=80 && numberGrade < 90) {
        letterGrade = "B";
        console.log(letterGrade);
} else if (numberGrade >=70 && numberGrade < 80) {
        letterGrade = "C";
        console.log(letterGrade);
} else if (numberGrade >= 60 && numberGrade < 69) {
        letterGrade = "D";
        console.log(letterGrade);
} else {
        letterGrade = "F";
        console.log(letterGrade);
}

/* Write an IF/ELSE statement that prints the smaller of the two given inputs,
   num1 and num2. If they are the same, print "same".
*/

var num1 = 5;
var num2 = 5;
 if (num1 < num2) {
     console.log(num1);
} else if (num2 < num1) {
     console.log(num2);
} else {
    console.log("same");
}

/* Write an if statement that compares num1 to num2.
 If they are equal, print "Num1 is equal to Num2." */

 var num1 = 2;
 var num2 = 3;

 if (num1 == num2){
     console.log("Num1 is equal to Num2.");
 }

 /* Create an if/else if statement that checks myNumber against num1 and based on which condition evaluates to true,
    print the following messages: num1 + " is smaller than my number, " + myNumber num1 + " is larger than my number, 
    " + myNumber num1 + " is equal to my number, " + myNumber */

    var myNumber = 5;
    var num1 = 5;

    if (num1 < myNumber){
        console.log(num1 + " is smaller than my number, " + myNumber);
    } else if (num1 > myNumber) {
        console.log(num1 + " is larger than my number, " + myNumber);
    }else {
        console.log(num1 + " is equal to my number, " + myNumber);
    }