function findNaughtyStep(original = '', modified = '') {
    let position = 0
    let modifiedChain = original.length > modified.length ? original : modified

    for (let letter of modifiedChain) {
        if (!(original[position] === modified[position])) return letter
        position++
    }

    return ''
}


const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'

// const original2 = 'stepfor'
// const modified2 = 'stepor'
// findNaughtyStep(original2, modified2) // 'f'

// const original3 = 'abcde'
// const modified3 = 'abcde'
// findNaughtyStep(original3, modified3) // ''