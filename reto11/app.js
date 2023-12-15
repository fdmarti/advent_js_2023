function getIndexsForPalindrome(word = '') {
    const wordLength = word.length;
    const wordArray = word.split('');

    if (wordArray.join('') === wordArray.slice().reverse().join('')) return [];

    for (let i = 0; i < Math.ceil(wordLength / 2); i++) {
        console.log(i, wordLength)
        for (let y = i + 1; y < wordLength; y++) {
            // Intercambiar i con y
            [wordArray[i], wordArray[y]] = [wordArray[y], wordArray[i]];

            // Verificar si la palabra modificada es un palíndromo
            if (wordArray.join('') === wordArray.slice().reverse().join('')) {
                // return [i, y];
            }

            // Deshacer el intercambio para probar con otras letras
            [wordArray[i], wordArray[y]] = [wordArray[y], wordArray[i]];


            console.log(wordArray, i, y)

        }
    }

    return null;
}




// const result = getIndexsForPalindrome('anna') // []
// const result2 = getIndexsForPalindrome('abab') // [0, 1]
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