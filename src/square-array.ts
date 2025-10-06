export const squareSimpleFor = (arr: number[]): number[] => {
    const result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]! ** 2);
    }
    return result;
};

export const squareForEach = (arr: number[]): number[] => {
    const result: number[] = [];
    arr.forEach(num => {
        result.push(num ** 2);
    });
    return result;
};