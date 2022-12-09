import { Request, Response } from "express";
import { CreateClienteUseCase } from "./CreateClientUseCase";

export class CreateClienteController {
    async handle(request: Request, response: Response){
        const {username, password} = request.body

        const createClienteUseCase = new CreateClienteUseCase()
        const result = await createClienteUseCase.execute({
            username,
            password
        })

        return response.json(result)
    }
}