import { Request, Response } from "express";
import { FindAllsDeliveriesUseCase } from "./FindAllDeliveriesUseCase";


export class FindAllDeliveriesController{
    async handle(request: Request, response: Response){
        const {id_client} = request
        
        const findAllDeliveriesUseCase = new FindAllsDeliveriesUseCase()
        const deliveries = await findAllDeliveriesUseCase.execute(id_client)

        return response.json(deliveries)
    }
}