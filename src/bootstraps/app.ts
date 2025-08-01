import express, { Application } from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import { BootstrapUserRouter } from "./routers/user-router";

export function bootstrapApp(): Application {
  const app: Application = express();

  app.disable("x-powered-by");

  // Middlewares
  app.use(cors());
  app.use(bodyParser.json({ limit: "15mb" }));
  app.use(bodyParser.urlencoded({ extended: true }));

  const userRouter = BootstrapUserRouter.get()

  // Routers
  app.use("/user", userRouter.router);

  return app;
}
