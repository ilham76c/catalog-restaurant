import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return /*html*/ `
        <div class="d-flex flex-column px-5">
            <h2 id="content_title" class="mx-auto py-3">Favorite Restaurant</h2>
            <div id="favorite">
                <div class="d-flex justify-content-center">
                    <div class="loader"></div>
                </div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    const restaurantsContainer = document.querySelector('#favorite');
    if (restaurants.length) {
      restaurants.forEach((movie) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(movie);
      });
      document.getElementsByClassName('loader')[0].remove();
    } else {
      restaurantsContainer.innerHTML = /*html*/ `
          <div class="d-flex justify-content-center">
              <h3>Tidak ada favorite</h3>
          </div>
      `;
    }
  },
};

export default Like;
