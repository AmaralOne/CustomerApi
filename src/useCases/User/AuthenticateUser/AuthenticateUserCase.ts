import { User } from "../../../entities/User";
import { Token } from "../../../entities/Token";
import { IAuthenticateUserRequestDTO } from "./AuthenticateUserDTO";
import { IFindEmailUser } from "../../../repositories/interfaces/IFindEmail";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const auth = require('../../../config/auth.json');

export default class AuthenticateUserUseCase{

    private ReadRepository: IFindEmailUser;

    constructor(
        ReadRepository: IFindEmailUser
    ){
        this.ReadRepository = ReadRepository;
    }

    async  execute(data:IAuthenticateUserRequestDTO): Promise<Token> {
        

        const user = await this.ReadRepository.findbyEmail(data.email);

        if(!user){
            throw new Error('User not found')
        }
        const test = await bcrypt.hash(data.password,10)

        if(!await bcrypt.compare(data.password,user.password)){
            throw new Error('Invalid password')
        }

        user.password = undefined
        

    // Gerando token
      const tokenString = await jwt.sign(
        {
          email: user.email,
        },
        auth.secret,
        {
          expiresIn: 86400,
        }
      );

        const token = new Token(user,tokenString)

        return token;

    }
}