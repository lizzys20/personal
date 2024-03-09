document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("home-link");
    const recipesLink = document.getElementById("recipes-link");
    const ingredientsLink = document.getElementById("ingredients-link");
    const aboutLink = document.getElementById("about-link");
    homeLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = "./index.html"; // Redirect to home page
    });
    recipesLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "./recipes.html";
    });
    ingredientsLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "./ingredients.html";
    });
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "./about.html";
    });
});