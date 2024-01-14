//default 16px font-sized is used as base unit for conversion, but can be changed
const newBaseUnit = document.getElementById('new_base_unit');
const displayBaseUnit = document.querySelector('.generated_base_unit');
const changeFollowedText = displayBaseUnit.nextElementSibling;
let newDisplayBaseUnit;

newBaseUnit.addEventListener('input', () => {
    const newBaseUnitValue = newBaseUnit.value.trim();

    if (newBaseUnitValue === '') {
        displayBaseUnit.innerText = '16';
        changeFollowedText.innerText = 'default font-size.';
    } else {
        displayBaseUnit.innerText = newBaseUnitValue;
        changeFollowedText.innerText = 'from your input.';
    }

    newDisplayBaseUnit = parseFloat(displayBaseUnit.innerText);

    //if base unit is changed, the conversion functions are called here
    pxRemCodeBlock();
    pxEmCodeBlock();
    pxPercentageCodeBlock();
    //
});
//

// Reusable PX to Relative Units (REM and EM) converter function using default 16px font-size or the newly inputed base unit if changed by user.
const pxToRelativeUnit = (px) => {
    const pxString = String(px);
    const effectiveBaseUnit = typeof newDisplayBaseUnit === 'number' ? newDisplayBaseUnit : 16;

    if (pxString.match(/[-+]?\d*\.?\d+/)) {
        const pattern = pxString.match(/[-+]?\d*\.?\d+/);

        const result = parseFloat(pattern[0]) / effectiveBaseUnit;

        return Math.round(result * 10000) / 10000;
    } else {
        throw Error('Not a valid number.');
    }
};
//

// Reusable function to convert relative units (REM and EM) to PX using default 16px font-size or the newly inputed base unit if changed by user.
const relativeUnitToPx = (unit) => {
    const remString = String(unit);
    const effectiveBaseUnit = typeof newDisplayBaseUnit === 'number' ? newDisplayBaseUnit : 16;

    if (remString.match(/[-+]?\d*\.?\d+/)) {
        const pattern = remString.match(/[-+]?\d*\.?\d+/);

        const result = parseFloat(pattern[0]) * effectiveBaseUnit;

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

//PX>>Percentage code block 
const pxPercentageCodeBlock = () => {

    //Convert PX to Percent
    const pxToPercent = (pxValue) => `${(pxToRelativeUnit(pxValue) * 100)}%`;

    //convert REM to Percent
    const percentToPx = (percentValue) => `${(relativeUnitToPx(percentValue) / 100)}px`;

    //Get all inputs for px to rem converter
    const pxInput = document.querySelector('.px_to_percent p #px3');
    const percentInput = document.querySelector('.px_to_percent p #percent')

    // An event listener to get px input current value
    pxInput.addEventListener('input', () => {
        const pxValue = pxInput.value;
        
        if (!pxValue) {
            return percentInput.value = ' ';
        } else {
            percentInput.value = pxToPercent(pxValue);
        }
    });
    // 

    // An event listener to get rem input current value
    percentInput.addEventListener('input', () => {
        const percentValue = percentInput.value;
        
        if (!percentValue) {
            return pxInput.value = ' ';
        } else {
            pxInput.value = percentToPx(percentValue);
        }
    });
    //
}

pxPercentageCodeBlock();
//

//Reusable function to switch between buttons
function switchButtonsFunc(triggeredSwitchbutton, switchButton2, switchButton3, activeConverter, converter2, converter3) {
    triggeredSwitchbutton.addEventListener('click', () => {
        if(activeConverter.classList.contains('default_converter') || activeConverter.classList.contains('show_converter')) {
            return
        } else {
            activeConverter.classList.add('show_converter');
            activeConverter.setAttribute('aria-hidden', 'false');
            triggeredSwitchbutton.classList.add('default_button');
    
            converter2.setAttribute('aria-hidden', 'true');
            converter3.setAttribute('aria-hidden', 'true');

            converter2.classList.remove('show_converter', 'default_converter');
            converter3.classList.remove('show_converter', 'default_converter');

            switchButton2.classList.remove('default_button');
            switchButton3.classList.remove('default_button');

            switchButton2.style.borderBottom = '2px solid #012842';
            switchButton3.style.borderBottom = '2px solid #012842';
        }
    });
};
//

const switchButtons = document.querySelectorAll('.switch_buttons button'); //gets all buttons
const converter = document.querySelectorAll('.converter'); //gets all converter inputs block

//call the switchButtons fuction on each button
switchButtonsFunc(switchButtons[0], switchButtons[1], switchButtons[2], converter[0], converter[1], converter[2]);
switchButtonsFunc(switchButtons[1], switchButtons[0], switchButtons[2], converter[1], converter[0], converter[2]);
switchButtonsFunc(switchButtons[2], switchButtons[1], switchButtons[0], converter[2], converter[1], converter[0]);
//

//change units direction using the switch icon
const switchLines = document.querySelectorAll('.switch_line');

switchLines.forEach(switchLine => {
    switchLine.addEventListener('click', (e) => {
        const currentSwitch = e.target;

        if(currentSwitch.parentElement.style.flexDirection != 'row-reverse') {
            currentSwitch.parentElement.style.flexDirection = 'row-reverse';
        } else {
            currentSwitch.parentElement.style.flexDirection = 'unset';
        }
    })
})