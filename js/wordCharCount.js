function counter(stringInput) {
    const numChar = stringInput.length;
    const trimmedInput = stringInput.trim();
    const numWords = trimmedInput.split(" ").length

    alert("Word Count:\n - " + numWords + "\nCharacter Count:\n - " + numChar);
}

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

counter(getSelectionText());