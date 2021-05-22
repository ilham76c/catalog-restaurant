import CONFIG from "../../globals/config";


const createRestaurantItemTemplate = (restaurant) => /*html*/ `
    <section class="card d-flex mb-3 bg-white text-black">
        <div class="card-head position-relative">
            <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Gambar ${restaurant.name}">
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

export { createRestaurantItemTemplate };
