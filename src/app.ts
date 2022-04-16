import express from 'express';
import cunstomerRouter from './routers/CustomerRouter'



const app = express();

app.use(express.json());

// Rotas
app.use('', cunstomerRouter)

// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo!')
})

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404)
})



export {app}