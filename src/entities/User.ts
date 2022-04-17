
export class User{
    public name: string
    public email: string
    public password: string


    constructor(props: User){
        this.name = props.name
        this.email = props.email
        this.password = props.password
    }
}