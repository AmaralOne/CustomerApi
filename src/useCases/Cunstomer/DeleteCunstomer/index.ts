
import { CustomerRepository } from "../../../repositories/CustomerRepository";
import { DeleteCunstomerController } from "./DeleteCunstomerController";
import DeleteCunstomerUseCase from "./DeleteCunstomerUseCase";
import customerModel from "../../../model/customer";


    const Repository = new CustomerRepository(customerModel)
    const deleteCunstomerUseCase = new DeleteCunstomerUseCase(
            Repository,
            Repository,
        )       
    const deleteCunstomerController = new DeleteCunstomerController(
        deleteCunstomerUseCase
         )



export default deleteCunstomerController
