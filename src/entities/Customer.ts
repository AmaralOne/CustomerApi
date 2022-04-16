

export class Customer{
    public readonly id: string

    public name: string
    public email: string
    public cpf: string
    public telefone: string
    public endereco: string
    public cidade: string
    public estado: string

    constructor(props: Omit<Customer, 'id'>, id?: string){
        this.name = props.name
        this.email = props.email
        this.cpf = props.cpf
        this.telefone = props.telefone
        this.endereco = props.endereco
        this.cidade = props.cidade
        this.estado = props.estado

        
    }
}