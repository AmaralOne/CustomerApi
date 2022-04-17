import express from 'express'
import createUserController from "../useCases/User/CreateUser/index";
import authUserController from "../useCases/User/AuthenticateUser/index";

const authRouter = express.Router()

authRouter.get('/user/',  (request, response) => {
    return response.send("teste da rota");
});

authRouter.post('/register/', async (request, response) => {
    return createUserController.handle(request, response);
});

authRouter.post('/authenticate/', async (request, response) => {
    return authUserController.handle(request, response);
});

export default authRouter