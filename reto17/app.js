function optimizeIntervals(intervals = []) {
    const ARRAY_VALUES = []
    const SORTED_ARRAY = intervals.sort((a, b) => a[0] - b[0])
    let min = SORTED_ARRAY[0][0], max = SORTED_ARRAY[0][1];

    for (let i = 1; i < SORTED_ARRAY.length; i++) {
        const start = SORTED_ARRAY[i][0];
        const finish = SORTED_ARRAY[i][1]
        let prevMax;

        if (max < finish ) {
            prevMax = max
            max = finish

            if ( start > prevMax ){
                ARRAY_VALUES.push([min, prevMax])
                min = start

            }
        }

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