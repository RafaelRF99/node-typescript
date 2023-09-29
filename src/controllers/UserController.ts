import express, { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
    createUser = (req: Request, res: Response) => {
            const userService = new UserService()
            const user = req.body

            if(!user.name || !user.email) {
                return res.status(400).json({msg: "Campos obrigatórios"})
            }

            userService.createUser(user.name, user.email)
            return res.status(201).json({msg: "Usuario criado!"})
    }

    getAllUsers = (req: Request, res: Response) => {
        const userService = new UserService()
        const users = userService.getAllUsers()

        return res.status(200).json(users)
    }

    deleteUser = (req: Request, res: Response) => {
        const userService = new UserService()
        const delUser = userService.deleteUser(req.body.email)

        return res.status(202).json({msg: "Usuario deletado!", delUser})
    }
}