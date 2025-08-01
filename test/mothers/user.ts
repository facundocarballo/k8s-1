import { User } from "#domain/user";
import { ConstantsMother } from "./constants";

export class UserMother {
  static any({
    username = ConstantsMother.USERNAME,
    password = ConstantsMother.PASSWORD,
    id = ConstantsMother.USER_ID,
  }: {
    username?: string;
    password?: string;
    id?: string;
  } = {}): User {
    return new User(username, password, id);
  }
}
