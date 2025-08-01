import { randomUUID } from "crypto";

export class User {
  public id: string;
  constructor(public username: string, public password: string, id?: string) {
    if (!id) {
      this.id = randomUUID();
    } else {
      this.id = id;
    }
  }
}
