function transformTree(tree = []) {
    const hashMap = tree.map(number => {
        if (  number === null) return null
        return {
            value: number,
            left: {},
            right: {}
        }
    })

    console.log(hashMap)
}











transformTree([3, 1, 0, 8, 12, null, 1])