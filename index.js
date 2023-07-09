// Imports fs, inquirer, prompts.js, and shapes.js exports
const fs = require("fs");
const inquirer = require("inquirer");
const prompts = require("./lib/prompts.js");
const switchShape = require("./switchShape.js");

function writeToFile(svg, answers) {
    fs.writeFile(svg, switchShape(answers), (err) => {
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
