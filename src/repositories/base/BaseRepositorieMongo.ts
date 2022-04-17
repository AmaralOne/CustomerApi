//import all interfaces
import { IWriter } from "../interfaces/IWrite";
import { IRead } from "../interfaces/IRead";

//import mongoose
import { model, Schema, Model, Document } from 'mongoose';


//that class only can be extended
export abstract class BaseRepositoryMongo<T> implements IWriter<T>, IRead<T> {
    //creating a property to use your code in all instances of
    //that extends your base repository and reuse on methods of class

    public readonly _collections: Model<T>;

    //we created constructor with arguments to manipulate mongodb operations

    constructor(model:Model<T>){
        this._collections = model
    }
    async findOneById(id: string): Promise<T> {
        try {
            return await this._collections.findById({ _id: id });
        }catch (e) {
            throw new Error("Not found record with id: " + id);
        }
    }
    async findAll(): Promise<T[]> {
        return await this._collections.find({});
    }
    
    async create(item: T): Promise<boolean> {

        const res = await this._collections.create(item)
        return true;
        
    }
    async update(id: string, item: T): Promise<boolean> {
        const res = await this._collections.updateOne({ _id: id },item)
        return true;
    }
    async delete(id: string): Promise<boolean> {

        const res = await this._collections.deleteOne({ _id: id })
        return true;
    }

}