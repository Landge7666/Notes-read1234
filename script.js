
function checkLogin() {
    const correctId = "NoteUser123";
    const correctPass = "SafePass456";

    const userId = document.getElementById("userId").value;
    const userPass = document.getElementById("userPass").value;

    if (userId === correctId && userPass === correctPass) {
        document.querySelector(".login-container").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        document.getElementById("loginError").textContent = "Invalid ID or Password!";
    }
}
