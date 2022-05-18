// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKpK8903_O3srrN7MAlbg-H88poFSxEXM",
    authDomain: "simple-todo-25d02.firebaseapp.com",
    projectId: "simple-todo-25d02",
    storageBucket: "simple-todo-25d02.appspot.com",
    messagingSenderId: "229509968144",
    appId: "1:229509968144:web:e52343729bdb43a01df595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth