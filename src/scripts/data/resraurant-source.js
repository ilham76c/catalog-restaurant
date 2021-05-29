import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT, {
      method: 'GET',
    });
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id), {
      method: 'GET',
    });
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
