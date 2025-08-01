export class UserCantCreate extends Error {
  constructor() {
    super("User cannot be created.");
  }
}
