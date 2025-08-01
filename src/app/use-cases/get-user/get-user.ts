import { UserNotFound } from "#app/exceptions/user-not-found";
import { UseCase } from "#app/ports/use-case";
import { UserRepository } from "#app/ports/user-repository";
import { User } from "#domain/user";
import { GetUserUseCaseInput } from "./get-user-input";

export class GetUserUseCase implements UseCase<GetUserUseCaseInput, User> {
  constructor(private userRepository: UserRepository) {}

  async execute(input: GetUserUseCaseInput): Promise<User> {
    const user = await this.userRepository.findById(input.id);
    if (!user) {
      throw new UserNotFound(input.id);
    }
    return user;
  }
}
