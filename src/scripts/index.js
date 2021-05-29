import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.getElementById('hamburger'),
  drawer: document.getElementById('drawer'),
  content: document.getElementById('content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
