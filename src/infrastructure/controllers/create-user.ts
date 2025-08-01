import { UserCantCreate } from "#app/exceptions/user-cant-create";
import { Controller } from "#app/ports/controller";
import { CreateUserRequest } from "#app/schemas/create-user";
import { CreateUserUseCase } from "#app/use-cases/create-user/create-user";
import { CreateUserUseCaseInput } from "#app/use-cases/create-user/create-user-input";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export class CreateUserController implements Controller {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async execute(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { username, password } = CreateUserRequest.parse(req.body);
      const input = new CreateUserUseCaseInput(username, password);
      const user = await this.createUserUseCase.execute(input);
      res.status(StatusCodes.CREATED).send(user);
    } catch (error) {
      if (error instanceof UserCantCreate) {
        res
          .status(StatusCodes.UNAUTHORIZED)
          .send({ message: "User cannot be created." });
        return;
      }
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ message: "Unexpected error." });
    }
  }
}
