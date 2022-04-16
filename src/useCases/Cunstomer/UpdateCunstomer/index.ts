
import { CustomerRepository } from "../../../repositories/CustomerRepository";
import { UpdateCunstomerController } from "./UpdateCunstomerController";
import UpdateCunstomerUseCase from "./UpdateCunstomerUseCase";
import customerModel from "../../../model/customer";


    const Repository = new CustomerRepository(customerModel)
    const updateCunstomerUseCase = new UpdateCunstomerUseCase(
            Repository,
            Repository,
        )       
    const updateCunstomerController = new UpdateCunstomerController(
        updateCunstomerUseCase
         )



export default updateCunstomerController
