import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Setting from '../pages/Setting/Setting';
import SettingLayout from '../layout/SettingLayout/SettingLayout.js';

const publicRoute = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/@:nickname',
    component: Profile,
  },
  {
    path: '/setting',
    component: Setting,
    layout: SettingLayout,
  },
];

const privateRoute = [];

export { privateRoute, publicRoute };
