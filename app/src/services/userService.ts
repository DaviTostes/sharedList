import axios from "axios";
import { User, UserLogin } from "../interfaces/user";

export default class UserService {
    private readonly apiUrl

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl
    }

    async Create(user: User) {
        const result = await axios.post(this.apiUrl+"user", user)
        return result.data
    }

    async Login(login: UserLogin) {
        const result = await axios.post(this.apiUrl+"user/login", login)
        return result.data
    }
}