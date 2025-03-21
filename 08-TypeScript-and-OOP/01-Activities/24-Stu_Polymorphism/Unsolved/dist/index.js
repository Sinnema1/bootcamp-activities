"use strict";
// TODO: Define a Circle class
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return Math.PI * this.radius * 2;
    }
}
// TODO: Define a Rectangle class
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calculateArea() {
        return this.height * this.width;
    }
    calculatePerimeter() {
        return (this.height + this.width) * 2;
    }
}
// TODO: Define a Triangle class
class Triangle {
    constructor(leg1, leg2) {
        this.leg1 = leg1;
        this.leg2 = leg2;
    }
    calculateArea() {
        return (this.leg1 * this.leg2) / 2;
    }
    calculatePerimeter() {
        return (this.leg1 * 2) + this.leg2;
    }
}
// Calculates the total area of an array of shapes
function calculateTotalArea(shapes) {
    let totalArea = 0;
    for (const shape of shapes) {
        totalArea += shape.calculateArea();
    }
    return totalArea;
}
// Calculates the total perimeter of an array of shapes
function calculateTotalPerimeter(shapes) {
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
const shapeArr = [seventhCircle, rectItRalph, triangle];
// TODO: Display the total area of all shapes
console.log(calculateTotalArea(shapeArr));
// TODO: Display the total perimeter of all shapes
console.log(calculateTotalPerimeter(shapeArr));
