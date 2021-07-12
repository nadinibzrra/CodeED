import ArranjoLista from "../src/Lista3/Questao3.js";

let t;

beforeEach(() => {
    t = new ArranjoLista();
});

test("Questao3", () =>{
    t.adicionarInicio(1);
    t.adicionarInicio(2);
    t.adicionarInicio(3);
    t.adicionarInicio(4);
    t.adicionarInicio(5);
    t.adicionarInicio(6);
    t.adicionarFim(0);
    t.adicionarMeio(7,3);
    t.removerMeio(3);
    t.removerMeio(3);
    t.removerFim();
    expect(t.removerFim()).toBe(1);
});