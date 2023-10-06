import express, { Request, Response } from 'express'
import { router } from './routes'

const server = express()

server.use(express.json())
server.use(router)


server.get('/', (req: Request, res: Response) => {
    return res.status(200).json({msg: 'DioBank API'})
})

const PORT = 3001
server.listen(PORT, () => {
    console.log("Rodando na porta", `http://localhost:${PORT}`)
})