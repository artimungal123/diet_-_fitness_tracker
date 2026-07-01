// Show / hide password
function togglePassword(id) {
  let input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// Form validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let pass = document.getElementById("password").value;
  let confirmPass = document.getElementById("confirmPassword").value;

  if (pass !== confirmPass) {
    alert("Passwords do not match!");
    return;
  }

  alert("Account created successfully!");
  // Here you can add code to send data to server (backend)
});