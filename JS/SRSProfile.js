






// Get user data from localStorage
const userData = JSON.parse(localStorage.getItem("loggedInUser"));

// If no login info → redirect
if (!userData) {
  window.location.href = "Login.html";
} else {
  // Show data on page
  document.getElementById("profile-username").textContent = userData.username || "Anonymous";
  document.getElementById("profile-email").textContent = userData.email || "Unknown";
}

// PROFILE PICTURE PREVIEW
document.getElementById("pic-input").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("profile-pic").src = reader.result;

      // Save the image preview base64 (optional)
      userData.profilePic = reader.result;
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
    };
    reader.readAsDataURL(file);
  }
});

// UPDATE USERNAME
document.getElementById("update-btn").addEventListener("click", () => {
  const newUsername = document.getElementById("new-username").value.trim();
  if (newUsername.length === 0) {
    alert("Username cannot be empty.");
    return;
  }

  // Update username in page and storage
  document.getElementById("profile-username").textContent = newUsername;
  userData.username = newUsername;
  localStorage.setItem("loggedInUser", JSON.stringify(userData));

  alert("Username updated successfully!");
});

// LOGOUT
document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "Login.html";
});

// LOAD PROFILE PIC IF AVAILABLE
if (userData?.profilePic) {
  document.getElementById("profile-pic").src = userData.profilePic;
}
