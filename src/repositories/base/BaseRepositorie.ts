//import all interfaces
import { IWriter } from "../interfaces/IWrite";
import { IRead } from "../interfaces/IRead";

//we imported all types from mongodb driver, to use in code 
import { MongoClient, Db, Collection} from 'mongodb';
import { Customer } from "../../entities/Customer";

//that class only can be extended
export abstract class BaseRepository<T> implements IWriter<T>, IRead<T> {
    //creating a property to use your code in all instances of
    //that extends your base repository and reuse on methods of class

    public readonly _collections: Collection;

    //we created constructor with arguments to manipulate mongodb operations

    constructor(db:Db, collectionName:string){
        this._collections = db.collection(collectionName);
    }
    findAll(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    async create(item: T): Promise<boolean> {
        const result  = await this._collections.insertOne(item);

        return !!(result.acknowledged);
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}