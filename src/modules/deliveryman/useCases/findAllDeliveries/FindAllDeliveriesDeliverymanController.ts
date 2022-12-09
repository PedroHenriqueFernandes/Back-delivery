import { Request, Response } from "express";
import { FindAllsDeliveriesDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase";


export class FindAllDeliveriesDeliverymanController{
    async handle(request: Request, response: Response){
        const {id_deliveryman} = request
        
        const findAllDeliveriesDeliverymanUseCase = new FindAllsDeliveriesDeliverymanUseCase()
        const deliveries = await findAllDeliveriesDeliverymanUseCase.execute(id_deliveryman)

        return response.json(deliveries)
    }
}