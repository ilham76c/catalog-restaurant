import RestaurantSource from "../../data/resraurant-source";

import {
    createRestaurantDetailTemplate,
    createMovieDetailTemplate,
    createLikeButtonTemplate,
} from "../templates/template-creator";

import UrlParser from "../../routes/url-parser";

import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
    async render() {
        document.getElementById("jumbotron").classList.add("d-none");
        return /*html*/ `
        <div id="detail" class="d-flex flex-column px-5">
            <h2 id="content_title" class="mx-auto py-2">Detail Restaurant</h2>
        </div>
        <div id="likeButtonContainer"></div>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantSource.detailRestaurant(url.id);
        console.log(restaurant);
        const restaurantContainer = document.querySelector("#detail");
        restaurantContainer.innerHTML +=
            createRestaurantDetailTemplate(restaurant);

        LikeButtonInitiator.init({
            likeButtonContainer : document.querySelector("#likeButtonContainer"),
            restaurant          : {
                                    id              : restaurant.id,
                                    name            : restaurant.name,
                                    description     : restaurant.description,
                                    city            : restaurant.city,
                                    address         : restaurant.address,
                                    pictureId       : restaurant.pictureId,
                                    categories      : restaurant.categories,
                                    menus           : restaurant.menus,
                                    rating          : restaurant.rating,
                                    customerReviews : restaurant.customerReviews,
                                },
        });
    },
};

export default Detail;
