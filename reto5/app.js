function cyberReindeer(road = '', time = 0) {
    let copyRoad = road,
        flag = 1,
        modifiedRoad
    const result = [copyRoad]

    for (let i = 0; i <= time; i++) {
        if (i > 3) copyRoad = copyRoad.replaceAll('|', '*')

        if (copyRoad[flag] === '|') result.push(modifiedRoad)
        else {
            const changedArray = copyRoad.split('')
            changedArray[flag] = 'S'
            const joindedArray = changedArray.join('')
            modifiedRoad = joindedArray
            result.push(joindedArray)
            flag++
        }
    }

    console.log(result.slice(0,time))
    return result.slice(0,time)
}

const road = 'S..|...|..'
const road2 = 'S..||..|..'

const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)