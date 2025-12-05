import type { UsersRepository } from "@/repositories/types/users-repository.js"
import { hash } from "bcryptjs"

interface RegisterServiceRequest {
	name: string
	email: string
	password: string
}

export class RegisterService {
	constructor(private db: UsersRepository) {}

	async execute({ name, email, password}: RegisterServiceRequest) {
		const passwordHash = await hash(password, 6)

		const userWithSameEmail = await this.db.findByEmail(email)

		if (userWithSameEmail) {
			throw new Error('E-mail already exists')
		}

		this.db.create({ name, email, passwordHash })
	}
}

