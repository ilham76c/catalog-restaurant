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

  static async addReview({ name, review, id }) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ name, review, id }),
    });

    const result = await response.json();

    return result;
  }
}

export default RestaurantSource;
