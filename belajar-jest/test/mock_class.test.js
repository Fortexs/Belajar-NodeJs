
import {UserRepository} from "../src/userRepository.js";
import {UserService} from "../src/userService.js";

jest.mock("../src/userRepository.js");

const repository = new UserRepository();
const service = new UserService(repository);

test("ngetes cara Save", () => {
    const user = {
        id: 2,
        nama: "nanda"
    };

    service.save(user);

    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(user);
});

test("ngetes cara find id", () => {
    const user = {
        id: 1,
        nama: "nanda"
    };

    repository.findById.mockReturnValueOnce(user)

    expect(service.findById(1)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(1);
})
test("ngetes cara find all", () => {
    const users = [
        {
        id: 1,
        nama: "nanda"
    },
    {
        id: 2,
        nama: "nanda"
    }
];

    repository.findAll.mockReturnValueOnce(users);

    expect(service.findAll()).toEqual(users);
    expect(repository.findAll).toHaveBeenCalled();
    expect(repository.findAll).toHaveBeenCalledWith();
})