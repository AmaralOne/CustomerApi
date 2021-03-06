export interface IRead<T>{
    findAll(): Promise<T[]>;
    findOneById(id: string): Promise<T>;
}