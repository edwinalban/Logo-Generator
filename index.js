// Imports fs, inquirer, prompts.js, and shapes.js exports
const fs = require("fs");
const inquirer = require("inquirer");
const prompts = require("./lib/prompts.js");
const shapes = require("./lib/shapes.js");

function writeToFile(svg, data) {
    fs.writeFile(svg, generateSVG(data), (err) => {
        err ? console.error(err) : console.log("SVG file written!");
    });
};

function init() {
   inquirer
    .prompt(prompts)
    .then((answers) => {
        writeToFile("logo.svg", answers);
    });
};

init();
