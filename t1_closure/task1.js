//🚀🚀🚀  Topic #1 Closures 🚀🚀🚀//
/* 🚀🚀🚀🤓 Task 1: 🤓🚀🚀🚀 
Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

//🚀🚀🚀 ⬇️ 📝 Explanation ⬇️ 📝 🚀🚀🚀: 
// -The variable internal is Lexically Scoped such that it is resides in the Execution Context
//  of the function name myFunction (the function myFunction itself is Lexically Scoped 
//  such that myFunction sits in the Execution Context corresponding to the global scope).
// -Since the function nestedFunction is defined directly inside of myFunction,
//  nestedFunction is Lexically Scoped such that it resides in the Execution Context of myFunction.
// -When nestedFunction is invoked it looks inside its own Exeuction Context to see if 
//  the variable is in the scope of the current Exeuction Context, if it is not (which it is not)
//  the next level up the Scope Chain is searched for the variable named internal. Since the variable
//  is indeed found to exist at this scope (we are currently in myFunction's scope) whatever this
//  variable (named internal) refers to is what is used inside of nestedFunction.
// -The way I think of this is as follows:
//    --In my diagram below I imagine a container surrounding each level of the scope chain.
//    --In my imagination the container is like a one-way mirror that can see outward, 
//      but not inward.
//    --The variable internal can be seen/used in the inner most scope and the scope above it (where it is defined).
//    --The variable extrenal can be seen/used in the inner most scope, the scope above it, and the scope above it (where it is defined).
//    --Closures are when a variable looks outside of its current scope by looking through this one-way mirror looking up the scope chain.
// 
//    -----------------------------------------------------------|
//    | Global Scope:                                            |
//    |                        variable: external                |
//    |                                                          |
//    |      --------------------------------------------|       |
//    |      | Scope of myFunction:                      |       |
//    |      |                       variable: internal  |       |
//    |      |                                           |       |
//    |      |      ------------------------------|      |       |
//    |      |      | Scope of nestedFunction:    |      |       |
//    |      |      |                             |      |       |
//    |      |      |                             |      |       |
//    |      |      |                             |      |       |
//    |      |      ------------------------------|      |       |
//    |      ---------------------------------------------       |
//    |                                                          |
//    -------------------------------------------------------------
export default myFunction;