import { CreateUserUseCaseInput } from "#app/use-cases/create-user/create-user-input";
import { ConstantsMother } from "test/mothers/constants";

export class CreateUserUserCaseInputMother {
  static any({
    username = ConstantsMother.USERNAME,
    password = ConstantsMother.PASSWORD,
  }: {
    username?: string;
    password?: string;
  } = {}) {
    return new CreateUserUseCaseInput(username, password);
  }
}
