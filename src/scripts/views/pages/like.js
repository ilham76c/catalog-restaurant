import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
    async render() {
        return /*html*/ `
            <div id="restaurants" class="d-flex flex-column px-5">
                <h2 id="content_title" class="mx-auto py-3">Liked Restaurant</h2>
            </div>
        `;
    },
   
    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        const restaurantsContainer = document.querySelector('#restaurants');
        restaurants.forEach((movie) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(movie);
        });
    },
  };
   
  export default Like;