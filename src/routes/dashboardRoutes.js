import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Setting from '../pages/Setting/Setting';
import LoginLayout from '../pages/Authentication/Login';
import RegisterLayout from '../pages/Authentication/Register';
import OnepageLayout from '../layout/OnepageLayout/OnepageLayout.js';
import { ROUTES } from '../config/routes';

const privateRoutes = [
  {
    path: ROUTES.HOME,
    component: Home,
  },
  {
    path: '/@:profile',
    component: Profile,
  },
  {
    path: ROUTES.SETTING,
    component: Setting,
    layout: OnepageLayout,
  },
];

const publicRoutes = [
  {
    path: ROUTES.LOGIN,
    component: LoginLayout,
    layout: OnepageLayout,
  },
  {
    path: ROUTES.REGISTER,
    component: RegisterLayout,
    layout: OnepageLayout,
  },
];

export { privateRoutes, publicRoutes };
