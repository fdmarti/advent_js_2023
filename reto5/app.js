function cyberReindeer(road = '', time = 0) {
    const SANTA = 'S'
    let copyRoad = road, flag = 1, modified = copyRoad

    const result = [road]
    copyRoad = copyRoad.replace('S', '.')

    for (let i = 1; i <= time - 1; i++) {
        if (i > 4) copyRoad = copyRoad.replaceAll('|', '*');
        if (copyRoad[flag] === '|') result.push(modified)
        else {
            const firstPart = copyRoad.substring(0, flag)
            const lastPart = copyRoad.substring(flag + 1)

            modified = firstPart + SANTA + lastPart
            result.push(modified)
            flag++
        }
    }
    return result
}

const road = 'S..|...|..'
const road2 = 'S..||..|..'

const time = 10 // unidades de tiempo
const result = cyberReindeer(road2, time)