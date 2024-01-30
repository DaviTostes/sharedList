import { and, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { ReadUserDTO, User, UserLogin } from "../interfaces/user";

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

    async Login(login: UserLogin) {
        try {
            const userExists = await getDoc(doc(db, `Users/${login.email}`))

            if(!userExists.exists()) return 'Nenhum usuário encontrado'

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

    async FindByName(name: string) {
        try {
            
            const q = await getDocs(query(collection(db, 'Users')))
            
            if(q.size === 0) return []

            const users: ReadUserDTO[] = []

            q.forEach(doc => {
                if(doc.data()['username'].includes(name)) {
                    users.push({
                        email: doc.data()['email'],
                        username: doc.data()['username']
                    })
                }
            })

            return users
        }
        catch(ex) {
            console.log(ex)
            return []
        }
    }
}