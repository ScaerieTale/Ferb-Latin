function convertToFerbLatin() {
    const inputText = document
        .getElementById("inputText")
        .value.toLowerCase()
        .trim();
    const words = inputText.split(" ");
    const vowels = ["a", "e", "i", "o", "u"];

    const ferbLatinWords = words.map((word) => {
        if (vowels.includes(word[0])) {
            return word + "erb";
        } else {
            return word.slice(1) + word[0] + "erb";
        }
    });
    ferbLatinWords.forEach((word, index) => {
        ferbLatinWords[index] = word.slice(0, -4) + word.slice(-4, -3).toUpperCase() + word.slice(-3);
    })

    document.getElementById("output").innerText = ferbLatinWords.join(" ");
}