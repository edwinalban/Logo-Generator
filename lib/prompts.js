// Prompts for user input for logo properties
const prompts = [
    {
        type: "list",
        name: "shape",
        message: `Which shape would you like for your logo?
        `,
        choices: ["Triangle", "Square", "Circle"]
    },
    {
        type: "input",
        name: "fillColor",
        message: `Which color would you like for your logo? (You may enter a color name, or a hexadecimal number)
        `
    },
    {
        type: "input",
        name: "text",
        message: `Please enter the preferred text for your logo? (You may enter up to 3 characters for the logo text)
        `
    },
    {
        type: "input",
        name: "textColor",
        message: `Which text color would you like your logo? (You may enter a color name, or a hexadecimal number)
        `
    }
];

module.exports = prompts;