function maxDistance(movements = '') {
    let amountMovements = 0, bonus = 0

    for (let move of movements) {
        if (move === '>') amountMovements++
        else if (move === '*') bonus++
        else amountMovements--
    }
    return Math.abs(amountMovements) + bonus
}



const movements = '>>*<'
const result = maxDistance(movements)
// console.log(result) // -> 2

// const movements2 = '<<<>'
// const result2 = maxDistance(movements2)
// console.log(result2) // -> 2

// const movements3 = '>***>'
// const result3 = maxDistance(movements3)
// console.log(result3) // -> 5