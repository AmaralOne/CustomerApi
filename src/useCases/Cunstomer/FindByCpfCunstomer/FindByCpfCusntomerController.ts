import {Request,Response} from 'express';
import FindByCpfCunstomerUseCase  from './FindByCunstomerUseCase';

export class FindByCpfCunstomerController{
    constructor(
        private findCunstomeUseCase:FindByCpfCunstomerUseCase){

        }
    async handle(request: Request, response: Response):Promise<Response>{
        const id = request.params?.cpf
        try{
            const result = await this.findCunstomeUseCase.execute(id)

            return response.status(201).send(result);
            
        }catch(err){
            return response.status(400).json({message: err.message || 'Unexpected error'});
        }
       
    }
}