
  window.addEventListener("load", function () {
    setTimeout(function () {
      const preloader = document.getElementById("preloader");
      preloader.classList.add("hide");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500); 
    }, 3000);
  });
  function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("login-message");

    if (username === "ag1629@gmail.com" && password === "1629") {
      message.style.color = "green";
      message.innerText = "Login Successful!";
      setTimeout(() => {
        window.location.href = "index.html"; 
      }, 1000);
    } else {
      message.style.color = "red";
      message.innerText = "Invalid username or password!";
    }

    return false;
  }

