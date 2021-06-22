const assert = require('assert');
/*eslint-disable no-undef */
Feature('Liking Restaurant');

//Before(({ I }) => {
//I.amOnPage('/#/like');
//});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.amOnPage('/#/like');
  I.seeElement('#favorite');
  I.see('No favorite restaurant', '#favorite p');
});

Scenario('liking one restaurant', async ({ I }) => {
  //I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');

  I.amOnPage('/');
  //pause();
  I.seeElement('#restaurants a');

  const firstRestaurant = locate('#restaurants a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  // I.amOnPage('/#/like');
  pause();
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('#favorite a');

  const firstLikedRestaurant = locate('#favorite a').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);

  assert.strictEqual(firstRestaurantTitle, firstLikedRestaurantTitle);
});

// Scenario('liked restaurant', ({ I }) => {
//   I.amOnPage('/#/like');
// });
