import Lista from "../Lista";

class PilhaEmLista{
    constructor(){
        this.newLista = new Lista();
    }

    push(n){
        this.newLista.add(n);
    }

    pop(){
       return this.newLista.removeBeginning();
    }

    top(){
        return this.newLista.head.proximo.dado;
    }
}
export default PilhaEmLista;