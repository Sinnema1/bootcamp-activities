// Define a Shape class
class Shape {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Methods to calculate the area and perimeter
  calculateArea(): number {
    return 0;
  }

  calculatePerimeter(): number {
    return 0;
  }

  // Method to display the shape information
  displayInfo(): void {
    console.log(`----------${this.name}----------`);
    console.log(`Area: ${this.calculateArea()}`);
    console.log(`Perimeter: ${this.calculatePerimeter()}`);
    console.log();
  }
}

// TODO: Define a Circle class
class Circle extends Shape {
  constructor(private radius: number) {
    super("Circle");
  }

  override calculateArea(): number {
    return Math.PI * this.radius * this.radius;    
  }

  override calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
// TODO: Define a Rectangle class
class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  override calculateArea(): number {
    return this.width * this.height;
  }

  override calculatePerimeter(): number {
    return 2 * (this.width + this.height)
  }
}
// TODO: Define a Triangle class
class Triangle extends Shape {
  constructor(private base: number, private height: number, private sideA: number, private sideB: number) {
    super("Triangle");
    this.base = base;
    this.height = height;
    this.sideA = sideA;
    this.sideB = sideB; 
  }

  override calculateArea(): number {
    return (this.height * this.base) / 2
  }

  override calculatePerimeter(): number {
    return this.sideA + this.base + this.sideB;
  }

}
// TODO: Call the displayInfo method for the Circle, Rectangle, and Triangle classes

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
const triangle = new Triangle(6, 4, 5, 5);

circle.displayInfo();
rectangle.displayInfo();
triangle.displayInfo();