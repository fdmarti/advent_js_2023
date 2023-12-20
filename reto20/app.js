function distributeGifts(weights = []) {
    let RESULT = Array.from({ length: weights.length }, () => new Array(weights[0].length).fill(''));

    for (let i = 0; i < weights.length; i++) {
        for (let y = 0; y < weights[i].length; y++) {

            const arraValues = []

            const currentValue = weights[i][y]
            const supValue = weights?.[i - 1]?.[y]
            const bottomValue = weights?.[i + 1]?.[y]
            const leftValue = weights?.[i]?.[y - 1]
            const rightValue = weights?.[i]?.[y + 1]

            arraValues.push(currentValue, supValue, bottomValue, leftValue, rightValue)

            const arraValuesFiltered = arraValues.filter(el => el)
            let totalSum = 0
            for (let num of arraValuesFiltered) totalSum += num;

            RESULT[i][y] = Math.round(totalSum / arraValuesFiltered.length)
        }
    }
    return RESULT
}




const input = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
]

// distributeGifts(input)


distributeGifts([
    [2, 1, 1],
    [3, 4, null]
])