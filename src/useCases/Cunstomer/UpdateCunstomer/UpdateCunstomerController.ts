import {Request,Response} from 'express';
import UpdateCunstomerUseCase  from './UpdateCunstomerUseCase';

export class UpdateCunstomerController{
    constructor(
        private updateCunstomeUseCase:UpdateCunstomerUseCase){

        }
    async handle(request: Request, response: Response):Promise<Response>{
        const id = request.params?.id
        const {name, email, cpf, telefone, endereco, cidade, estado} = request.body
        try{
            console.log({ _id1: id })
            const result = await this.updateCunstomeUseCase.execute(id,
                {name, email, cpf, telefone, endereco, cidade, estado})

            return response.status(201).send({message: "Success"});
            
        }catch(err){
            return response.status(400).json({message: err.message || 'Unexpected error'});
        }
       
    }
}