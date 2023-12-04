function decode(message) {
    let word = message

    while (word.includes('(')) {
        let lastParentesis = word.indexOf(')')
        let firstParentesis = word.lastIndexOf('(', lastParentesis)

        const returnedWord = word.slice(firstParentesis + 1, lastParentesis)
        const returnedWordReversed = returnedWord.split('').reverse().join('');

        word = word.slice(0, firstParentesis) + returnedWordReversed + word.slice(lastParentesis + 1)

    }
    return word
}




const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus