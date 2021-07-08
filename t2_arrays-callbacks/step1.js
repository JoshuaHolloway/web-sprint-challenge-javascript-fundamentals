/* 🦁🦁🦁 Step 1: Create a higher-order function 🦁🦁🦁
  * Use the higher-order function consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as an argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
const consume = (a, b, callback) => callback(a, b);
export default consume;