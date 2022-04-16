
import { CustomerRepository } from "../../../repositories/CustomerRepository";
import { FindCunstomerController } from "./FindCunstomerController";
import FindCunstomerUseCase from "./FindCunstomerUseCase";
import customerModel from "../../../model/customer";


    const Repository = new CustomerRepository(customerModel)
    const findCunstomerUseCase = new FindCunstomerUseCase(
            Repository,
        )       
    const findOneCunstomerController = new FindCunstomerController(
        findCunstomerUseCase
         )



export default findOneCunstomerController
