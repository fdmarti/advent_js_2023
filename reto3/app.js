function findNaughtyStep(original = '', modified = '') {
    if (original.length === modified.length) return ''

    let extraLetter = ''
    let modifiedChain = original.length > modified.length ? original : modified

    for (let i = 0; i < modifiedChain.split('').length; i++) {
        if (!(original[i] === modified[i])) {
            extraLetter = modifiedChain[i]
            break;
        }

    }

    return extraLetter
}


const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
findNaughtyStep(original2, modified2) // 'f'

// const original3 = 'abcde'
// const modified3 = 'abcde'
// findNaughtyStep(original3, modified3) // ''