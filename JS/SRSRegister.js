import {auth, db} from "../Firebase/Firebase-config.js";
import{
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import{
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("reg-username").value.trim();
    const email = document.getElementById("reg-email").value.trim()
    const password = document.getElementById("reg-password").value;

    try {
        // Create an account
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save in Firestore
        await setDoc(doc(db, "users", user.uid), {
            username: username,
            email: email,
            createAt: new Date()
        });

        alert("Đăng ký thành công!");
        window.location.href = "login.html";
    }catch (error) {
        alert("Lỗi: " + error.message);
    }





})
    
