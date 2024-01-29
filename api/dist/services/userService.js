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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../config/firebase");
class UserService {
    Create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userExists = yield (0, firestore_1.getDoc)((0, firestore_1.doc)(firebase_1.db, `Users/${user.email}`));
                if (userExists.exists())
                    return "Email já cadastrado...";
                yield (0, firestore_1.setDoc)((0, firestore_1.doc)((0, firestore_1.collection)(firebase_1.db, `Users`), user.email), user);
                return 'Sucesso ao cadastrar usuário';
            }
            catch (ex) {
                console.log(ex);
                return 'Erro';
            }
        });
    }
    Login(login) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userExists = yield (0, firestore_1.getDoc)((0, firestore_1.doc)(firebase_1.db, `Users/${login.email}`));
                if (!userExists.exists())
                    return 'Nenhum usuário encontrado...';
                if (userExists.data()['password'] === login.password) {
                    return 'Login autorizado';
                }
                return 'Senha incorreta';
            }
            catch (ex) {
                console.log(ex);
                return 'Erro';
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map