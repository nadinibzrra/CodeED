class arranjoLista{

    constructor(){
        this.newArray = [];
    }

    adicionarInicio(n){
       let aux = [];
       aux[0] = n;
       for(let i = 0; i < this.newArray.length; i++){
            aux[i+1] = this.newArray[i];
       }
        this.newArray = aux;
        return this.newArray;
    }

    removerInicio(){
        let aux = [];
        let x = this.newArray[0];
        for(let i = 1; i < this.newArray.length; i++ ){
            aux[i-1] = this.newArray[i];
        }
        this.newArray = aux;
        console.log(this.newArray);
        return x;
    }

    adicionarFim(n){
      this.newArray[this.newArray.length] = n;
      console.log(this.newArray);
    }

    removerFim(){
        let aux = [];
        let x = this.newArray[this.newArray.length - 1];
        for(let i = 0; i < this.newArray.length - 1; i++){
            aux[i] = this.newArray[i];
        }
        this.newArray = aux;
        console.log(this.newArray);
        return x;
    }

    adicionarMeio(n,indice){
        if (indice <= 0) {
            this.adicionarInicio(n);
        } else if (indice >= this.newArray.length){
            this.adicionarFim(n);
        }else{
            let w = [];
            for(let i = 0; i < indice; i++){
                w[i] = this.newArray[i];
            }
            w[indice] = n;
            for(let i = indice + 1; i < this.newArray.length + 1; i++){
                w[i] = this.newArray[i - 1];
            }
            this.newArray = w;
            console.log(this.newArray);
            
        }
    }
    removerMeio(indice){
        let x;
        if (indice <= 0) {
            x = this.removerInicio();
        } else if (indice >= this.newArray.length){
            x = this.removerFim();
        }else{
            let w = [];
            x = this.newArray[indice];
            for(let i = 0; i < indice; i++){
                w[i] = this.newArray[i];
            }
            for(let i = indice; i < this.newArray.length - 1; i++){
                w[i] = this.newArray[i + 1];
            }
            this.newArray = w;
            console.log(w);
        } 
        return x;   
    }
}
export default arranjoLista;