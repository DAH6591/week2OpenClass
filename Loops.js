/* Write a for loop that prints the numbers 0 to x.
The x has been initialized for you and will be based on a user's input.*/

var x = 1;

for(var i = 0; i <= x; i++) {
    console.log(i);
}

/* Create a for loop that prints out a multiplication table for num from 1 through 10 as follows
 (the value of num will be input by the user):
If a user enters 1, the console should print the following:
1 x 1 = 1
1 x 2 =2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5
1 x 6 = 6
1 x 7 = 7
1 x 8 = 8
1 x 9 = 9
1 x 10 = 10
*/

var num = 5;
var product;

for (var i = 1; i <= 10; i++) {
    (product = num * i);
    console.log(num + " x " + i + " = " + product);

}
// another way of writing the above:
for (var i = 1; i <= 10; i++) {
   
    console.log(num + " x " + i + " = " + (num * i) );

}

/*
Create a do/while loop that will print the userNumber and then add 6 after each loop.
 Stop the loop once the number is greater than or equal to 100.
*/
var userNumber = 4;
do {
    console.log(userNumber);
    userNumber += 6;
  } while (userNumber <= 100);
  // you can also have: userNumber = userNumber + 6;

  var cupsOfFlour = 0;

  while (cupsOfFlour < 5) {

  console.log('Scooping a cup of flour into the bowl');
  
  cupsOfFlour++;

  console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl'); 
}
  console.log('We have enough flour!');

  /* Using the supplied variables, create a loop of your choice that will add cups of rice to a bowl.
     Each time a cup of rice is added, print "The bowl contains X cups of rice.", where X is the number
     of cups added. Once the number of cups called for has been reached, print "We have enough rice!".

    Note, we don't need to know if the bowl is empty.
  */
 
    var requiredCupsOfRice = 5;
    var currentCupsOfRice = 0;
    while (currentCupsOfRice < requiredCupsOfRice){
        currentCupsOfRice++;
        console.log('The bowl contains ' + currentCupsOfRice + ' cups of rice.');
    }
    console.log('We have enough rice!');

    /* Another way of getting the same result as above:

    while(currentCupsOfRice != requiredCupsOfRice){
        console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
    }
    console.log('We have enough rice!');
    */
   
   /* Write a for loop that prints every third number from 0 up to, and including, 99.
   */
  
   for (i = 0; i <= 99; i+=3) {
    console.log(i);

  }
/* Another way to get the same output as code just above:
for(var i = 0; i <= 99; i++){
    if(i % 3 === 0){
        console.log(i)
    }
} */
// also the do-while loop below will do the same thing as the for loop above
var i = 0;
do{
    if (i % 3 === 0){
        console.log(i);
    }
    i++
}
while (i <= 99)

/* Write a for loop that loops from 1-100 and prints the iteration count and "foo" if the iteration count is even.
For example, if the iteration count is 2, then the console would read "2 foo". 
The final output should be "100 foo". Notice there is a space between the number and foo.
*/

for (i=1; i <=100; i++) {
   if(i += 1) {
    console.log(i + " foo");
   }
}

/* for (i=1; i <=100; i++) {
    if (i % 2 === 0){
    console.log(i + " foo");
    }
}
/* Check to see if userNumber is between 1 and 100. 
If it is, create a while loop that prints all integers starting with userNumber to 100.
 If not, print "Your number was not between 1 and 100."
*/ 
userNumber = 10;
if (userNumber >= 1 && userNumber <= 100) {
    while (userNumber <= 100) {
        console.log(userNumber);
        userNumber++;
    }
    
} else {
    console.log("Your number was not between 1 and 100.");
}


