export interface ISearch<T>{

    searchText(text: string): Promise<T[]>
}
