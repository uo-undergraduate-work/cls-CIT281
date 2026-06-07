// Name the class Shape
// Provide a constructor that expects an array of sides, with a default value of an empty array []
// Create a class property sides that contains the constructor sides array using the this object
// Implement a class method perimeter that returns the value of the lengths of all sides.
// You may want to create this method initially using whatever version of a function you prefer, and once complete refactor the function using the remaining requirements
// This method must use an implicit arrow/lambda function
// You must use the Array reduce() method to calculate the perimeter value
// To make this method a single line of code, you will also need to use the ternary operator ( ? : ) to make sure the array has at least one side

class Shape {
    constructor (sides = []) {
        this.sides = sides;
    }
    perimeter() {
        return this.sides.length > 0 ? this.sides.reduce((a, b) => a + b) : 0;
    }
}

console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0


class Rectangle extends Shape {
    constructor(length = 0, width = 0){
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
}

console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0

class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0){
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area() {
        const s = (this.perimeter() / 2);
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
}

console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0

class Square extends Shape {
    constructor(side = 0){
        super([side, side, side, side]);
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for (const sides of data) {
    let shape = null;

    switch (sides.length) {
        case 2:
            // If both sides are equal, it's a square, otherwise it's a line
            shape = (sides[0] === sides[1]) ? new Square(sides[0]) : new Rectangle(...sides);
            console.log(`${shape.constructor.name} with sides ${sides.toString()} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`);
            break;

        case 3:
            // It's a triangle if there are 3 sides
            shape = new Triangle(...sides);
            console.log(`${shape.constructor.name} with sides ${sides.toString()} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`);
            break;

        default:
            // Default case for invalid or unsupported side arrays
            console.log(`Shape with ${sides.length} sides is not supported.`);
            continue;  // Skip to next iteration for invalid cases
    }

}