const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

function manufacture(gifts = [], materials = '') {
    return gifts.filter(gift => {
        return gift.split('').every(el => materials.includes(el))
    })
}


const result = manufacture(gifts, materials)
console.log(result)