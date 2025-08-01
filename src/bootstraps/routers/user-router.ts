import { BootstrapCreateUserController } from "#bootstraps/controllers/create-user";
import { BootstrapGetUserController } from "#bootstraps/controllers/get-user";
import { UserRouter } from "#infrastructure/routes/user";

export class BootstrapUserRouter {
    private static instance: UserRouter;

    public static get(): UserRouter {
        if (!this.instance) {
            const getUserController = BootstrapGetUserController.get();
            const createUserController = BootstrapCreateUserController.get();
            this.instance = new UserRouter(getUserController, createUserController);
        }
        return this.instance;
    }

    public static register(router: UserRouter) {
        this.instance = router;
    }
}