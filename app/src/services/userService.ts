import axios from "axios";
import User from "../interfaces/user";

export default class UserService {
    private readonly apiUrl = "https://shared-list-api.vercel.app/"

    constructor() {}

    async Create(user: User) {
        const result = await axios.post(this.apiUrl+"user", user)
        return result.data
    }
}