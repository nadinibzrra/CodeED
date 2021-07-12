import Lista from "../Lista";

class Sobrevivente{
    constructor(){
        this.newLista = new Lista();
     
    }

    sobrou(remocao,soldado){
        
        for(let i = 1; i <= soldado; i++){
            this.newLista.append(i);
        }

        let cont = 1;
        while(this.newLista.size() > 1){
            if(cont == remocao){
                this.newLista.removeBeginning();
                cont = 0;
            }else{
                this.newLista.append(this.newLista.removeBeginning());
            }
            cont++;
            console.log(this.newLista.toString());
        }
        return this.newLista.removeBeginning();
    }
    
}
export default Sobrevivente;