import OrdemInvertida from "../src/Lista3/Questao4.js";

let s;

beforeEach(() => {
    s = new OrdemInvertida();
});

test("Questao4", () =>{
    s.add(1);
    s.add(2);
    s.add(3);
    s.add(4);
    s.add(5);
    expect(s.inverterOrdem()).toBe("[5,4,3,2,1]");
});