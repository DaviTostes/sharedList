import ListService from "./listService";
import UserService from "./userService";

export default class UnitOfService {
    private readonly apiUrl = "https://shared-list-api.vercel.app/"
    public userService: UserService
    public listService: ListService

    constructor() {
        this.userService = new UserService(this.apiUrl)
        this.listService = new ListService(this.apiUrl)
    }
}