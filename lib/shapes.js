// Generic Shape class
class Shape {
    constructor(fillColor, text, textColor) {
        this.text = text;
        this.textColor = textColor;
        this.fillColor = fillColor;
    }
};

// Generic Triangle class to inherit fillColor, text, and textColor from Shape and extend Shape with render method
class Triangle extends Shape {
    constructor(fillColor, text, textColor) {
        super(fillColor, text, textColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <polygon points="200, 10 300, 190 100, 190" fill="${this.fillColor}" />

        <text x="200" y="135" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>`
    }
};

// Generic Square class to inherit fillColor, text, and textColor from Shape and extend Shape with render method
class Square extends Shape {
    constructor(fillColor, text, textColor) {
        super(fillColor, text, textColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <rect width="200" height="200" fill="${this.fillColor}" />
            
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>`
    }
};

// Generic Circle class to inherit fillColor, text, and textColor from Shape and extend Shape with render method
class Circle extends Shape {
    constructor(fillColor, text, textColor) {
        super(fillColor, text, textColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.fillColor}" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>`;
    }
};

module.exports = { Triangle, Square, Circle };