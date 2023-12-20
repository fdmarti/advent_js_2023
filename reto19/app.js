function revealSabotage(store = []) {

    function sumParts(num) {
        return num === '*' ? '*' : (+num + 1).toString()
    }

    for (let i = 0; i < store.length; i++) {
        for (let y = 0; y < store[i].length; y++) {

            if (store[i][y] === '*') {

                store[i][y + 1] && (store[i][y + 1] = sumParts(store[i][y + 1])); //Suma Derecha
                store[i][y - 1] !== undefined && (store[i][y - 1] = sumParts(store[i][y - 1])); //Suma izquierda

                if (store[i - 1] !== undefined) {
                    store[i - 1][y] = sumParts(store[i - 1][y]); //Suma Arriba
                    store[i - 1][y + 1] && (store[i - 1][y + 1] = sumParts(store[i - 1][y + 1])); // Suma diagonal derecha arriba
                    store[i - 1][y - 1] !== undefined && (store[i - 1][y - 1] = sumParts(store[i - 1][y - 1])); // Suma diagonal izquierda arriba
                }

                if (store[i + 1] !== undefined) {
                    store[i + 1][y] = sumParts(store[i + 1][y]); //Suma bajo
                    store[i + 1][y + 1] && (store[i + 1][y + 1] = sumParts(store[i + 1][y + 1])); // Suma diagonal derecha abajo
                    store[i + 1][y - 1] !== undefined && (store[i + 1][y - 1] = sumParts(store[i + 1][y - 1])); // Suma diagonal izquierda abajo
                }

            }
        }
    }

    console.table(store)

}

revealSabotage([
    ['*', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', '*']
])

// [
//     ["*", "2", "1"],
//     ["2", "*", "2"],
//     ["1", "2", "*"]
// ]