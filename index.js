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
    .then(pictures => loadPictures(pictures));

function loadPictures(pictures) {
    var CardPictures = document.querySelectorAll("#item");

    for(var i = 3; i < 6; i++) {
        let name = pictures.images[i].name;
        let description = pictures.images[i].description;
        let url = pictures.images[i].url;
        let det = pictures.images[i].recipeLink
        let AddCardPicture = document.createElement("div");

        AddCardPicture.classList.add("item");

        AddCardPicture.innerHTML = `
            <img src="${url}" alt="${name}" style="object-fit: cover;
            width: 150px;
            height: 150px;
            border-radius: 50%;" />
            <h2 class="fw-normal">${name}</h2>
            <p>${description}</p>
            <p><a class="btn btn-secondary" href="${det}">View details &raquo;</a></p>
        `;

        CardPictures[i-3].appendChild(AddCardPicture); // Append AddCardPicture to respective CardPicture
    }
}



// function loadPictures(pictures) {
//     var CaroSlide = document.getElementById("myCarousel");

//     var checkboxes = [];
//     var cards = [];

//     for (let i = 0; i < 3; i++) {
//         let checkbox = "checkbox" + i.toString();
//         let card = "card" + i.toString();

//         let name = pictures[i].name;
//         let description = pictures[i].description;
//         let url = pictures[i].url;
//         let AddCaroSlide = document.createElement("div");

//         AddCaroSlide.classList.add("myCarousel");

//         AddCaroSlide.innerHTML = `
//             <div class="carousel-item">
//                 <img src=${url} alt="${name}" style="object-fit: cover; width:2000px; height:500px"/>
//                 <div class="container">
//                     <div class="carousel-caption">
//                         <h1>${name}</h1>
//                         <p class="opacity-75">${description}</p>
//                     </div>
//                 </div>
//             </div>
//         `;

//         CaroSlide.appendChild(AddCaroSlide);

//         let cbox = document.getElementById(checkbox);
//         checkboxes.push(cbox);
//         let ccard = document.getElementById(card);
//         cards.push(ccard);
//     }

//     checkboxes.forEach((checkboxParam, index) => {
//         checkboxParam.addEventListener('change', () => {
//             if (checkboxParam.checked) {
//                 cards[index].style.display = 'block'; // Show the card
//             } else {
//                 cards[index].style.display = 'none'; // Hide the card
//             }
//         });
//     });
// }
