//Preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  if (window.location.hash) {
    preloader.style.display = "none";
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
// Filter cards
const loadbuttn = document.querySelector(".loadmore");
const cardlist = document.querySelectorAll(".des-card.extra");
const dest = document.getElementById("destinations");
let expanded = false;

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("[data-filter]");
  const allCards = document.querySelectorAll(".des-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.getAttribute("data-filter");

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      expanded = false;
      loadbuttn.textContent = "See More";

      if (selectedCategory === "all") {
        allCards.forEach((card) => {
          if (card.classList.contains("extra")) {
            card.style.display = "none";
          } else {
            card.style.display = "block";
          }
        });
        loadbuttn.style.display = "inline-block";
      } else {
        allCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");
          card.style.display =
            cardCategory === selectedCategory ? "block" : "none";
        });
        loadbuttn.style.display = "none";
      }
    });
  });
  //See More and See Less
  loadbuttn.addEventListener("click", () => {
    cardlist.forEach((card) => {
      card.style.display = expanded ? "none" : "block";
    });
    expanded = !expanded;
    loadbuttn.textContent = expanded ? "See Less" : "See More";

    if (!expanded) {
      setTimeout(() => {
        dest.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  });
});
