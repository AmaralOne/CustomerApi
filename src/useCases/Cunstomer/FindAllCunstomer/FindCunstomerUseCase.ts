import { Customer } from "../../../entities/Customer";
import { IRead } from "../../../repositories/interfaces/IRead";


export default class FindCunstomerUseCase{

    private ReadRepository: IRead<Customer>;

    constructor(
        ReadRepository: IRead<Customer>,
    ){
        this.ReadRepository = ReadRepository;
    }

    async  execute(): Promise<Customer[]> {               
        return  await this.ReadRepository.findAll(); 
    }
}