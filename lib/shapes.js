class Shape {
    constructor(fillColor, text, textColor) {
        this.text = text;
        this.textColor = textColor;
        this.fillColor = fillColor;
    }
};

class Triangle extends Shape {
    constructor(fillColor, text, textColor) {
        super(fillColor, text, textColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <polygon points="200, 10 250, 190 150, 190" fill="${this.fillColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>`
    }
};

class Square extends Shape {
    constructor(fillColor, text, textColor) {
        super(fillColor, text, textColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
                <rect width="200" height="200" fill="${this.fillColor}" />
            
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

                </svg>`
    }
};

class Circle extends Shape {
    constructor(fillColor, text, textColor) {
        super(fillColor, text, textColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <circle cx="150" cy="100" r="80" fill="${this.fillColor}" />
            
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
                </svg>`;
    }
};

module.exports = { Shape, Triangle, Square, Circle };