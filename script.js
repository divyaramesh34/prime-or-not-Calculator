const text = prompt("Enter a string:");
const vowels = "aeiouAEIOU";
let foundVowels = "";


for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
        foundVowels += text[i];
    }
}

//  output
alert("Vowels found: " + foundVowels);