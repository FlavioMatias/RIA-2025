export function sortDescending(arr: string[]): string[] {
    const result : string[]  = arr.sort((a, b) => b.localeCompare(a));
    console.log(result);
    return result;
}
