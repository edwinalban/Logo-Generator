const { Triangle, Square, Circle } = require("./lib/shapes");


function switchShape(answers) {
    const shape = answers.shape;

    switch (shape) {
        case "Triangle":
            const triangle = new Triangle(
                `${answers.fillColor}`,
                `${answers.text}`,
                `${answers.textColor}`,
                triangle.render()
            );
            break;
        case "Square":
            const square = new Square(
                `${answers.fillColor}`,
                `${answers.text}`,
                `${answers.textColor}`,
                square.render()
            );
            break;
        case "Circle":
            const circle = new Circle(
                `${answers.fillColor}`,
                `${answers.text}`,
                `${answers.textColor}`,
                circle.render()
            );
            break;
    };
};

module.exports = switchShape;