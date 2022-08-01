import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { MENU_ITEMS, NAVBAR_ROUTES } from './navigationRoutes';
import MenuItem from './menu/MenuItem';
import Popover from '../popover/Popover';
import { useState } from 'react';
import Button from '../button/Button';
import Image from '../../components/Image/Image';
import { setLogoutSuccess } from '../../store/auth/action';
import { persistor } from '../../store/store';

const cx = classNames.bind(styles);

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const handleLogout = () => {
    persistor.purge();
    localStorage.removeItem('persist:root');
    dispatch(setLogoutSuccess(false));
  };

  const renderNavBar = () => {
    return NAVBAR_ROUTES.map((icon) => {
      return (
        <Button key={icon.name} to={icon.to} icon className={cx('navbar-icon')}>
          {icon.icon}
        </Button>
      );
    });
  };

  const renderMenuItem = () => {
    return MENU_ITEMS.map((item) => {
      return (
        <MenuItem
          key={item.title}
          item={item}
          onClick={() => {
            setVisible(false);
            if (item.title === 'Log Out') handleLogout();
          }}
        />
      );
    });
  };

  return (
    <nav className={cx('wrapper')}>
      {renderNavBar()}
      <Tippy
        visible={visible}
        onClickOutside={hide}
        interactive
        placement="bottom-end"
        render={(attrs) => (
          <div className="content" tabIndex="-1" {...attrs}>
            <Popover width="230px" height="100%">
              {renderMenuItem()}
            </Popover>
          </div>
        )}
      >
        <div className={cx('navbar', 'active')} onClick={visible ? hide : show}>
          <Image
            src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/132297550_3543582379066097_1314718618935596856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BbSRsxJCfzIAX8k3AJO&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT_EDz5SAF6PqcUqBy_O5a-ZUW_R78FsCX0TFCfBHCN4DQ&oe=62F3237D"
            alt="avatar"
            circle
            className={cx('avatar')}
          />
        </div>
      </Tippy>
    </nav>
  );
}

export default Navbar;
