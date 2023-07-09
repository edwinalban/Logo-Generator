// Imports fs, inquirer, prompts.js, and switchShape.js exports
const fs = require("fs");
const inquirer = require("inquirer");
const prompts = require("./lib/prompts.js");
const switchShape = require("./switchShape.js");

// Writes svg file with results from user inputs in prompts
function writeToFile(svg, answers) {
    fs.writeFile(svg, switchShape(answers), (err) => {
        err ? console.error(err) : console.log("Generated logo.svg!");
    });
};

// Initializes app to prompt user for inputs, then writes svg file with answers with user inputs
function init() {
    inquirer
        .prompt(prompts)
        .then((answers) => {
            writeToFile("logo.svg", answers);
        });
};

init();
