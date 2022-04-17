import { User } from "../../entities/User";

export interface IFindEmailUser {
    findbyEmail(email: string): Promise<User>;
}