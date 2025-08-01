import { GetUserUseCase } from "#app/use-cases/get-user/get-user";
import { BootstrapUserRepository } from "#bootstraps/repositories/user-repository";

export class BootstrapGetUserUseCase {
    private static instance: GetUserUseCase;

    public static get(): GetUserUseCase {
        if (!this.instance) {
            const repository = BootstrapUserRepository.get();
            this.instance = new GetUserUseCase(repository);
        }
        return this.instance;
    }

    public static register(usecase: GetUserUseCase) {
        this.instance = usecase;
    }
}