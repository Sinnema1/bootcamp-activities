// Define a base interface for shapes
interface Shape {
  calculateArea: () => number;
  calculatePerimeter: () => number;
}

// TODO: Define a Circle class
class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter(): number {
    return Math.PI * this.radius * 2;
  }
}
// TODO: Define a Rectangle class
class Rectangle implements Shape {
  private height: number;
  private width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  calculateArea(): number {
    return this.height * this.width;
  }

  calculatePerimeter(): number {
    return (this.height + this.width) * 2;
  }
}
// TODO: Define a Triangle class
class Triangle implements Shape {
  private leg1: number;
  private leg2: number;

  constructor(leg1: number, leg2: number) {
    this.leg1 = leg1;
    this.leg2 = leg2;
  }
  
  calculateArea(): number {
    return (this.leg1 * this.leg2) / 2;
  }

  calculatePerimeter(): number {
    return (this.leg1 * 2) + this.leg2
  }
}


// Calculates the total area of an array of shapes
function calculateTotalArea(shapes: Shape[]): number {
  let totalArea = 0;
  for (const shape of shapes) {
    totalArea += shape.calculateArea();
  }
  return totalArea;
}

// Calculates the total perimeter of an array of shapes
function calculateTotalPerimeter(shapes: Shape[]): number {
  let totalPerimeter = 0;
  for (const shape of shapes) {
    totalPerimeter += shape.calculatePerimeter();
  }
  return totalPerimeter;
}

// TODO: Create instances of the Circle, Rectangle, and Triangle classes
const seventhCircle = new Circle(7);
const rectItRalph = new Rectangle(2, 0.5);
const triangle = new Triangle(16, 8);

// TODO: Create an array to hold all of the shapes (Circle, Rectangle, and Triangle)
const shapeArr: Shape[] = [seventhCircle, rectItRalph, triangle];

// TODO: Display the total area of all shapes
console.log(calculateTotalArea(shapeArr));
// TODO: Display the total perimeter of all shapes
console.log(calculateTotalPerimeter(shapeArr));