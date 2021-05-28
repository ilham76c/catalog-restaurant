import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import Like from '../views/pages/like';

const routes = {
  '/': Home, // default page 
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
