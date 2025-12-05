import { InMemoryUsersRepository } from "@/repositories/memory/in-memory-users-repository.js"
import { RegisterService } from "@/services/users/register-service.js"
import type { FastifyReply, FastifyRequest } from "fastify"
import z from "zod"

export async function register(request: FastifyRequest, reply: FastifyReply) {
	const registerBodySchema = z.object({
		name: z.string(),
		email: z.email(),
		password: z.string().min(6)
	})

	const { name, email, password } = registerBodySchema.parse(request.body)

	try {
		const repository = new InMemoryUsersRepository()
		const registerService = new RegisterService(repository)
		await registerService.execute({ name, email, password })
	} catch (err) {
		console.log(err)
		return reply.status(409).send()
	}

	reply.status(201).send()
}
