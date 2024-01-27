"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateBody_1 = __importDefault(require("../utils/validateBody"));
const createJson_1 = __importDefault(require("../utils/createJson"));
const unitOfService_1 = __importDefault(require("../services/unitOfService"));
const router = express_1.default.Router();
const service = new unitOfService_1.default();
router.get('/', (req, res) => {
    res.send('Usuarios...');
});
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    };
    var validate = (0, validateBody_1.default)(user);
    if (validate === false) {
        var result = yield service.userService.Create(user);
        res.json((0, createJson_1.default)(result, {}));
    }
    else {
        res.json((0, createJson_1.default)("Há um campo faltando", `campo "${validate}" faltando`));
    }
}));
exports.default = router;
//# sourceMappingURL=userRoute.js.map