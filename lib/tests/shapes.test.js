// Imports classes for tests
const { Triangle, Square, Circle } = require("../shapes");

// Checks for triangle.render() to return string for user input shape and color
describe("Triangle", () => {
    it("should render a new logo based on user inputs for shape, fill color, text, and text color", () => {
        const triangle = new Triangle("blue", "ETA", "white");
        expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <polygon points="200, 10 300, 190 100, 190" fill="blue" />

        <text x="200" y="135" font-size="50" text-anchor="middle" fill="white">ETA</text>

        </svg>`);
    });
});

// Checks for square.render() to return string for user input shape and color
describe("Square", () => {
    it("should render a new logo based on user inputs for shape, fill color, text, and text color", () => {
        const square = new Square("black", "AND", "white");
        expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <rect width="200" height="200" fill="black" />
            
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="white">AND</text>

        </svg>`);
    });
});

// Checks for circle.render() to return string for user input shape and color
describe("Circle", () => {
    it("should render a new logo based on user inputs for shape, fill color, text, and text color", () => {
        const circle = new Circle("orange", "WHY", "blue");
        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="orange" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">WHY</text>

        </svg>`);
    });
});