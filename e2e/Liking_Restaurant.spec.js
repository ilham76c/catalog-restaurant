const assert = require('assert');
/*eslint-disable no-undef */
Feature('Liking Restaurant');

Scenario('showing empty liked restaurant', ({ I }) => {
  I.amOnPage('/#/like');
  I.seeElement('#favorite');
  I.see('No favorite restaurant', '#favorite p');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('#restaurants a');

  const firstRestaurant = locate('#restaurants a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('#favorite a');

  const firstLikedRestaurant = locate('#favorite a').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);

  assert.strictEqual(firstRestaurantTitle, firstLikedRestaurantTitle);
});
