
import { CustomerRepository } from "../../../repositories/CustomerRepository";
import  {Connection} from "../../../providers/conection";
import { CreateCunstomerController } from "./CreateCunstomerController";
import CreateCunstomerUseCase from "./CreateCunstomerUseCase";
import customerModel from "../../../model/customer";

    //const db =  await Connection.getConection();
    //const Repository = new CustomerRepository(db,"Customer")
    const Repository = new CustomerRepository(customerModel)
    const createCunstomerUseCase = new CreateCunstomerUseCase(
            Repository,
        )       
    const createCunstomerController = new CreateCunstomerController(
            createCunstomerUseCase
         )



export default createCunstomerController
