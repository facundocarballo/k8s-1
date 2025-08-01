import { Controller } from "#app/ports/controller";
import { Router } from "express";

export class UserRouter {
  public router = Router();

  constructor(
    private getUserController: Controller,
    private createUserController: Controller
  ) {
    this.router.get("/:id", (req, res, next) =>
      this.getUserController.execute(req, res, next)
    );

    this.router.post("/", (req, res, next) =>
      this.createUserController.execute(req, res, next)
    );
  }
}
