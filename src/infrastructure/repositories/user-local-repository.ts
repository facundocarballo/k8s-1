import { UserRepository } from "#app/ports/user-repository";
import { User } from "#domain/user";

export class UserLocalRepository implements UserRepository {
  private DEFAULT_USERNAME = "facundocarballo";
  private DEFAULT_PASSWORD = "123456789";
  private DEFAULT_ID = "1234";

  async findById(id: string): Promise<User | null> {
    if (id === this.DEFAULT_ID) {
      return new User(
        this.DEFAULT_USERNAME,
        this.DEFAULT_PASSWORD,
        this.DEFAULT_ID
      );
    }
    return null;
  }

  async save(username: string, password: string): Promise<User | null> {
    if (username !== this.DEFAULT_USERNAME) {
      return new User(username, password, "1235");
    }
    return null;
  }
}
