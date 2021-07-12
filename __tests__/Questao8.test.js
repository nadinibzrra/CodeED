import ListaPessoa from "../src/Lista3/Questao8"


let l;

beforeEach(() =>{
    l = new ListaPessoa();
})

test("Questao8", () => {
    l.adicionarPessoa("marilene", 47);
    l.adicionarPessoa("alicia", 12);
    l.adicionarPessoa("lurdes", 80);
    expect(l.nomeOrdenado()).toBe("[alicia,12,lurdes,80,marilene,47]");
    expect(l.idadeOrdenado()).toBe("[alicia,12,marilene,47,lurdes,80]");
})