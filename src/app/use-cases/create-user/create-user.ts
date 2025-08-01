import { UserCantCreate } from "#app/exceptions/user-cant-create";
import { UseCase } from "#app/ports/use-case";
import { UserRepository } from "#app/ports/user-repository";
import { User } from "#domain/user";
import { CreateUserUseCaseInput } from "./create-user-input";

export class CreateUserUseCase
  implements UseCase<CreateUserUseCaseInput, User>
{
  constructor(private userRepository: UserRepository) {}

  async execute(input: CreateUserUseCaseInput): Promise<User> {
    const user = await this.userRepository.save(input.username, input.password);
    if (!user) {
      throw new UserCantCreate();
    }
    return user;
  }
}
