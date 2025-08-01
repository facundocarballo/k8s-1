import z from "zod";

export const GetUserRequest = z.object({
  id: z.string(),
});
