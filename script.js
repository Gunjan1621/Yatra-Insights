//Preloader
   window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    if(window.location.hash){
      preloader.style.display="none";
      return;
    }
    setTimeout(function () {
     preloader.classList.add("hide");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500); 
    }, 3000);
  });



  // Login Page
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
  // Filter destinations
  document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll("[data-filter]");
    const cards = document.querySelectorAll("[data-category]");
     
    filterButtons.forEach(button => {
       button.addEventListener("click", () => {
        const selectedCategory = button.getAttribute("data-filter");
        filterButtons.forEach(btn=>btn.classList.remove("active"));
          button.classList.add("active");
        cards.forEach(card => {
          const cardCategory = card.getAttribute("data-category");
          if (selectedCategory === "all" || cardCategory === selectedCategory) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });
  
  

