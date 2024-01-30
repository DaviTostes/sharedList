import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import CreateListDTO from "../interfaces/list";
import { v4 } from 'uuid'
import { db } from "../config/firebase";

export class ListService {
    async Create(list: CreateListDTO) {
        try {
            const newId = v4()

            const authority = await getDoc(doc(db, `Users/${list.authority}`))

            if(!authority.exists()) return 'Usuário criador não encontrado'

            list.users.push(list.authority)

            for(let user of list.users) {
                let userExists = await getDoc(doc(db, `Users/${user}`))

                if(!userExists.exists()) return `${user} não encontrado`
            }

            await setDoc(doc(collection(db, 'Lists'), newId), list)

            return 'Sucesso ao criar lista'
        }
        catch(ex) {
            console.log(ex)
            return "Erro"
        }
    }
}