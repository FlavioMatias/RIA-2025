import { filterEven } from '../src/filter-even';

describe('filterEven', () => {
    test('returns only the even elements of the array', () => {
        const array = [8, 3, 9, 5, 6, 12];
        const expected = [8, 6, 12];
        expect(filterEven(array)).toEqual(expected);
    });
});
