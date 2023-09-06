function myIsInString(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let match = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return true;
        }
    }
    return false;
}

// exemple utilisation.
console.log(myIsInString("Hello World", "llo"));  
console.log(myIsInString("Hello World", "rele"));  