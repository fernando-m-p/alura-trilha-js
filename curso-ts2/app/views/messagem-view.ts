import { View } from "./view.js";

export class MessagemView extends View<string>{


    protected template(messagem: string): string {
        return `<p class="alert alert-info">${messagem}</p>`
    }
    
}