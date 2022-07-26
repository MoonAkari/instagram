import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Setting from '../pages/Setting/Setting';
import LoginLayout from '../pages/Authentication/Login';
import RegisterLayout from '../pages/Authentication/Register';
import OnepageLayout from '../layout/OnepageLayout/OnepageLayout.js';

import { ROUTES } from '../config/routes';

const publicRoute = [
  {
    path: ROUTES.HOME,
    component: Home,
  },
  {
    path: '/@:nickname',
    component: Profile,
  },
  {
    path: ROUTES.SETTING,
    component: Setting,
    layout: OnepageLayout,
  },
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
const privateRoute = [];

export { privateRoute, publicRoute };
