function signUpFrom(event){
    event.preventDefault(); 
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()
    const confirmPassword =  document.getElementById("confirmPassword").value.trim()
    
}

document.getElementById("sBut").addEventListener("click", signUpFrom)