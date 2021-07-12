import Lista from "../Lista";

class Texto{
    constructor(n){
        this.n = n;
        this.newLista = new Lista();
    }

    listaString(){
        for(let i = 0; i < this.n.length; i++){
            this.newLista.append(this.n.charAt(i));
        }
        console.log(this.newLista.toString());
    }

    subString(a,b){
        this.listaString();
        console.log(this.newLista.toString());
        let aux = new Lista();
        let x = this.newLista.size();
        console.log(x, this.newLista.size());
        let i = 1;
        while(i <= x){ 
            if(i >= a && i <= b){
                aux.append(this.newLista.removeBeginning());
            }else{
                 this.newLista.removeBeginning();
            }
            i++;
        }
        return aux.toString();

    }
}
export default Texto;