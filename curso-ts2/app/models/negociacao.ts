export class Negociacao {

    // constructor(
    //     private _data: Date, 
    //     private _quantidade:number, 
    //     private _valor:number
    // ){}

    constructor(
        public readonly data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        return new Negociacao(
            date,
            parseInt(quantidadeString),
            parseFloat(valorString)
        )

    }



}