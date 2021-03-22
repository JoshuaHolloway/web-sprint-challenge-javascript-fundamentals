
// 🐴🐴🐴 Topic 3: Prototypes 🐴🐴🐴 //
//🐴🐴🐴 Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge. 🐴🐴🐴
/* 🐴🐴🐴 Step 1: Base Constructor 🐴🐴🐴
 Use the constructor function named CuboidMaker to accept properties for length, width, and height which can be initialized as an object
*/
function CuboidMaker(length, width, height) {
  this.length = length;
  this.width = width;
  this.height = height;
}


/* 🐴🐴🐴 Step 2: Volume Method 🐴🐴🐴
  Create a method called volume using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  Formula for cuboid volume: length * width * height   */
CuboidMaker.prototype.volume = function () {
  return this.length * this.width * this.height;
};



/* 🐴🐴🐴 Step 3: Surface Area Method 🐴🐴🐴
  Create another method called surfaceArea using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  Formula for cuboid surface area of a cube: 
  2 * (length * width + length * height + width * height)  */
CuboidMaker.prototype.surfaceArea = function () {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
};


/* 🐴🐴🐴 Step 4: Create a new object that uses CuboidMaker 🐴🐴🐴
  Create an object called cuboid that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid. */
const cuboid = new CuboidMaker(4, 5, 5);


// 🐴🐴🐴 Test your volume and surfaceArea methods by uncommenting the logs below: 🐴🐴🐴
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


// Personal Stretch
// Personal Stretch
// Personal Stretch
// Personal Stretch
// Personal Stretch
// -Utilize prototypal inheritance to create a sub-class Cube that inherits from Cuboid.

// Step 1: Create a child constructor
function Cube(length) {
  // -Set inherited properties by calling parent constructor
  CuboidMaker.call(this, length, length, length);
}

// Step 2: Inherit the properties by setting the prototype property on the child's constructor function to the prototype object of the Cuboid class:
Cube.prototype = Object.create(CuboidMaker.prototype);
// -Object.create is a static method on the base Object class 
//  that creates a object that has the prototye object of the
//  arguement to Object.create().
// -The returned Object reference is then set to the value of 
//  the prototype property on the Cube constructor 
//  function object.

// Add new methods
// (Really override perviously defined volume/area methods)
Cube.prototype.volume = function() {
  return Math.pow(this.length, 3);
}
Cube.prototype.surfaceArea = function() {
  return 6 * Math.pow(this.length, 2);
}