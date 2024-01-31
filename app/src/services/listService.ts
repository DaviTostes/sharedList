import axios, { AxiosResponse, AxiosError } from "axios"
import { CreateListDto } from "../interfaces/list"
import Message from "../interfaces/message"

export default class ListService {
    private readonly apiUrl

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl+"list/"
    }

    async Create(list: CreateListDto) {
        var result : Message = await axios.post(this.apiUrl, list)
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