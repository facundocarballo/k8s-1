import { BootstrapCreateUserUseCase } from "#bootstraps/usecases/create-user";
import { CreateUserController } from "#infrastructure/controllers/create-user";

export class BootstrapCreateUserController {
    private static instance: CreateUserController;

    public static get(): CreateUserController {
        if (!this.instance) {
            const usecase = BootstrapCreateUserUseCase.get();
            this.instance = new CreateUserController(usecase);
        }
        return this.instance;
    }

    public static register(controller: CreateUserController) {
        this.instance = controller;
    }
}