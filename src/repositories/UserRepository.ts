import { BaseRepositoryMongo } from "./base/BaseRepositorieMongo";
import { User } from "../entities/User"
import {IFindEmailUser} from "./interfaces/IFindEmail"



export class UserRepository  extends BaseRepositoryMongo<User> implements IFindEmailUser{
    async findbyEmail(email: string): Promise<User> {
        try {
            return await this._collections.findOne({ email: email }).select('+password');
        }catch (e) {
            return null;
        }
    }
}