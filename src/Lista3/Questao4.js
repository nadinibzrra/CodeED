import Lista from "../Lista";

class OrdemInvertida{
    constructor(){
      this.newLista = new Lista();
    }

    inverterOrdem(){
      let d = new Lista();
      while(this.newLista.size() > 0){
        d.append(this.newLista.removeEnd());
      }
      return d.toString();
    }
    
    add(n) {
        this.newLista.append(n);
    } 

}
export default OrdemInvertida;