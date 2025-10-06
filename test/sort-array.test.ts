import { sortDescending } from '../src/sort-array';

describe('sortDescending', () => {
    test('sort array in descending order', () => {
        const array = ['carro', 'boneco', 'ave', 'lapis'];
        const resultadoEsperado = ['lapis', 'carro', 'boneco', 'ave'];
        expect(sortDescending(array)).toEqual(resultadoEsperado);
    });
});
