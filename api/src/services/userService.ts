import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { User, UserLogin } from "../interfaces/user";
import { log } from "console";

export class UserService {
    async Create(user: User) {
        try {
            const userExists = await getDoc(doc(db, `Users/${user.email}`))

            if(userExists.exists()) return "Email já cadastrado..."

            await setDoc(doc(collection(db, `Users`), user.email), user)

            return 'Sucesso ao cadastrar usuário'
        }
        catch(ex) {
            console.log(ex)
            return 'Erro'
        }
    }

    async Login(login: UserLogin) {
        try {
            const userExists = await getDoc(doc(db, `Users/${login.email}`))

            if(!userExists.exists()) return 'Nenhum usuário encontrado...'

            if(userExists.data()['password'] === login.password) {
                return 'Login autorizado'
            }
            return 'Senha incorreta'
        }
        catch(ex) {
            console.log(ex)
            return 'Erro'
        }
    }
}