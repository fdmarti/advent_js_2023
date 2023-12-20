function transformTree(tree) {
    function generateTree(index) {
        if (tree[index] == null) return null
        return {
            value: tree[index],
            left: generateTree(index * 2 + 1),
            right: generateTree(index * 2 + 2),
        }
    }
    const RESULT = generateTree(0)
    return RESULT
}









transformTree([3, 1, 0, 8, 12, null, 1])