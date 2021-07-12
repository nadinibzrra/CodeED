import FilaEmLista from "../src/Lista3/Questao2.js";

let r;

beforeEach(() => {
    r = new FilaEmLista();
});

test("Questao2", () =>{
    r.enqueue(1);
    r.enqueue(2);
    expect(r.dequeue()).toBe(1);

});

test("Questao2", () =>{
    r.enqueue(3);
    r.enqueue(10);
    expect(r.front()).toBe(3);

});

