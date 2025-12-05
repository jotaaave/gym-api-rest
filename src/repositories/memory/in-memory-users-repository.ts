import type { UserCreateInput } from "@/generated/prisma/models.js";
import type { UsersRepository } from "../types/users-repository.js";

export class InMemoryUsersRepository implements UsersRepository {
	public users: UserCreateInput[] = []

	async create(data: UserCreateInput) {
		this.users.push(data)
		return null
	}

	findByEmail(email: string): boolean {
		const user = this.users.filter((item) => item.email === email)

		return user ? true : false
	}
}
