
import { CustomerRepository } from "../../../repositories/CustomerRepository";
import { SearchCunstomerController } from "./SearchCunstomerController";
import SearchCunstomerUseCase from "./SearchCunstomerUseCase";
import customerModel from "../../../model/customer";


    const Repository = new CustomerRepository(customerModel)
    const searchCunstomerUseCase = new SearchCunstomerUseCase(
            Repository,
        )       
    const searchCunstomerController = new SearchCunstomerController(
        searchCunstomerUseCase
         )



export default searchCunstomerController
