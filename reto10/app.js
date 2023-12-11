function createChristmasTree(ornaments = '', height = 1) {
    const BLANK = ' '
    const EMPTY = ''
    const STEM = '|'
    const JUMP = '\n'
    const MIDDLE_POSITION = height - 2

    let limit = 0
    let tree = ''

    const characteres = ornaments.repeat(height * height)

    for (let i = 1; i < height + 1; i++) {
        const cutCharacteres = characteres.substring(limit, limit + i)
        limit = limit + i
        tree += BLANK.repeat(height - i) + cutCharacteres.split(EMPTY).join(BLANK) + JUMP
    }

    tree += BLANK.repeat(MIDDLE_POSITION + 1) + STEM + JUMP
    return tree
}





createChristmasTree("x", 3)
createChristmasTree("123", 5)
createChristmasTree("xo", 4)