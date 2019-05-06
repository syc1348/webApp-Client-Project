var config = {
    apiKey: "AIzaSyAfycB-PLdpigIcGsuqeUw2l8oi1KJSND8",
    authDomain: "clientsignup-70a28.firebaseapp.com",
    databaseURL: "https://clientsignup-70a28.firebaseio.com",
    projectId: "clientsignup-70a28",
    storageBucket: "clientsignup-70a28.appspot.com",
    messagingSenderId: "881183587748"
};
firebase.initializeApp("config");

var messagesRef = firebase.database().ref('Prom Sign Ups');

document.getElementById('enterID').addEventListener('submit', submitForm);

function submitForm() {
    console.log("hello")
}



