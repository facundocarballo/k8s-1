import { UserRepository } from "#app/ports/user-repository";
import { UserLocalRepository } from "#infrastructure/repositories/user-local-repository";

export class BootstrapUserRepository {
    private static instance: UserRepository;

    public static get(): UserRepository {
        if (!this.instance) {
            this.instance = new UserLocalRepository();
        }
        return this.instance;
    }

    public static register(repository: UserRepository) {
        this.instance = repository;
    }
}