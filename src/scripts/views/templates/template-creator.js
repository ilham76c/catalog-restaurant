import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => /*html*/ `
  <section class="card d-flex mb-3 bg-white text-black">
    <div class="card-head position-relative">
      <picture>
        <source class="lazyload" media="(max-width: 767px)" srcset="./images/default.png" data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}">
        <img class="lazyload" src="./images/default.png" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="Gambar ${restaurant.name}" crossorigin="anonymous">
      </picture>
      <p class="position-absolute m-1">${restaurant.city}</p>
    </div>     

    <div class="card-body pb-1 px-3">
      <div class="d-flex justify-content-between">
        <h3>
          <a class="decoration-none d-inline-block" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
        </h3> 
        <p class="my-auto">Rating: ${restaurant.rating}</p>
      </div>                                    
      <p class="text-justify">${restaurant.description}</p> 
    </div>
  </section>
`;

const createCategories = (categories) => /*html*/ `
  ${categories.reduce((accumulator, currentValue) => `${accumulator}${currentValue.name}, `, '')}
`;

const createMenus = (menus) => /*html*/ `
  <div class="d-flex flex-column">
    <div class="flex-1">
      <b>Foods</b>
      <ul class="d-flex flex-wrap">
        ${menus.foods.reduce((accumulator, currentValue) => `${accumulator}<li class="flex-grow-1">${currentValue.name}</li>`, '')}
      </ul>
    </div>
    <div class="flex-1">
      <b>Drinks</b>
      <ul class="d-flex flex-wrap">
        ${menus.drinks.reduce((accumulator, currentValue) => `${accumulator}<li class="flex-grow-1">${currentValue.name}</li>`, '')}
      </ul>
    </div>
  </div>
`;

const createCustomerReviews = (customerReviews) => {
  let review = '';
  customerReviews.reverse().forEach((customerReview) => {
    review += /*html*/ `
      <div class="d-flex flex-column mb-1 p-1 komentar">
        <div class="d-flex justify-content-between mb-1">
          <span>${customerReview.name}</span>
          <span>${customerReview.date}</span>
        </div>
        <span>${customerReview.review}</span>
      </div>
    `;
  });
  return review;
};

const createRestaurantDetailTemplate = (restaurant) => /*html*/ `
  <section class="card d-flex flex-column mb-3 bg-white text-black">
    <div class="d-flex w-100">
      
      <div class="card-head position-relative w-100">
        <picture>
          <source class="lazyload" media="(max-width: 767px)" srcset="./images/default.png" data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}">
          <img class="lazyload" src="./images/default.png" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="Gambar ${restaurant.name}" crossorigin="anonymous">
        </picture>
        <p class="position-absolute m-1">${restaurant.city}</p>
      </div>     

      <div class="mx-1 w-100">                
        <p><b>Name</b>&emsp;&emsp;&emsp; : ${restaurant.name}</p>
        <p><b>Rating</b>&emsp;&emsp;&emsp;: ${restaurant.rating}</p>
        <p><b>Address</b>&emsp;&emsp;: ${restaurant.address}</p>
        <p><b>Categories</b>&emsp;: ${createCategories(restaurant.categories)}</p>
                
        ${createMenus(restaurant.menus)}
      </div>
    </div>

    <div id="komentar" class="pb-1 py-1 px-1">
      <h3>Customer Reviews</h3>

      <div class="d-flex flex-column mt-2">
        <label for="name">Name</label>
        <input class="mb-1" type="text" id="name" name="name" placeholder="Name">
        
        <label for="review">Review</label>
        <textarea name="review" rows="5" class="w-100 text-left mb-1" placeholder="Add Review"></textarea>
        <div class="text-right mb-2">
          <button id="addReview"><b>Send</b></button>
        </div>
      </div>
      
      <div id="reviews">
        ${createCustomerReviews(restaurant.customerReviews)}
      </div>
  
    </div>
  </section>
`;

const createLikeRestaurantButtonTemplate = () => /*html*/ `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplat = () => /*html*/ `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplat,
  createCustomerReviews,
};
