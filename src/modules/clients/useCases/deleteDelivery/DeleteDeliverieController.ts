import { Request, Response } from "express";
import { DeleteDeliverieUseCase } from "./DeleteDeliverieUseCase";


export class DeleteDeliverieController{
    async handle(request: Request, response: Response){
        const { id: id_deliverie } = request.params
        
        const deleteDeliverieUseCase = new DeleteDeliverieUseCase()
        const deliveries = await deleteDeliverieUseCase.execute(id_deliverie)

        return response.json(deliveries)
    }
}