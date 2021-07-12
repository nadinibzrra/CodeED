import PilhaEmLista from "../src/Lista3/Questao1.js"

let f;

beforeEach(() => {
    f = new PilhaEmLista();
});

test("Questao1", () => {
    f.push(1);
    f.push(2);
    expect(f.pop()).toBe(2);
});

test("Questao1", () => {
    f.push(3);
    f.push(4);
    expect(f.top()).toBe(4);
});
