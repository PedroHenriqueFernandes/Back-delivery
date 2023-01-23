import { prisma } from "../../../../database/prismaClient";

export class FindAllsDeliveriesUseCase{
    async execute(id_client: string){
        const deliveries = await prisma.clients.findMany({
            where:{
                id: id_client
            },
            select:{
                id: true,
                username: true,
                deliveries: {
                    select: {
                        id: true,
                        item_name: true,
                        id_client: true,
                        id_deliveryman: true,
                        created_at: true,
                        end_at: true,
                        deliveryman: {
                            select: {
                                id: true,
                                username: true,
                            }
                        }
                    }
                },
            }
        })

        return deliveries
    }
}