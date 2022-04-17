import express from 'express';
import cunstomerRouter from './routers/CustomerRouter'

//start Express
const app = express();

//Configure json in Express
app.use(express.json());

// Routes
app.use('', cunstomerRouter)

// Root Endpoint
app.get('/', (req, res) => {
    res.send('Welcome!')
})

// Default response for any other requests:
app.use((req, res) => {
    res.status(404)
})



export {app}