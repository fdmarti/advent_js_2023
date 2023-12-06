function maxDistance(movements = '') {
    const movementsArr = movements.split('')
    let amountMovements = 0, bonus = 0
    movementsArr.forEach(el => {
        if (el === '>') amountMovements++
        else if (el === '*') bonus++
        else amountMovements--
    })

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