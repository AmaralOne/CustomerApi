export interface IWriter<T>{
    create(item:T):Promise<boolean>;
    update(id:string, item:T):Promise<boolean>;
    delete(id:string):Promise<boolean>;
}