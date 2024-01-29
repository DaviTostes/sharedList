import axios from "axios";
import { User, UserLogin } from "../interfaces/user";

export default class UserService {
    private readonly apiUrl

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl+"user/"
    }

    async Create(user: User) {
        try {
            const result = await axios.post(this.apiUrl, user)
            return result.data
        }
        catch(ex) {
            console.log(ex)
        }
    }

    async Login(login: UserLogin) {
        try {
            const result = await axios.post(this.apiUrl+"login", login)
            return result.data
        }
        catch(ex) {
            console.log(ex)
        }
    }
}