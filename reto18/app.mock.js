function drawClock(time) {
    const RESULT_MATRIX = Array(7).fill([]).map(() => Array().fill(' '));
    const VALUES_TIME_ARRAY = time.split('')
    const CERO = [
        ['*', '*', '*'],
        ['*', ' ', '*'],
        ['*', ' ', '*'],
        ['*', ' ', '*'],
        ['*', ' ', '*'],
        ['*', ' ', '*'],
        ['*', '*', '*']
    ]

    const UNO = [
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*']
    ]
    const DOS = [
        ['*', '*', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        ['*', '*', '*'],
        ['*', ' ', ' '],
        ['*', ' ', ' '],
        ['*', '*', '*']
    ]
    const TRES = [
        ['*', '*', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        ['*', '*', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        ['*', '*', '*']
    ]
    const CUATRO = [
        ['*', ' ', '*'],
        ['*', ' ', '*'],
        ['*', ' ', '*'],
        ['*', '*', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*']
    ]
    const CINCO = [
        ['*', '*', '*'],
        ['*', ' ', ' '],
        ['*', ' ', ' '],
        ['*', '*', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        ['*', '*', '*']
    ]
    const SEIS = [
        ['*', '*', '*'],
        ['*', ' ', ' '],
        ['*', ' ', ' '],
        ['*', '*', '*'],
        ['*', ' ', '*'],
        ['*', ' ', '*'],
        ['*', '*', '*']
    ]
    const SIETE = [
        ['*', '*', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*']
    ]
    const OCHO = [
        ['*', '*', '*'],
        ['*', ' ', '*'],
        ['*', ' ', '*'],
        ['*', '*', '*'],
        ['*', ' ', '*'],
        ['*', ' ', '*'],
        ['*', '*', '*']
    ]
    const NUEVE = [
        ['*', '*', '*'],
        ['*', ' ', '*'],
        ['*', ' ', '*'],
        ['*', '*', '*'],
        [' ', ' ', '*'],
        [' ', ' ', '*'],
        ['*', '*', '*']
    ]
    const EMPTY = [
        [' '],
        [' '],
        [' '],
        [' '],
        [' '],
        [' '],
        [' ']
    ]
    const SPACE = [
        [' '],
        [' '],
        ['*'],
        [' '],
        ['*'],
        [' '],
        [' ']
    ]


    for (let i = 0; i < VALUES_TIME_ARRAY.length; i++) {
        for (let y = 0; y < RESULT_MATRIX.length; y++) {
            switch (VALUES_TIME_ARRAY[i]) {
                case '0':
                    RESULT_MATRIX[y].push(CERO[y])
                    break;
                case '1':
                    RESULT_MATRIX[y].push(UNO[y])
                    break;
                case '2':
                    RESULT_MATRIX[y].push(DOS[y])
                    break;
                case '3':
                    RESULT_MATRIX[y].push(TRES[y])
                    break;
                case '4':
                    RESULT_MATRIX[y].push(CUATRO[y])
                    break;
                case '5':
                    RESULT_MATRIX[y].push(CINCO[y])
                    break;
                case '6':
                    RESULT_MATRIX[y].push(SEIS[y])
                    break;
                case '7':
                    RESULT_MATRIX[y].push(SIETE[y])
                    break;
                case '8':
                    RESULT_MATRIX[y].push(OCHO[y])
                    break;
                case '9':
                    RESULT_MATRIX[y].push(NUEVE[y])
                    break;
                case ':':
                    RESULT_MATRIX[y].push(SPACE[y])
                    break;
            }
            RESULT_MATRIX[y].push(EMPTY[y])
        }

    }
    const RESULT = RESULT_MATRIX.map(el => el.flat())
    RESULT.forEach(el => el.pop())
    return RESULT
}