import { UserRepository } from "../../../repositories/UserRepository";
import { AuthUserController } from "./AuthenticateUserController";
import AuthenticateUserUseCase from "./AuthenticateUserCase";
import userModel from "../../../model/user";


    const Repository = new UserRepository(userModel)
    const authUserUseCase = new AuthenticateUserUseCase(
            Repository,
        )       
    const authUserController = new AuthUserController(
        authUserUseCase
         )



export default authUserController