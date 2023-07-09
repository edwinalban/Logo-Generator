class Shape {
    constructor (fillColor, text, textColor) {
        this.text = text;
        this.textColor = textColor;
        this.fillColor = fillColor;
    }
};

class Triangle extends Shape{
    constructor(fillColor, text, textColor, shape) {
        super(fillColor, text, textColor);
        this.shape = shape;
    }
    
};

class Square extends Shape{
    constructor(fillColor, text, textColor, shape) {
        super(fillColor, text, textColor);
        this.shape = shape;
    }
};

class Circle extends Shape{
    constructor(fillColor, text, textColor, shape) {
        super(fillColor, text, textColor);
        this.shape = shape;
    }
};

module.exports = {Shape, Triangle, Square, Circle};