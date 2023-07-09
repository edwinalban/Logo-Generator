const newLogo = require("./switchShape");

function generateSVG(newLogo) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    ${switchShape()}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${prompts.textColor}">${prompts.text}</text>`;
}

module.exports = generateSVG;