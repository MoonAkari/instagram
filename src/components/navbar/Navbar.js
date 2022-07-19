import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Tippy from '@tippyjs/react/headless';

import { MENU_ITEMS, NAVBAR_ROUTES } from '../../common/constant';
import MenuItem from './menu/MenuItem';
import Popover from '../popover/Popover';
import { useState } from 'react';
import Button from '../button/Button';

const cx = classNames.bind(styles);

function Navbar() {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const renderNavBar = () => {
    return NAVBAR_ROUTES.map((icon, index) => {
      return (
        <Button key={index} to={icon.to} icon className={cx('navbar-button')}>
          {icon.icon}
        </Button>
      );
    });
  };

  const renderMenuItem = () => {
    return MENU_ITEMS.map((item, index) => {
      return <MenuItem key={index} item={item} onClick={() => setVisible(false)} />;
    });
  };

  return (
    <div className={cx('wrapper')}>
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
        <button className={cx('navbar')} onClick={visible ? hide : show}>
          <img
            src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/132297550_3543582379066097_1314718618935596856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BbSRsxJCfzIAX8k3AJO&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT_EDz5SAF6PqcUqBy_O5a-ZUW_R78FsCX0TFCfBHCN4DQ&oe=62F3237D"
            alt="avatar"
            className={cx('avatar')}
          />
        </button>
      </Tippy>
    </div>
  );
}

export default Navbar;
