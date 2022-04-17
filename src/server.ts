import { app } from "./app";
import {Connection} from "./providers/conection"

// Server Port
const PORT = process.env.PORT || 3333
// Server Host
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

//Connect with database
Connection.getConectionData()

//Start server
app.listen(PORT, () => {
    console.log(`Server started with success ${HOSTNAME}:${PORT}`)
})



