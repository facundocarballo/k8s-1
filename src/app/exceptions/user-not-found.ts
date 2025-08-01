export class UserNotFound extends Error {
  constructor(id: string) {
    super(`User (${id}) not found`);
  }
}
