import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '../../assets/image/image';
import Button from '../button/Button';
import NavBar from '../navbar/Navbar';
import Search from '../Search/Search';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
  const [authenticated, setAuthenticated] = useState('true');

  return (
    <header className={cx('header')}>
      <div className={cx('wrapper')}>
        <div className={cx('logo-wrapper')}>
          <Button to="/" icon className={cx('logo')} style={{ backgroundImage: `url(${images.logo})` }}></Button>
        </div>

        <div className={cx('search-bar-box')}>
          <Search />
        </div>

        <div className={cx('nav-bar')}>
          {authenticated ? (
            <NavBar setAuthenticated={() => setAuthenticated()} />
          ) : (
            <>
              <Button primary small onClick={() => setAuthenticated(true)}>
                Log in
              </Button>
              <Button text>Sign up</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
