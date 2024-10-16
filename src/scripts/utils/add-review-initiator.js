import RestaurantSource from '../data/restaurant-source';
import {
  createCustomerReviews,
} from '../views/templates/template-creator';

const AddReviewInitiator = {
  init({
    button,
    name,
    review,
    id,
    reviews,
  }) {
    this._reviews = reviews;
    button.addEventListener('click', () => {
      if (name.value !== '' && review.value) {
        this._addReview({
          name: name.value,
          review: review.value,
          id,
        });
      } else {
        alert('Nama dan Review tidak boleh kosong!');
      }
    });
  },

  async _addReview({ name, review, id }) {
    const response = await RestaurantSource.addReview({ name, review, id });
    if (!response.error) {
      this._reviews.innerHTML = createCustomerReviews(response.customerReviews);
    }
  },
};

export default AddReviewInitiator;
