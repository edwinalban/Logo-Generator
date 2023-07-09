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
        message: `Which color would you like for your logo? You may enter a color name, or a hexadecimal number.
        (For a list of color names, visit https://www.w3schools.com/tags/ref_colornames.asp
        For help with hexadecimal numbers, visit https://htmlcolorcodes.com/)
        `
    },
    {
        type: "input",
        name: "text",
        message: `Please enter the preferred text for your logo? (You may enter up to 3 characters for the logo text)
        `,
        validate: (input) => input.length <= 3 || 'Please enter 3 or fewer characters.'
    },
    {
        type: "input",
        name: "textColor",
        message: `Which text color would you like for your logo? You may enter a color name, or a hexadecimal number.
        (For a list of color names, visit https://www.w3schools.com/tags/ref_colornames.asp
        For help with hexadecimal numbers, visit https://htmlcolorcodes.com/)
        `
    }
];

module.exports = prompts;