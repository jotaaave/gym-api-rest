import type { UserCreateInput } from "@/generated/prisma/models.ts";

export interface UsersRepository {
	create(data: UserCreateInput): Promise<UserCreateInput | null>
	findByEmail(email: string): boolean
}
