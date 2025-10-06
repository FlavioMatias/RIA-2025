import { getFirstTwo } from '../src/array-slice';

describe('getFirstTwo', () => {
    const array = [2, 4, 6, 2, 8, 9, 5];
    const esperado = [2, 4];
    
    test('returns the first two elements of the array', () => {
        expect(getFirstTwo(array)).toEqual(esperado);
    });
});
