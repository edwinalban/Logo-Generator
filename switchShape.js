// Imports classes from shapes.js file
const { Triangle, Square, Circle } = require("./lib/shapes");

// Gets shape value from user inputs and calls corresponding constructor
function switchShape(answers) {
    const shape = answers.shape;

    switch (shape) {
        case "Triangle":
            const triangle = new Triangle(
                `${answers.fillColor}`,
                `${answers.text}`,
                `${answers.textColor}`,
            );
            return triangle.render();
        case "Square":
            const square = new Square(
                `${answers.fillColor}`,
                `${answers.text}`,
                `${answers.textColor}`,
            );
            return square.render();
        case "Circle":
            const circle = new Circle(
                `${answers.fillColor}`,
                `${answers.text}`,
                `${answers.textColor}`,
            );
            return circle.render();
    };
};

module.exports = switchShape;