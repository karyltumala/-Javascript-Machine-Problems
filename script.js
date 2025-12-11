// Problem 1: ReplaceAll
function replaceAll() {
    let input = document.getElementById("input1").value;
    let output = input.trim().replace(/ /g, "");
    document.getElementById("output1").innerText = output;
}

// Problem 2: SearchWord
function searchWord() {
    let sentence = document.getElementById("sentence2").value;
    let word = document.getElementById("word2").value;
    if (sentence.includes(word)) {
        document.getElementById("output2").innerText = "Found";
    } else {
        document.getElementById("output2").innerText = "Not Found";
    }
}

// Problem 3: ReplaceWord
function replaceWord() {
    let sentence = document.getElementById("sentence3").value;
    let oldWord = document.getElementById("oldWord3").value;
    let newWord = document.getElementById("newWord3").value;
    let output = sentence.replace(oldWord, newWord);
    document.getElementById("output3").innerText = output;
}

// Problem 4: CountCharacters
function countCharacters() {
    let input = document.getElementById("input4").value;
    let trimmed = input.trim();
    document.getElementById("output4").innerText = trimmed.length;
}

// Problem 5: EmailCheck
function checkEmail() {
    let email = document.getElementById("email5").value;
    if (email.includes("@")) {
        document.getElementById("output5").innerText = "Valid";
    } else {
        document.getElementById("output5").innerText = "Invalid";
    }
}
