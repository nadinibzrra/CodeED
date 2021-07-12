import Texto from "../src/Lista3/Questao6.js"

let d;

beforeEach(() => {
    d = new Texto("marilene");
});

test("Questao6", () =>{
    expect(d.subString(3,6)).toBe("[r,i,l,e]");
});
