export interface IConection<T>{
    conection(): Promise<T>;
}