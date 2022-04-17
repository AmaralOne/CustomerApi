import { Customer } from "../../../entities/Customer";
import { ISearch } from "../../../repositories/interfaces/ISearch";



export default class SearchCunstomerUseCase{

    private ReadRepository: ISearch<Customer>;

    constructor(
        ReadRepository: ISearch<Customer>,
    ){
        this.ReadRepository = ReadRepository;
    }

    async  execute(text: string): Promise<Customer[]> {
        
            
        const customers = await this.ReadRepository.searchText(text);
        
        if(customers===null || customers.length==0){
            throw new Error("Not found records by search text");
        }

        return customers;

    
    }
}