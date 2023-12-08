function drawGift(size = 1, symbol = '"') {
    const LINE = '#';
    const JUMP = '\n';

    if (size === 1) return LINE + JUMP;

    const MAX_WIDTH = (size * 2) - 1;
    const HALF_SIZE = size - 2;
    const SYMBOLREP = symbol.repeat(HALF_SIZE);
    const EMPTY = 'X';
    let resp = '';


    const firstLine = EMPTY.repeat(MAX_WIDTH - size) + LINE.repeat(size) + JUMP;
    resp += firstLine;

    let rightSide = 0;

    for (let i = HALF_SIZE; i > 0; i--) {
        resp += EMPTY.repeat(i) + 
            LINE + 
            SYMBOLREP + 
            LINE + 
            symbol.repeat(rightSide) +
            LINE + 
            JUMP;
        rightSide++;
    }

    const middleLine = LINE.repeat(size) + SYMBOLREP + LINE + JUMP;
    const replaced = resp.split('X').reverse().join('');
    resp += middleLine + replaced;

    return resp.replaceAll('X', ' ')
}

// drawGift(10, "%")
// drawGift(4, '+')
drawGift(4, ' ')
// drawGift(1, '<')
// drawGift(0, '<')
