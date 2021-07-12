import OrdemEmbaralhada from "../src/Lista3/Questao5.js";

let c;

beforeEach(() => {
    c = new OrdemEmbaralhada();
});

test("Questao5", () =>{
    c.add(1);
    c.add(2);
    c.add(3);
    c.add(4);
    c.add(5);
    expect(c.sortear()).not.toBe("[5,4,3,2,1]");
});