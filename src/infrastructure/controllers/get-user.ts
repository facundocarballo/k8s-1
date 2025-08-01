import { UserNotFound } from "#app/exceptions/user-not-found";
import { Controller } from "#app/ports/controller";
import { GetUserRequest } from "#app/schemas/get-user";
import { GetUserUseCase } from "#app/use-cases/get-user/get-user";
import { GetUserUseCaseInput } from "#app/use-cases/get-user/get-user-input";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export class GetUserController implements Controller {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async execute(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = GetUserRequest.parse(req.params);
      const input = new GetUserUseCaseInput(id);
      const user = await this.getUserUseCase.execute(input);
      res.status(StatusCodes.OK).send(user);
    } catch (error) {
      if (error instanceof UserNotFound) {
        res.status(StatusCodes.NOT_FOUND).send({ message: error.message });
        return;
      }
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ message: "Unexpected error." });
    }
  }
}
