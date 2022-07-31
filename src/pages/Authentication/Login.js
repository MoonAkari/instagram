import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import images from '../../assets/image/image';
import Button from '../../components/button/Button';
import { setLoginSuccess } from '../../store/auth/action';

const cx = classNames.bind(styles);

function LoginLayout() {
  const [usernameValue, setUsernameValue] = useState('');
  const [pwdValue, setPwdValue] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setLoginSuccess(true));
  };

  const handleUsernameInput = (e) => {
    setUsernameValue(e.target.value);
  };

  const handlePwdInput = (e) => {
    setPwdValue(e.target.value);
  };

  return (
    <>
      <div className={cx('side-image')} style={{ backgroundImage: `url(${images.phoneLogin})` }}></div>

      <div className={cx('wrapper')}>
        <div className={cx('login-box')}>
          <div className={cx('logo')}>
            <img className={cx('logo-img')} src={images.logoLogin} alt="logo"></img>
          </div>

          <div className={cx('login-content')}>
            <div className={cx('username-wrapper')}>
              <div className={cx('username-box')}>
                <input
                  className={cx('input-login', { active: usernameValue })}
                  type="email"
                  value={usernameValue}
                  onChange={handleUsernameInput}
                />
                <span className={cx('description', { active: usernameValue })}>Phone number, username, or email </span>
              </div>
            </div>

            <div className={cx('pwd-wrapper')}>
              <div className={cx('pwd-box')}>
                <input
                  className={cx('input-login', { active: pwdValue })}
                  type="password"
                  value={pwdValue}
                  onChange={handlePwdInput}
                />
                <span className={cx('description', { active: pwdValue })}>Password</span>
              </div>
            </div>

            <Button primary small className={cx('login-btn')} onClick={handleLogin}>
              Log In
            </Button>
            <div className={cx('divider')}>
              <div className={cx('divider-line')}></div>
              <div className={cx('divider-text')}>
                <p>OR</p>
              </div>
              <div className={cx('divider-line')}></div>
            </div>
            <Button text icon className={cx('facebook-login')} iconLeft={<FontAwesomeIcon icon={faFacebookSquare} />}>
              Log in with Facebook
            </Button>
            <Button text className={cx('fogot-pwd')}>
              Fogot password?
            </Button>
          </div>
        </div>

        <div className={cx('change-box')}>
          <p className={cx('change-content')}>
            Don't have an account?&nbsp;
            <Button text className={cx('change-btn')}>
              Sign up
            </Button>
          </p>
        </div>

        <div className={cx('getapp')}>
          <label>Get the app.</label>
        </div>
      </div>
    </>
  );
}

export default LoginLayout;
