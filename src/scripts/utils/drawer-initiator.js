const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
      if (button.innerHTML === '☰') {
        button.innerHTML = 'x';
      } else {
        button.innerHTML = '☰';
      }
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      button.innerHTML = '☰';
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
