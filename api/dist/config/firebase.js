"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyBDUZUGBUA6c5zF6qeesueMHQghIyiHcno",
    authDomain: "sharedlist-df919.firebaseapp.com",
    projectId: "sharedlist-df919",
    storageBucket: "sharedlist-df919.appspot.com",
    messagingSenderId: "79629619035",
    appId: "1:79629619035:web:d47896ea12a7eed8d3d47e"
};
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.db = (0, firestore_1.getFirestore)(app);
//# sourceMappingURL=firebase.js.map