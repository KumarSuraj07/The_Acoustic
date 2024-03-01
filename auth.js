// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCTxrs3ks0-EXFujWW87Brt__LTF68nCII",
    authDomain: "authentication-45089.firebaseapp.com",
    projectId: "authentication-45089",
    storageBucket: "authentication-45089.appspot.com",
    messagingSenderId: "505380884803",
    appId: "1:505380884803:web:91e20d51be1b9597069ff6"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp = () => {

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(firstName, lastName, email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });

}

// Sign In function
// const signIn = () => {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     // firebase code
//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((result) => {
//             // Signed in 
//             alert('you are signed in');
//             console.log(result);
//         })
//         .catch((error) => {
//             console.log(error.code);
//             console.log(error.message)
//         });
// }

const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const signIn = () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validate email format
    if (!validateEmail(email)) {
        alert("Invalid email");
        return;
    }

    // Firebase sign-in code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert('You are signed in');
            console.log(result);
            // Redirect to home page
            window.location.href = "index.html";
        })
        .catch((error) => {
            if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
                alert("Invalid email or password");
            } else {
                console.log(error.code);
                console.log(error.message);
            }
        });
}

// Get the button element
const signInButton = document.getElementById("signInButton");

// Add event listener to the button
signInButton.addEventListener("click", signIn);
