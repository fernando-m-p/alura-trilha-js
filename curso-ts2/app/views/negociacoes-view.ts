import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{

    protected template(negociacoes: Negociacoes) : string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
            ${negociacoes.lista().map(element => {
                return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(element.data)}</td>
                            <td>${element.quantidade}</td>
                            <td>${element.valor}</td>
                        </tr>`;
            }).join('')}
            </tbody>
        </table>
        `;
    }
}
