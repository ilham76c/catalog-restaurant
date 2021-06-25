/*eslint-disable no-undef */
Feature('Unlike a Restaurant');

Scenario('unlike one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('#restaurants a');

  I.click(locate('#restaurants a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('#favorite a');

  I.click(locate('#favorite a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('#favorite');
  I.see('No favorite restaurant', '#favorite p');
});
