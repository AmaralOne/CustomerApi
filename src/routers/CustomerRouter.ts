import express from 'express'
import createCunstomerController from "../useCases/Cunstomer/CreateCunstomer/index";
import findCunstomerController from "../useCases/Cunstomer/FindAllCunstomer/index";
import deleteCunstomerController from "../useCases/Cunstomer/DeleteCunstomer/index";
import findOneCunstomerController from "../useCases/Cunstomer/FindCunstomer/index";
import UpdateCunstomerController from "../useCases/Cunstomer/UpdateCunstomer/index";
import findByCpfCunstomerController from "../useCases/Cunstomer/FindByCpfCunstomer/index";
import searchCunstomerController from "../useCases/Cunstomer/SearchCunstomer/index";

const cunstomerRouter = express.Router()

//route to create customer
cunstomerRouter.post('/customer',  (request, response) => {
       return createCunstomerController.handle(request, response);
});

//route to list customer
cunstomerRouter.get('/customers',  (request, response) => {
    return findCunstomerController.handle(request, response);
});

//route to find customer by id  of mongodb
cunstomerRouter.get('/customer/:id',  (request, response) => {
    return findOneCunstomerController.handle(request, response);
});

//route to find customer by cpf
cunstomerRouter.get('/customer/cpf/:cpf',  (request, response) => {
    return findByCpfCunstomerController.handle(request, response);
});

//route to search customer by free text search across all customer fields
cunstomerRouter.get('/customer/search/:text',  (request, response) => {
    return searchCunstomerController.handle(request, response);
});

//route to delete customer
cunstomerRouter.delete('/customer/:id',  (request, response) => {
    return deleteCunstomerController.handle(request, response);
});

//route to update customer
cunstomerRouter.put('/customer/:id',  (request, response) => {
    return UpdateCunstomerController.handle(request, response);
});



export default cunstomerRouter