// 🦄🦄🦄 Topic 4: Classes 🦄🦄🦄 //
//🦄🦄🦄 1. Take your prototypes from above and refactor into class syntax. Please rename your class CuboidMakerTwo and your object cuboidTwo 🦄🦄🦄
export default class CuboidMakerTwo{
    constructor({length, width, height}) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    /* == Step 2: Volume Method ==
    Create a method that returns the volume of a given cuboid's length, width, and height

    Formula for cuboid volume: length * width * height
    */
    volume() {
        return this.length * this.width * this.height;
    }

    /* == Step 3: Surface Area Method ==
    Create another method that returns the surface area of a given cuboid's length, width, and height. 

    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
    */
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }

    is_cube_or_cuboid() {
        console.log(`this object was generated from the ${this.constructor.name}-class`);
    }
}


//🦄🦄🦄 Test your volume and surfaceArea methods by uncommenting the logs below: 🦄🦄🦄
// console.log(cuboidTwo.volume()); // 100
// console.log(cuboidTwo.surfaceArea()); // 130

const cuboid_object = new CuboidMakerTwo({
  length: 4, 
  width: 5, 
  height: 5});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log('Cuboid 2:');
console.log(cuboid_object.volume()); // 100
console.log(cuboid_object.surfaceArea()); // 130

let cuboidTwo = new CuboidMakerTwo({
  length: 4,
  width: 5, 
  height:5,
});
console.log(cuboidTwo.length);


// 🦄 💪 Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area. 🦄 💪

class CubeMaker extends CuboidMakerTwo {
    constructor(length) { // length = width = height => only need one parameter
        super({length, width: length, height: length});
    }

    volume() {
        // all sides have equal length so doesn't matter which side you use here
        return Math.pow(this.length, 3);
    }

    surface_area() {
        // six sides and each side is equivalent so just get area of one side and multiply by six
        return 6 * Math.pow(this.length,2);
    }
}

const cube_object = new CubeMaker(2);
console.log("cube object:");
console.log(cube_object);
console.log(cube_object.volume());
console.log(cube_object.surface_area());
