// types ==================================================== //
type getNoun = (number: number, nouns: [string, string, string]) => string

// main ===================================================== //
// https://gist.github.com/tomfun/830fa6d8030d16007bbab50a5b21ef97
const getNoun: getNoun = (number, [one, two, five]) => {

    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;

}

// exports ================================================= //
export default getNoun;