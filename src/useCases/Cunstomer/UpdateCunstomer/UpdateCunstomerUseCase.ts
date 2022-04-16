import { Customer } from "../../../entities/Customer";
import { IWriter } from "../../../repositories/interfaces/IWrite";
import { IRead } from "../../../repositories/interfaces/IRead";
import { IUpdateCunstomerRequestDTO } from "./UpdateCunstomerDTO";


export default class UpdateCunstomerUseCase{

    private WriteRepository: IWriter<Customer>;
    private ReadRepository: IRead<Customer>;

    constructor(
        WriteRepository: IWriter<Customer>,
        ReadRepository: IRead<Customer>,
    ){
        this.WriteRepository = WriteRepository;
        this.ReadRepository = ReadRepository;
    }

    async  execute(id: string,data:IUpdateCunstomerRequestDTO): Promise<boolean> {
        
        const customerOld = await this.ReadRepository.findOne(id);

        if(customerOld===null){
            throw new Error("Not found record with id:"+id)
        }
        const customer = new Customer(data) 

        return  await this.WriteRepository.update(id,customer);

    
    }
}