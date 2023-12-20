function autonomousDrive(store = [], movements = []) {
    const HALF_STORE = store[0].length
    const OBSTACLE = '*'
    const RESULT = []
    let ST_ARR = store.join('').split('')

    const obj = {
        'R': (pos) => ST_ARR[pos + 1] !== OBSTACLE &&
            ([ST_ARR[pos], ST_ARR[pos + 1]] = [ST_ARR[pos + 1], ST_ARR[pos]]),
        'L': (pos) => ST_ARR[pos - 1] !== OBSTACLE &&
            ([ST_ARR[pos], ST_ARR[pos - 1]] = [ST_ARR[pos - 1], ST_ARR[pos]]),
        'D': (pos) => (ST_ARR[HALF_STORE + pos] !== OBSTACLE &&
            !!ST_ARR[HALF_STORE + pos]) &&
            ([ST_ARR[pos], ST_ARR[HALF_STORE + pos]] = [ST_ARR[(HALF_STORE + pos)], ST_ARR[pos]]),
        'U': (pos) => ST_ARR[pos - HALF_STORE] !== OBSTACLE &&
            ([ST_ARR[pos], ST_ARR[pos - HALF_STORE]] = [ST_ARR[pos - HALF_STORE], ST_ARR[pos]])
    }


    for (let move of movements) {
        let robotPoss = ST_ARR.indexOf('!')
        obj[move](robotPoss)
    }

    const ST_ARR_JOINED = ST_ARR.join('')

    for (let i = 0; i < ST_ARR_JOINED.length; i += HALF_STORE) {
        RESULT.push(ST_ARR_JOINED.substring(i, i + HALF_STORE));
    }

    return RESULT

}

autonomousDrive(
    [
        '*..!..*',
        '*.....*'
    ],
    ['R', 'R', 'D', 'D'])