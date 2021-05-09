import 'regenerator-runtime'; /* for async await transpile */
import data from "../DATA.json";
import '../styles/main.css';


console.log('Hello Coders! :)');

const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");
const content = document.getElementById('content');

hamburgerButtonElement.addEventListener("click", (event) => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
});

mainElement.addEventListener("click", (event) => {
    drawerElement.classList.remove("open");
    event.stopPropagation();
});

let idx = 1;
let html = '';
for (const restaurant of data.restaurants) {
    let card_class = "card d-flex mb-3 bg-white text-black";
    if (idx % 2 == 0) {
        card_class += " flex-row-reverse";
    }
    let card = /*html*/`
        <section class="${card_class}">
            <div class="card-head position-relative">
                <img src="${restaurant.pictureId}" alt="Gambar ${restaurant.name}">
                <p class="position-absolute m-1">${restaurant.city}</p>
            </div>     

            <div class="card-body pb-1 px-3">
                <div class="d-flex justify-content-between">
                    <h3><a class="decoration-none d-inline-block" href="#">${restaurant.name}</a></h3> 
                    <p class="my-auto">Rating: ${restaurant.rating}</p>
                </div>                                    
                <p class="text-justify">${restaurant.description}</p> 
            </div>
        </section>
        `;
    html += card;
    idx++;    
}

content.innerHTML = html;