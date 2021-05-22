import RestaurantSource from '../../data/resraurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return /*html*/`
        <div id="restaurants" class="d-flex flex-column px-5">
            <h2 id="content_title" class="mx-auto py-3">Explore Restaurant</h2>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    
    const moviesContainer = document.querySelector('#restaurants');
    for (const [idx, restaurant] of restaurants.entries()) {                
        moviesContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        if ((idx+1) % 2 == 0) {            
            document.getElementsByTagName('section')[idx].classList.add("flex-row-reverse");
        }
    }    
  },
};

export default Home;
