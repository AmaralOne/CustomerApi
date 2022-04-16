import { Customer } from "../../entities/Customer";

export interface FindCustormByCpf {
    findbyCpf(id: string): Promise<Customer>;
}