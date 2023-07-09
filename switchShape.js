const prompts = require("./lib/prompts");
const { Shape, Triangle, Square, Circle } = require("./lib/shapes");

const newLogo = new `${prompts.shape}`(  
    `${prompts.fillColor}`,
    `${prompts.text}`,
    `${prompts.textColor}`,
    `${switchShape(prompts)}`
    );

function switchShape(prompts) {
    const shape = `${prompts.shape}`

    switch(shape) {
        case "Triangle":
            `<polygon points="200,10 250,190 150,190" fill="${prompts.fillColor}" />`;
            break;
        case "Square":
            `<rect width="200" height="200" fill="${prompts.fillColor}" />`;
            break;
        case "Circle":
            `<circle cx="150" cy="100" r="80" fill="${prompts.fillColor}" />`;
            break;
    };
};

module.exports = newLogo;