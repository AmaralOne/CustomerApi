import { CustomerRepository } from "../../../repositories/CustomerRepository";
import  {Connection} from "../../../providers/conection";
import { FindCunstomerController } from "./FindCunstomerController";
import FindCunstomerUseCase from "./FindCunstomerUseCase";
import customerModel from "../../../model/customer";


    const Repository = new CustomerRepository(customerModel)
    const createCunstomerUseCase = new FindCunstomerUseCase(
            Repository,
        )       
    const findCunstomerController = new FindCunstomerController(
            createCunstomerUseCase
         )



export default findCunstomerController