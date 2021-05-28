import RestaurantSource from '../../data/resraurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return /*html*/`
        <div class="d-flex flex-column px-5">
            <h2 id="content_title" class="mx-auto py-3">Explore Restaurant</h2>
            <div id="restaurants">
                <div class="d-flex justify-content-center">
                    <div class="loader"></div>
                </div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    
    const restaurantsContainer = document.querySelector('#restaurants');
    for (const [idx, restaurant] of restaurants.entries()) {                
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        if ((idx+1) % 2 == 0) {            
            restaurantsContainer.getElementsByTagName('section')[idx].classList.add("flex-row-reverse");
        }
    }
    document.getElementsByClassName("loader")[0].remove();

  },
};

export default Home;
