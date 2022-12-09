import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

interface IAuthenticatorClient{
    username: string;
    password: string;
}

export class AuthenticateClientUseCase {
    async execute({username, password}: IAuthenticatorClient){
        const client  = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        if(!client){
            throw new Error("Username or password invalid!")
        }

        const passwordMatch = await compare(password, client.password)

        if(!passwordMatch){
            throw new Error("Username or password invalid!")
        }

        const token = sign({username}, "dfa7cebcd1e2c997fd19ced9584d600b", {
            subject: client.id,
            expiresIn: "1d"
        })

        return token
    }
}