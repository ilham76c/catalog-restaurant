import RestaurantSource from '../../data/resraurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return /*html*/`
        <h2 id="content_title" class="mx-auto py-3">Explore Restaurant</h2>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    
    const moviesContainer = document.querySelector('#content');
    for (const [idx, restaurant] of restaurants.entries()) {                
        moviesContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        if ((idx+1) % 2 == 0) {            
            document.getElementsByTagName('section')[idx].classList.add("flex-row-reverse");
        }
    }    
  },
};

export default Home;
