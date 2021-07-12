import Sobrevivente from "../src/Lista3/Questao7.js"

let d;

beforeEach(() => {
    d = new Sobrevivente();
});

test("Questao7", () =>{
    expect(d.sobrou(3, 41)).toBe(31);
    //expect(d.sobrou(2, 3)).toBe(3);
    expect(d.sobrou(2, 16)).toBe(1);
});