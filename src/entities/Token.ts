import {User }from "./User"
export class Token{
    public user: User
    public token: string
   


    constructor(user: User, token: string) {
        this.user = user
        this.token = token
    }
}