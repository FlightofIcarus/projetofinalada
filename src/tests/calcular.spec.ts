/* import { log } from 'console';
import  {calcular}  from '../../build/src/services/calcular';

// primeiro case suite
describe("Testar o funcionamento da função calcularDividendo de acordo com os inputs no campo valor", () => {
   
    it("Testar funcionamento recebendo string", () => {
        expect(() => calcular("100")).toThrow();
    })

    it("Testar funcionamento recebendo string", () => {
        const resultado = calcular(100);
        console.log(resultado);
        
        expect(typeof calcular(100)).toBe('number');

    })
})

/*
describe("Testar o funcionamento da função calcularDividendo de acordo com os inputs no campo valor, tempo e taxa", () => {

    it("testar funcionamento recebendo três valores válidos", () => {
        expect(typeof calcular(100, 30, 0.1)).toBe('number');
    });

    it("testar funcionamento recebendo três strings", () => {
        expect(() => calcular("zero" as string, "um" as string, "dois" as string)).toThrow();
    });

    it("testar funcionamento recebendo caracteres especiais", () => {
        expect(() => calcular("zero" as string, "um" as string, "dois" as string)).toThrow();
    });

    it("testar funcionamento com um valor válido e dois valores inválidos", () => {
        const resultado = calcular(100, "trinta", "zeroDotOne")
        expect(typeof resultado).toBe('number');
        //expect(() => calcular(100, "trinta" as string, 0.1)).toBe('number');
    });

    it("testar funcionamento com dois valores válido e um valor inválido", () => {
        const resultado = calcular(100, "100", 0.1)
        //console.log(`o resultado do teste com um valor inválido é: ${resultado}`);
        
        //expect(typeof resultado).toBe('number');
        //expect(() => calcular(100, "trinta" as string, 0.1)).toBe('number');
    });


    it("testar funcionamento com valores negativos", () => {
        const resultado = calcular(-100, 30, 0.1);
        expect(resultado).toBeLessThan(0);
    });
})

describe("testar o cálculo da função Calcular", () => {

    it("testar cálculo com três valores válidos", () => {
        let resultado = calcular(100,30,0.1);
        expect(resultado).toBe(110);
    })

    it("testar cálculo com dois valores válidos e um inválido", () => {
        let resultado = calcular(100,30,"inválido");
        expect(resultado).toBeNaN();
    })

    it("testar cálculo com um valor válido e dois inválidos", () => {
        let resultado = calcular(100,"30","inválido");
        expect(resultado).toBeNaN();
    })

    it("testar cálculo com valores negativos", () => {
        let resultado = calcular(-100, -30, 0.1);
        expect(resultado).toBe(-100);
    })
})
*/