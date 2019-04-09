var config = {
    apiKey: "AIzaSyAfycB-PLdpigIcGsuqeUw2l8oi1KJSND8",
    authDomain: "clientsignup-70a28.firebaseapp.com",
    databaseURL: "https://clientsignup-70a28.firebaseio.com",
    projectId: "clientsignup-70a28",
    storageBucket: "clientsignup-70a28.appspot.com",
    messagingSenderId: "881183587748"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getInputVal("name");
    var studentID = getInputVal("id");
    var email = getInputVal("email");
    var phone = getInputVal("phone");
    var message = getInputVal("message");

    saveMessage(name, studentID, email, phone, message);

}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, studentID, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        studentID: studentID,
        email: email,
        phone: phone,
        message: message
    });
}