function cyberReindeer(road = '', time = 0) {
    let copyRoad = road,
        flag = 1,
        modifiedRoad
    const result = [copyRoad]

    for (let i = 1; i <= time - 1; i++) {
        if (i > 4) copyRoad = copyRoad.replaceAll('|', '*')

        if (copyRoad[flag] === '|') result.push(modifiedRoad)
        else {
            const changedArray = copyRoad.split('')
            changedArray[flag] = 'S'
            changedArray[0] = '.'
            const joindedArray = changedArray.join('')
            modifiedRoad = joindedArray
            result.push(joindedArray)
            flag++
        }
    }
    return result
}

const road = 'S..|...|..'
const road2 = 'S..||..|..'

const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)