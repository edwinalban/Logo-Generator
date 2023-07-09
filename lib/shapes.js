
module.exports = {Shape, Triangle, Square, Circle};

class Shape {
    constructor (fillColor, text, textColor) {
        this.text = text;
        this.textColor = textColor;
        this.fillColor = fillColor;
    }
};

class Triangle extends Shape{
    super(shape) {
        this.shape = shape;
        this.render = render(shape);
    }
    
};

class Square extends Shape{
    super(shape) {
        this.shape = shape;
        this.render = render(shape);
    }
};

class Circle extends Shape{
    super(shape) {
        this.shape = shape;
        this.render = render(shape);
    }
};