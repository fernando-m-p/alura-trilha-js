export class Negociacao{
    
    // constructor(
    //     private _data: Date, 
    //     private _quantidade:number, 
    //     private _valor:number
    // ){}

    constructor (
        public readonly data: Date,
        public readonly quantidade:number,
        public readonly valor:number
    ){}

    get volume():number{
        return this.quantidade * this.valor;
    }
}