// functions from SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";


// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCgEiLAJEAercmbm_LL2eBDigqLwLqXtsk",
    authDomain: "bloods-7c88e.firebaseapp.com",
    projectId: "bloods-7c88e",
    storageBucket: "bloods-7c88e.firebasestorage.app",
    messagingSenderId: "872048746014",
    appId: "1:872048746014:web:7fd721448d1da69885580f"
};


// Intialize App, auth, firestore
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);





export { auth, db, storage };
