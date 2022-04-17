import {Request,Response} from 'express';
import AuthenticateUserUseCase  from './AuthenticateUserCase';

export class AuthUserController{
    constructor(
        private authUserUseCase:AuthenticateUserUseCase){

        }
    async handle(request: Request, response: Response):Promise<Response>{
        const {email, password} = request.body
        try{
            const result = await this.authUserUseCase.execute(
                { email, password}
            )

            return response.status(201).send({user: result});
            
        }catch(err){
            return response.status(400).json({message: err.message || 'Unexpected error'});
        }
       
    }
}