
import { UserRepository } from "../../../repositories/UserRepository";
import { CreateUserController } from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";
import userModel from "../../../model/user";


    const Repository = new UserRepository(userModel)
    const createUserUseCase = new CreateUserUseCase(
            Repository,
            Repository,
        )       
    const createUserController = new CreateUserController(
        createUserUseCase
         )



export default createUserController
