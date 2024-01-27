import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import User from "../interfaces/user";

export class UserService {
    async Create(user: User) {
        try {
            const userExists = await getDoc(doc(db, `Users/${user.email}`))

            if(userExists.exists()) return "Email já cadastrado"

            await setDoc(doc(collection(db, `Users`), user.email), user)

            return 'Sucesso ao cadastrar usuário'
        }
        catch(ex) {
            console.log(ex)
            return 'Erro'
        }
    }
}