export const joinWords = (words: string[], spacer: () => string = () => " "): string => {
    return words.join(spacer());
}