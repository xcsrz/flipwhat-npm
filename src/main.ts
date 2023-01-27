
const charMap:Record<string, string> = {
    'a': '\u0250',
    'b': 'q',
    'c': '\u0254', 
    'd': 'p',
    'e': '\u01DD',
    'f': '\u025F', 
    'g': '\u0183',
    'h': '\u0265',
    'i': '\u0131', 
    'j': '\u027E',
    'k': '\u029E',
    'l': '\u0283',
    'm': '\u026F',
    'n': 'u',
    'r': '\u0279',
    't': '\u0287',
    'v': '\u028C',
    'w': '\u028D',
    'y': '\u028E',
    '.': '\u02D9',
    '?': '\u00BF', 
    '!': '\u00A1',
    "\'": ',',
    '_': '\u203E',
    '\u203F': '\u2040',
    '\u2045': '\u2046',
    '\u2234': '\u2235',
}

for (let i in charMap) {
    charMap[charMap[i]] = i
}
    
export default function(str=""): string {
    str = (str.length > 0) ? str.toLowerCase() : '┻━┻'
    let res = '(╯°□°）╯︵ '
    for(var i = str.length - 1; i >= 0; i-- ) {
        if(str[i] in charMap) {
            res += charMap[str[i]]
        } else {
            res += str[i]
        }
    }
    return res
}