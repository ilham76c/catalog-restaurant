import RestaurantSource from '../../data/resraurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    document.getElementById('jumbotron').classList.add('d-none');
    return /*html*/`
        <div id="detail" class="d-flex flex-column px-5">
            <h2 id="content_title" class="mx-auto py-2">Detail Restaurant</h2>
        </div>
    `;
  },

  async afterRender() {
    
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#detail');
    restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant);
    
  },
};

export default Detail;
