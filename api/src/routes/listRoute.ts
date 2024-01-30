import express from "express"
import UnitOfService from "../services/unitOfService"
import CreateListDTO from "../interfaces/list"
import validateBody from "../utils/validateBody"
import createMessage from "../utils/createJson"

const router = express.Router()
const service = new UnitOfService()

router.post('/', async (req, res) => {
    const list: CreateListDTO = {
        name: req.body.name,
        authority: req.body.authority,
        users: req.body.users
    }

    const validate = validateBody(list)

    if(validate === false) {
        const result = await service.listService.Create(list)
        
        if(result.includes('Sucesso')) res.status(200).json(createMessage(result, {}))
        else res.status(400).json(createMessage(result, {}))
    }
    else {
        res.status(500).json(createMessage("Há um campo faltando", `campo "${validate}" faltando`))
    }
})

export default router