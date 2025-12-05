import fastify from "fastify"
import { PrismaClient } from "./generated/prisma/client.js"

export const app = fastify()

const prisma = new PrismaClient({accelerateUrl: ''})

prisma.user.create({
    data: {
        email: 'eere@gmail.com',
        name: 'joao'
    }
})