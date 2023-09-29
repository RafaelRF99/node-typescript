import express, { Request, Response } from 'express'

const db = [
    {
        name: "Rafael",
        email: "rafael@hotmail.com"
    }
]

export class UserController {
    createUser = (req: Request, res: Response) => {
            const user = req.body
            db.push(user)
            console.log(db)
            return res.status(201).json({msg: "Usuario criado!"})
    }
}