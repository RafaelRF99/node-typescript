import express, { Request, Response } from 'express'

const server = express()
server.use(express.json())

server.get('/', (req: Request, res: Response) => {
    return res.status(200).json({msg: 'DioBank API'})
})

server.post('/user', (req: Request, res: Response) => {
    const body = req.body
    return res.status(201).json({msg: "Usuario criado!", body})
})

const PORT = 3001
server.listen(PORT, () => {
    console.log("Rodando na porta", PORT)
})