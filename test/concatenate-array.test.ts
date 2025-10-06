import { joinWords } from '../src/concatenate-array';

describe('Test joinWords function', () => {
    const spacer = () => " ";
    const inputArray =  ["Arrays", "com", "TypeScript"];
    const expectedOutput = "Arrays com TypeScript";

    test('joinWords should concatenate array elements with one space', () => {
        expect(joinWords(inputArray, spacer)).toBe(expectedOutput);
    });

    test('joinWords should return an empty string when array is empty', () => {
        expect(joinWords([], spacer)).toBe("");
    });

    test('joinWords should handle array with one element correctly', () => {
        expect(joinWords(["Hello"], spacer)).toBe("Hello");
    });
});