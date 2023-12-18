function getIndexsForPalindrome(word = '') {
    const WORD_LENGTH = word.length;

    if (word === word.split('').reverse().join('')) return [];

    const wordArray = word.split('');

    for (let i = 0; i < Math.ceil(WORD_LENGTH / 2); i++) {
        for (let y = i + 1; y < WORD_LENGTH; y++) {
            [wordArray[i], wordArray[y]] = [wordArray[y], wordArray[i]];

            if (wordArray.reverse().join('') === wordArray.reverse().join('')) {
                return [i, y];
            }
            [wordArray[i], wordArray[y]] = [wordArray[y], wordArray[i]];
        }
    }

    return null;
}




// const result = getIndexsForPalindrome('anna') // []
const result2 = getIndexsForPalindrome('abab') // [0, 1]
// const result3 = getIndexsForPalindrome('abac') // null
// const result4 = getIndexsForPalindrome('aaaaaaaa') // []
// const result5 = getIndexsForPalindrome('aaababa') // [1, 3]
// const result6 = getIndexsForPalindrome('caababa') // null


// console.log(result)
// console.log(result2)
// console.log(result3)
// console.log(result4)
// console.log(result5)
// console.log(result6)