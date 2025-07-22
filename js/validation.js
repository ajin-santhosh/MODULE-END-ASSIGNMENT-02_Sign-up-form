const nameWarning = document.getElementById("nameWarning")
nameWarning.style.display = "none"
const emailWarning = document.getElementById("emailWarning")
emailWarning.style.display= "none"
const passwordWarning = document.getElementById("passwordWarning")
passwordWarning.style.display = "none"
const passwordWarning2 = document.getElementById("passwordWarning2")
passwordWarning2.style.display = "none"
const checkBoxWarning = document.getElementById("checkBoxWarning")
checkBoxWarning.style.display = "none"


document.getElementById("signUpForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const checkbox = document.getElementById("check");

  // Name validation
  const namePattern = /^[A-Za-z\s]{2,}$/;
  if (!namePattern.test(name)) {
     nameWarning.style.display = "block"
    return;
  }
  nameWarning.style.display = "none"
  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailWarning.style.display= "block"
    return;
  }
  emailWarning.style.display= "none"

  // Password length
  if (password.length < 6) {
          passwordWarning.style.display = "block"

    return;
  }
  passwordWarning.style.display = "none"

  // Confirm password match
  if (password !== confirmPassword) {
    passwordWarning2.style.display = "block"

    return;
  }
passwordWarning2.style.display = "none"
  // Checkbox validation
  if (!checkbox.checked) {
    checkBoxWarning.style.display = "block"

    return;
  }
  checkBoxWarning.style.display = "none"


  // If all validations pass
  alert("Form submitted successfully!");
  this.reset(); // Reset the form if needed
});
