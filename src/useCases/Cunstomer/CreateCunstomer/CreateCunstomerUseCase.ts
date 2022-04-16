import { Customer } from "../../../entities/Customer";
import { IWriter } from "../../../repositories/interfaces/IWrite";
import { IRead } from "../../../repositories/interfaces/IRead";
import { ICreateCunstomerRequestDTO } from "./CreateCunstomerDTO";

export default class CreateCunstomerUseCase{

    private WriteRepository: IWriter<Customer>;

    constructor(
        WriteRepository: IWriter<Customer>,
    ){
        this.WriteRepository = WriteRepository;
    }

    async  execute(data:ICreateCunstomerRequestDTO): Promise<boolean> {
        
        var sucesso:boolean = false;
        const customer = new Customer(data)

        
            
        return  await this.WriteRepository.create(customer);

    
    }
}