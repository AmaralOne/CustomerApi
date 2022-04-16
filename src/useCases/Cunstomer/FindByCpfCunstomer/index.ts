
import { CustomerRepository } from "../../../repositories/CustomerRepository";
import  {FindByCpfCunstomerController} from "./FindByCpfCusntomerController";
import FindByCpfCunstomerUseCase from "./FindByCunstomerUseCase";
import customerModel from "../../../model/customer";


    const Repository = new CustomerRepository(customerModel)
    const findByCpfCunstomerUseCase = new FindByCpfCunstomerUseCase(
            Repository,
        )       
    const findByCpfCunstomerController = new FindByCpfCunstomerController(
        findByCpfCunstomerUseCase
         )



export default findByCpfCunstomerController
