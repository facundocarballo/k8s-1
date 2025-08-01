import { UserMother } from "test/mothers/user";
import { GetUserUseCaseInputMother } from "./get-user-input-mother";
import { GetUserUseCase } from "#app/use-cases/get-user/get-user";
import { UserNotFound } from "#app/exceptions/user-not-found";

describe("Use Case - Get User", () => {
  const userRepository = {
    findById: jest.fn(),
    save: jest.fn(),
  };
  const getUserUseCase = new GetUserUseCase(userRepository);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should get a correct user", async () => {
    userRepository.findById.mockReturnValue(UserMother.any());
    const input = GetUserUseCaseInputMother.any();
    const user = await getUserUseCase.execute(input);
    expect(user).toEqual(UserMother.any());
  });

  test("shouldn't get a correct user", async () => {
    userRepository.findById.mockReturnValue(null);
    const newId = "1";
    const input = GetUserUseCaseInputMother.any({ id: newId });
    const user = getUserUseCase.execute(input);
    await expect(user).rejects.toThrow(new UserNotFound(newId));
  });
});
