import Lista from "../Lista";

class ListaPessoa{

    constructor(){
        this.i = new Lista();
        this.n = new Lista();
    }

    nomeOrdenado(nome, idade){
        let x = this.n.head.proximo;
        let posicao = 0;

        while (x !== null) {
            if (x.dado > nome) {
                this.n.addAt(posicao, nome);
                this.n.addAt(++posicao, idade);
                return this.n.toString();
            }
            posicao++;
            x = x.proximo;                 
        }

       if (!(nome === undefined)) {
            this.n.append(nome);
            this.n.append(idade);
        }
        return this.n.toString();
    }
    
    idadeOrdenado(nome, idade){
        let x = this.i.head.proximo;
        let posicao = 0;
        while (x !== null) {
            x = x.proximo;                 
            if (x.dado > idade) {
                this.i.addAt(posicao, nome);
                this.i.addAt(++posicao, idade);
                return this.i.toString()
            }
            posicao++
           x = x.proximo;                 
        }
        
        if (!(idade === undefined)) {
            this.i.append(nome);
            this.i.append(idade);
        }
        return this.i.toString();
    }

    adicionarPessoa( nome, idade){
        this.nomeOrdenado(nome, idade);
        this.idadeOrdenado(nome, idade);
     }
}

export default ListaPessoa;