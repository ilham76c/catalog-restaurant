import RestaurantSource from '../../data/restaurant-source';

import { createRestaurantDetailTemplate } from '../templates/template-creator';

import UrlParser from '../../routes/url-parser';

import LikeButtonInitiator from '../../utils/like-button-initiator';
import AddReviewInitiator from '../../utils/add-review-initiator';

const Detail = {
  async render() {
    return /*html*/ `
        <div class="d-flex flex-column px-5">
            <h2 id="content_title" class="mx-auto py-2">Detail Restaurant</h2>
              <div id="detail">
                  <div class="d-flex justify-content-center">
                      <div class="loader"></div>
                  </div>
            </div>
        </div>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      console.log(restaurant);
      const restaurantContainer = document.querySelector('#detail');

      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          city: restaurant.city,
          address: restaurant.address,
          pictureId: restaurant.pictureId,
          categories: restaurant.categories,
          menus: restaurant.menus,
          rating: restaurant.rating,
          customerReviews: restaurant.customerReviews,
        },
      });

      AddReviewInitiator.init({
        button: document.querySelector('#addReview'),
        name: document.getElementsByName('name')[0],
        review: document.getElementsByName('review')[0],
        id: restaurant.id,
        reviews: document.querySelector('#reviews'),
      });
    } catch (error) {
      document.querySelector('#detail').innerHTML = /*html*/ `
          <p class="text-center text-secondary">Failed to load data, check your internet connection</p>
      `;
      console.error(error);
    }
  },
};

export default Detail;
