const passwordInput = document.getElementById('password-input');
const checkBtn = document.getElementById('check-btn');
const resultContainer = document.getElementById('result-container');

// Function to calculate overall level
function calculateOverallLevel(lengthLevel, uppercaseLevel, numberLevel, specialCharLevel) {
    // Calculate the average of all levels
    const average = (lengthLevel + uppercaseLevel + numberLevel + specialCharLevel) / 4;

    // Determine overall level
    if (average < 2) {
        return "Weak";
    } else if (average < 3) {
        return "Medium";
    } else {
        return "Strong";
    }
}

// Function to check password
function checkPassword() {
    const password = passwordInput.value;

    let lengthLevel = 0, uppercaseLevel = 0, numberLevel = 0, specialCharLevel = 0;
    let uppercaseCount = 0, numberCount = 0, specialCharCount = 0;

    // Function to check length
    function checkLength() {
        const passwordLength = password.length;
        if (passwordLength >= 12) {
            lengthLevel = 3; // Strong
        } else if (passwordLength > 8) {
            lengthLevel = 2; // Medium
        } else {
            lengthLevel = 1; // Weak
        }
    }
    checkLength();

    // Function to check for uppercase characters
    function checkForUppercase() {
        uppercaseCount = countUppercaseCharacters(password);
        if (uppercaseCount >= 2) {
            uppercaseLevel = 3; // Strong
        } else if (uppercaseCount === 1) {
            uppercaseLevel = 2; // Medium
        } else {
            uppercaseLevel = 1; // Weak
        }
    }
    checkForUppercase();

    // Function to check for numbers
    function checkForNumbers() {
        numberCount = countNumbers(password);
        if (numberCount >= 2) {
            numberLevel = 3; // Strong
        } else if (numberCount === 1) {
            numberLevel = 2; // Medium
        } else {
            numberLevel = 1; // Weak
        }
    }
    checkForNumbers();

    // Function to check for special characters
    function checkForSpecialChars() {
        specialCharCount = countSpecialChars(password);
        if (specialCharCount >= 2) {
            specialCharLevel = 3; // Strong
        } else if (specialCharCount === 1) {
            specialCharLevel = 2; // Medium
        } else {
            specialCharLevel = 1; // Weak
        }
    }
    checkForSpecialChars();

    // Calculate overall level
    const overallLevel = calculateOverallLevel(lengthLevel, uppercaseLevel, numberLevel, specialCharLevel);

    // Display result
    displayResult(password.length, lengthLevel, uppercaseLevel, uppercaseCount, numberLevel, numberCount, specialCharLevel, specialCharCount, overallLevel);
}

// Function to count uppercase characters
function countUppercaseCharacters(password) {
    let count = 0;
    for (let char of password) {
        if (/[A-Z]/.test(char)) {
            count++;
        }
    }
    return count;
}

// Function to count numbers
function countNumbers(password) {
    let count = 0;
    for (let char of password) {
        if (/[0-9]/.test(char)) {
            count++;
        }
    }
    return count;
}

// Function to count special characters
function countSpecialChars(password) {
    let count = 0;
    for (let char of password) {
        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(char)) {
            count++;
        }
    }
    return count;
}

// Function to set the icon based on the level
function icon(level) {
    if (level === 1) {
        return 'icons/x.svg'; // Weak
    } else if (level === 2) {
        return 'icons/check.svg'; // Medium
    } else {
        return 'icons/check.svg'; // Strong
    }
}

// Function to display the result
function displayResult(passwordLength, lengthLevel, uppercaseLevel, uppercaseCount, numberLevel, numberCount, specialCharLevel, specialCharCount, overallLevel) {
    const lengthIconPath = icon(lengthLevel);
    const uppercaseIconPath = icon(uppercaseLevel);
    const numberIconPath = icon(numberLevel);
    const specialCharIconPath = icon(specialCharLevel);

    resultContainer.innerHTML = `
        <p class="label">${overallLevel}</p>
        <div class="bars">
            <div class="bar" id="bar1"></div>
            <div class="bar" id="bar2"></div>
            <div class="bar" id="bar3"></div>
            <div class="bar" id="bar4"></div>
        </div>
        <div class="stats">
            <div class="stat-wrap" id="wrap-1">
                <img src="${lengthIconPath}" class="icon" id="icon-1">
                <p class="stat-text">Password length: <span class="stat">${passwordLength}</span></p>
            </div>
            <div class="stat-wrap" id="wrap-2">
                <img src="${uppercaseIconPath}" class="icon" id="icon-2">
                <p class="stat-text">Uppercase characters: <span class="stat">${uppercaseCount}</span></p>
            </div>
            <div class="stat-wrap" id="wrap-3">
                <img src="${numberIconPath}" class="icon" id="icon-3">
                <p class="stat-text">Numbers: <span class="stat">${numberCount}</span></p>
            </div>
            <div class="stat-wrap" id="wrap-4">
                <img src="${specialCharIconPath}" class="icon" id="icon-4">
                <p class="stat-text">Special characters: <span class="stat">${specialCharCount}</span></p>
            </div>
        </div>
    `;
}

function wrapBGs() {

function wrap1BG() {
    const icon1 = document.getElementById('icon-1');
    const checkPath = 'icons/check.svg';
    const wrap1 = document.getElementById('wrap-1'); // Assuming wrap1 is an element with id 'wrap1'
    
    // Create a temporary element to get the absolute URL of the checkPath
    const tempImg = document.createElement('img');
    tempImg.src = checkPath;
    const absoluteCheckPath = tempImg.src;

    if (icon1.src === absoluteCheckPath) {
        wrap1.style.backgroundColor = '#17b55420';
    } else {
        wrap1.style.backgroundColor = '#f8000015';
    }
}  wrap1BG();

function wrap2BG() {
    const icon2 = document.getElementById('icon-2');
    const checkPath = 'icons/check.svg';
    const wrap2 = document.getElementById('wrap-2'); // Assuming wrap1 is an element with id 'wrap1'
    
    // Create a temporary element to get the absolute URL of the checkPath
    const tempImg = document.createElement('img');
    tempImg.src = checkPath;
    const absoluteCheckPath = tempImg.src;

    if (icon2.src === absoluteCheckPath) {
        wrap2.style.backgroundColor = '#17b55420';
    } else {
        wrap2.style.backgroundColor = '#f8000015';
    }
} wrap2BG();

function wrap3BG() {
    const icon3 = document.getElementById('icon-3');
    const checkPath = 'icons/check.svg';
    const wrap3 = document.getElementById('wrap-3'); // Assuming wrap1 is an element with id 'wrap1'
    
    // Create a temporary element to get the absolute URL of the checkPath
    const tempImg = document.createElement('img');
    tempImg.src = checkPath;
    const absoluteCheckPath = tempImg.src;

    if (icon3.src === absoluteCheckPath) {
        wrap3.style.backgroundColor = '#17b55420';
    } else {
        wrap3.style.backgroundColor = '#f8000015';
    }
} wrap3BG();

function wrap4BG() {
    const icon4 = document.getElementById('icon-4');
    const checkPath = 'icons/check.svg';
    const wrap4 = document.getElementById('wrap-4'); // Assuming wrap1 is an element with id 'wrap1'
    
    // Create a temporary element to get the absolute URL of the checkPath
    const tempImg = document.createElement('img');
    tempImg.src = checkPath;
    const absoluteCheckPath = tempImg.src;

    if (icon4.src === absoluteCheckPath) {
        wrap4.style.backgroundColor = '#17b55420';
    } else {
        wrap4.style.backgroundColor = '#f8000015';
    }
} wrap4BG();


}


// Event listener for button click
checkBtn.addEventListener('click', function() {
    checkPassword();
    wrapBGs();
});
