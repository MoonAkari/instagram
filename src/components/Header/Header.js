import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '../../assets/image/image';
import Button from '../button/Button';
import NavBar from '../navbar/Navbar';
import Search from '../Search/Search';

const cx = classNames.bind(styles);

function Header() {
  let authenticated = true;

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
            <NavBar />
          ) : (
            <>
              <Button primary small>
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
