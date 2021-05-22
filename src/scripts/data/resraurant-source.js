import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantSource {
    static async listRestaurants() {
        const response = await fetch(API_ENDPOINT.LIST_RESTAURANT, {
            method: "GET",
        });
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async upcomingMovies() {
        const response = await fetch(API_ENDPOINT.UPCOMING);
        const responseJson = await response.json();
        return responseJson.results;
    }

    static async detailMovie(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }
}

export default RestaurantSource;
