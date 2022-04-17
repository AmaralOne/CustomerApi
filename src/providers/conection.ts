import mongoose from "mongoose";

export class Connection
{

    static   getConectionData(): boolean {
        mongoose.connect('mongodb://localhost:27017/test').then(function (connection) {
            console.log(`Connected with database`)
            
        }).catch(function (error) {
            console.log(`Erro ${error.message}`)
            return false
        });

        return true
      }

}



