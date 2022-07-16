import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Setting from '../pages/Setting/Setting';
import SettingLayout from '../layout/SettingLayout/SettingLayout.js';

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
    layout: SettingLayout,
  },
];

const privateRoute = [];

export { privateRoute, publicRoute };
