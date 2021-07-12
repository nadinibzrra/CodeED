import Lista from "../Lista";

class FilaEmLista{

    constructor(){
        this.newLista = new Lista();
    }

    enqueue(n){
        this.newLista.append(n);
    }

    dequeue(){
        return this.newLista.removeBeginning();
    }

    front(){
        return this.newLista.head.proximo.dado;
    }
} 
export default FilaEmLista;  