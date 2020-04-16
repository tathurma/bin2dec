// Convert a binary digit to a decimal

// 1. Users can only input 1s or 0s
// 2. input field must have 8 digits


// Element selectors
const binaryInput = document.querySelector('.binary-input');
const convertButton = document.querySelector('.convert-button');
const convertedNumber = document.querySelector('.converted-number');
const originalNumber = document.querySelector('.original-number');
const message = document.querySelector('.message');


// Event listener for the convert button
convertButton.addEventListener('click', (event) => {
    // Stop submit button from refreshing the page
    event.preventDefault();



    //Error Handling
    try {
        //Enforce 8 digits on the binary input string
        if (binaryInput.value.length !== 8) {
            convertedNumber.classList.remove('show');
            originalNumber.classList.remove('show');
            throw "Must be 8 digits";
        }
        // Check each digit to make sure they are all 1 or 0
        for (let i = 0; i < binaryInput.value.length; i++) {
            if (binaryInput.value[i] !== '0' && binaryInput.value[i] !== '1') {
                convertedNumber.classList.remove('show');
                originalNumber.classList.remove('show');
                throw "Must enter all 1s and 0s";
            }
        }
        displayOriginalNumber();
        displayConvertedNumber();
        message.innerHTML = '';
    } catch (err) {
        message.innerHTML = `Error: ${err}`;
    }

});


//functions
function displayOriginalNumber() {
    originalNumber.innerHTML = `<strong>Binary Number: </strong>${binaryInput.value}`;
    originalNumber.classList.add('show');
}

function displayConvertedNumber() {
    convertedNumber.innerHTML = `<strong>Decimal Number: </strong>${convertNumber(binaryInput.value)}`;
    convertedNumber.classList.add('show');
}

function convertNumber(binary) {
    return parseInt(binary, 2);
}