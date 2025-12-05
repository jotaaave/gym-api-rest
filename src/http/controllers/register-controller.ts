import { registerService } from "@/services/users/register-service.js"
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
		await registerService({ name, email, password })
	} catch (err) {
		return reply.status(409).send()
		console.error(err)
	}

	reply.status(201).send()
}
