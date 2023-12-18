function autonomousDrive(store = [], movements = []) {
    const HALF_STORE = store[0].length
    const OBSTACLE = '*'
    const RESULT = []
    let ST_ARR = store.join('').split('')


    for (let move of movements) {
        let robotPoss = ST_ARR.indexOf('!')

        if (move === 'R' && ST_ARR[robotPoss + 1] !== OBSTACLE) {
            [ST_ARR[robotPoss], ST_ARR[robotPoss + 1]] = [ST_ARR[robotPoss + 1], ST_ARR[robotPoss]]
        }
        if (move === 'L' && ST_ARR[robotPoss - 1] !== OBSTACLE) {
            [ST_ARR[robotPoss], ST_ARR[robotPoss - 1]] = [ST_ARR[robotPoss - 1], ST_ARR[robotPoss]]
        }
        if (move === 'D' &&
            ST_ARR[HALF_STORE + robotPoss] !== OBSTACLE && !!ST_ARR[HALF_STORE + robotPoss]) {
            [ST_ARR[robotPoss], ST_ARR[HALF_STORE + robotPoss]] = [ST_ARR[(HALF_STORE + robotPoss)], ST_ARR[robotPoss]]
        }
        if (move === 'U' &&
            ST_ARR[robotPoss - HALF_STORE] !== OBSTACLE) {
            [ST_ARR[robotPoss], ST_ARR[robotPoss - HALF_STORE]] = [ST_ARR[robotPoss - HALF_STORE], ST_ARR[robotPoss]]
        }
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