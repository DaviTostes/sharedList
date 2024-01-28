import UserService from "./userService";

export default class UnitOfService {
    public userService: UserService

    constructor() {
        this.userService = new UserService()
    }
}