const prompts = require("./lib/prompts");

module.exports = switchShape;

function switchShape(data) {

    const shape = new `${data.shape}`;
    
        switch (shape) {
            case "Triangle":
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
                    <polygon points="200,10 250,190 150,190" fill="${data.fillColor}" />
                
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
            
                </svg>`;
            break;
    
            case "Square":
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
                    <rect width="200" height="200" fill="${data.fillColor}" />
                
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
            
                </svg>`;
    
            break;
    
            case "Circle":
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
                    <circle cx="150" cy="100" r="80" fill="${data.fillColor}" />
                
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
            
                </svg>`;
            break;
        };
    };