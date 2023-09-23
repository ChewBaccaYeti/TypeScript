"use strict";
exports.__esModule = true;
var value;
value = 1; // OK
value = 2; // OK
value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.
var answer;
answer = 'yes'; // OK
answer = 'no'; // OK
answer = 'maybe'; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.
