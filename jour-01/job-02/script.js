function myCountChar(haystack, needle) {
    let count = 0;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            count++;
        }
    }

    return count;
}

// exemple utilisation.

console.log(myCountChar("Hello World", "o"));