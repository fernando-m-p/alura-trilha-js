import { NegociacoesDoDia } from "../interfaces/negociacoes-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    private urlApi = 'http://localhost:8000/dados';
    
    
    public async pegarNegociacoesDoDia(): Promise<Negociacao[]> {
        const response = await fetch(this.urlApi);
        const dados: NegociacoesDoDia[] = await response.json();
        return dados.map(
            negociacaoDoDia => {
                return new Negociacao(
                    new Date(),
                    negociacaoDoDia.vezes,
                    negociacaoDoDia.montante
                );
            }
        );
    }
}