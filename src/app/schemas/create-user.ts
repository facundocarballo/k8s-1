import z from "zod";

export const CreateUserRequest = z.object({
  username: z.string(),
  password: z.string().min(6),
});
