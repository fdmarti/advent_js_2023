function adjustLights(lights = []) {
    const GREEN = "🟢"
    const RED = "🔴"

    let currentState = lights[0]
    let sumChanges = 0

    lights.forEach((state, index) => {
        if (index === 0) return
        if (state === currentState) {
            sumChanges++
            currentState = currentState === GREEN ? RED : GREEN
        } else currentState = state
    })

    const complement = lights.length - sumChanges
    return Math.min(sumChanges, complement);
}

adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]) // 1
adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]) // 2
adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]) // 0
adjustLights(["🔴", "🔴", "🔴"])// 1
adjustLights(["🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴"])// 4
adjustLights(["🟢", "🟢", "🟢", "🟢", "🟢", "🟢", "🟢", "🟢", "🟢"])// 4
adjustLights(["🔴"])// 0
adjustLights(["🟢"])// 0
adjustLights([])// 0
adjustLights(["🔴", "🔴", "🟢"]) // 1
adjustLights(["🟢", "🔴", "🔴", "🟢", "🔴"]) // 2
adjustLights(["🟢", "🔴", "🔴", "🟢", "🔴", "🟢", "🔴", "🟢", "🔴"]) // 2
adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢", "🔴", "🟢", "🟢", "🔴"]) // 2
adjustLights(["🟢", "🔴", "🔴", "🟢", "🔴", "🟢", "🔴", "🔴", "🔴"]) // 3
adjustLights(["🟢", "🔴", "🔴", "🟢", "🔴"]) // 2
adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"]) // 1
adjustLights(["🔴", "🔴", "🔴", "🔴", "🔴", "🟢", "🟢", "🔴"]) // 4
adjustLights(["🔴", "🔴", "🟢", "🔴", "🔴", "🔴", "🔴", "🟢", "🟢", "🔴"]) // 4


// function getRandomBoolean() {
//     return Math.random() < 0.5;
// }

// adjustLights(Array.from({ length: 1 }, getRandomBoolean))
// adjustLights(Array.from({ length: 2 }, getRandomBoolean))
// adjustLights(Array.from({ length: 3 }, getRandomBoolean))
// adjustLights(Array.from({ length: 4 }, getRandomBoolean))
// adjustLights(Array.from({ length: 5 }, getRandomBoolean))
// adjustLights(Array.from({ length: 6 }, getRandomBoolean))
// adjustLights(Array.from({ length: 7 }, getRandomBoolean))
// adjustLights(Array.from({ length: 8 }, getRandomBoolean))
// adjustLights(Array.from({ length: 9 }, getRandomBoolean))
// adjustLights(Array.from({ length: 10 }, getRandomBoolean))
// adjustLights(Array.from({ length: 11 }, getRandomBoolean))
// adjustLights(Array.from({ length: 12 }, getRandomBoolean))



module.exports = adjustLights
