function organizeGifts(gifts = '') {
    const BREAKPOINT_LETTER = /[a-z]/
    const BREAKPOINT_NUMBER = /\d/

    const CAJA = 10
    const PALE = 5
    const VALUE_PALE = CAJA * PALE

    let result = ''

    const gifsSplitedbyNumber = gifts
        .split(BREAKPOINT_LETTER)
        .filter(el => el != '')
    const gifsSplitedbyLetter = gifts
        .split(BREAKPOINT_NUMBER)
        .filter(el => el != '')

    for (let i = 0; i < gifsSplitedbyNumber.length; i++) {

        const LETTER = gifsSplitedbyLetter[i]
        const NUMBER = gifsSplitedbyNumber[i]
        const PALEVALUE = `[${LETTER}]`
        const CAJAVALUE = `{${LETTER}}`

        let resultPale = 0, resultCaja = 0, resultBolsa = 0
        const resultCajas = Math.floor(Number(NUMBER) / CAJA)

        if (resultCajas >= PALE) {
            resultPale = Math.floor(resultCajas / PALE)
            resultCaja = resultCajas - (resultPale * PALE)
        } else {
            resultCaja = resultCajas
        }

        resultBolsa = Number(NUMBER)
            - (resultPale * VALUE_PALE)
            - (resultCaja * CAJA)

        if (resultBolsa < 0) resultBolsa = 0

        result += PALEVALUE.repeat(resultPale) + CAJAVALUE.repeat(resultCaja)

        if (resultBolsa > 0) result += `(${LETTER.repeat(resultBolsa)})`

        // console.log('Cant Pales', resultPale, 'Cant cajas', resultCaja, 'Cant bolsa', resultBolsa)
    }

    return result
}


// const result1 = organizeGifts(`76a11b`)
// const result2 = organizeGifts("70b120a4c")
// const result3 = organizeGifts("9c")
// const result4 = organizeGifts("70b120a4c")
const result5 = organizeGifts("19d51e")


const caja = '{}' //!Cada 10
const pale = '[]' //!Cada 5 cajas
const bolsa = '()' //!Resto

// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)
  */