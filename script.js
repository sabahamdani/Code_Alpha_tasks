const translateBtn = document.getElementById("translateBtn");

translateBtn.addEventListener("click", async function () {

    const inputText = document.getElementById("inputText").value;
    const sourceLanguage = document.getElementById("sourceLanguage").value;
    const targetLanguage = document.getElementById("targetLanguage").value;
    const outputText = document.getElementById("outputText");

    if (inputText.trim() === "") {
        alert("Please enter some text!");
        return;
    }

    if (sourceLanguage === targetLanguage) {
        alert("Please select different languages!");
        return;
    }

    outputText.value = "Translating...";

    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${sourceLanguage}|${targetLanguage}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.responseStatus === 200) {
            outputText.value = data.responseData.translatedText;
        } else {
            outputText.value = "Translation failed. Please try again.";
        }

    } catch (error) {
        outputText.value = "Something went wrong. Check your internet connection.";
    }
});
const swapBtn = document.getElementById("swapBtn");
const copyBtn = document.getElementById("copyBtn");

swapBtn.addEventListener("click", function () {
    const source = document.getElementById("sourceLanguage");
    const target = document.getElementById("targetLanguage");

    const temp = source.value;
    source.value = target.value;
    target.value = temp;
});

copyBtn.addEventListener("click", function () {
    const output = document.getElementById("outputText");

    navigator.clipboard.writeText(output.value)
        .then(() => alert("Translation copied!"))
        .catch(() => alert("Unable to copy text."));
});
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function () {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
});