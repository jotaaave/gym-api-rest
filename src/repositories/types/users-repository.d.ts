import type { UserCreateInput } from "@/generated/prisma/models.ts";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface User extends UserCreateInput {}

export interface UsersRepository {
	create(data: User): Promise<User | null>
	findByEmail(email: string): Promise<User | null>
}
