const sentences = [
    "Strumming Dreams to Life: Your Melody, Your Guitar. Unleash Your Sound with Precision and Passion at [The_Acoustic].",
    "Discover the Magic of Music: Transforming Moments into Melodies at [The_Acoustic].",
    "Elevate Your Soul: Creating Harmonies that Resonate at [The_Acoustic].",
    "In Tune with Your Imagination: Crafting Musical Journeys at [The_Acoustic]."
];

let currentIndex = 0;
let currentSentence = '';
let currentLetterIndex = 0;

const changingParagraph = document.getElementById('changingParagraph');

function typeSentence() {
    currentSentence = sentences[currentIndex];
    changingParagraph.textContent = currentSentence.slice(0, currentLetterIndex);
    currentLetterIndex++;

    if (currentLetterIndex > currentSentence.length) {
        setTimeout(() => {
            reverseSentence();
        }, 80); // Wait for a second before going back
    } else {
        setTimeout(typeSentence, 80); // Type each letter with a delay of 100 milliseconds
    }
}

function reverseSentence() {
    changingParagraph.textContent = currentSentence.slice(0, currentLetterIndex);
    currentLetterIndex--;

    if (currentLetterIndex === 0) {
        currentIndex = (currentIndex + 1) % sentences.length;
        setTimeout(typeSentence, 80); // Wait for a second before typing the next sentence
    } else {
        setTimeout(reverseSentence, 80); // Go back each letter with a delay of 100 milliseconds
    }
}

typeSentence();