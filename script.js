function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(cleanStr);
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

function palindromeChecker() {
    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');
    if (isPalindrome(inputText.value)) {
        result.textContent = `"${inputText.value}" is a palindrome`;
    } else {
        result.textContent = `"${inputText.value}" is not a palindrome`;
    }
}

document.getElementById('checkButton').addEventListener("click", palindromeChecker);
