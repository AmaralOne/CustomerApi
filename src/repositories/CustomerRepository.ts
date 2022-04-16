import { BaseRepositoryMongo } from "./base/BaseRepositorieMongo";
import { Customer } from "../entities/Customer"
import { FindCustormByCpf} from "./interfaces/IFindCpf"

export class CustomerRepository  extends BaseRepositoryMongo<Customer> implements FindCustormByCpf {
    async findbyCpf(id: string): Promise<Customer> {
        try {
            return await this._collections.findOne({ cpf: id });
        }catch (e) {
            throw new Error("Not found record with cpf: " + id);
        }
    }
        
    
}