

export class Customer{
    public name: string
    public email: string
    public cpf: string
    public telefone: string
    public endereco: string
    public cidade: string
    public estado: string

    constructor(props: Customer){
        this.name = props.name
        this.email = props.email
        this.cpf = props.cpf
        this.telefone = props.telefone
        this.endereco = props.endereco
        this.cidade = props.cidade
        this.estado = props.estado

        
    }
}