  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBjDlYRAORXoGOVG5BGcn7rzWxHbIHrz5Y",
    authDomain: "story-time-3127b.firebaseapp.com",
    projectId: "story-time-3127b",
    storageBucket: "story-time-3127b.appspot.com",
    messagingSenderId: "172026169157",
    appId: "1:172026169157:web:78e810a6e6cdb8acc3202c",
    measurementId: "G-J9R6PBKP9L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

console.log(app);

signup.addEventListener('click' ,(e)=>{
  var email = document.getElementById('email').value; 
  var password = document.getElementById('password').value; 
  var username = document.getElementById('username').value; 
  createUserWithEmailAndPassword(auth, email, password , username)
  .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert('User Created')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage)
    });
});