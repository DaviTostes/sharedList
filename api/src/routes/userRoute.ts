import express from "express";
import { User, UserLogin } from "../interfaces/user";
import validateBody from "../utils/validateBody";
import createMessage from "../utils/createJson";
import UnitOfService from "../services/unitOfService";

const router = express.Router()
const service = new UnitOfService()

router.get('/', (req, res) => {
    res.send('Usuarios...')
})

router.post('/', async (req, res) => {
    const user: User = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    var validate = validateBody(user)

    if(validate === false) {
        var result = await service.userService.Create(user)
        res.json(createMessage(result, {}))
    }
    else {
        res.json(createMessage("Há um campo faltando", `campo "${validate}" faltando`))
    }
})

router.post('/login', async (req, res) => {
    const login: UserLogin = {
        email: req.body.email,
        password: req.body.password
    }

    var validate = validateBody(login)

    if(validate === false) {
        var result = await service.userService.Login(login)
        res.json(createMessage(result, {}))
    }
    else {
        res.json(createMessage("Há um campo faltando", `campo "${validate}" faltando`))
    }
})

export default router