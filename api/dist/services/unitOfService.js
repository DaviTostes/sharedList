"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("./userService");
class UnitOfService {
    constructor() {
        this.userService = new userService_1.UserService();
    }
}
exports.default = UnitOfService;
//# sourceMappingURL=unitOfService.js.map