import { GetUserUseCaseInput } from "#app/use-cases/get-user/get-user-input";
import { ConstantsMother } from "test/mothers/constants";

export class GetUserUseCaseInputMother {
  static any({
    id = ConstantsMother.USER_ID,
  }: {
    id?: string;
  } = {}) {
    return new GetUserUseCaseInput(id);
  }
}
