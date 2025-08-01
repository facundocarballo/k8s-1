import { User } from "#domain/user";

export interface UserRepository {
  findById(id: string): Promise<User | null>;
  save(username: string, password: string): Promise<User | null>;
}
