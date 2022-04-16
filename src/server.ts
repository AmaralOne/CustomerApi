import { app } from "./app";
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/test').then(function (connection) {
    console.log(`Conectou com o Banco de Dados`)
}).catch(function (error) {
    console.log(`Erro ${error.message}`)
});

// Porta do servidor
const PORT = process.env.PORT || 3333
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})