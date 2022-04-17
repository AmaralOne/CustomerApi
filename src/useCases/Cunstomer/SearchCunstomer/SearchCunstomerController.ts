import {Request,Response} from 'express';
import SearchCunstomerUseCase  from './SearchCunstomerUseCase';

export class SearchCunstomerController{
    constructor(
        private searchCunstomeUseCase:SearchCunstomerUseCase){

        }
    async handle(request: Request, response: Response):Promise<Response>{
        const text = request.params?.text
        try{
            const result = await this.searchCunstomeUseCase.execute(text)

            return response.status(201).send(result);
            
        }catch(err){
            return response.status(400).json({message: err.message || 'Unexpected error'});
        }
       
    }
}