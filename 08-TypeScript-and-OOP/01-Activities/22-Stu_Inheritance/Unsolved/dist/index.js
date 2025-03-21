"use strict";
// Define a Shape class
class Shape {
    constructor(name) {
        this.name = name;
    }
    // Methods to calculate the area and perimeter
    calculateArea() {
        return 0;
    }
    calculatePerimeter() {
        return 0;
    }
    // Method to display the shape information
    displayInfo() {
        console.log(`----------${this.name}----------`);
        console.log(`Area: ${this.calculateArea()}`);
        console.log(`Perimeter: ${this.calculatePerimeter()}`);
        console.log();
    }
}
// TODO: Define a Circle class
class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
// TODO: Define a Rectangle class
class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;

    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
// TODO: Define a Triangle class
class Triangle extends Shape {
    constructor(base, height, sideA, sideB) {
        super("Triangle");
        this.base = base;
        this.height = height;
        this.sideA = sideA;
        this.sideB = sideB;
    }
    calculateArea() {
        return (this.height * this.base) / 2;
    }
    calculatePerimeter() {
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
