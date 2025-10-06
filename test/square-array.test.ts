import { squareSimpleFor, squareForEach } from '../src/square-array';

describe('Test square functions', () => {
    const testArray = [3, 5, 7, 3, 8, 9, 1];
    const expectedResult = [9, 25, 49, 9, 64, 81, 1];

    test('squareSimpleFor returns squares correctly', () => {
        expect(squareSimpleFor(testArray)).toEqual(expectedResult);
    });

    test('squareForEach returns squares correctly', () => {
        expect(squareForEach(testArray)).toEqual(expectedResult);
    });
});
