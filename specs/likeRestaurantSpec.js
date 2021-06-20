import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Liking A Movie', () => {
  it('should show the like button when the movie has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
        name: 'restaurant.name',
        description: 'restaurant.description',
        city: 'restaurant.city',
        address: 'restaurant.address',
        pictureId: 'restaurant.pictureId',
        categories: 'restaurant.categories',
        menus: 'restaurant.menus',
        rating: 'restaurant.rating',
        customerReviews: 'restaurant.customerReviews',
      },
    });

    expect(document.querySelector('[aria-label="like this movie"]')).toBeTruthy();
  });

  it('should not show the unlike button when the movie has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
        name: 'restaurant.name',
        description: 'restaurant.description',
        city: 'restaurant.city',
        address: 'restaurant.address',
        pictureId: 'restaurant.pictureId',
        categories: 'restaurant.categories',
        menus: 'restaurant.menus',
        rating: 'restaurant.rating',
        customerReviews: 'restaurant.customerReviews',
      },
    });

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
  });
});
