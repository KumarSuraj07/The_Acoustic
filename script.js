// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAlVRUDpMCNmxoHVPGrZRnorWD9tR0eytw",
    authDomain: "contact-page-653a9.firebaseapp.com",
    databaseURL: "https://contact-page-653a9-default-rtdb.firebaseio.com",
    projectId: "contact-page-653a9",
    storageBucket: "contact-page-653a9.appspot.com",
    messagingSenderId: "522532805145",
    appId: "1:522532805145:web:effde0af95f1c7da37a888"
};

//initializeing firebase
firebase.initializeApp(firebaseConfig);

//referencing the database
var contactPageDB = firebase.database().ref('Contact-Page');

const a = document.getElementById("contact");
a.addEventListener("submit", submit);

function submit(e) {
    console.log('hi');
    e.preventDefault();

    const name = getElementVal('name');
    const email = getElementVal('email');
    const msg = getElementVal('message');

    // saveMessages(name, email, msg);

    if (areFieldsFilled(name, email, msg)) {
        saveMessages(name, email, msg);
        alert("Your Message Sent Successfully!");
        location.reload();
    } else {
        alert("Please fill in all fields before sending the message.");
    }

}

const saveMessages = (name, email, msg) => {
    var newContactForm = contactPageDB.push();
    newContactForm.set({
        name: name,
        email: email,
        msg: msg
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

const areFieldsFilled = (name, email, msg) => {
    return name && email && msg;
};

