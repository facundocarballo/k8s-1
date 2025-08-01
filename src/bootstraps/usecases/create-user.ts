import { CreateUserUseCase } from "#app/use-cases/create-user/create-user";
import { BootstrapUserRepository } from "#bootstraps/repositories/user-repository";

export class BootstrapCreateUserUseCase {
    private static instance: CreateUserUseCase;

    public static get(): CreateUserUseCase {
        if (!this.instance) {
            const repository = BootstrapUserRepository.get();
            this.instance = new CreateUserUseCase(repository);
        }
        return this.instance;
    }

    public static register(usecase: CreateUserUseCase) {
        this.instance = usecase;
    }
}