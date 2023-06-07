export abstract class View<T> {
    
    private elemento: HTMLElement;
    private escapar = false;

    constructor(seletor:string, escapar?:boolean){
        this.elemento = document.querySelector(seletor);
        if (escapar){
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T) : string

    public update(negociacoes: T): void {
        this.elemento.innerHTML = this.template(negociacoes);
    }

}