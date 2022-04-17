import { Customer } from "../../../entities/Customer";
import { IWriter } from "../../../repositories/interfaces/IWrite";
import { IRead } from "../../../repositories/interfaces/IRead";


export default class DeleteCunstomerUseCase{

    private WriteRepository: IWriter<Customer>;
    private ReadRepository: IRead<Customer>;

    constructor(
        WriteRepository: IWriter<Customer>,
        ReadRepository: IRead<Customer>,
    ){
        this.WriteRepository = WriteRepository;
        this.ReadRepository = ReadRepository;
    }

    async  execute(id: string): Promise<boolean> {
        
        const customer = await this.ReadRepository.findOneById(id);

        if(customer===null){
            throw new Error("Not found record with id:"+id)
        }
        return  await this.WriteRepository.delete(id);

    
    }
}