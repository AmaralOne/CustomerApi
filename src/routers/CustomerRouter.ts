import express from 'express'
import createCunstomerController from "../useCases/Cunstomer/CreateCunstomer/index";
import findCunstomerController from "../useCases/Cunstomer/FindAllCunstomer/index";
import deleteCunstomerController from "../useCases/Cunstomer/DeleteCunstomer/index";
import findOneCunstomerController from "../useCases/Cunstomer/FindCunstomer/index";
import UpdateCunstomerController from "../useCases/Cunstomer/UpdateCunstomer/index";
import findByCpfCunstomerController from "../useCases/Cunstomer/FindByCpfCunstomer/index";
import searchCunstomerController from "../useCases/Cunstomer/SearchCunstomer/index";

const cunstomerRouter = express.Router()


cunstomerRouter.post('/customer',  (request, response) => {
       return createCunstomerController.handle(request, response);
});

cunstomerRouter.get('/customers',  (request, response) => {
    return findCunstomerController.handle(request, response);
});

cunstomerRouter.get('/customer/:id',  (request, response) => {
    return findOneCunstomerController.handle(request, response);
});

cunstomerRouter.get('/customer/cpf/:cpf',  (request, response) => {
    return findByCpfCunstomerController.handle(request, response);
});

cunstomerRouter.get('/customer/search/:text',  (request, response) => {
    return searchCunstomerController.handle(request, response);
});

cunstomerRouter.delete('/customer/:id',  (request, response) => {
    return deleteCunstomerController.handle(request, response);
});

cunstomerRouter.put('/customer/:id',  (request, response) => {
    return UpdateCunstomerController.handle(request, response);
});



export default cunstomerRouter