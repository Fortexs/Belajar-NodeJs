import { UserRepository } from "../src/userRepository.js";
import { UserService } from "../src/userService.js";

const repository = new UserRepository();
const service = new UserService(repository);

test ("ngetes spy.on penggunaan tanpa mock lagi", () => {
    const user = {
        id : 1,
        nama : "nanda"
    }

    const findByIdMock = jest.spyOn(repository,'findById');
    findByIdMock.mockReturnValueOnce(user);

    expect(service.findById(1)).toEqual(user);
    expect(findByIdMock).toHaveBeenCalled();
    expect(findByIdMock).toHaveBeenCalledWith(1);
    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(1);
});

test.failing("Memanggil asli repository findAll/test mock partial findAll", () => {
    service.findAll();
});