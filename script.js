//px to rem converter
const pxToRem = (px) => {
    const pxString = String(px);

    if (pxString.match(/\d+/)) {
        const pattern = pxString.match(/\d+/);

        return `${Number(pattern[0]) / 16}px`;
    } else {
        throw Error('Not a valid number.');
    }

}

const remToPx = (rem) => {
    const remString = String(rem);

    if (remString.match(/\d+/)) {
        const pattern = remString.match(/\d+/);

        return `${Number(pattern[0]) * 16}rem`;
    } else {
        throw Error('Not a valid number.');
    }
}

console.log(pxToRem('16'))

console.log(remToPx('1'))
