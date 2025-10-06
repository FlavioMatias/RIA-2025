const squareSimpleFor = (arr: number[]): number[] => {
    const result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]! ** 2);
    }
    return result;
};
