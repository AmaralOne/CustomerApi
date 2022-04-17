import { User } from "../../../entities/User";
import { IWriter } from "../../../repositories/interfaces/IWrite";
import { IRead } from "../../../repositories/interfaces/IRead";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IFindEmailUser } from "../../../repositories/interfaces/IFindEmail";

export default class CreateUserUseCase{

    private WriteRepository: IWriter<User>;
    private ReadRepository: IFindEmailUser;

    constructor(
        WriteRepository: IWriter<User>,
        ReadRepository: IFindEmailUser
    ){
        this.WriteRepository = WriteRepository;
        this.ReadRepository = ReadRepository;
    }

    async  execute(data:ICreateUserRequestDTO): Promise<boolean> {
        
        var sucesso:boolean = false;
        const user = new User(data)


        if(await this.ReadRepository.findbyEmail(user.email)){
            throw new Error('User already exists')
        }
        

            
        return  await this.WriteRepository.create(user);

    
    }
}