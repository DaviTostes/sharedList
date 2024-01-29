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
        
        if(result.includes('Successo')) res.status(200).json(createMessage(result, {}))
        else res.status(500).json(createMessage(result, {}))
    }
    else {
        res.status(400).json(createMessage("Há um campo faltando", `campo "${validate}" faltando`))
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

        if(result.includes('autorizado')) res.status(200).json(createMessage(result, {}))
        else res.status(500).json(createMessage(result, {}))
    }
    else {
        res.status(400).json(createMessage("Há um campo faltando", `campo "${validate}" faltando`))
    }
})

export default router