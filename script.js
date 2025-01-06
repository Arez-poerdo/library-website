function readBook(bookTitle) {
    alert("You are reading: " + bookTitle);
}

function listenBook(bookTitle) {
    alert("You are listening to: " + bookTitle);

    // Integrating text-to-speech (simplified for demonstration)
    let speech = new SpeechSynthesisUtterance(bookTitle);
    window.speechSynthesis.speak(speech);
}