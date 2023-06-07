import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MessagemView } from "../views/messagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.menssagemView = new MessagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (this.validaDiaUtil(negociacao.data)) {
            this.negociacoes.adiciona(negociacao);
            this.limparFormulario();
            this.negociacoesView.update(this.negociacoes);
            this.menssagemView.update('Negociação adicionada com sucesso');
        }
        else {
            this.menssagemView.update('Apenas negociações em dias úteis são aceitas');
        }
    }
    criaNegociacao() {
        return Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
    }
    validaDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
