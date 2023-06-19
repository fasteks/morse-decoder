const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const tensArr = expr.match(/.{10}/g).map(it => {
    if (it === '**********') {
      return ' '
    }
    return it
  })

  const twosArr = tensArr.map(it => {
    if (it !== ' ') {
      return it.match(/.{2}/g)
    }
    return [it]
  })

  const decodedArr = twosArr.map(it => {
    return it.map(el => {
      if (+el === 10) {
        return '.'
      }
      if (+el === 11) {
        return '-'
      }
      if (el === ' ') {
        return ' '
      }
      return ''
    }).join('')
  }).map(elem => {
    if (MORSE_TABLE[elem]) {
      return MORSE_TABLE[elem]
    }
    return elem
  }).join('')
  return decodedArr
}

module.exports = {
  decode
}