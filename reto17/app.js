function optimizeIntervals(intervals = []) {
    const ARRAY_VALUES = []
    const SORTED_ARRAY = intervals.sort((a, b) => a[0] - b[0])
    let [min, max] = SORTED_ARRAY[0]

    for (let i = 1; i < SORTED_ARRAY.length; i++) {
        const [start, finish] = SORTED_ARRAY[i]

        if (max < start) {
            ARRAY_VALUES.push([min, max]);
            min = start;
        }
        max = Math.max(max, finish);
    }

    ARRAY_VALUES.push([min, max])
    return ARRAY_VALUES
}



// optimizeIntervals([
//     [5, 8],
//     [2, 7],
//     [3, 4]
// ]) // [[2, 8]]


// optimizeIntervals([
//     [1, 3],
//     [8, 10],
//     [2, 6]
// ]) // [[1, 6], [8, 10]]

optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6]
]) // [[1, 2], [3, 4], [5, 6]]