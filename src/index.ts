import express, { Request, Response } from 'express'
import { UserController } from './controllers/UserController'

const server = express()
server.use(express.json())

const userController = new UserController()

server.get('/', (req: Request, res: Response) => {
    return res.status(200).json({msg: 'DioBank API'})
})

server.get('/user', userController.getAllUsers)
server.post('/user', userController.createUser)

const PORT = 3001
server.listen(PORT, () => {
    console.log("Rodando na porta", PORT)
})