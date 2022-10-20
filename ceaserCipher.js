const getAlphabets = () => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 97);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    return alphabet;
}

const isPunctuation = (ch) => {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    return regex.test(ch)
}

function isNumber(val){
    return isNaN(val) ? false : true ;
}

const getInd = (ch) => {
    const alphabet = getAlphabets();
    let i = 0;
    while (i < 26) {
        if (ch === alphabet[i]) return i;
        i++;
    }

    return -1;
}


const cC = (str, shift) => {
    str = str.toLowerCase();
    let arrOfChar = str.split("");
    let result = '';
    let alphabet = getAlphabets();

    for (let i = 0; i < arrOfChar.length; i++) {
        if ( isNumber(arrOfChar[i]) ) {
            result = result.concat(arrOfChar[i]);
            console.log(result);
            continue;
        }

        if ( isPunctuation(arrOfChar[i]) || arrOfChar[i] === ' ' ) {
            result = result.concat(arrOfChar[i]);
            continue;
        }
        let ind = getInd(arrOfChar[i]);
        console.log(ind);
        ind = (ind + shift) % 26;
        result = result.concat(alphabet[ind]);
    }
    return result;
}

export default cC;