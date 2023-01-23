import { prisma } from "../../../../database/prismaClient";

export class DeleteDeliverieUseCase{
    async execute(id_deliverie: string){
        const deliveries = await prisma.deliveries.delete({
            where:{
                id: id_deliverie,
            }
        })

        return deliveries
    }
}