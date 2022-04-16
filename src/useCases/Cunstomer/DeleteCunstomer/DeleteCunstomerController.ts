import {Request,Response} from 'express';
import DeleteCunstomerUseCase  from './DeleteCunstomerUseCase';

export class DeleteCunstomerController{
    constructor(
        private createCunstomeUseCase:DeleteCunstomerUseCase){

        }
    async handle(request: Request, response: Response):Promise<Response>{
        const id = request.params?.id
        try{
            console.log({ _id1: id })
            const result = await this.createCunstomeUseCase.execute(id)

            return response.status(201).send({message: "Success"});
            
        }catch(err){
            return response.status(400).json({message: err.message || 'Unexpected error'});
        }
       
    }
}