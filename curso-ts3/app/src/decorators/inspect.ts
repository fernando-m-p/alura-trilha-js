export function inspect(target:any, propertyKey:string, descriptor:PropertyDescriptor){
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`--- Método ${propertyKey}`);
        console.log(`------ parâmetros: ${JSON.stringify(args)}`)
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    }
    return descriptor;
}

/**
 * Nome do método: propetyKey (segundo parâmetro)
 * Chamada do método: descriptor.value (terceiro parâmetro)
 * Contexto do método chamado: this (contexto do método anotado)
 * this.constructor.name = nome da classe do método anotado
 * 
 */