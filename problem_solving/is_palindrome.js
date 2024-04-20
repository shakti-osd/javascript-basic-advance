

function isPalindrome(str){
    // // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericStr  = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let rev = ""

    for (let i = alphanumericStr.length - 1; i >= 0; i--) {
        rev += alphanumericStr[i]
    }
    return rev === alphanumericStr
}

console.log(isPalindrome("level"))

// Using two pointers
function isPalindromeTwoPointers(str){
    const alphanumericStr  = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let i = 0
    let j = alphanumericStr.length - 1

    while(i < j){
        if (alphanumericStr[i] !== alphanumericStr[j]){
            return false
        }
        
        i += 1
        j -= 1
    }

    return true

}

console.log(isPalindromeTwoPointers("levl"))
