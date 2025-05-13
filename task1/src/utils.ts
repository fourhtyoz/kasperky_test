export function toTitleCase(str: string): string {
    return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

export const getEmojiFlag = (code: string) =>
    code.replace(/./g, char =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
)

export const displayAuthors = (authorsArray: string[]) => {
    return authorsArray.length > 2 ? `${authorsArray[0]}, ${authorsArray[1]}, et al.` : authorsArray.join(", ")
}

export const getSentimentColor = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
        case 'positive': 
            return 'green'
        case 'negative': 
            return 'red'
        default: 
            return 'geekblue'
    }
}