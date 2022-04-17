import { BaseRepositoryMongo } from "./base/BaseRepositorieMongo";
import { Customer } from "../entities/Customer"
import { FindCustormByCpf} from "./interfaces/IFindCpf"
import { fomartString } from "../tools/formatString";
import { ISearch } from "./interfaces/ISearch";

export class CustomerRepository  extends BaseRepositoryMongo<Customer> implements FindCustormByCpf, ISearch<Customer> {
    
    async findbyCpf(id: string): Promise<Customer> {
        try {
            return await this._collections.findOne({ cpf: id });
        }catch (e) {
            throw new Error("Not found record with cpf: " + id);
        }
    }

    async searchText(text: string): Promise<Customer[]> {
        try {
            

            var regexValue = fomartString.escapeRegExp(text);
            var queryOptions = {
                $or: [{
                    name: {
                        '$regex': regexValue,
                        '$options': 'im'
                    }
                }, {
                    cpf: {
                        '$regex': regexValue,
                        '$options': 'im'
                    }
                },
                {
                    email: {
                        '$regex': regexValue,
                        '$options': 'im'
                    }
                },
                {
                    telefone: {
                        '$regex': regexValue,
                        '$options': 'im'
                    }
                },            
                {
                    cidade: {
                        '$regex': regexValue,
                        '$options': 'im'
                    }
                },
                {
                    estado: {
                        '$regex': regexValue,
                        '$options': 'im'
                    }
                },
                {
                    endereco: {
                        '$regex': regexValue,
                        '$options': 'im'
                    }
                }]
            }
            const result = await this._collections.find(queryOptions)

            return result

        }catch (e) {
            console.log({erro:e.message})
            throw new Error(e.message);
        }

        
    }
        
    
}