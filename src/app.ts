import express from 'express';
import cunstomerRouter from './routers/CustomerRouter'
import authRouter from './routers/AuthRouter'

//start Express
const app = express();

//Configure json in Express
app.use(express.json());

// Routes
app.use('', cunstomerRouter)
app.use('/auth', authRouter)

// Default response for any other requests:
app.use((req, res) => {
    res.status(404)
})


export {app}