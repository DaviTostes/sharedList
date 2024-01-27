"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateBody(obj) {
    for (let key in obj) {
        if (obj[key] === undefined) {
            return key;
        }
    }
    return false;
}
exports.default = validateBody;
//# sourceMappingURL=validateBody.js.map