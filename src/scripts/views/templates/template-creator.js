import CONFIG from "../../globals/config";


const createRestaurantItemTemplate = (restaurant) => /*html*/ `
    <section class="card d-flex mb-3 bg-white text-black">
        <div class="card-head position-relative">
            <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Gambar ${restaurant.name}">
            <p class="position-absolute m-1">${restaurant.city}</p>
        </div>     

        <div class="card-body pb-1 px-3">
            <div class="d-flex justify-content-between">
                <h3><a class="decoration-none d-inline-block" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3> 
                <p class="my-auto">Rating: ${restaurant.rating}</p>
            </div>                                    
            <p class="text-justify">${restaurant.description}</p> 
        </div>
    </section>
`;

const createRestaurantDetailTemplate = (restaurant) => /*html*/ `
    <section class="d-flex mb-3 bg-white text-black">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Gambar ${restaurant.name}">
        <div class="d-flex flex-column m-1 bg-red card-body">
            <div class="d-flex justify-content-between">
                <div>
                    <p>Address</p>
                    <span>${restaurant.address}</span>
                </div>                
                <span>${restaurant.rating}</span>
            </div>            
            <p>Categories</p>
            ${createCategories(restaurant.categories)}

            <p>Menu</p>
            <div class="d-flex">
                ${createMenus(restaurant.menus)}
            </div>
                        
            
            <!--<p>${restaurant.customerReviews}</p>            -->
        </div>
    </section>
`;

const createCategories = (categories) => {    
    return /*html*/ `
        ${categories.reduce((accumulator, currentValue) => accumulator + `${currentValue.name}, `, '')}        
    `;
};

const createMenus = (menus) => {
    return /*html*/ `
        <div class="d-flex flex-column">
            Foods
            <ul>
                ${menus.foods.reduce((accumulator, currentValue) => `${accumulator}<li>${currentValue.name}</li>`, '')}
            </ul>
        </div>
        <div class="d-flex flex-column">
            Drinks
            <ul>
                ${menus.drinks.reduce((accumulator, currentValue) => `${accumulator}<li>${currentValue.name}</li>`, '')}
            </ul>
        <div>
    `;
}

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
