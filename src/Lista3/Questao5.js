import Lista from "../Lista";

class OrdemEmbaralhada{
    constructor(){
        this.newLista = new Lista();
      }

     sortear(){
        let i = 0;
        while(i < 10){
            // Math.floor(Math.random() * (max - min)) + min
            this.newLista.addAt(Math.floor(Math.random() * (this.newLista.size() - 1) + 1),this.newLista.removeEnd());
            i++;
        }
        return this.newLista.toString();
     } 

     add(n) {
        this.newLista.append(n);
    } 
  
}
export default OrdemEmbaralhada;