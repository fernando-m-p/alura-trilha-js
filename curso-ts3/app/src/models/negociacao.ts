import { Modelo } from "../interfaces/modelo";

export class Negociacao implements Modelo<Negociacao> {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }


    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    compara(negociacao: Negociacao): boolean {
        return this._data.getDate() === negociacao.data.getDate()
            && this._data.getMonth() === negociacao.data.getMonth()
            && this._data.getFullYear() === negociacao.data.getFullYear()
            && this.quantidade === negociacao.quantidade
            && this.valor === negociacao.valor;

    }
    toString(): string {
        return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}
    `;
    }
}