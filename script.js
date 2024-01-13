//reusable PX to Relative Units (REM and EM) converter function using default 16px font-size
const pxToRelativeUnit = (px) => {
    const pxString = String(px);

    if (pxString.match(/[-+]?\d*\.?\d+/)) {
        const pattern = pxString.match(/[-+]?\d*\.?\d+/);

        const result = parseFloat(pattern[0]) / 16;

        return Math.round(result * 10000) / 10000;
    } else {
        throw Error('Not a valid number.');
    }
}
//

//reusable function to convert relative units (REM and EM) to PX using default 16px font-size
const relativeUnitToPx = (unit) => {
    const remString = String(unit);

    if (remString.match(/[-+]?\d*\.?\d+/)) {
        const pattern = remString.match(/[-+]?\d*\.?\d+/);

        const result = parseFloat(pattern[0]) * 16;

        return Math.round(result * 10000) / 10000;
    } else {
        throw Error('Not a valid number.');
    }
};
//
//PX>>REM code block 
const pxRemCodeBlock = () => {

    //Convert PX to REM
    const pxToRem = (pxValue) => `${pxToRelativeUnit(pxValue)}rem`;

    //convert REM to PX
    const remToPx = (remValue) => `${relativeUnitToPx(remValue)}px`;

    //Get all inputs for px to rem converter
    const pxInput = document.querySelector('.px_to_rem p #px');
    const remInput = document.querySelector('.px_to_rem p #rem')

    // An event listener to get px input current value
    pxInput.addEventListener('input', () => {
        const pxValue = pxInput.value;
        
        if (!pxValue) {
            return remInput.value = ' ';
        } else {
            remInput.value = pxToRem(pxValue);
        }
    });
    // 

    // An event listener to get rem input current value
    remInput.addEventListener('input', () => {
        const remValue = remInput.value;
        
        if (!remValue) {
            return pxInput.value = ' ';
        } else {
            pxInput.value = remToPx(remValue);
        }
    });
    //
}

pxRemCodeBlock();
//

//PX>>Em code block 
const pxEmCodeBlock = () => {
    //Convert PX to EM
    const pxToEm = (pxValue) => `${pxToRelativeUnit(pxValue)}em`;

    //convert EM to PX
    const emToPx = (emValue) => `${relativeUnitToPx(emValue)}px`;

    //get inputs for px to em converter 
    const pxInput = document.querySelector('.px_to_em p #px2');
    const emInput = document.querySelector('.px_to_em p #em');

    // An event listener to get px input current value
    pxInput.addEventListener('input', () => {
        const pxValue = pxInput.value;
        
        if (!pxValue) {
            return emInput.value = ' ';
        } else {
            emInput.value = pxToEm(pxValue);
        }
    });
    // 

    // An event listener to get rem input current value
    emInput.addEventListener('input', () => {
        const emValue = emInput.value;
        
        if (!emValue) {
            return pxInput.value = ' ';
        } else {
            pxInput.value = emToPx(emValue);
        }
    });
}

pxEmCodeBlock();
//