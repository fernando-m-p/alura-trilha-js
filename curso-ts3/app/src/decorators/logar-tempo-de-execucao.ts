export function logarTempoDeExecucao(){
    return function(target:any, propertyKey:string, description:PropertyDescriptor){
        const metodoOrignal = description.value;
        description.value = function(... args: Array<any>){
            const t1 = performance.now();

            const retorno = metodoOrignal.apply(this,args);

            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execucao: ${(t2-t1)/1000} segundos`);
            return retorno;
        }
        return description;
    }

}