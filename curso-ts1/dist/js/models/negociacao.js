export class Negociacao {
    // constructor(
    //     private _data: Date, 
    //     private _quantidade:number, 
    //     private _valor:number
    // ){}
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
