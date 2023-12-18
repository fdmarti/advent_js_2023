function maxGifts(houses = []) {
    const maxSum = [houses[0], Math.max(houses[0], houses[1])]

    for (let i = 2; i < houses.length; i++) {
        maxSum.push(Math.max(maxSum[i - 1], maxSum[i - 2] + houses[i]))
    }

    return maxSum[maxSum.length]
}





maxGifts([2, 4, 2]) // 4 (4)
maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)
maxGifts([2, 7, 9, 3, 1]) // 12
maxGifts([0, 0, 0, 0, 1]) // 1