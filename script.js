
  window.addEventListener("load", function () {
    setTimeout(function () {
      const preloader = document.getElementById("preloader");
      preloader.classList.add("hide");

      // Optional: remove from DOM after fade out
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500); // match transition duration
    }, 3000);
  });

