const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

function manufacture(gifts = [], materials = '') {
    return gifts.filter(gift => {
        const result = gift.split('').map(el => {
            if (!materials.includes(el)) return false
            return true
        })

        return result.every(el => el === true)
    })
}


const result = manufacture(gifts, materials)
console.log(result)