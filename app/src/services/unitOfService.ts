import UserService from "./userService";

export default class UnitOfService {
    private readonly apiUrl = "https://shared-list-api.vercel.app/"
    public userService: UserService

    constructor() {
        this.userService = new UserService(this.apiUrl)
    }
}