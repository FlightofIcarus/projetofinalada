import { log } from 'console';
import  {calcular}  from '../../build/src/services/calcular';

// Primeiro case suite
describe("Testar o funcionamento da função calcularDividendo de acordo com os inputs no campo valor", () => {
   
    it("Testar funcionamento recebendo string", () => {
        expect(() => calcular("100", 30, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    })

    it("Testar funcionamento recebendo number", () => {
        const resultado = calcular(100, 30, 0.1);
        expect(typeof resultado).toBe('object');
        expect(typeof resultado.Montante).toBe('number');
        expect(typeof resultado.Juros).toBe('number');
        expect(typeof resultado.ROI).toBe('number');
    })

    it("Testar funcionamento recebendo caracteres especiais", () => {
        expect(() => calcular("@", 30, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    })
    
    it("Testar funcionamento recebendo objeto", () => {
        const objeto = {valor: 100}
        expect(() => calcular(objeto, 30, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    })

    it("Testar funcionamento recebendo null", () => {
        expect(() => calcular(null, 30, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    })

    it("Testar funcionamento recebendo número negativo", () => {
        expect(() => calcular(-100, 30, 0.1)).toThrowError('um ou mais valores são números negativos! Insira apenas valores positivos.');
    })  

    it("Testar funcionamento recebendo lista de números", () => {
        const lista = [100, 30, 0.1]
        expect(() => calcular(lista, 30, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    }) 

    it("Testar funcionamento recebendo lista de strings", () => {
        const lista = ["100", "30", "0.1"]
        expect(() => calcular(lista, 30, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    }) 
    
    it("Testar funcionamento recebendo lista vazia", () => {
        const lista = []
        expect(() => calcular(lista, 30, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    }) 

    it("Testar funcionamento recebendo undefined", () => {
        expect(() => calcular(undefined, 30, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    })

    it("Testar funcionamento recebendo string em branco(Só espaço)", () => {
        const lista = [  ,   ,   ]
        expect(() => calcular(lista, 30, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    }) 

    it("Testar funcionamento recebendo espaços vazios e números", () => {
        const lista = [  ,30,0.1]
        expect(() => calcular(lista, 30, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    }) 
})

// Segundo case suite
describe("Testar o funcionamento da função calcularDividendo de acordo com os inputs no campo tempo", () => {
   
    it("Testar funcionamento recebendo string", () => {
        expect(() => calcular(100, "30", 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    })

    it("Testar funcionamento recebendo number", () => {
        const resultado = calcular(100, 30, 0.1);
        expect(typeof resultado).toBe('object');
        expect(typeof resultado.Montante).toBe('number');
        expect(typeof resultado.Juros).toBe('number');
        expect(typeof resultado.ROI).toBe('number');
    })

    it("Testar funcionamento recebendo caracteres especiais", () => {
        expect(() => calcular(100, "@", 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    })
    
    it("Testar funcionamento recebendo objeto", () => {
        const objeto = {tempo: 100}
        expect(() => calcular(100, objeto, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    })

    it("Testar funcionamento recebendo null", () => {
        expect(() => calcular(100, null, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    })

    it("Testar funcionamento recebendo número negativo", () => {
        expect(() => calcular(100, -30, 0.1)).toThrowError('um ou mais valores são números negativos! Insira apenas valores positivos.');
    })  

    it("Testar funcionamento recebendo lista de números", () => {
        const lista = [100, 30, 0.1]
        expect(() => calcular(100, lista, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    }) 

    it("Testar funcionamento recebendo lista de strings", () => {
        const lista = ["100", "30", "0.1"]
        expect(() => calcular(100, lista, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    }) 
    
    it("Testar funcionamento recebendo lista vazia", () => {
        const lista = []
        expect(() => calcular(100, lista, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    }) 

    it("Testar funcionamento recebendo undefined", () => {
        expect(() => calcular(100, undefined, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    })

    it("Testar funcionamento recebendo string em branco(Só espaço)", () => {
        const lista = [  ,   ,   ]
        expect(() => calcular(100, lista, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    }) 

    it("Testar funcionamento recebendo espaços vazios e números", () => {
        const lista = [  ,30,0.1]
        expect(() => calcular(100, lista, 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    }) 
})

// Terceiro case suite
describe("Testar o cálculo da função calcularDividendo", () => {

    it("Testar cálculo com dois valores válidos(numbers)", () => {
        expect(() => calcular(100, 1, "2")).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    })

    it("Testar cálculo com um valor válido e um valor inválido", () => {
        expect(() => calcular(100, "a", 0.1)).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    })

    it("Testar cálculo com valores negativo", () => {
        expect(() => calcular(-100, -30, -0.1)).toThrowError('um ou mais valores são números negativos! Insira apenas valores positivos.');
    })  

    it("Testar cálculo com três valores válidos(numbers)", () => {
        const resultado = calcular(100,1,0.1);
        expect(resultado.Montante).toBe(110);
    })

    it("Testar cálculo com um valore válidos", () => {
        expect(() => calcular(100, "1", "2")).toThrowError('Um ou mais valores não são válidos! Insira apenas números');
    })
})