function checkIsValidCopy(original, copy) {
    if (original.length !== copy.length) return false
    const STACK = '#+:. '
  
    for (let i = 0; i < original.length; i++) {
      const isLetter = /\w/.test(original[i])
      const validChars = isLetter 
        ? original[i] + original[i].toLowerCase() + STACK
        : '_' + '_' + STACK
      if (validChars.indexOf(copy[i]) < validChars.indexOf(original[i])) return false
    }
    return true
  }



// checkIsValidCopy(
//     'Santa Claus is coming',
//     'sa#ta cl#us is comin#'
// ) // true


// checkIsValidCopy('s+#:.#c:. s', 
//                 's#+:.#c:. s') // false


checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false