import {Request,Response} from 'express';
import CreateCunstomerUseCase  from './CreateCunstomerUseCase';

export class CreateCunstomerController{
    constructor(
        private createCunstomeUseCase:CreateCunstomerUseCase){

        }
    async handle(request: Request, response: Response):Promise<Response>{
        const {name, email, cpf, telefone, endereco, cidade, estado} = request.body
        try{
            const result = await this.createCunstomeUseCase.execute(
                {name, email, cpf, telefone, endereco, cidade, estado}
            )

            return response.status(201).send({message: "Success"});
            
        }catch(err){
            return response.status(400).json({message: err.message || 'Unexpected error'});
        }
       
    }
}