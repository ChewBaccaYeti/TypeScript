"use strict";
exports.__esModule = true;
function getButtonStyle(size) {
    switch (size) {
        case 'small':
            return { fontSize: '10px', padding: '5px' };
        case 'medium':
            return { fontSize: '14px', padding: '10px' };
        case 'large':
            return { fontSize: '18px', padding: '15px' };
        default:
            return { fontSize: '14px', padding: '10px' };
    }
}
var myButtonStyle = getButtonStyle('medium'); // OK
myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.
