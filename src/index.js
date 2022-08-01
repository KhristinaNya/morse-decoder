const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrBinaryNumbers = [];
    expr.split('').forEach(( element, index) => (
        index % 10 === 0 ? arrBinaryNumbers.push([element]) : arrBinaryNumbers[arrBinaryNumbers.length - 1].push(element)));
    return arrBinaryNumbers.map(element=>element = (element[0] ==='*' ? ' ' : element
            .reduce((sum, curr, index)=>{return sum + ((index + 1) % 2 === 0 ? (element[index-1] + curr === '11' ? '-' : (element[index-1] + curr === '10' ? '.' : '') ) : '')},'')))
            .reduce((sum, curr) => {return sum + (curr === ' ' ? ' ' : MORSE_TABLE[curr]) },'' );
}

module.exports = {
    decode
}