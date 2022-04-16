import {Request,Response} from 'express';
import FindCunstomerUseCase  from './FindCunstomerUseCase';

export class FindCunstomerController{
    constructor(
        private findCunstomeUseCase:FindCunstomerUseCase){

        }
    async handle(request: Request, response: Response):Promise<Response>{
        const id = request.params?.id
        try{
            const result = await this.findCunstomeUseCase.execute(id)

            return response.status(201).send(result);
            
        }catch(err){
            return response.status(400).json({message: err.message || 'Unexpected error'});
        }
       
    }
}