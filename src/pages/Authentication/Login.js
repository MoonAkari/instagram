import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import images from '../../assets/image/image';
import Button from '../../components/button/Button';

const cx = classNames.bind(styles);

function LoginLayout() {
  return (
    <>
      <div className={cx('side-image')} style={{ backgroundImage: `url(${images.phoneLogin})` }}></div>

      <div className={cx('wrapper')}>
        <div className={cx('login-box')}>
          <div className={cx('logo')}>
            <img className={cx('logo-img')} src={images.logoLogin} alt="logo"></img>
          </div>

          <div className={cx('login-content')}>
            <div className={cx('username-box')}>
              <span>Phone number, username, or email </span>
              <input className={cx('username')} />
            </div>

            <Button primary small>
              Log In
            </Button>
            <div className={cx('divider')}>
              <div className={cx('divider-line')}></div>
              <div className={cx('divider-text')}>
                <p>OR</p>
              </div>
              <div className={cx('divider-line')}></div>
            </div>
            <Button text>Log in with Facebook</Button>
            <Button text>Fogot password?</Button>
          </div>
        </div>

        <div className={cx('change-box')}> </div>
        <span>Get the app.</span>
      </div>
    </>
  );
}

export default LoginLayout;
