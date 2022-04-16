import { Db, MongoClient } from "mongodb";
export class Connection
{
    private static _db: Db;


    static isInitialized(): boolean {
        return this._db !== undefined;
      }


    static async getConection(): Promise<Db> {
        if (this.isInitialized()) return this._db;
    
        console.log('Connected antes')
        // Initialize the connection.
        const connection = await MongoClient.connect('mongodb://localhost');
        this._db = connection.db('Teste');
        console.log('Connected to')
        return this._db;
    }

}



