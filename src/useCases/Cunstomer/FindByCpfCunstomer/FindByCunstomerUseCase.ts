import { Customer } from "../../../entities/Customer";
import { FindCustormByCpf } from "../../../repositories/interfaces/IFindCpf";
import { IRead } from "../../../repositories/interfaces/IRead";


export default class FindCunstomerUseCase{

    private ReadRepository: FindCustormByCpf;

    constructor(
        ReadRepository: FindCustormByCpf,
    ){
        this.ReadRepository = ReadRepository;
    }

    async  execute(id: string): Promise<Customer> {
        
            
        const customer = await this.ReadRepository.findbyCpf(id);
        
        if(customer===null){
            throw new Error("Not found record with id:"+id)
        }

        return customer;

    
    }
}