import axios, { AxiosError, AxiosResponse } from "axios";
import { User, UserLogin } from "../interfaces/user";
import Message from "../interfaces/message";

export default class UserService {
    private readonly apiUrl

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl+"user/"
    }

    async Create(user: User) {
        var result : Message = await axios.post(this.apiUrl, user)
        .then((response: AxiosResponse) => {
            return response.data
        })
        .catch((error: AxiosError) => {
            if(error.response) return error.response.data
            else if(error.request) return error.request.data
        })

        return result
    }

    async Login(login: UserLogin) {
        var result : Message = await axios.post(this.apiUrl+"login", login)
        .then((response: AxiosResponse) => {
            return response.data
        })
        .catch((error: AxiosError) => {
            if(error.response) return error.response.data
            else if(error.request) return error.request.data
        })

        return result
    }

    async FindByName(name: string) {
        var result : Message = await axios.get(this.apiUrl+"/"+name)
        .then((response: AxiosResponse) => {
            return response.data
        })
        .catch((error: AxiosError) => {
            if(error.response) return error.response.data
            else if(error.request) return error.request.data
        })

        return result
    }
}