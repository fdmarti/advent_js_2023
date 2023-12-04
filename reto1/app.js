
const giftIds = [2, 1, 3, 5, 3, 2]
const giftIds2 = [1, 2, 3, 4]
const giftIds3 = [5, 1, 5, 1]

function findFirstRepeated(gifts = []) {
    const seen = []
    for (let num of gifts) {
        if (seen.includes(num)) return num
        seen.push(num)
    }
    return -1
}

const respuesta = findFirstRepeated(giftIds)
console.log(respuesta)