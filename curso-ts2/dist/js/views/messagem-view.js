import { View } from "./view.js";
export class MessagemView extends View {
    template(messagem) {
        return `<p class="alert alert-info">${messagem}</p>`;
    }
}
