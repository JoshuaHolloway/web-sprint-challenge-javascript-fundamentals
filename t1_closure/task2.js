/* 🚀🚀🚀 Task 2: Counter 🚀🚀🚀 */
/* Use summation to do the following:
    1. Receive a number 
    2. Use a counter to return the summation of that number. 
    
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. Note, you may use a for loop for this function if you wish */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation_1(upper_bound) {
  let sum = 0;
  for (let i = 0; i <= upper_bound; i++)
    sum += i;
  return sum;
}
const summed_1 = summation_1(4);
console.log(`Method 1: ${summed_1}`);
// The above function meets the specific requirements of Task-2:
// -The function summation accepts a parameter.
// -The function summation also uses a counter.
// -The function summation uses the counter to return the summation of that number (it uses the counter because it can't return the sum without returning that specific variable, therefore it uses the counter to return the summation of the number that is input into the function summation as a parameter).

// I think below is what the question wanted though (because the returned function uses a closure with the sum-variable):
function summation_2(upper_bound) {
  let sum = 0;
  return function() {
    for (let i = 0; i <= upper_bound; i++)
      sum += i;
    return sum;
  }
}

const summ = summation_2(4);
const summed_2 = summ();
console.log(`Method 2: ${summed_2}`);
// -The way that this works is that even after the function summation_2() is done execution from its invocation in the line "const summ = summation_2(4);"
//  and it is popped off of the Execution Stack, there is a "Closure" that encases the defined variable named sum (and its state [current value]).
// -Because this closure has been established the variable sum lives inside this closure and can still be accessed by any function that 
//  was defined in an Execution Context further down the scope chain (specifically, the anonomous function returned from the summuation_2 function invokation).
// -I think of an enclosure as establishing that boundary in my illustrated metaphore above.  Even after the function corresponding to that
//  execution context has completed execution and has been popped off of the Execution Stack that boundary still exists and any variable that
//  has been used further down the Scope Chain still can be accessed becuase it lives inside this closure.  A closure is that boundary that
//  is closed around that execution context to allow that variable to still live even after the outer function has completed executing and is 
//  popped off of the Execution Stack.


// Here is a version that implements the inner function on the fly (still utilizing a closure on variable sum) to return the summed single scalar value.
function summation_3(upper_bound) {
  let sum = 0;
  return (function() {
    for (let i = 1; i <= upper_bound; i++)
      sum += i;
    return sum;
  })(upper_bound);
}
const summed_3 = summation_3(4);
console.log(`Method 3: ${summed_3}`);

// -This version uses an IIFE (Immediately Invoked Function Expression) and utilizes the closure which stores the state of the variable sum on-the-fly
//  to compute the summation of x's where x's index of summation is i summed from 1 to upper_bound: 
//      sum(x_i from i=1 to i=upper_bound) = 1 + 2 + ... + upper_bound 

// I will use the 3rd version to test :)
export default summation_3;