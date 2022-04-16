import { Customer } from "../../../entities/Customer";
import { IRead } from "../../../repositories/interfaces/IRead";


export default class FindCunstomerUseCase{

    private ReadRepository: IRead<Customer>;

    constructor(
        ReadRepository: IRead<Customer>,
    ){
        this.ReadRepository = ReadRepository;
    }

    async  execute(id: string): Promise<Customer> {
        
            
        const customer = await this.ReadRepository.findOne(id);
        
        if(customer===null){
            throw new Error("Not found record with id:"+id)
        }

        return customer;

    
    }
}