// 🦁🦁🦁 Callbacks 🦁🦁🦁  
import consume from './step1.js';
import {add, multiply, greeting} from './step2.js';
export {consume, add, multiply, greeting};
  

// 🦁🦁🦁 Step 3: Check your work by un-commenting the following calls to consume(): 🦁🦁🦁 
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!
  
  
// 🦁💪 Stretch: If you haven't already, convert your array method callbacks into arrow functions - make sure you comment out this section before you submit your work 🦁💪