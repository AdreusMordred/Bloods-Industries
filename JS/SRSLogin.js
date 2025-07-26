import { auth } from "../Firebase/Firebase-config";
import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user info
        localStorage.setItem("loggedInUser", JSON.stringify({
            email: user.email,
            uid: user.uid,
            username: username // Optional - make sure to get the real one from DB if needed
        }));

        alert("Đăng nhập thành công!");
        window.location.href = "Profile.html"; // Redirect to profile

    } catch (error) {
        console.error("Lỗi đăng nhập: ", error);
        alert("Đăng nhập thất bại: " + error.message);
    }
});
