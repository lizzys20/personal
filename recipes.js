document.addEventListener("DOMContentLoaded", function () {
    // Get all the links in the navigation bar
    const homeLink = document.getElementById("home-link");
    const recipesLink = document.getElementById("recipes-link");
    const ingredientsLink = document.getElementById("ingredients-link");
    const aboutLink = document.getElementById("about-link");

    // Add event listeners to each link
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

fetch("./data.json")
.then(response => response.json())
.then(myRecipes => loadRecipes(myRecipes));

function loadRecipes(myRecipes) {
    var CardRecipe = document.getElementById("col");

    var checkboxes = [];
    var cards = [];

    for (var i = 6; i< myRecipes.images.length; i++){
        let checkbox = "checkbox" + i.toString();
        let card = "card" + i.toString();

        let name = myRecipes.images[i].name;
        let description = myRecipes.images[i].description;
        let url = myRecipes.images[i].url;
        let link = myRecipes.images[i].recipeLink
        let AddCardRecipe = document.createElement("div");

        AddCardRecipe.classList.add("col");

        AddCardRecipe.innerHTML = `
        <input type="checkbox" id=${checkbox} class="form-check-input" checked>
        <label for=${checkbox} class="form-check-label">Show Image ${i}</label>
        <div id=${card} class="card shadow-sm">
        <img src=${url} class="card-img-top" alt="..."></img>
        <div class="card-body">
        <p class="card-text"> <strong>${name}</strong>, ${description}</p>
        <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
        <a href="${link}" target="_blank">
        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
        </div>
        </div>
        </div>
        </div>
        `;
        console.log(AddCardRecipe);
CardRecipe.appendChild(AddCardRecipe);
let cbox = document.getElementById(checkbox);
checkboxes.push(cbox);
let ccard = document.getElementById(card);
cards.push(ccard);
console.log(checkbox);
console.log(card);
        }
        console.log(checkboxes);
console.log(cards);

checkboxes.forEach((checkboxParam, index) => {
    console.log(index);
    checkboxParam.addEventListener('change', () => {
    if (checkboxParam.checked) {
    cards[index].style.display = 'block'; // Show the card
    } else {
    cards[index].style.display = 'none'; // Hide the card
    }
    });
    });
    
        }
