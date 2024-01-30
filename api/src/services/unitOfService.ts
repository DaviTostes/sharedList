import { ListService } from "./listService";
import { UserService } from "./userService";

export default class UnitOfService {
    public userService: UserService
    public listService: ListService

    constructor() {
        this.userService = new UserService()
        this.listService = new ListService()
    }
}